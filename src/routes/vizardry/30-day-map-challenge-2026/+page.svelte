<script>
  // Auto-discovered from static/images/30daymapchallenge-2026/
  // Drop a file named dayN-anything.{png,jpg,jpeg,webp,gif,svg,mp4,webm,mov} and it shows up.
  export let data;
  $: dayMedia = data.dayMedia;

  const days = Array.from({ length: 30 }, (_, i) => i + 1);

  // Per-day text — fill in as you go.
  const dayInfo = {};

  let lightboxDay = null;
  function openLightbox(day) {
    if (dayMedia[day]) lightboxDay = day;
  }
  function closeLightbox() { lightboxDay = null; }

  function handleKey(e) {
    if (e.key === 'Escape') closeLightbox();
  }
</script>

<svelte:head>
  <title>Thirty maps in thirty days — Surbhi Bhatia</title>
</svelte:head>

<svelte:window on:keydown={handleKey} />

<section class="section challenge-section">

  <div class="challenge-header">
    <div class="tag-line">
      <span class="challenge-tag">#30DayMapChallenge2026</span>
    </div>
    <h1 class="challenge-title">Thirty maps in thirty days</h1>
    <div class="challenge-byline">Surbhi Bhatia</div>
    <p class="challenge-intro">
      My experience doing the 30-day map challenge — one map every day in November, exploring a different prompt, region, or technique each time.
    </p>
  </div>

  <div class="chart-grid">
    {#each days as day}
      {@const media = dayMedia[day]}
      <div
        class="chart-cell"
        class:has-image={!!media}
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

  <p class="coming-note">Coming November 2026 — drop chart files into <code>static/images/30daymapchallenge-2026/</code> to populate this page.</p>

</section>

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
    margin-bottom: 2rem;
    max-width: 600px;
  }

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

  .chart-grid {
    display: grid;
    grid-template-columns: repeat(6, 140px);
    gap: 12px;
    justify-content: start;
  }

  .chart-cell {
    display: flex;
    flex-direction: column;
    gap: 8px;
    cursor: default;
  }
  .chart-cell.has-image { cursor: pointer; }

  .chart-thumb {
    width: 100%;
    aspect-ratio: 1 / 1;
    border: 1px solid rgba(26,107,58,0.15);
    overflow: hidden;
    background: #f7f9f7;
    transition: border-color 0.2s, transform 0.2s;
  }

  .chart-cell.has-image:hover .chart-thumb {
    border-color: rgba(26,107,58,0.5);
    transform: translateY(-2px);
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

  .coming-note {
    margin-top: 2rem;
    font-size: 12px;
    color: #888;
    font-style: italic;
    font-family: "DM Mono", monospace;
  }

  .coming-note code {
    background: rgba(26,107,58,0.08);
    padding: 2px 5px;
    color: #1a6b3a;
  }

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
