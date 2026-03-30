<script>
  // Vizardry page
</script>

<svelte:head>
  <title>Surbhi Bhatia — Vizardry</title>
</svelte:head>

<section class="section">
  <div class="section-header">
    <span class="section-title">Vizardry</span>
  </div>

  <p class="text-body" style="margin-bottom: 2rem; margin-top: 0.25rem;">
    Experiments, explorations, and tools in data visualisation. Where the technical meets the aesthetic.
  </p>

  <div class="vz-grid">
    <a href="/vizardry/30-day-chart-challenge-2026" class="vz-card">
      <div class="vz-card-inner">
        <div class="vz-meta">
          <span class="vz-tag">30-day-chart-challenge 2026</span>
        </div>
        <div class="vz-title">A chart a day keeps the fog away</div>
        <div class="vz-sub">My experience doing the 30-day chart challenge</div>
        <div class="vz-arrow">↗</div>
      </div>
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
    border: 1px solid rgba(26,107,58,0.2);
    padding: 20px 24px;
    background-color: #fff;
    background-image:
      linear-gradient(rgba(26,107,58,0.04) 1px, transparent 1px),
      linear-gradient(90deg, rgba(26,107,58,0.04) 1px, transparent 1px);
    background-size: 20px 20px;
    transition: border-color 0.2s, box-shadow 0.2s;
    position: relative;
  }

  .vz-card:hover {
    border-color: rgba(26,107,58,0.45);
    box-shadow: 0 4px 16px rgba(26,107,58,0.08);
  }

  .vz-card-inner {
    display: flex;
    flex-direction: column;
    gap: 6px;
  }

  .vz-meta {
    display: flex;
    gap: 6px;
    margin-bottom: 2px;
  }

  .vz-tag {
    font-family: "DM Mono", monospace;
    font-size: 7px;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: rgba(26,107,58,0.6);
    border: 1px solid rgba(26,107,58,0.2);
    padding: 1px 6px;
  }

  .vz-title {
    font-size: 16px;
    font-weight: 700;
    color: #111;
    line-height: 1.3;
  }

  .vz-sub {
    font-family: "DM Mono", monospace;
    font-size: 10px;
    color: #999;
    letter-spacing: 0.04em;
  }

  .vz-arrow {
    position: absolute;
    top: 20px;
    right: 24px;
    font-size: 16px;
    color: rgba(26,107,58,0.3);
    transition: color 0.2s;
  }

  .vz-card:hover .vz-arrow {
    color: #1a6b3a;
  }
</style>
