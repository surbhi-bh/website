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
    1:  { title: 'Part-to-Whole',             intro: '', outro: `The chart I made for this prompt is actually the one from <a href="#day-29" class="inline-link">Day 29</a>, on protein bars. It went into my pile of discarded charts, refurbished in a monochrome theme, when the idea of phone screens struck me.\n\nFor a while, I've been wanting to do a project on how phones no longer fit our hands. I could have collecting dimensions for every phone model of a certain brand over time from GSMArena to show this change. But with little time left after this last-minute change, I turned to personal data to quickly make this. Personal can be universal, I guess.`, source: '', tags: ['technology'], bg: '#F8F8F6' },
    2:  { title: 'Pictogram',                 intro: '', outro: `I don't know how to draw digitally. But I have a rough sense of embedding SVGs in code after cleaning them up in Figma. These tiny Warli-style figures — girls, boys, middle-aged, old, Indian people — are derived from Anu Artastic's Warli figure tutorial (https://www.facebook.com/reel/1362632957890249/). I've been calling it "Our Warli in Data."`, source: '', tags: ['demographics', 'population'], bg: '#A22D0D' },
    3:  { title: 'Mosaic',                    intro: '', outro: `What I tried for this one is now the season's chart of Day XYZ. Half way through making that one, I realised it's not mosaic, if the width of the stacked bars is all the same. Abandoned it and found data from IEA that lent itself beautifully to this format. I gained another discarded chart idea that came handy later!`, source: '', tags: ['technology', 'transport'], bg: '#F2F1ED' },
    4:  { title: 'Slope',                     intro: '', outro: `Slope charts are slippery. I updated the data from an old <a href="https://www.livemint.com/industry/media/bollywoods-eternal-struggle-with-original-ideas-here-s-what-data-shows-11661772790605.html" target="_blank" rel="noopener" class="inline-link">story on Bollywood remakes</a> (<a href="https://public.tableau.com/app/profile/surbhi.bhatia/viz/Bollywoodoriginalvsremake/Dashboard1" target="_blank" rel="noopener" class="inline-link">old chart here</a>).\n\nWas it tempting to save this for a meta-day release on Day XYZ, prompt: remake? Yes. But did I have no other idea for this and plenty of chart remakes for that prompt? Yes. You know what they say about a bird in hand.`, source: '', tags: ['entertainment'], bg: '#E5E6E3' },
    5:  { title: 'Experimental',              intro: '', outro: `Food recipes are probably humanity's greatest experiment, and few dishes invite stronger opinions than sambar. I love a nuanced culinary war! This chart is inspired by <a href="https://x.com/surbhaai/status/1708727084187873689/" target="_blank" rel="noopener" class="inline-link">one of my all-time favourite charts by @davidawaldron</a>.`, source: '', tags: ['food'], bg: '#FFFFFF' },
    6:  { title: 'Reporters Without Borders', intro: '', outro: `The labels and tables have turned. Found a repo of dates at Ashoka University Archives.`, source: '', tags: ['politics'], bg: '#F2ECE6' },
    7:  { title: 'Multiscale',                intro: '', outro: `From my early career days, when I used to make a lot of <a href="https://blog.theleapjournal.org/2018/09/watching-markets-work-structural-change.html#gsc.tab=0" target="_blank" rel="noopener" class="inline-link">structural breaks, back-annotation charts in R on financial markets</a>. Glad to have learnt some colour theory in life!`, source: '', tags: ['finance'], bg: '#FFFFFF' },
    8:  { title: 'Circular',                  intro: '', outro: `This is less of a comparison between cities and more a ranking of how differently we're all doomed.`, source: '', tags: ['health', 'environment'], bg: '#EDF6FD' },
    9:  { title: 'Wealth',                    intro: '', outro: `I first came across Caroline Freund and Sarah Oliver's paper from PIIE on the origins of the superrich a few years ago, and it changed how I looked at billionaires. Recently, <a href="https://www.economist.com/interactive/business/2026/04/09/a-giant-succession-wave-is-coming-for-family-businesses" target="_blank" rel="noopener" class="inline-link">The Economist revisited a similar question</a>: what happens when massive family fortunes begin changing hands. In countries like South Korea, where conglomerates and dynasties dominate business, inheritance is practically an economic system of its own.`, source: '', tags: ['wealth'], bg: '#FFFFFF' },
    10: { title: 'Pop Culture',               intro: '', outro: `We all know watching Dhurandhar is a four-day commitment, right? For this, I already had a list of top 10 movies per year, all I had to do was scrape run-time from IMDb. I don't think the numbers are dramatically spiraling upwards, but the data says what the data says.`, source: '', tags: ['entertainment'], bg: '#EAE6DA' },
    11: { title: 'Physical',                  intro: '', outro: `There's something nostalgic about charting CDs. This one came together in about 20 minutes. Possibly the only <a href="https://public.tableau.com/shared/4Z36JM5NN?" target="_blank" rel="noopener" class="inline-link">US-looking chart</a> I have in the series.`, source: '', tags: ['entertainment'], bg: '#D0DED3' },
    12: { title: 'Flowing Data',              intro: '', outro: `FlowingData had the template, my friends at Diagram Chasing had the data — I mostly just had to connect the two and watch it come alive.`, source: '', tags: ['demographics', 'gender'], bg: '#FFFFFF' },
    13: { title: 'Ecosystems',                intro: '', outro: `This idea traced back to a talk by Leewardists organised by Revisual Labs, but also to a very personal irritation: the near absence of last-mile connectivity around metro stations in Indian cities. In cities like New York City or Tokyo, you can step into the subway almost from below your apartment building. In many Indian suburbs, meanwhile, gated enclaves swallow up land parcels, pedestrian access disappears, and metro lines end up awkwardly shadowing ring roads instead of neighbourhood life.`, source: '', tags: ['cities'], bg: '#FBFBFB' },
    14: { title: 'Trade',                     intro: '', outro: '', source: '', tags: ['trade'],                       bg: '#FFFEEE' },
    15: { title: 'Correlation',               intro: '', outro: '', source: '', tags: ['rule of law'],                 bg: '#F8D1B2' },
    16: { title: 'Causation',                 intro: '', outro: '', source: '', tags: ['finance'],                     bg: '#F8F5F2' },
    17: { title: 'Remake',                    intro: '', outro: `If Greek sounds like nonsense to English speakers, what sounds like nonsense to the Greek? (Answer: Chinese.) Remaking <a href="https://x.com/surbhaai/status/1143580636986216448" target="_blank" rel="noopener" class="inline-link">an old chart</a> from back when I didn't realise messing with reading direction is a design sin.`, source: '', tags: ['linguistics'], bg: '#E5E7EB' },
    18: { title: 'UNICEF',                    intro: '', outro: `With hospitals bombed, food and medicines in short supply, and access to essentials collapsing, the war on Palestine has undone decades of progress in child survival.`, source: '', tags: ['demographics', 'health'], bg: '#FFFFFF' },
    19: { title: 'Evolution',                 intro: '', outro: `Tried a chart about the evolution of charts by Michael Friendly! Centuries of trying to understand the world through data and graphics, visualised.`, source: '', tags: ['history'], bg: '#FFF6DF' },
    20: { title: 'Global Change',             intro: '', outro: `How do countries power themselves? Over the last two decades, the world's electricity mix has been slowly turning green, but not everywhere.`, source: '', tags: ['environment', 'climate change'], bg: '#E2E2E2' },
    21: { title: 'Historical',                intro: '', outro: `In my lifetime alone, Indian airlines have appeared, merged, vanished, and rebranded faster than most people can keep track of. India's aviation history is full of ambitious takeoffs and abrupt endings.`, source: '', tags: ['history'], bg: '#FFFFFF' },
    22: { title: 'New Tool',                  intro: '', outro: `I made this version with Orange Data Mining, which is fantastic for tracing workflows but far less helpful when you want bespoke charts. Here's a chart anyway. Did you know just 0.1% of people in Myanmar live in the capital?`, source: '', tags: ['cities'], bg: '#EDF6F7' },
    23: { title: 'Seasons',                   intro: '', outro: `A cheat sheet for the best time to visit Indian cities. Data from last year, does not capture current conditions of this mad April heat in Bangalore!`, source: '', tags: ['cities', 'climate change'], bg: '#FDF9B6' },
    24: { title: 'South China Morning Post',  intro: '', outro: `इনடఇಅ/India, a living mosaic of diverse languages. Inspired by <a href="https://multimedia.scmp.com/culture/article/SCMP-printed-graphics-memory/lonelyGraphics/201505A51.html" target="_blank" rel="noopener" class="inline-link">@aLucasLopez's genius</a>.`, source: '', tags: ['linguistics'], bg: '#E89867' },
    25: { title: 'Space',                     intro: '', outro: `A space race between countries to reach the Earth's orbit, and how often the attempts succeed.`, source: '', tags: ['science'], bg: '' },
    26: { title: 'Trend',                     intro: '', outro: `What's more trendy than matcha? Iced matcha, hojicha latte… Japan's green teas are the trend in cafes around the world. But at home, both consumption and production are falling, while exports rise to match the growing demand abroad.`, source: '', tags: ['trade', 'food'], bg: '#EAF1DB' },
    27: { title: 'Animation',                 intro: '', outro: `Ship traffic through the Strait of Hormuz comes to a halt and has yet to recover. A prolonged disruption to one of the world's busiest oil routes amid the US war on Iran. So much fun making this on Flourish!`, source: '', tags: ['trade'], bg: '#7E7E7E' },
    28: { title: 'Modeling',                  intro: '', outro: `None of the three largest emitting nations are on track, or even pledging to meet the 1.5°C climate target of the Paris agreement, projections show.`, source: '', tags: ['climate change'], bg: '#EBF0EC' },
    29: { title: 'Monochrome',                intro: '', outro: `The original part-to-whole chart. Spending ~₹100 on a protein bar? Here's unpacking what you're paying for across popular options.`, source: '', tags: ['food'], bg: '#CACACA' },
    30: { title: 'Global Health Data Exchange', intro: '', outro: `India's health risk profile is shifting. Risks from unsafe water, poor sanitation, and undernutrition have declined. New threats such as air pollution and high blood pressure have climbed the ranks.`, source: '', tags: ['health', 'environment'], bg: '#D8D8D8' },
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

  // Publish date and dynamic year math. The "X years ago" in the opening line
  // tracks the current year so it stays accurate over time.
  const PUBLISH_DATE = new Date(2026, 4, 30); // May 30, 2026
  const REFERENCE_YEAR = 2022; // map challenge year — "[year - 2022] years ago"
  const numberWords = ['Zero','One','Two','Three','Four','Five','Six','Seven','Eight','Nine','Ten','Eleven','Twelve'];
  $: yearsAgo = new Date().getFullYear() - REFERENCE_YEAR;
  $: yearsAgoWord = numberWords[yearsAgo] ?? String(yearsAgo);
  const publishDateLabel = PUBLISH_DATE.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });

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
  let lightboxImage = null; // { src, alt } for generic image lightbox
  function openLightbox(day) {
    if (dayMedia[day]) lightboxDay = day;
  }
  function openImageLightbox(src, alt) {
    lightboxImage = { src, alt };
  }
  function closeLightbox() {
    lightboxDay = null;
    lightboxImage = null;
  }

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

  // Theme groups for filter sort: one header per first occurrence of a theme tag.
  // themeGroups: [{ theme, startIndex }] where startIndex is into sortedDays.
  $: themeGroups = (() => {
    if (sortMode !== 'filter') return [];
    const seen = new Set();
    const groups = [];
    sortedDays.forEach((day, i) => {
      const t = (dayInfo[day]?.tags ?? [])[0] ?? '';
      if (t && !seen.has(t)) {
        seen.add(t);
        groups.push({ theme: t, startIndex: i });
      }
    });
    return groups;
  })();

  // Detail panel groups: one entry per unique primary theme tag, with all days in that theme.
  // Used to render the detail section as a two-column themed layout.
  const detailThemeGroups = (() => {
    const map = new Map();
    for (let d = 1; d <= 30; d++) {
      const t = (dayInfo[d]?.tags ?? [])[0] ?? 'other';
      if (!map.has(t)) map.set(t, []);
      map.get(t).push(d);
    }
    const groups = Array.from(map.entries()).map(([theme, days]) => ({ theme, days }));
    // Swap technology and cities so cities appears in technology's slot and vice versa.
    const iTech = groups.findIndex(g => g.theme === 'technology');
    const iCities = groups.findIndex(g => g.theme === 'cities');
    if (iTech !== -1 && iCities !== -1) {
      [groups[iTech], groups[iCities]] = [groups[iCities], groups[iTech]];
    }
    return groups;
  })();

  // Theme-mode grid placement: pack theme groups into two side-by-side columns
  // (left column = grid cols 1-3, right = cols 4-6). Each group takes one header
  // row + ceil(days/3) cell rows. Greedy fill: place each group in whichever
  // side-column currently has the lowest cursor.
  const themeCellPlacement = (() => {
    const headers = [];
    const cells = new Map();
    // cursor[side] = next available row in that side column (1-indexed)
    const cursor = [1, 1]; // [left, right]
    for (const group of detailThemeGroups) {
      const side = cursor[0] <= cursor[1] ? 0 : 1; // pick shorter side
      const col = side === 0 ? 1 : 4; // left-half starts at col 1, right-half at col 4
      const headerRow = cursor[side];
      headers.push({ theme: group.theme, col, row: headerRow });
      // Cells flow 3 per row, starting at headerRow + 1
      group.days.forEach((day, i) => {
        const cellRow = headerRow + 1 + Math.floor(i / 3);
        const cellCol = col + (i % 3);
        cells.set(day, { col: cellCol, row: cellRow });
      });
      const groupRows = 1 + Math.ceil(group.days.length / 3); // header + cell rows
      cursor[side] = headerRow + groupRows + 1; // +1 for spacing row
    }
    return { headers, cells };
  })();

  // Cell visual order = its index in displayDays + 1 (so headers at order 0,7,14,...
  // in week mode slot before the corresponding group). In filter mode, cells are
  // shifted down by the number of theme headers that appear before them.
  $: dayOrder = (() => {
    const map = new Map();
    if (sortMode === 'week') {
      // Layout: header(0) cells(1-6) header(7) cells(8-13) header(14) cells(15-20) header(21) cells(22-27) header(28) cells(29-34)
      for (let wi = 0; wi < weeks.length; wi++) {
        weeks[wi].days.forEach((day, di) => {
          map.set(day, wi * 7 + 1 + di);
        });
      }
    } else if (sortMode === 'filter') {
      // Cells need to be ordered so headers slot in before their group.
      // For each day at position i, its order = i + (number of headers at or before i).
      displayDays.forEach((day, i) => {
        const headersBefore = themeGroups.filter(g => g.startIndex <= i).length;
        map.set(day, i + headersBefore);
      });
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
    <h1 class="challenge-title">Thirty charts in thirty days</h1>
    <p class="challenge-strap">
      Notes from the #30DayChartChallenge and the process of making a chart every day of the month
    </p>
    <div class="challenge-byline">{publishDateLabel}</div>
    <p class="challenge-intro">
      <em>{yearsAgoWord}</em> years ago, I spent a year completing the month long <a href="https://github.com/surbhi-bh/30-day-map-challenge/tree/main" target="_blank" rel="noopener" class="inline-link">#30DayMapChallenge</a> run by Topi Tjukanov. It was a year of slow-learning unfamiliar tools. I borrowed from open codebases, took data detours, met many dead ends before finding a sense of direction on every map. By the end of it, I had become better at mapping.
    </p>
    <p class="challenge-intro">
      A lot has changed since then. It's a strange new world where making is easier than ever. Data is abundant. Agents who will write code for you for cheap are abundant. We're drowning in things to look at. What feels scarce now is human attention, and the rare skill of knowing where to point it.
    </p>
    <p class="challenge-intro">
      This abundance drew me to the <a href="https://github.com/30DayChartChallenge/Edition2026" target="_blank" rel="noopener" class="inline-link">#30DayChartChallenge</a> by Dominic Royé and Cédric Scherer this year. It was an excuse to chase small curiosities, the kind that are either too small for a full-length project or too slow to ever become one. I took it purely to rediscover the joy of exploratory making, in a time when almost nothing stands in the way of making, not especially time and skills.
    </p>
    <p class="challenge-intro">
      I completed the challenge on time. If I were manually writing code, it would have definitely stretched. So having Claude to speed that up was a huge help. Often, I'd make a rough chart by hand, or on any familiar tool like Flourish or Datawrapper, or in R, and then ask Claude to translate it using D3.js. The technical layer, code, data fetching, scraping, tagging, came together in minutes with this collaboration. Everything else, the concept, data sampling, structuring, analysis, colours, titles, framing, every micro-decision in between, was mine.
    </p>
    <p class="challenge-intro challenge-intro-last">
      Here are all thirty charts and a glimpse of my process below:
    </p>
  </div>

  <!-- Filter (left) + sort buttons (right) -->
  <div class="controls">
    {#if allTags.length > 0}
      <div class="control-group">
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
        >By Theme</button>
        <button
          class="sort-btn"
          class:active={sortMode === 'colour'}
          on:click={() => (sortMode = 'colour')}
        >By Colour</button>
      </div>
    </div>
  </div>

  <!-- Single flat grid for all sort modes — keeps cells in one keyed each-block
       so animate:flip works across sort changes. Headers slot in via CSS `order`.
       In theme mode, cells/headers get a two-panel layout via explicit grid placement. -->
  <div class="chart-grid chart-grid-flat" class:chart-grid-themed={sortMode === 'filter'}>
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

    {#if sortMode === 'filter'}
      {#each themeCellPlacement.headers as h (h.theme)}
        <div
          class="week-header theme-header"
          style="grid-column: {h.col} / span 3; grid-row: {h.row}"
          transition:fade={{ duration: 200 }}
        >
          <span class="week-theme">{h.theme}</span>
        </div>
      {/each}
    {/if}

    {#each displayDays as day (day)}
      {@const media = dayMedia[day]}
      {@const placement = sortMode === 'filter' ? themeCellPlacement.cells.get(day) : null}
      <div
        class="chart-cell"
        class:has-image={!!media}
        class:dim={!isMatched(day)}
        style={sortMode === 'filter' && placement
          ? `grid-column: ${placement.col}; grid-row: ${placement.row}`
          : `order: ${dayOrder.get(day)}`}
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
    <h2 class="begin-title">If you're wondering where does one begin? Here's how I approached it:</h2>

    <div class="begin-note">
      <h3 class="begin-note-title">
        <img src="/flower.svg" class="begin-bullet" alt="" />The data followed my curiosity
      </h3>
      <p class="begin-note-body">
        There are at least two ways to approach making a chart where all you have is a one-word prompt. Either start with a <em>dataset</em>, and find something to plot, like how the #TidyTuesday challenge works. Or start with a <em>question</em>, and go looking for the data to answer it.
      </p>
      <p class="begin-note-body">
        Early in my career I was the data-first type. I used to think if there's no data, there's no story. This has changed considerably with years of experience as a data journalist. I had built, without quite realising it, a mental landscape of sources: an instinct for where to look, what to trust, how to create proxies, how to arrive at insight through simple math operations. It also helps that sources of data have <em>exponentially</em> exploded, and accessing them has never been easier. The data is almost always out there. The harder part is knowing what you are looking for.
      </p>
      <p class="begin-note-body">
        Starting with a question came naturally to me during this challenge. But it is not the only way.
      </p>
      <p class="begin-note-body">
        My approach to each prompt was <strong>question-first</strong>:
      </p>
      <div class="begin-flow">Question → Data → Analysis → Insight → Chart Type → Design → Annotation</div>
      <p class="begin-note-body">
        But for some it's <strong>data-first</strong>, and finding insights from a given dataset is a huge skill:
      </p>
      <div class="begin-flow">Data → Question → Analysis → Insight → Chart Type → Design → Annotation</div>
      <p class="begin-note-body">
        Some others might be <strong>tool-first</strong>, people who know Tableau stick to it, those who love Datawrapper, stick to that, for example. Chart what is available in the design language and possible grammar of the tools.
      </p>
      <div class="begin-flow">Tool → Data → Chart → Insight → Annotation</div>
      <p class="begin-note-body">
        I'm sure there are more permutations possible. These flows look neat and linear on paper, but rarely are so in practice.
      </p>
      <p class="begin-note-body">
        What the challenge gave me, more than anything, was <strong>stamina</strong>: the appetite to repeat the entire process end to end, every single day. Finding data, verifying sources, testing the insight, building the chart, writing annotations. Like any workout or meditation routine, the first few days are rough, but slowly the morning stops feeling hard.
      </p>
    </div>

    <div class="begin-note">
      <h3 class="begin-note-title">
        <img src="/flower.svg" class="begin-bullet" alt="" />Respecting the constraints
      </h3>
      <p class="begin-note-body">
        In research and writing, there is always a conscious moment when reading has to stop and writing must begin. Writing becomes thinking, a traffic management of paragraphs, thoughts, ideas.
      </p>
      <p class="begin-note-body">
        Chart-making is the same. At some point you have to stop collecting and start making. It's traffic-management of attention, hierarchy, design, inference.
      </p>
      <p class="begin-note-body">
        It is very tempting, once you have some data, to want "longer data": another decade, another city, another source, another scrape. But meaning-making must begin at a cut-off, and a daily challenge forces that upon you. You learn to sample, hand-collect data points because that's faster than writing a tiny script, jump intervals, test an insight on a small slice before scaling, know when to pivot or altogether abandon a hunch. Ideas can be pursued forever and ever, that format has a name called a PhD. The smallest dataset I used had less than 10 observations, and the largest over 76k values.
      </p>
      <figure class="begin-figure">
        <img
          src="/images/30-day-chart-challenge-doubt-slide.jpg"
          alt="A slide by Jonathan Soma on doubt in the chart-making process"
          class="begin-figure-img"
          on:click={() => openImageLightbox('/images/30-day-chart-challenge-doubt-slide.jpg', 'A slide by Jonathan Soma on doubt in the chart-making process')}
          on:keydown={(e) => (e.key === 'Enter' || e.key === ' ') && openImageLightbox('/images/30-day-chart-challenge-doubt-slide.jpg', 'A slide by Jonathan Soma on doubt in the chart-making process')}
          role="button"
          tabindex="0"
        />
        <figcaption>It is chaotic and full of doubt, and that is fine. This slide by <a href="https://jonathansoma.com/" target="_blank" rel="noopener" class="inline-link">Jonathan Soma</a> says it better than I can.</figcaption>
      </figure>
      <p class="begin-note-body">
        Charting an insight has its own infinity. The same dataset can splinter into many charts. The same insight can dress up as many chart types. I liked that <a href="https://perthirtysix.com/essay/30-day-chart-challenge-2024" target="_blank" rel="noopener" class="inline-link">Shri Khalpada</a> locked in the fonts, formats, colours, tools, bringing standardisation and reducing time and number of decisions, taking the challenge some years ago. And that <a href="https://karaman.is/blog/2026/04/30daychartchallenge-2026" target="_blank" rel="noopener" class="inline-link">Georgios Karamanis</a> defined his data universe as Uppsala's transport data, only and stayed within it. Constraints make their work stand out, in the same way as a fence that helps separate a garden from a field.
      </p>
      <p class="begin-note-body">
        The cool thing about continuity is that nothing is wasted. A dataset set aside comes back to fit a later prompt. A chart type abandoned gets a second life. Every effort made adds a word to the vocabulary, ready to be recalled when needed.
      </p>
    </div>

    <div class="begin-note">
      <h3 class="begin-note-title">
        <img src="/flower.svg" class="begin-bullet" alt="" />The chart is for the reader, not the maker
      </h3>
      <p class="begin-note-body">
        I once had an editor who used to say one chart is not the story. But they also said that if a chart is screenshotted and shared as a standalone image on WhatsApp, it should be able to explain the story.
      </p>
      <p class="begin-note-body">
        And so, I was very conscious that every chart of the challenge has an answer to the one and only question of life: <em>"What's the point???"</em>
      </p>
      <p class="begin-note-body">
        A lot of my time was spent on titles, annotations, stripping back anything that didn't earn its place on the canvas. Every reader takes a few seconds to a few minutes to get the point when engaging with a chart. Some charts are intentionally demanding, like a Marimekko chart which needs some patience to unlock the insight. It's a learning curve for consumers of data visualisation, for whom a chart could be hard, but should not be hostile. A reader should never feel punished for trying to engage.
      </p>
      <p class="begin-note-body">
        This is where the human role becomes most important. When AI handles the technical work, what remains is the cognitive work of framing: the headline, the annotation, what to show and what to leave out, who this is for. These decisions carry a lot of social responsibility in how data gets communicated. An example of this is the chart on languages of India, which can be very divisive.
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
            <div class="detail-eyebrow">
              <span class="detail-day">Day {String(day).padStart(2, '0')}</span>
              <span class="detail-sep">|</span>
              <span class="detail-theme">{week.theme}</span>
            </div>
            {#if info?.title}
              <h3 class="detail-title">{info.title}</h3>
            {/if}
          </header>

          <div class="detail-media detail-media-day-{day}">
            {#if media?.kind === 'image'}
              <img src={media.src} alt="Day {day} — {info?.title ?? ''}" loading="lazy" on:click={() => openLightbox(day)} />
            {:else if media?.kind === 'video'}
              <video src={media.src} controls muted loop playsinline preload="metadata"></video>
            {:else}
              <div class="detail-placeholder">Coming soon</div>
            {/if}
          </div>

          <div class="detail-notes detail-notes-after">
            {#each (info?.outro || 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.').split(/\n{2,}/) as para}
              <p>{@html para}</p>
            {/each}
          </div>

          {#if info?.source}
            <div class="detail-source"><span class="detail-source-label">Data source:</span> {info.source}</div>
          {/if}
        </article>
      {/each}
    {/each}
  </div>

  <!-- Closing section (after the 30 individual charts) -->
  <div class="closing-section">
    <p class="closing-body">
      So, thirty charts later, what did I learn?
    </p>
    <p class="closing-body">
      I was very happy to see some of the work getting featured in <a href="https://www.datawrapper.de/blog/data-vis-dispatch-april-14-2026-hungary-transportation-and-30daychartchallenge" target="_blank" rel="noopener" class="inline-link">Data Vis Dispatch's April 14 edition</a> and on <a href="https://www.linkedin.com/posts/flourishstudio_take-a-look-activity-7457428987229659136-qDG3?utm_source=share&utm_medium=member_desktop&rcm=ACoAABKahisB4LtaxpO2QgtmVgFvoE_cCH2ba08" target="_blank" rel="noopener" class="inline-link">Flourish</a>.
    </p>
    <div class="closing-image-row">
      <figure class="closing-figure">
        <img
          src="/images/data-vis-dispatch-01.png"
          alt="Data Vis Dispatch, April 14 edition — feature 1"
          on:click={() => openImageLightbox('/images/data-vis-dispatch-01.png', 'Data Vis Dispatch, April 14 edition — feature 1')}
          on:keydown={(e) => (e.key === 'Enter' || e.key === ' ') && openImageLightbox('/images/data-vis-dispatch-01.png', 'Data Vis Dispatch, April 14 edition — feature 1')}
          role="button"
          tabindex="0"
        />
      </figure>
      <figure class="closing-figure">
        <img
          src="/images/data-vis-dispatch-02.png"
          alt="Data Vis Dispatch, April 14 edition — feature 2"
          on:click={() => openImageLightbox('/images/data-vis-dispatch-02.png', 'Data Vis Dispatch, April 14 edition — feature 2')}
          on:keydown={(e) => (e.key === 'Enter' || e.key === ' ') && openImageLightbox('/images/data-vis-dispatch-02.png', 'Data Vis Dispatch, April 14 edition — feature 2')}
          role="button"
          tabindex="0"
        />
      </figure>
      <figure class="closing-figure">
        <img
          src="/images/flourish-chart-challenge.png"
          alt="Flourish feature"
          on:click={() => openImageLightbox('/images/flourish-chart-challenge.png', 'Flourish feature')}
          on:keydown={(e) => (e.key === 'Enter' || e.key === ' ') && openImageLightbox('/images/flourish-chart-challenge.png', 'Flourish feature')}
          role="button"
          tabindex="0"
        />
      </figure>
    </div>
  </div>

  <!-- Sheet embed -->
  <div class="sheet-section">
    <p class="workbook-intro">
      I also maintain an open workbook with all the data that you can access here:
    </p>
    <div class="sheet-wrap">
      <iframe
        src={SHEET_EMBED}
        class="sheet-iframe"
        title="30-day chart challenge log"
        frameborder="0"
        scrolling="no"
      ></iframe>
    </div>
  </div>

  <!-- Final sign-off (after the workbook) -->
  <div class="signoff-section">
    <p class="signoff-question">Will I do the challenge again?</p>
    <p class="signoff-answer">Hell, yeah! I love a good charty-party!</p>
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

{#if lightboxImage}
  <div class="lightbox" on:click={closeLightbox}>
    <img src={lightboxImage.src} alt={lightboxImage.alt} on:click|stopPropagation />
    <button class="lightbox-close" on:click={closeLightbox}>×</button>
  </div>
{/if}

<style>
  .challenge-section { width: 100%; }

  .challenge-header {
    margin-bottom: 1.2rem;
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
    font-family: "TT Jenevers", serif;
    letter-spacing: -0.01em;
  }

  .challenge-strap {
    font-size: 0.8rem;
    font-weight: 400;
    color: #333;
    line-height: 1.5;
    margin: 0 0 6px 0;
  }

  .challenge-byline {
    font-family: "DM Mono", monospace;
    font-size: 11px;
    color: #777;
    letter-spacing: 0.04em;
    margin-bottom: 24px;
  }

  .inline-link {
    color: #d0116f;
    text-decoration: underline;
    text-decoration-thickness: 1px;
    text-underline-offset: 2px;
  }
  .inline-link:hover { color: #8a0a4a; }

  .challenge-intro {
    font-size: 0.8rem;
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
    gap: 1.6rem;
  }

  .begin-title {
    font-family: "TT Jenevers", serif;
    font-size: 22px;
    font-weight: 700;
    color: #111;
    line-height: 1.25;
    margin: 0;
  }

  .begin-note {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .begin-note-title {
    font-family: "TT Jenevers", serif;
    font-size: 22px;
    font-weight: 700;
    color: #111;
    margin: 0;
    line-height: 1.25;
    display: flex;
    align-items: center;
    gap: 12px;
  }

  .begin-bullet {
    width: 20px;
    height: 20px;
    flex-shrink: 0;
    display: block;
  }

  .begin-note-body {
    font-size: 0.8rem;
    font-weight: 400;
    color: #111;
    line-height: 1.7;
    margin: 0;
    padding-left: 32px;
  }

  .begin-flow {
    font-family: "DM Mono", monospace;
    font-size: 12px;
    font-weight: 700;
    color: #1a6b3a;
    background: rgba(26,107,58,0.07);
    padding: 8px 14px;
    margin-left: 32px;
    letter-spacing: 0.02em;
    line-height: 1.6;
  }

  .begin-figure {
    margin: 0 auto;
    padding-left: 32px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    max-width: 100%;
  }

  .begin-figure img {
    width: 100%;
    max-width: 500px;
    height: auto;
    display: block;
    border: 1px solid rgba(26,107,58,0.12);
    cursor: zoom-in;
    transition: opacity 0.15s;
  }

  .begin-figure img:hover { opacity: 0.92; }

  .begin-figure figcaption {
    font-size: 12px;
    color: #555;
    font-style: italic;
    text-align: center;
    max-width: 500px;
    line-height: 1.5;
  }

  /* ── Filter + sort controls ── */
  .controls {
    display: flex;
    flex-wrap: wrap;
    gap: 18px 28px;
    margin-bottom: 1.4rem;
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
    font-family: "TT Jenevers", serif;
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
    font-family: "TT Jenevers", serif;
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

  /* Theme headers (sort-by-theme mode) capitalize the tag */
  .theme-header .week-theme {
    text-transform: capitalize;
    color: #1a6b3a;
  }

  /* Theme view: grid is laid out using explicit row/column placement so cells
     animate to/from their original week-view positions via animate:flip. */
  .chart-grid-themed {
    column-gap: 20px;
    row-gap: 12px;
  }

  .chart-grid-themed .theme-header {
    margin-top: 0;
    margin-bottom: 0;
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

  /* ── Closing section (after the 30 charts, before the sheet) ── */
  .closing-section {
    margin-top: 4rem;
    max-width: 900px;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    text-align: left;
  }

  .closing-body {
    font-size: 0.8rem;
    color: #111;
    line-height: 1.7;
    margin: 0;
  }

  .signoff-section {
    max-width: 900px;
    margin: 2.5rem auto 0;
    text-align: left;
    display: flex;
    flex-direction: column;
    gap: 6px;
  }

  .signoff-question {
    font-size: 18px;
    font-weight: 600;
    color: #111;
    margin: 0;
    line-height: 1.4;
  }

  .signoff-answer {
    font-size: 22px;
    font-weight: 700;
    color: #d0116f;
    font-family: "TT Jenevers", serif;
    margin: 0;
    line-height: 1.3;
  }

  .closing-image-row {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 12px;
    margin: 1rem 0;
  }

  @media (max-width: 600px) {
    .closing-image-row { grid-template-columns: 1fr; }
  }

  .closing-figure {
    margin: 0;
  }

  .closing-figure img {
    width: 100%;
    height: auto;
    display: block;
    border: 1px solid rgba(26,107,58,0.12);
    cursor: zoom-in;
    transition: opacity 0.15s;
  }

  .closing-figure img:hover { opacity: 0.92; }

  .workbook-intro {
    font-size: 0.8rem;
    color: #111;
    line-height: 1.7;
    margin: 0 0 1.5rem 0;
    text-align: left;
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

  .sheet-wrap {
    width: 100%;
    height: 480px;
    overflow: hidden;
    border: 1px solid rgba(26,107,58,0.15);
    background: #f9faf9;
  }

  .sheet-iframe {
    /* Zoom out the embedded sheet so more rows/columns fit; counter-scale the
       width so the iframe still fills the wrap visually. */
    width: 142.857%;   /* 100 / 0.7 */
    height: 685.714px; /* 480 / 0.7 */
    transform: scale(0.7);
    transform-origin: 0 0;
    border: 0;
    background: #f9faf9;
    display: block;
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
    align-items: stretch;
    text-align: left;
    gap: 14px;
    width: 100%;
    max-width: 640px;
  }

  .detail-header {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 6px;
  }

  .detail-eyebrow {
    display: flex;
    align-items: baseline;
    gap: 8px;
    font-family: "DM Mono", monospace;
    font-size: 10px;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: #1a6b3a;
    font-weight: 700;
  }

  .detail-day {
    color: inherit;
    font-weight: inherit;
  }

  .detail-sep {
    color: rgba(26,107,58,0.4);
    font-weight: 400;
  }

  .detail-theme {
    color: inherit;
    font-weight: inherit;
  }

  .detail-title {
    font-size: 24px;
    font-weight: 700;
    color: #111;
    margin: 0;
    font-family: "TT Jenevers", serif;
    line-height: 1.2;
    letter-spacing: -0.005em;
  }

  .detail-notes {
    font-size: 0.8rem;
    line-height: 1.7;
    color: #111;
    font-weight: 400;
    margin: 0 auto;
    max-width: 600px;
    text-align: justify;
    hyphens: auto;
  }

  .detail-notes p {
    margin: 0 0 0.7em 0;
  }

  .detail-notes p:last-child {
    margin-bottom: 0;
  }

  .detail-media {
    width: 100%;
    max-width: 600px;
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

  /* Per-day height tweaks */
  .detail-media-day-9 { max-width: 520px; }

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
