<script>
  const weeks = [
    { label: 'Week 1', days: [1,2,3,4,5,6,7] },
    { label: 'Week 2', days: [8,9,10,11,12,13,14] },
    { label: 'Week 3', days: [15,16,17,18,19,20,21] },
    { label: 'Week 4', days: [22,23,24,25,26,27,28,29,30] },
  ];

  const GITHUB_BASE = '/images/30daychartchallenge-2026';

  const dayImages = {
    1: `${GITHUB_BASE}/day1.png`,
  };

  // Per-day text — fill in as you go
  const dayText = {
    1: { title: 'What goes into the sambar', subtitle: 'Part-to-whole · South Indian recipes across 5 states' },
  };

  const SHEET_EMBED = 'https://docs.google.com/spreadsheets/d/1gIfy29NpunmZFod69Y3bSmU_Wf3rKz3KDAQa6k-KwWM/pubhtml?widget=true&headers=false';

  let lightboxDay = null;
  function openLightbox(day) {
    if (dayImages[day]) lightboxDay = day;
  }
  function closeLightbox() { lightboxDay = null; }
</script>

<svelte:head>
  <title>30-Day Chart Challenge 2026 — Surbhi Bhatia</title>
</svelte:head>

<section class="section challenge-section">

  <div class="challenge-header">
    <a href="/vizardry" class="back-link">← vizardry</a>
    <div class="tag-line">
      <span class="challenge-tag">30-day-chart-challenge 2026</span>
    </div>
    <h1 class="challenge-title">A chart a day keeps the fog away</h1>
    <div class="challenge-byline">Surbhi Bhatia</div>
    <p class="challenge-intro">
      My experience doing the 30-day chart challenge — one chart every day in April, exploring a different prompt, dataset, or technique each time.
    </p>
  </div>

  <!-- Week pairs: row 1 = week 1+2, row 2 = week 3+4 -->
  <div class="weeks-outer">
    {#each [[0,1],[2,3]] as pair}
      <div class="weeks-row">
        {#each pair as wi}
          {@const week = weeks[wi]}
          <div class="week-col">
            <div class="week-label">{week.label}</div>
            {#each week.days as day}
              <div
                class="tile"
                class:has-image={!!dayImages[day]}
                on:click={() => openLightbox(day)}
              >
                <div class="tile-img">
                  {#if dayImages[day]}
                    <img src={dayImages[day]} alt="Day {day}" />
                  {:else}
                    <div class="tile-placeholder"></div>
                  {/if}
                </div>
                <div class="tile-text">
                  <div class="tile-day">Day {day}</div>
                  {#if dayText[day]}
                    <div class="tile-title">{dayText[day].title}</div>
                    <div class="tile-sub">{dayText[day].subtitle}</div>
                  {/if}
                </div>
              </div>
            {/each}
          </div>
        {/each}
      </div>
    {/each}
  </div>

  <!-- Sheet embed -->
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
  <div class="lightbox" on:click={closeLightbox}>
    <img src={dayImages[lightboxDay]} alt="Day {lightboxDay}" on:click|stopPropagation />
    <button class="lightbox-close" on:click={closeLightbox}>×</button>
    <div class="lightbox-label">Day {lightboxDay}</div>
  </div>
{/if}

<style>
  .challenge-section { width: 100%; }

  .challenge-header {
    margin-bottom: 2rem;
    max-width: 600px;
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
    font-size: 7px;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: rgba(26,107,58,0.6);
    border: 1px solid rgba(26,107,58,0.2);
    padding: 2px 7px;
  }

  .challenge-title {
    font-size: 28px;
    font-weight: 700;
    color: #111;
    line-height: 1.2;
    margin-bottom: 6px;
    font-family: "Inter", sans-serif;
  }

  .challenge-byline {
    font-family: "DM Mono", monospace;
    font-size: 10px;
    color: #aaa;
    letter-spacing: 0.08em;
    margin-bottom: 16px;
  }

  .challenge-intro {
    font-size: 14px;
    font-weight: 300;
    color: #555;
    line-height: 1.7;
  }

  /* ── Two rows of two weeks ── */
  .weeks-outer {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  .weeks-row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
  }

  .week-col {
    display: flex;
    flex-direction: column;
    gap: 0;
  }

  .week-label {
    font-family: "DM Mono", monospace;
    font-size: 9px;
    font-weight: 700;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: rgba(26,107,58,0.5);
    margin-bottom: 10px;
    padding-bottom: 6px;
    border-bottom: 1px solid rgba(26,107,58,0.1);
  }

  /* ── Tile: image left, text right ── */
  .tile {
    display: flex;
    align-items: flex-start;
    gap: 12px;
    padding: 10px 0;
    border-bottom: 1px solid rgba(26,107,58,0.06);
    cursor: default;
    transition: background 0.15s;
  }

  .tile:last-child { border-bottom: none; }

  .tile.has-image { cursor: pointer; }

  .tile.has-image:hover {
    background: rgba(26,107,58,0.02);
  }

  .tile.has-image:hover .tile-img {
    border-color: rgba(26,107,58,0.4);
  }

  .tile-img {
    width: 80px;
    height: 54px;
    flex-shrink: 0;
    border: 1px solid rgba(26,107,58,0.15);
    overflow: hidden;
    background: #f7f9f7;
    transition: border-color 0.2s;
  }

  .tile-img img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  .tile-placeholder {
    width: 100%;
    height: 100%;
    background-image:
      linear-gradient(rgba(26,107,58,0.06) 1px, transparent 1px),
      linear-gradient(90deg, rgba(26,107,58,0.06) 1px, transparent 1px);
    background-size: 12px 12px;
  }

  .tile-text {
    display: flex;
    flex-direction: column;
    gap: 3px;
    padding-top: 2px;
  }

  .tile-day {
    font-family: "DM Mono", monospace;
    font-size: 8px;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: #1a6b3a;
  }

  .tile-title {
    font-size: 12px;
    font-weight: 600;
    color: #111;
    line-height: 1.3;
  }

  .tile-sub {
    font-family: "DM Mono", monospace;
    font-size: 8px;
    color: #666;
    letter-spacing: 0.04em;
  }

  /* ── Sheet embed ── */
  .sheet-section {
    margin-top: 2.5rem;
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
    height: 640px;
    border: 1px solid rgba(26,107,58,0.15);
    background: #f9faf9;
  }

  /* ── Lightbox ── */
  .lightbox {
    position: fixed;
    inset: 0;
    background: rgba(0,0,0,0.85);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
    cursor: pointer;
  }

  .lightbox img {
    max-width: 90vw;
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
    font-size: 10px;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: rgba(255,255,255,0.5);
  }
</style>
