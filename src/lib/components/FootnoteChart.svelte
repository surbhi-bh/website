<script>
  import { onMount } from 'svelte';

  export let collapsed = false;

  let isExpanded = false;
  let currentFnPeriod = 'daily';
  let chartContainer;
  let tooltipEl;

  $: showFull = !collapsed || isExpanded;

  function toggleExpand() {
    if (!collapsed) return;
    isExpanded = !isExpanded;
    if (isExpanded) {
      // wait for DOM to show chart container, then draw
      setTimeout(() => drawChart(currentFnPeriod), 50);
    }
  }

  const fnSubLabels = {
    daily: 'steps yesterday',
    weekly: 'steps last week',
    monthly: 'steps last month'
  };

  const fnDaily = [
    { date: 'Jan 19', steps: 7812,  weekStart: false, monthStart: false },
    { date: 'Jan 20', steps: 4230,  weekStart: false, monthStart: false },
    { date: 'Jan 21', steps: 9102,  weekStart: false, monthStart: false },
    { date: 'Jan 22', steps: 3411,  weekStart: false, monthStart: false },
    { date: 'Jan 23', steps: 8540,  weekStart: false, monthStart: false },
    { date: 'Jan 24', steps: 11203, weekStart: false, monthStart: false },
    { date: 'Jan 25', steps: 6780,  weekStart: false, monthStart: false },
    { date: 'Jan 26', steps: 5230,  weekStart: true,  monthStart: false },
    { date: 'Jan 27', steps: 9812,  weekStart: false, monthStart: false },
    { date: 'Jan 28', steps: 2901,  weekStart: false, monthStart: false },
    { date: 'Jan 29', steps: 7654,  weekStart: false, monthStart: false },
    { date: 'Jan 30', steps: 10382, weekStart: false, monthStart: false },
    { date: 'Jan 31', steps: 8110,  weekStart: false, monthStart: false },
    { date: 'Feb 1',  steps: 4901,  weekStart: false, monthStart: true  },
    { date: 'Feb 2',  steps: 12045, weekStart: true,  monthStart: false },
    { date: 'Feb 3',  steps: 6018,  weekStart: false, monthStart: false },
    { date: 'Feb 4',  steps: 3280,  weekStart: false, monthStart: false },
    { date: 'Feb 5',  steps: 8732,  weekStart: false, monthStart: false },
    { date: 'Feb 6',  steps: 9450,  weekStart: false, monthStart: false },
    { date: 'Feb 7',  steps: 5612,  weekStart: false, monthStart: false },
    { date: 'Feb 8',  steps: 11100, weekStart: false, monthStart: false },
    { date: 'Feb 9',  steps: 7203,  weekStart: true,  monthStart: false },
    { date: 'Feb 10', steps: 4511,  weekStart: false, monthStart: false },
    { date: 'Feb 11', steps: 9870,  weekStart: false, monthStart: false },
    { date: 'Feb 12', steps: 6340,  weekStart: false, monthStart: false },
    { date: 'Feb 13', steps: 10980, weekStart: false, monthStart: false },
    { date: 'Feb 14', steps: 8210,  weekStart: false, monthStart: false },
    { date: 'Feb 15', steps: 3765,  weekStart: false, monthStart: false },
    { date: 'Feb 16', steps: 7890,  weekStart: true,  monthStart: false },
    { date: 'Feb 17', steps: 11320, weekStart: false, monthStart: false },
    { date: 'Feb 18', steps: 5420,  weekStart: false, monthStart: false },
    { date: 'Feb 19', steps: 9100,  weekStart: false, monthStart: false },
    { date: 'Feb 20', steps: 4823,  weekStart: false, monthStart: false },
    { date: 'Feb 21', steps: 12380, weekStart: false, monthStart: false },
    { date: 'Feb 22', steps: 7605,  weekStart: false, monthStart: false },
    { date: 'Feb 23', steps: 6210,  weekStart: true,  monthStart: false },
    { date: 'Feb 24', steps: 8920,  weekStart: false, monthStart: false },
    { date: 'Feb 25', steps: 3110,  weekStart: false, monthStart: false },
    { date: 'Feb 26', steps: 10450, weekStart: false, monthStart: false },
    { date: 'Feb 27', steps: 7340,  weekStart: false, monthStart: false },
    { date: 'Feb 28', steps: 5890,  weekStart: false, monthStart: false },
    { date: 'Mar 1',  steps: 9230,  weekStart: false, monthStart: true  },
    { date: 'Mar 2',  steps: 6780,  weekStart: true,  monthStart: false },
    { date: 'Mar 3',  steps: 2173,  weekStart: false, monthStart: false },
    { date: 'Mar 4',  steps: 6605,  weekStart: false, monthStart: false },
    { date: 'Mar 5',  steps: 11890, weekStart: false, monthStart: false },
    { date: 'Mar 6',  steps: 8340,  weekStart: false, monthStart: false },
    { date: 'Mar 7',  steps: 10149, weekStart: false, monthStart: false },
    { date: 'Mar 8',  steps: 8051,  weekStart: false, monthStart: false },
    { date: 'Mar 9',  steps: 8882,  weekStart: true,  monthStart: false },
    { date: 'Mar 10', steps: 4522,  weekStart: false, monthStart: false },
    { date: 'Mar 11', steps: 11548, weekStart: false, monthStart: false },
    { date: 'Mar 12', steps: 6897,  weekStart: false, monthStart: false },
    { date: 'Mar 13', steps: 7007,  weekStart: false, monthStart: false },
    { date: 'Mar 14', steps: 9120,  weekStart: false, monthStart: false },
    { date: 'Mar 15', steps: 5430,  weekStart: false, monthStart: false },
    { date: 'Mar 16', steps: 10780, weekStart: true,  monthStart: false },
    { date: 'Mar 17', steps: 8210,  weekStart: false, monthStart: false },
    { date: 'Mar 18', steps: 6340,  weekStart: false, monthStart: false },
    { date: 'Mar 19', steps: 7007,  weekStart: false, monthStart: false },
  ];

  const fnWeekly = [
    { date: 'W1 Nov', steps: 48200 },
    { date: 'W2 Nov', steps: 52400 },
    { date: 'W3 Nov', steps: 41800 },
    { date: 'W4 Nov', steps: 61200 },
    { date: 'W1 Dec', steps: 38900 },
    { date: 'W2 Dec', steps: 55600 },
    { date: 'W3 Dec', steps: 29800 },
    { date: 'W4 Dec', steps: 44100 },
    { date: 'W1 Jan', steps: 57300 },
    { date: 'W2 Jan', steps: 63800 },
    { date: 'W3 Feb', steps: 49200 },
    { date: 'W4 Feb', steps: 58100 },
    { date: 'W1 Mar', steps: 52400 },
  ];

  const fnMonthly = [
    { date: 'Apr 25', steps: 192000 },
    { date: 'May 25', steps: 245000 },
    { date: 'Jun 25', steps: 178000 },
    { date: 'Jul 25', steps: 210000 },
    { date: 'Aug 25', steps: 198000 },
    { date: 'Sep 25', steps: 231000 },
    { date: 'Oct 25', steps: 187000 },
    { date: 'Nov 25', steps: 220000 },
    { date: 'Dec 25', steps: 165000 },
    { date: 'Jan 26', steps: 241000 },
    { date: 'Feb 26', steps: 228000 },
    { date: 'Mar 26', steps: 94049  },
  ];

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
      .domain([0, d3.max(data, d => d.steps) * 1.1])
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
            fnTooltip.style('opacity', 1)
              .html(`<span class="tt-date">${d.date}</span><span class="tt-steps">${d.steps.toLocaleString()}</span><span class="tt-unit">steps</span>`)
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
    if (!collapsed) {
      function tryDraw() {
        if (window.d3 && window.rough) {
          drawChart('daily');
        } else {
          setTimeout(tryDraw, 100);
        }
      }
      tryDraw();
    }
  });

  // Redraw when page navigates back to read.me (collapsed goes false)
  $: if (hasMounted && !collapsed && chartContainer) {
    setTimeout(() => drawChart(currentFnPeriod), 50);
  }
</script>

{#if collapsed && !isExpanded}
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
