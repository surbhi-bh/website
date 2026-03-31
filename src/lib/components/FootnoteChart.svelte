<script>
  import { onMount } from 'svelte';
  import { footerExpanded } from '$lib/gardenStore.js';

  export let collapsed = false;

  let currentFnPeriod = 'daily';
  let chartContainer;
  let tooltipEl;

  $: showFull = !collapsed || $footerExpanded;

  // Draw chart when expanding — wait for data if needed
  $: if ($footerExpanded) {
    if (dataReady) {
      setTimeout(() => drawChart(currentFnPeriod), 50);
    } else {
      const waitAndDraw = setInterval(() => {
        if (dataReady) { clearInterval(waitAndDraw); drawChart(currentFnPeriod); }
      }, 100);
    }
  }

  function toggleExpand() {
    if (!collapsed) return;
    footerExpanded.update(v => !v);
  }

  const STEPS_API = 'https://script.google.com/macros/s/AKfycbxeRS2zSYEzwc_uh4RIy3h6tuo8BR846GHegMsBZhnJlxukbtUmISsZmy_YqViIk7GKNg/exec';

  const MONTH_SHORT = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];

  const fnSubLabels = {
    daily: 'steps yesterday',
    weekly: 'steps last week',
    monthly: 'steps last month'
  };

  // Derived data sets — populated after fetch
  let fnDaily   = [];
  let fnWeekly  = [];
  let fnMonthly = [];
  let dataReady = false;

  // Parse any of the three date formats from the API into { year, month (0-based), day }
  // Formats seen:
  //   "2026-03-02T18:29:00.000Z"  → use only the YYYY-MM-DD portion before T
  //   "03/13/2026 23:59"          → MM/DD/YYYY ...
  //   "3/18/26, 11:59 PM"         → M/D/YY, ...
  function parseDate(raw) {
    // ISO-like: starts with YYYY-
    if (/^\d{4}-/.test(raw)) {
      const [y, m, d] = raw.split('T')[0].split('-').map(Number);
      return { year: y, month: m - 1, day: d };
    }
    // MM/DD/YYYY or M/D/YY (with optional time after space or comma)
    const datePart = raw.split(/[\s,]/)[0];
    const parts = datePart.split('/').map(Number);
    if (parts.length === 3) {
      let [mo, d, y] = parts;
      if (y < 100) y += 2000;
      return { year: y, month: mo - 1, day: d };
    }
    return null;
  }

  function toSortKey(p) {
    return p.year * 10000 + p.month * 100 + p.day;
  }

  function fmtShort(p) {
    return `${MONTH_SHORT[p.month]} ${p.day}`;
  }

  function fmtTooltip(p) {
    const d = new Date(p.year, p.month, p.day);
    return d.toLocaleDateString('en-GB', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' });
  }

  function processAPI(rows) {
    // Parse and filter out any rows with unparseable dates.
    // Also drop rows where the raw date string looks like an ISO timestamp
    // ("YYYY-MM-DDTHH:..." from Google Sheets) — these have timezone-shifted
    // months and are bad data entries.
    const parsed = rows
      .map(r => ({ raw: r.date, p: parseDate(r.date), steps: Number(r.steps) }))
      .filter(r => r.p !== null && !isNaN(r.steps) && !/^\d{4}-\d{2}-\d{2}T/.test(r.raw))
      .sort((a, b) => toSortKey(a.p) - toSortKey(b.p));

    // ── Daily ──────────────────────────────────────────────────
    fnDaily = parsed.map(({ p, steps }, i) => {
      const d       = new Date(p.year, p.month, p.day);
      const prevMon = i > 0 ? parsed[i-1].p.month : p.month;
      return {
        date:        fmtShort(p),
        tooltipDate: fmtTooltip(p),
        steps,
        weekStart:   d.getDay() === 1,
        monthStart:  p.month !== prevMon,
      };
    });

    // ── Weekly ─────────────────────────────────────────────────
    const weekMap = new Map();
    parsed.forEach(({ p, steps }) => {
      const d    = new Date(p.year, p.month, p.day);
      const jan4 = new Date(p.year, 0, 4);
      const week = Math.ceil(((d - jan4) / 86400000 + jan4.getDay() + 1) / 7);
      const key  = `${p.year}-W${String(week).padStart(2,'0')}`;
      if (!weekMap.has(key)) weekMap.set(key, { steps: 0, p });
      weekMap.get(key).steps += steps;
    });
    fnWeekly = [...weekMap.values()].map(({ p, steps }) => ({
      date:        `W ${MONTH_SHORT[p.month]} ${p.day}`,
      tooltipDate: `Week of ${new Date(p.year, p.month, p.day).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}`,
      steps,
    }));

    // ── Monthly ────────────────────────────────────────────────
    const monMap = new Map();
    parsed.forEach(({ p, steps }) => {
      const key = `${p.year}-${String(p.month + 1).padStart(2,'0')}`;
      if (!monMap.has(key)) monMap.set(key, { steps: 0, year: p.year, month: p.month });
      monMap.get(key).steps += steps;
    });
    fnMonthly = [...monMap.values()].map(({ year, month, steps }) => ({
      date:        `${MONTH_SHORT[month]} '${String(year).slice(2)}`,
      tooltipDate: `${MONTH_SHORT[month]} ${year}`,
      steps,
    }));

    dataReady = true;
  }

  function animateCount(el, target, duration) {
    const start = performance.now();
    (function tick(now) {
      const p = Math.min((now - start) / duration, 1);
      const ease = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.floor(ease * target).toLocaleString();
      if (p < 1) requestAnimationFrame(tick);
    })(start);
  }

  function drawChart(period) {
    period = period || currentFnPeriod;
    currentFnPeriod = period;

    if (!chartContainer || typeof window === 'undefined') return;
    if (!window.d3 || !window.rough) return;

    const d3    = window.d3;
    const rough = window.rough;

    const dataMap = { daily: fnDaily, weekly: fnWeekly, monthly: fnMonthly };
    const rawData = dataMap[period];
    const data    = period === 'daily' ? rawData.slice(-45) : rawData;
    const latest = data[data.length - 1].steps;

    const numEl = document.getElementById('footnoteNumber');
    if (numEl) animateCount(numEl, latest, 1200);

    const subEl = document.getElementById('footnoteSub');
    if (subEl) subEl.textContent = fnSubLabels[period];

    const futureBuf  = period === 'daily' ? 31 : (period === 'weekly' ? 6 : 2);
    const bandHeight = chartContainer.parentElement.offsetHeight;
    const containerW = chartContainer.parentElement.offsetWidth;
    const height = bandHeight;

    // For daily: lock slotW to exactly 20px (2 grid cells).
    // For others: fill the container evenly.
    const GRID = 10; // CSS grid cell size in px
    const slotW = period === 'daily'
      ? 2 * GRID
      : Math.round(containerW / (data.length + futureBuf) / GRID) * GRID || GRID;

    // Left margin reserved for the 10k label (3 grid cells)
    const labelMargin = period === 'daily' ? 3 * GRID : 0;

    const totalSlots = data.length + futureBuf;
    const chartWidth = totalSlots * slotW;
    const fullWidth  = labelMargin + chartWidth;

    // If the full chart is wider than the viewport, shift left so the
    // right edge (most recent + upcoming months) is always visible.
    // Older history gets clipped on the left.
    const offsetX = Math.min(0, containerW - fullWidth);

    d3.select(chartContainer).selectAll('*').remove();

    const svgEl = d3.select(chartContainer)
      .append('svg')
      .attr('width', containerW)
      .attr('height', height)
      .style('display', 'block')
      .style('overflow', 'hidden');

    const g  = svgEl.append('g').attr('transform', `translate(${offsetX},0)`);
    const rc = rough.svg(svgEl.node());

    // width used for dash loops etc. — full logical width
    const width = fullWidth;

    const y = d3.scaleLinear()
      .domain([-d3.max(data, d => d.steps) * 0.08, d3.max(data, d => d.steps) * 1.1])
      .range([height, 0]);

    // helper: snap to nearest grid line
    const snap = v => Math.round(v / GRID) * GRID;

    // x position for slot i (offset by labelMargin)
    const sx = i => labelMargin + i * slotW;

    // ── Future buffer shading ─────────────────────────────────
    const futureX = labelMargin + data.length * slotW;
    g.append('rect')
      .attr('x', futureX).attr('y', 0)
      .attr('width', width - futureX).attr('height', height)
      .attr('fill', 'rgba(240,240,240,0.35)');

    // ── Past month / week marker lines ───────────────────────
    data.forEach((d, i) => {
      if (i === 0) return;
      const xPos = sx(i);
      if (d.monthStart) {
        g.append('line')
          .attr('x1', xPos).attr('x2', xPos).attr('y1', 0).attr('y2', height)
          .attr('stroke', '#d0116f').attr('stroke-width', 1).attr('opacity', 0.55);
        g.append('text')
          .attr('x', xPos + 4).attr('y', height / 2)
          .attr('dominant-baseline', 'middle')
          .style('font-size', '11px').style('fill', '#d0116f').style('opacity', 0.75)
          .style('font-family', 'DM Mono, monospace').style('font-weight', '600')
          .style('letter-spacing', '0.08em')
          .text(d.date.split(' ')[0].toUpperCase());
      } else if (d.weekStart && period === 'daily') {
        g.append('line')
          .attr('x1', xPos).attr('x2', xPos).attr('y1', 0).attr('y2', height)
          .attr('stroke', 'rgba(34,160,80,.55)').attr('stroke-width', 1)
          .attr('stroke-dasharray', '2 3');
      }
    });

    // ── Upcoming month lines in the future buffer ─────────────
    if (period === 'daily') {
      const monthNames = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
      const [lastMon, lastDay] = data[data.length - 1].date.split(' ');
      let monIdx = monthNames.indexOf(lastMon);
      const daysInMonth = [31,28,31,30,31,30,31,31,30,31,30,31];
      let daysToNext = daysInMonth[monIdx] - parseInt(lastDay) + 1;
      for (let m = 0; m < 1; m++) {
        const xPos = sx(data.length + daysToNext - 1);
        if (xPos >= width) break;
        const nextMonIdx = (monIdx + 1) % 12;
        g.append('line')
          .attr('x1', xPos).attr('x2', xPos).attr('y1', 0).attr('y2', height)
          .attr('stroke', '#d0116f').attr('stroke-width', 1).attr('opacity', 0.4)
          .attr('stroke-dasharray', '4 3');
        g.append('text')
          .attr('x', xPos + 4).attr('y', height / 2)
          .attr('dominant-baseline', 'middle')
          .style('font-size', '11px').style('fill', '#d0116f').style('opacity', 0.55)
          .style('font-family', 'DM Mono, monospace').style('font-weight', '600')
          .style('letter-spacing', '0.08em')
          .text(monthNames[nextMonIdx].toUpperCase());
        daysToNext += daysInMonth[nextMonIdx];
        monIdx = nextMonIdx;
      }
    }

    // ── 10k reference line — daily only ──────────────────────
    if (period === 'daily') {
      const refY = snap(y(10000));

      // Hand-drawn label box — pinned to left edge of viewport (not the shifted g)
      // Draw in a separate fixed group so offsetX doesn't affect it
      const labelW = labelMargin - 4, labelH = 22;
      const fixedG = svgEl.append('g'); // no transform — stays fixed in viewport
      const rc2 = rough.svg(svgEl.node());
      fixedG.node().appendChild(rc2.rectangle(2, refY - labelH / 2, labelW, labelH, {
        fill: 'rgba(208,17,111,0.08)', fillStyle: 'solid',
        stroke: 'rgba(208,17,111,0.5)', strokeWidth: 1.2, roughness: 2.2
      }));
      fixedG.append('text')
        .attr('x', labelMargin / 2).attr('y', refY + 1)
        .attr('text-anchor', 'middle').attr('dominant-baseline', 'middle')
        .style('font-size', '15px').style('fill', 'rgba(208,17,111,0.9)')
        .style('font-family', 'DM Mono, monospace').style('font-weight', '700')
        .text('10k');

      // Rough dashes from chart start to right edge
      const dashStart = labelMargin;
      const dashW = 5, gapW = 3;
      let xCursor = dashStart, dashOn = true;
      while (xCursor < width) {
        const segEnd = Math.min(xCursor + (dashOn ? dashW : gapW), width);
        if (dashOn) {
          g.node().appendChild(rc.line(xCursor, refY, segEnd, refY, {
            stroke: 'rgba(208,17,111,0.6)', strokeWidth: 2, roughness: 1.4
          }));
        }
        xCursor = segEnd;
        dashOn = !dashOn;
      }
    }

    // ── Step line chart ───────────────────────────────────────
    const lastIdx = data.length - 1;
    for (let i = 0; i < data.length; i++) {
      const x1 = sx(i);
      const x2 = sx(i + 1);
      const y1 = snap(y(data[i].steps));
      const isLatest  = (i === lastIdx);
      const lineColor = isLatest ? 'rgba(208,17,111,0.9)' : 'rgba(0,150,0,0.85)';

      g.node().appendChild(rc.line(x1, y1, x2, y1, {
        stroke: lineColor, strokeWidth: isLatest ? 2 : 1.5, roughness: 0.6
      }));

      if (i < lastIdx) {
        const y2 = snap(y(data[i + 1].steps));
        const vColor = (i + 1 === lastIdx) ? 'rgba(208,17,111,0.9)' : 'rgba(0,150,0,0.85)';
        g.node().appendChild(rc.line(x2, y1, x2, y2, {
          stroke: vColor, strokeWidth: 1.5, roughness: 0.6
        }));
      }
    }

    // ── Dots + tooltip ────────────────────────────────────────
    const fnTooltip = d3.select('#footnoteTooltip');
    const showDots  = data.length <= 80;

    if (showDots) {
      data.forEach((d, i) => {
        const cx       = sx(i) + slotW / 2;
        const cy       = snap(y(d.steps));
        const isLatest = (i === lastIdx);
        const dotColor = isLatest ? 'rgba(208,17,111,1)' : 'rgba(0,150,0,0.9)';
        const dotSize  = isLatest ? 7 : 4;

        const circle  = rc.circle(cx, cy, dotSize, {
          fill: dotColor, fillStyle: 'solid',
          stroke: isLatest ? '#fff' : dotColor, strokeWidth: isLatest ? 1.5 : 1, roughness: 0.6
        });
        const circleG = g.append('g').style('cursor', 'pointer').node();
        circleG.appendChild(circle);

        d3.select(circleG)
          .on('mouseenter', function(event) {
            // cx/cy are in SVG logical space (with offsetX transform applied).
            // Convert to screen coords relative to the footnote-right container.
            const svgRect = svgEl.node().getBoundingClientRect();
            const containerRect = chartContainer.parentElement.getBoundingClientRect();
            // dot screen position
            const screenX = svgRect.left + offsetX + cx - containerRect.left;
            const screenY = svgRect.top  + cy - containerRect.top;
            const label = d.tooltipDate || d.date;
            fnTooltip.style('opacity', 1)
              .html(`<span class="tt-date">${label}</span><span class="tt-steps">${d.steps.toLocaleString()}</span><span class="tt-unit">steps</span>`)
              .style('left', (screenX + 10) + 'px')
              .style('top',  (screenY - 36) + 'px');
          })
          .on('mouseleave', () => fnTooltip.style('opacity', 0));
      });
    }

    // ── x-axis date labels ────────────────────────────────────
    const labelEvery = period === 'daily' ? 7 : (period === 'weekly' ? 2 : 1);
    data.forEach((d, i) => {
      if (i % labelEvery !== 0) return;
      const xPos = sx(i) + slotW / 2;
      g.append('text')
        .attr('x', xPos).attr('y', height - 3)
        .attr('text-anchor', 'middle')
        .style('font-size', '6px').style('fill', '#999')
        .style('font-family', 'DM Mono, monospace')
        .text(d.date);
    });

    // ── bottom-right caption ──────────────────────────────────
    g.append('text')
      .attr('x', containerW - offsetX - 10).attr('y', height - 6)
      .attr('text-anchor', 'end')
      .style('font-size', '11px').style('fill', 'rgba(26,107,58,0.7)')
      .style('font-family', 'DM Mono, monospace').style('font-weight', '600')
      .style('letter-spacing', '0.04em')
      .text('a step chart for my step(s)');
  }

  function switchPeriod(period, el) {
    document.querySelectorAll('.footnote-tog').forEach(t => t.classList.remove('on'));
    el.classList.add('on');
    drawChart(period);
  }

  let hasMounted = false;

  onMount(() => {
    hasMounted = true;

    fetch(STEPS_API)
      .then(r => r.json())
      .then(rows => {
        processAPI(rows);
      })
      .catch(() => {
        // API failed — nothing to draw
      });
  });

</script>

<!-- Elsewhere bar — always visible, sits above footnote -->
<div class="elsewhere-bar" style="bottom: {collapsed && !$footerExpanded ? 28 : 110}px">
  <span class="elsewhere-label">elsewhere</span>
  <span class="elsewhere-sep">·</span>
  <a class="elsewhere-link" href="https://www.linkedin.com/in/surbhi-bhatia" target="_blank" rel="noopener">linkedin</a>
  <img src="/flower.svg" alt="" class="elsewhere-flower" />
  <a class="elsewhere-link" href="https://twitter.com/surbhi_bh" target="_blank" rel="noopener">twitter</a>
  <img src="/flower.svg" alt="" class="elsewhere-flower" />
  <a class="elsewhere-link" href="https://bsky.app/profile/surbhi-bh.bsky.social" target="_blank" rel="noopener">bluesky</a>
  <img src="/flower.svg" alt="" class="elsewhere-flower" />
  <a class="elsewhere-link elsewhere-email" href="mailto:surbhibhatia1906@gmail.com">surbhibhatia1906[at]gmail[dot]com</a>
</div>

{#if collapsed && !$footerExpanded}
  <!-- Collapsed state: slim bar, click to expand -->
  <div class="footnote-band footnote-collapsed" on:click={toggleExpand} role="button" tabindex="0" on:keydown={(e) => e.key === 'Enter' && toggleExpand()}>
    <div class="footnote-label footnote-label-slim">foot(er)-note ↑</div>
  </div>
{:else}
  <div class="footnote-band" class:footnote-expandable={collapsed}>
    <div class="footnote-left">
      <div class="footnote-left-stat" class:clickable={collapsed} on:click={collapsed ? toggleExpand : null} role={collapsed ? 'button' : 'presentation'} tabindex={collapsed ? 0 : -1} on:keydown={collapsed ? ((e) => e.key === 'Enter' && toggleExpand()) : null}>
        <div class="footnote-label">foot(er)-note{collapsed ? ' ↓' : ''}</div>
        <div class="footnote-number" id="footnoteNumber">0</div>
        <div class="footnote-sub" id="footnoteSub">steps yesterday</div>
      </div>
      <div class="footnote-togs">
        <button class="footnote-tog on"  on:click={(e) => switchPeriod('daily',   e.currentTarget)}>daily</button>
        <button class="footnote-tog"     on:click={(e) => switchPeriod('weekly',  e.currentTarget)}>weekly</button>
        <button class="footnote-tog"     on:click={(e) => switchPeriod('monthly', e.currentTarget)}>monthly</button>
      </div>
    </div>
    <div class="footnote-right">
      <div id="footnoteChart" bind:this={chartContainer}></div>
      <div id="footnoteTooltip" bind:this={tooltipEl}></div>
    </div>
  </div>
{/if}
