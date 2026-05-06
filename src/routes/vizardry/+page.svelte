<script>
  // Vizardry page
</script>

<svelte:head>
  <title>Surbhi Bhatia — Vizardry</title>
</svelte:head>

<section class="section">
  <div class="vz-grid">
    <a href="/vizardry/30-day-chart-challenge-2026" class="vz-card" target="_blank" rel="noopener noreferrer">
      <div class="vz-eyebrow">April 2026</div>
      <div class="vz-heading">Thirty charts in thirty days</div>
      <div class="vz-title">My experience doing the 30 day chart challenge</div>
      <div class="vz-hashtag">#30DayChartChallenge2026</div>
      <div class="vz-arrow">↗</div>
    </a>
  </div>
</section>

<style>
  .vz-grid {
    display: flex;
    flex-direction: column;
    gap: 16px;
    max-width: 560px;
  }

  .vz-card {
    display: block;
    text-decoration: none;
    color: inherit;
    border: 1px solid rgba(26,107,58,0.25);
    padding: 22px 26px 24px;
    background-color: #fff;
    background-image:
      linear-gradient(rgba(26,107,58,0.05) 1px, transparent 1px),
      linear-gradient(90deg, rgba(26,107,58,0.05) 1px, transparent 1px);
    background-size: 20px 20px;
    transition: border-color 0.2s, box-shadow 0.2s;
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .vz-card:hover {
    border-color: rgba(208,17,111,0.5);
    box-shadow: 0 4px 16px rgba(26,107,58,0.08);
  }

  .vz-eyebrow {
    font-family: "DM Mono", monospace;
    font-size: 12px;
    font-weight: 700;
    color: #d0116f;
    letter-spacing: 0.02em;
  }

  .vz-heading {
    font-size: 17px;
    font-weight: 700;
    color: #1a6b3a;
    line-height: 1.3;
  }

  .vz-title {
    font-family: "TT Jenevers", serif;
    font-size: 18px;
    font-weight: 500;
    color: #111;
    line-height: 1.35;
  }

  .vz-hashtag {
    font-family: "DM Mono", monospace;
    font-size: 11px;
    font-weight: 600;
    color: #1a6b3a;
    letter-spacing: 0.02em;
    margin-top: 2px;
  }

  .vz-arrow {
    position: absolute;
    top: 22px;
    right: 26px;
    font-size: 18px;
    color: rgba(26,107,58,0.4);
    transition: color 0.2s, transform 0.2s;
  }

  .vz-card:hover .vz-arrow {
    color: #d0116f;
    transform: translate(2px, -2px);
  }
</style>
