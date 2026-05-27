<script>
  // Auto-discovered from static/images/30daychartchallenge-2026/
  // Drop a file named dayN-anything.{png,jpg,jpeg,webp,gif,svg,mp4,webm,mov} and it shows up.
  export let data;
  $: dayMedia = data.dayMedia;

  const weeks = [
    { theme: 'Comparisons',   days: [1, 2, 3, 4, 5, 6] },
    { theme: 'Distributions', days: [7, 8, 9, 10, 11, 12] },
    { theme: 'Relationships', days: [13, 14, 15, 16, 17, 18] },
    { theme: 'Time Series',   days: [19, 20, 21, 22, 23, 24] },
    { theme: 'Uncertainties', days: [25, 26, 27, 28, 29, 30] },
  ];

  // Per-day data.
  //   title  — short name shown in tile
  //   intro  — sentences above the chart in the detail list
  //   outro  — sentences below the chart in the detail list
  //   source — data source string
  //   tags   — array of theme tags for filtering, e.g. ['food', 'demographics']
  //   bg     — background hex of the chart, e.g. '#fff8e7' (used by light → dark sort)
  const dayInfo = {
    1:  { title: 'Part-to-Whole',             intro: '', outro: '', source: '', tags: ['technology'],                  bg: '#F8F8F6' },
    2:  { title: 'Pictogram',                 intro: '', outro: '', source: '', tags: ['demographics', 'population'],  bg: '#A22D0D' },
    3:  { title: 'Mosaic',                    intro: '', outro: '', source: '', tags: ['technology', 'transport'],     bg: '#F2F1ED' },
    4:  { title: 'Slope',                     intro: '', outro: '', source: '', tags: ['entertainment'],               bg: '#E5E6E3' },
    5:  { title: 'Experimental',              intro: '', outro: '', source: '', tags: ['food'],                        bg: '#FFFFFF' },
    6:  { title: 'Reporters Without Borders', intro: '', outro: '', source: '', tags: ['politics'],                    bg: '#F2ECE6' },
    7:  { title: 'Multiscale',                intro: '', outro: '', source: '', tags: ['finance'],                     bg: '#FFFFFF' },
    8:  { title: 'Circular',                  intro: '', outro: '', source: '', tags: ['health', 'environment'],       bg: '#EDF6FD' },
    9:  { title: 'Wealth',                    intro: '', outro: '', source: '', tags: ['wealth'],                      bg: '#FFFFFF' },
    10: { title: 'Pop Culture',               intro: '', outro: '', source: '', tags: ['entertainment'],               bg: '#EAE6DA' },
    11: { title: 'Physical',                  intro: '', outro: '', source: '', tags: ['entertainment'],               bg: '#D0DED3' },
    12: { title: 'Flowing Data',              intro: '', outro: '', source: '', tags: ['demographics', 'gender'],      bg: '#FFFFFF' },
    13: { title: 'Ecosystems',                intro: '', outro: '', source: '', tags: ['urbanisation', 'transport'],   bg: '#FBFBFB' },
    14: { title: 'Trade',                     intro: '', outro: '', source: '', tags: ['trade'],                       bg: '#FFFEEE' },
    15: { title: 'Correlation',               intro: '', outro: '', source: '', tags: ['rule of law'],                 bg: '#F8D1B2' },
    16: { title: 'Causation',                 intro: '', outro: '', source: '', tags: ['finance'],                     bg: '#F8F5F2' },
    17: { title: 'Remake',                    intro: '', outro: '', source: '', tags: ['linguistics'],                 bg: '#E5E7EB' },
    18: { title: 'UNICEF',                    intro: '', outro: '', source: '', tags: ['demographics', 'health'],      bg: '#FFFFFF' },
    19: { title: 'Evolution',                 intro: '', outro: '', source: '', tags: ['history'],                     bg: '#FFF6DF' },
    20: { title: 'Global Change',             intro: '', outro: '', source: '', tags: ['environment', 'climate change'], bg: '#E2E2E2' },
    21: { title: 'Historical',                intro: '', outro: '', source: '', tags: ['history'],                     bg: '#FFFFFF' },
    22: { title: 'New Tool',                  intro: '', outro: '', source: '', tags: ['cities'],                      bg: '#EDF6F7' },
    23: { title: 'Seasons',                   intro: '', outro: '', source: '', tags: ['cities', 'climate change'],    bg: '#FDF9B6' },
    24: { title: 'South China Morning Post',  intro: '', outro: '', source: '', tags: ['linguistics'],                 bg: '#E89867' },
    25: { title: 'Space',                     intro: '', outro: '', source: '', tags: ['science'],                     bg: '' },
    26: { title: 'Trend',                     intro: '', outro: '', source: '', tags: ['trade', 'food'],               bg: '#EAF1DB' },
    27: { title: 'Animation',                 intro: '', outro: '', source: '', tags: ['trade'],                       bg: '#7E7E7E' },
    28: { title: 'Modeling',                  intro: '', outro: '', source: '', tags: ['climate change'],              bg: '#EBF0EC' },
    29: { title: 'Monochrome',                intro: '', outro: '', source: '', tags: ['food'],                        bg: '#CACACA' },
    30: { title: 'Global Health Data Exchange', intro: '', outro: '', source: '', tags: ['health', 'environment'],     bg: '#D8D8D8' },
  };

  // Collect every tag used across days, sorted alphabetically.
  const allTags = [...new Set(Object.values(dayInfo).flatMap((d) => d.tags ?? []))].sort();

  // Hex (#rrggbb / #rgb) → perceived luminance 0..1 (Rec. 709). Empty/invalid → null.
  function hexLuma(hex) {
    if (!hex) return null;
    let h = hex.trim().replace('#', '');
    if (h.length === 3) h = h.split('').map((c) => c + c).join('');
    if (h.length !== 6 || !/^[0-9a-f]{6}$/i.test(h)) return null;
    const r = parseInt(h.slice(0, 2), 16) / 255;
    const g = parseInt(h.slice(2, 4), 16) / 255;
    const b = parseInt(h.slice(4, 6), 16) / 255;
    return 0.2126 * r + 0.7152 * g + 0.0722 * b;
  }

  // Filter + sort state. Filter is single-select.
  let activeTag = null;
  let sortMode = 'week'; // 'week' (default, weekly headers) | 'filter' | 'colour'

  function selectTag(tag) {
    activeTag = activeTag === tag ? null : tag;
  }

  // A day is "matched" by the active filter when it has the active tag.
  // No active tag → nothing is dimmed (everything matches).
  $: isMatched = (day) => {
    if (!activeTag) return true;
    const tags = dayInfo[day]?.tags ?? [];
    return tags.includes(activeTag);
  };

  // When a sort is active, the grid is one flat list (week headers hidden).
  // When sort is 'chronological', we render the weekly layout.
  $: sortedDays = (() => {
    const all = Array.from({ length: 30 }, (_, i) => i + 1);
    if (sortMode === 'colour') {
      return [...all].sort((a, b) => {
        const la = hexLuma(dayInfo[a]?.bg);
        const lb = hexLuma(dayInfo[b]?.bg);
        // Days without a hex sink to the end, in chronological order.
        if (la == null && lb == null) return a - b;
        if (la == null) return 1;
        if (lb == null) return -1;
        return lb - la; // lighter (higher luma) first
      });
    }
    if (sortMode === 'filter') {
      return [...all].sort((a, b) => {
        const ta = (dayInfo[a]?.tags ?? [])[0] ?? '';
        const tb = (dayInfo[b]?.tags ?? [])[0] ?? '';
        if (!ta && !tb) return a - b;
        if (!ta) return 1;
        if (!tb) return -1;
        const cmp = ta.localeCompare(tb);
        return cmp !== 0 ? cmp : a - b;
      });
    }
    return all; // 'week' default
  })();

  const SHEET_EMBED = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vRijWxVG77VWZY924K-ZKydj7ysFO_1q0sl4_l6PSaoHh64TrTquXcvACGYNBBLx3nRc_a8SVvwRVM2/pubhtml?widget=true&headers=false';

  let lightboxDay = null;
  function openLightbox(day) {
    if (dayMedia[day]) lightboxDay = day;
  }
  function closeLightbox() { lightboxDay = null; }

  function handleKey(e) {
    if (e.key === 'Escape') closeLightbox();
  }

  import { flip } from 'svelte/animate';
  import { fade } from 'svelte/transition';

  // The each-block iterates `displayDays`. When sortMode changes, this array
  // reorders → animate:flip measures before/after and animates each cell.
  // In 'week' mode, days are in chronological order [1..30]. In sorted modes,
  // they're in sortedDays order. Headers are rendered in a parallel each-block
  // and use CSS `order` to slot in between the right cells in week mode.
  $: displayDays = sortMode === 'week'
    ? Array.from({ length: 30 }, (_, i) => i + 1)
    : sortedDays;

  // Cell visual order = its index in displayDays + 1 (so headers at order 0,7,14,...
  // in week mode slot before the corresponding group). In sorted modes, headers
  // aren't rendered, so order can be a simple ascending index.
  $: dayOrder = (() => {
    const map = new Map();
    if (sortMode === 'week') {
      // Layout: header(0) cells(1-6) header(7) cells(8-13) header(14) cells(15-20) header(21) cells(22-27) header(28) cells(29-34)
      for (let wi = 0; wi < weeks.length; wi++) {
        weeks[wi].days.forEach((day, di) => {
          map.set(day, wi * 7 + 1 + di);
        });
      }
    } else {
      displayDays.forEach((day, i) => map.set(day, i));
    }
    return map;
  })();
</script>

<svelte:head>
  <title>Thirty charts in thirty days — Surbhi Bhatia</title>
</svelte:head>

<svelte:window on:keydown={handleKey} />

<section class="section challenge-section">

  <div class="challenge-header">
    <div class="tag-line">
      <span class="challenge-tag">#30DayChartChallenge2026</span>
    </div>
    <h1 class="challenge-title">Thirty charts in thirty days</h1>
    <p class="challenge-strap">
      Notes from the #30DayChartChallenge and the process of making something every day.
    </p>
    <div class="challenge-byline">24 May 2026</div>
    <p class="challenge-intro">
      Four years ago, I signed up for the #30DayMapChallenge started by Topi Tjukanov because I wanted to get better at making maps. What was supposed to be a month-long task, took me nearly a year to complete. A year spent in github rabbitholes and codebases, learning multiple mapping tools, new libraries, finding data, unfamiliar workflows, just learning the technique of how things were made.
    </p>
    <p class="challenge-intro">
      A lot has changed since then. It's a strange new world, where making is easier than ever. Data is in abundance. Code is abundant. Agents who will write it for you for cheap, are abundant. What feels scarce now is human attention, and the ability to find what is actually worth paying attention to.
    </p>
    <p class="challenge-intro">
      This abundance made me want to take the #30DayChartChallenge created by Cédric Scherer and Zan Armstrong this year. I took it up because I wanted to rediscover the joy of exploratory making, in times when it can be done in minutes.
    </p>
    <p class="challenge-intro">
      Here are the outputs:
    </p>
  </div>

  <!-- Filter (left) + sort buttons (right) -->
  <div class="controls">
    {#if allTags.length > 0}
      <div class="control-group">
        <span class="control-label">Filter:</span>
        <div class="pills">
          {#each allTags as tag}
            <button
              class="pill"
              class:active={activeTag === tag}
              on:click={() => selectTag(tag)}
            >{tag}</button>
          {/each}
        </div>
      </div>
    {/if}

    <div class="control-group sort-control">
      <span class="control-label">Sort:</span>
      <div class="sort-segmented">
        <button
          class="sort-btn"
          class:active={sortMode === 'week'}
          on:click={() => (sortMode = 'week')}
        >By Week</button>
        <button
          class="sort-btn"
          class:active={sortMode === 'filter'}
          on:click={() => (sortMode = 'filter')}
        >By Filter</button>
        <button
          class="sort-btn"
          class:active={sortMode === 'colour'}
          on:click={() => (sortMode = 'colour')}
        >By Colour</button>
      </div>
    </div>
  </div>

  <!-- One flat grid. Cells live in a single keyed each-block (sole child of its
       own each, so animate:flip is valid). Week-headers are sibling elements
       inside the grid, shown only in 'week' mode and positioned via CSS `order`
       between groups of cells. CSS `order` change → FLIP measures and animates. -->
  <div class="chart-grid chart-grid-flat">
    {#if sortMode === 'week'}
      {#each weeks as week, wi (wi)}
        <div
          class="week-header"
          style="order: {wi * 7}"
          transition:fade={{ duration: 200 }}
        >
          <span class="week-num">Week {wi + 1}:</span>
          <span class="week-theme">{week.theme}</span>
        </div>
      {/each}
    {/if}

    {#each displayDays as day (day)}
      {@const media = dayMedia[day]}
      <div
        class="chart-cell"
        class:has-image={!!media}
        class:dim={!isMatched(day)}
        style="order: {dayOrder.get(day)}"
        animate:flip={{ duration: 500 }}
        on:click={() => openLightbox(day)}
        on:keydown={(e) => (e.key === 'Enter' || e.key === ' ') && openLightbox(day)}
        role={media ? 'button' : undefined}
        tabindex={media ? 0 : undefined}
      >
        <div class="chart-thumb">
          {#if media?.kind === 'image'}
            <img src={media.src} alt="Day {day}" loading="lazy" />
          {:else if media?.kind === 'video'}
            <video src={media.src} muted loop playsinline autoplay preload="metadata"></video>
          {:else}
            <div class="chart-placeholder"></div>
          {/if}
        </div>
        <div class="chart-meta">
          <span class="chart-day">Day {String(day).padStart(2, '0')}</span>
          {#if dayInfo[day]?.title}
            <span class="chart-title">{dayInfo[day].title}</span>
          {/if}
        </div>
      </div>
    {/each}
  </div>

  <!-- Begin section: framing notes before the drip feed -->
  <div class="begin-section">
    <h2 class="begin-title">But where does one begin?</h2>
    <p class="begin-lead">Here's what I kept in mind:</p>

    <div class="begin-image-placeholder">[ image placeholder ]</div>

    <div class="begin-note">
      <h3 class="begin-note-title">Constraint one</h3>
      <p class="begin-note-body">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
      </p>
    </div>

    <div class="begin-note">
      <h3 class="begin-note-title">Constraint two</h3>
      <p class="begin-note-body">
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
      </p>
    </div>

    <div class="begin-note">
      <h3 class="begin-note-title">Constraint three</h3>
      <p class="begin-note-body">
        Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
      </p>
    </div>
  </div>

  <!-- Detailed list: each chart, top to bottom -->
  <div class="detail-list">
    {#each weeks as week, wi}
      {#each week.days as day}
        {@const media = dayMedia[day]}
        {@const info = dayInfo[day]}
        <article class="detail-entry" id="day-{day}">
          <header class="detail-header">
            <span class="detail-day">Day {String(day).padStart(2, '0')}</span>
            {#if info?.title}
              <h3 class="detail-title">{info.title}</h3>
            {/if}
            <span class="detail-theme">{week.theme}</span>
          </header>

          <p class="detail-notes detail-notes-before" class:placeholder={!info?.intro}>
            {info?.intro || '[ a few sentences before the chart — what prompted it, what to look for ]'}
          </p>

          <div class="detail-media">
            {#if media?.kind === 'image'}
              <img src={media.src} alt="Day {day} — {info?.title ?? ''}" loading="lazy" on:click={() => openLightbox(day)} />
            {:else if media?.kind === 'video'}
              <video src={media.src} controls muted loop playsinline preload="metadata"></video>
            {:else}
              <div class="detail-placeholder">Coming soon</div>
            {/if}
          </div>

          <p class="detail-notes detail-notes-after" class:placeholder={!info?.outro}>
            {info?.outro || '[ a few sentences after the chart — what surprised you, what you took away ]'}
          </p>

          {#if info?.source}
            <div class="detail-source"><span class="detail-source-label">Data source:</span> {info.source}</div>
          {/if}
        </article>
      {/each}
    {/each}
  </div>

  <!-- Sheet embed (at the end) -->
  <div class="sheet-section">
    <div class="sheet-title">Challenge log</div>
    <iframe
      src={SHEET_EMBED}
      class="sheet-iframe"
      title="30-day chart challenge log"
      frameborder="0"
      scrolling="no"
    ></iframe>
  </div>

</section>

<!-- Lightbox -->
{#if lightboxDay}
  {@const lbMedia = dayMedia[lightboxDay]}
  {@const lbInfo = dayInfo[lightboxDay]}
  <div class="lightbox" on:click={closeLightbox}>
    {#if lbMedia?.kind === 'video'}
      <video src={lbMedia.src} controls autoplay loop muted playsinline on:click|stopPropagation></video>
    {:else if lbMedia}
      <img src={lbMedia.src} alt="Day {lightboxDay}" on:click|stopPropagation />
    {/if}
    <button class="lightbox-close" on:click={closeLightbox}>×</button>
    <div class="lightbox-label">
      Day {lightboxDay}{#if lbInfo?.title} · {lbInfo.title}{/if}
    </div>
  </div>
{/if}

<style>
  .challenge-section { width: 100%; }

  .challenge-header {
    margin-bottom: 2.5rem;
    max-width: 900px;
  }

  .back-link {
    font-family: "DM Mono", monospace;
    font-size: 10px;
    letter-spacing: 0.08em;
    color: #aaa;
    text-decoration: none;
    display: inline-block;
    margin-bottom: 1.2rem;
    transition: color 0.2s;
  }
  .back-link:hover { color: #1a6b3a; }

  .tag-line { margin-bottom: 10px; }

  .challenge-tag {
    font-family: "DM Mono", monospace;
    font-size: 9px;
    letter-spacing: 0.1em;
    color: #1a6b3a;
    border: 1px solid rgba(26,107,58,0.25);
    padding: 2px 7px;
  }

  .challenge-title {
    font-size: 32px;
    font-weight: 700;
    color: #111;
    line-height: 1.2;
    margin-bottom: 10px;
    font-family: "Inter", sans-serif;
    letter-spacing: -0.01em;
  }

  .challenge-strap {
    font-size: 16px;
    font-weight: 400;
    color: #333;
    line-height: 1.5;
    margin: 0 0 6px 0;
  }

  .challenge-byline {
    font-family: "DM Mono", monospace;
    font-size: 11px;
    color: #777;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    margin-bottom: 24px;
  }

  .challenge-intro {
    font-size: 14px;
    font-weight: 400;
    color: #111;
    line-height: 1.7;
    margin-bottom: 14px;
  }

  .challenge-intro:last-child { margin-bottom: 0; }

  /* ── Begin section: framing notes between log and drip feed ── */
  .begin-section {
    margin-top: 3.5rem;
    margin-bottom: 1rem;
    max-width: 900px;
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
  }

  .begin-title {
    font-family: "Inter", sans-serif;
    font-size: 22px;
    font-weight: 700;
    color: #111;
    line-height: 1.25;
    margin: 0;
  }

  .begin-lead {
    font-size: 14px;
    font-weight: 400;
    color: #111;
    line-height: 1.7;
    margin: 0;
  }

  .begin-image-placeholder {
    width: 100%;
    aspect-ratio: 16 / 9;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: "DM Mono", monospace;
    font-size: 10px;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: #bbb;
    background-image:
      linear-gradient(rgba(26,107,58,0.05) 1px, transparent 1px),
      linear-gradient(90deg, rgba(26,107,58,0.05) 1px, transparent 1px);
    background-size: 16px 16px;
    border: 1px solid rgba(26,107,58,0.12);
  }

  .begin-note {
    display: flex;
    flex-direction: column;
    gap: 6px;
  }

  .begin-note-title {
    font-family: "Inter", sans-serif;
    font-size: 15px;
    font-weight: 600;
    color: #111;
    margin: 0;
    line-height: 1.3;
  }

  .begin-note-body {
    font-size: 14px;
    font-weight: 400;
    color: #111;
    line-height: 1.7;
    margin: 0;
  }

  /* ── Filter + sort controls ── */
  .controls {
    display: flex;
    flex-wrap: wrap;
    gap: 18px 28px;
    margin-bottom: 1.4rem;
    padding-bottom: 1rem;
    border-bottom: 1px solid rgba(26,107,58,0.08);
  }

  .control-group {
    display: flex;
    align-items: center;
    gap: 10px;
    flex-wrap: wrap;
  }

  .control-label {
    font-family: "DM Mono", monospace;
    font-size: 9px;
    font-weight: 700;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: rgba(26,107,58,0.55);
  }

  .pills {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
  }

  .pill {
    background: #fff;
    border: 1px solid rgba(26,107,58,0.25);
    color: #1a6b3a;
    font-family: "DM Mono", monospace;
    font-size: 10px;
    letter-spacing: 0.04em;
    padding: 4px 10px;
    cursor: pointer;
    transition: background 0.15s, border-color 0.15s, color 0.15s;
  }

  .pill:hover {
    border-color: rgba(26,107,58,0.5);
    background: rgba(26,107,58,0.04);
  }

  .pill.active {
    background: #1a6b3a;
    border-color: #1a6b3a;
    color: #fff;
  }

  /* Segmented sort control: By Week | By Most Favourite | By Colour */
  .sort-segmented {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .sort-btn {
    background: none;
    border: none;
    padding: 2px 0;
    cursor: pointer;
    font-family: "Inter", sans-serif;
    font-size: 13px;
    font-weight: 400;
    color: #999;
    transition: color 0.15s;
  }

  .sort-btn:hover { color: #1a6b3a; }

  .sort-btn.active {
    color: #1a6b3a;
    font-weight: 600;
  }

  .sort-control {
    margin-left: auto;
  }

  /* ── Weeks ── */
  .weeks {
    display: flex;
    flex-direction: column;
    gap: 0.6rem;
  }

  .week-header {
    display: flex;
    align-items: baseline;
    gap: 8px;
    margin-bottom: 4px;
  }

  .week-num,
  .week-theme {
    font-family: "Inter", sans-serif;
    font-size: 17px;
    font-weight: 600;
    letter-spacing: -0.005em;
    color: #111;
  }

  .week-num { color: #1a6b3a; margin-right: 4px; }

  /* ── Chart grid: 6 per row, fixed-width squares (no resize on load) ── */
  .chart-grid {
    display: grid;
    grid-template-columns: repeat(6, 140px);
    column-gap: 12px;
    row-gap: 16px;
    justify-content: start;
  }

  .chart-grid-flat .week-header {
    grid-column: 1 / -1;
    margin-top: 6px;
    margin-bottom: -4px;
  }

  /* First week-header has no top margin */
  .chart-grid-flat .week-header[style*="order: 0"] {
    margin-top: 0;
  }

  .chart-cell {
    display: flex;
    flex-direction: column;
    gap: 8px;
    cursor: default;
    transition: opacity 0.25s ease;
  }

  .chart-cell.has-image { cursor: pointer; }

  .chart-cell.dim {
    opacity: 0.25;
  }
  .chart-cell.dim:hover {
    opacity: 0.55;
  }

  .chart-thumb {
    width: 100%;
    aspect-ratio: 1 / 1;
    border: 1px solid rgba(26,107,58,0.15);
    overflow: hidden;
    background: #f7f9f7;
    transition: border-color 0.2s, transform 0.2s, box-shadow 0.2s;
  }

  .chart-cell.has-image:hover .chart-thumb {
    border-color: rgba(26,107,58,0.5);
    transform: translateY(-2px);
    box-shadow: 0 6px 18px rgba(26,107,58,0.1);
  }

  .chart-thumb img,
  .chart-thumb video {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  .chart-placeholder {
    width: 100%;
    height: 100%;
    background-image:
      linear-gradient(rgba(26,107,58,0.06) 1px, transparent 1px),
      linear-gradient(90deg, rgba(26,107,58,0.06) 1px, transparent 1px);
    background-size: 14px 14px;
  }

  .chart-meta {
    display: flex;
    flex-direction: column;
    gap: 3px;
    padding-top: 2px;
  }

  .chart-day {
    font-family: "DM Mono", monospace;
    font-size: 9px;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: #1a6b3a;
  }

  .chart-title {
    font-size: 12px;
    font-weight: 600;
    color: #222;
    line-height: 1.3;
  }

  /* ── Sheet embed ── */
  .sheet-section {
    margin-top: 4rem;
    max-width: 900px;
    margin-left: auto;
    margin-right: auto;
  }

  .sheet-title {
    font-family: "DM Mono", monospace;
    font-size: 9px;
    font-weight: 700;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: rgba(26,107,58,0.5);
    margin-bottom: 10px;
  }

  .sheet-iframe {
    width: 100%;
    max-width: 900px;
    height: 480px;
    border: 1px solid rgba(26,107,58,0.15);
    background: #f9faf9;
  }

  /* ── Detail list (one chart per row, top to bottom) ── */
  .detail-list {
    margin-top: 4rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3rem;
  }

  .detail-entry {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 14px;
    width: 100%;
    max-width: 640px;
    padding-bottom: 2.5rem;
    border-bottom: 1px solid rgba(26,107,58,0.08);
  }

  .detail-entry .detail-header { justify-content: center; }
  .detail-entry .detail-theme { margin-left: 0; }

  .detail-entry:last-child { border-bottom: none; }

  .detail-header {
    display: flex;
    align-items: baseline;
    flex-wrap: wrap;
    gap: 12px;
  }

  .detail-day {
    font-family: "DM Mono", monospace;
    font-size: 10px;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: #1a6b3a;
  }

  .detail-title {
    font-size: 22px;
    font-weight: 700;
    color: #111;
    margin: 0;
    font-family: "Inter", sans-serif;
    line-height: 1.25;
  }

  .detail-theme {
    font-family: "DM Mono", monospace;
    font-size: 9px;
    color: #aaa;
    letter-spacing: 0.06em;
    margin-left: auto;
  }

  .detail-notes {
    font-size: 14px;
    line-height: 1.7;
    color: #444;
    font-weight: 300;
    margin: 0;
    max-width: 640px;
  }

  .detail-notes.placeholder {
    color: #c2c2c2;
    font-style: italic;
  }

  .detail-media {
    width: 100%;
    max-width: 560px;
    margin-left: auto;
    margin-right: auto;
    border: 1px solid rgba(26,107,58,0.12);
    background: #f9faf9;
    overflow: hidden;
  }

  .detail-media img,
  .detail-media video {
    width: 100%;
    height: auto;
    display: block;
  }

  .detail-media img { cursor: pointer; }

  .detail-placeholder {
    width: 100%;
    aspect-ratio: 16 / 9;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: "DM Mono", monospace;
    font-size: 10px;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: #bbb;
    background-image:
      linear-gradient(rgba(26,107,58,0.05) 1px, transparent 1px),
      linear-gradient(90deg, rgba(26,107,58,0.05) 1px, transparent 1px);
    background-size: 16px 16px;
  }

  .detail-source {
    font-family: "DM Mono", monospace;
    font-size: 11px;
    color: #666;
    line-height: 1.5;
  }

  .detail-source-label {
    color: #aaa;
    text-transform: uppercase;
    font-size: 9px;
    letter-spacing: 0.1em;
    margin-right: 6px;
  }

  /* ── Lightbox ── */
  .lightbox {
    position: fixed;
    inset: 0;
    background: rgba(0,0,0,0.88);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
    cursor: pointer;
  }

  .lightbox img,
  .lightbox video {
    max-width: 92vw;
    max-height: 88vh;
    object-fit: contain;
    cursor: default;
    box-shadow: 0 8px 48px rgba(0,0,0,0.5);
  }

  .lightbox-close {
    position: fixed;
    top: 20px;
    right: 28px;
    background: none;
    border: none;
    color: #fff;
    font-size: 28px;
    cursor: pointer;
    opacity: 0.7;
    line-height: 1;
  }

  .lightbox-close:hover { opacity: 1; }

  .lightbox-label {
    position: fixed;
    bottom: 24px;
    left: 50%;
    transform: translateX(-50%);
    font-family: "DM Mono", monospace;
    font-size: 11px;
    letter-spacing: 0.12em;
    color: rgba(255,255,255,0.7);
  }
</style>
