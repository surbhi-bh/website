<script>
  import { footerExpanded } from '$lib/gardenStore.js';
  footerExpanded.set(false);
</script>

<svelte:head>
  <title>Surbhi Bhatia</title>
</svelte:head>

<section class="section" id="home">

  <div class="headline">
    I am Surbhi, a <span style="color: #d0116f;">data journalist</span> and <span style="color: #d0116f;">data visualisation trainer</span>.
  </div>

  <div class="board">

    <!-- VISUAL STORIES — top left -->
    <a class="card card-stories" href="/visual-stories" style="top:18px; left:0px; --rot:-2deg;">
      <img src="/flower.svg" class="pin" alt="" />
      <div class="card-tag">visual stories</div>
      <div class="card-divider"></div>
      <div class="card-latest-img" style="background-image:url('/images/kontinentalist_bollywood.png')"></div>
      <div class="card-title">Bollywood Falls out of Love</div>
      <div class="card-divider dashed"></div>
      <div class="card-detail">Kontinentalist · Jan 2026</div>
      <div class="card-detail muted">15 stories · award-winning</div>
    </a>

    <!-- PLACES — top centre, slightly overlapping -->
    <a class="card card-places" href="/places" style="top:8px; left:210px; --rot:1.5deg;">
      <img src="/flower.svg" class="pin" alt="" />
      <div class="card-tag">places</div>
      <div class="card-divider"></div>
      <div class="card-detail"><span class="live-pip"></span>currently: Bangalore</div>
      <div class="card-detail muted">Delhi · Bombay · Auroville · New York</div>
      <div class="card-divider dashed"></div>
      <div class="mini-map">
        <svg class="india-map" viewBox="42 28 42 40" xmlns="http://www.w3.org/2000/svg">
          <image href="/world-map.svg" x="0" y="0" width="100" height="50"
            style="filter: saturate(0) brightness(1.2) opacity(0.18)"/>
          <circle cx="61.43" cy="22.22" r="0.9" fill="#1a6b3a"/>
          <circle cx="58.04" cy="31.51" r="0.9" fill="#1a6b3a"/>
          <circle cx="63.57" cy="39.01" r="0.9" fill="#1a6b3a"/>
          <circle cx="61.43" cy="36.51" r="1.1" fill="#d0116f"/>
          <circle cx="61.43" cy="36.51" r="2.4" fill="none" stroke="#d0116f" stroke-width="0.5" opacity="0.5">
            <animate attributeName="r" values="1.5;4;1.5" dur="2.5s" repeatCount="indefinite"/>
            <animate attributeName="opacity" values="0.6;0;0.6" dur="2.5s" repeatCount="indefinite"/>
          </circle>
        </svg>
      </div>
    </a>

    <!-- TALKS — top right -->
    <a class="card card-talks" href="/talks" style="top:24px; left:410px; --rot:-1deg;">
      <img src="/flower.svg" class="pin" alt="" />
      <div class="card-tag">talks · trainings · panels</div>
      <div class="card-divider"></div>
      <div class="card-title">Speaking, teaching & in conversation</div>
      <div class="card-divider dashed"></div>
      <div class="card-detail">10 events</div>
      <div class="card-detail muted">CGIAR · Columbia · IIIT Bengaluru</div>
    </a>

    <!-- READ.ME — bottom left, overlapping talks -->
    <a class="card card-readme" href="/read-me" style="top:200px; left:100px; --rot:1.2deg;">
      <img src="/flower.svg" class="pin" alt="" />
      <div class="card-tag">read.me</div>
      <div class="card-divider"></div>
      <div class="card-title">Numbers into stories. Data into meaning. Curiosity into craft.</div>
      <div class="card-divider dashed"></div>
      <div class="card-detail">economics → newsroom → Columbia → freelance</div>
      <div class="card-detail muted">~80 · ~270 · ~370 words</div>
    </a>

    <!-- GARDEN — bottom centre -->
    <a class="card card-garden" href="/garden" style="top:215px; left:330px; --rot:-1.8deg;">
      <img src="/flower.svg" class="pin" alt="" />
      <div class="card-tag">garden</div>
      <div class="card-divider"></div>
      <div class="card-title">Notes, curiosities & things half-thought</div>
      <div class="card-divider dashed"></div>
      <div class="card-detail muted">data · design · cities · culture</div>
    </a>

    <!-- VIZARDRY — bottom right -->
    <a class="card card-vizardry" href="/vizardry/30-day-chart-challenge-2026" style="top:190px; left:495px; --rot:2.5deg;">
      <img src="/flower.svg" class="pin" alt="" />
      <div class="card-tag">vizardry</div>
      <div class="card-divider"></div>
      <div class="card-feature" style="background-image:url('/images/30daychartchallenge-2026/day24-south-china-morning-post.png')"></div>
      <div class="card-title">30-day-chart-challenge</div>
      <div class="card-divider dashed"></div>
      <div class="card-detail">30 charts · April 2026</div>
    </a>

    <!-- FOOTER TOGGLE — bottom right corner tab -->
    <button class="footer-btn" class:open={$footerExpanded} on:click={() => footerExpanded.update(v => !v)}>
      <img src="/flower.svg" class="footer-btn-flower" alt="" />
      <span class="footer-btn-label">foot(er)-note</span>
      <span class="footer-btn-arrow">{$footerExpanded ? '↓' : '↑'}</span>
    </button>

  </div>

</section>

<style>
  /* ── Board: footer-style green grid, fixed height ── */
  .board {
    margin-top: 1.5rem;
    position: relative;
    height: calc(100vh - 110px - 52px - 3rem - 80px);
    min-height: 380px;
    max-height: 460px;
    background-color: #fff;
    background-image:
      linear-gradient(rgba(26,107,58,0.07) 1px, transparent 1px),
      linear-gradient(90deg, rgba(26,107,58,0.07) 1px, transparent 1px);
    background-size: 10px 10px;
    border: 1px solid rgba(26,107,58,0.12);
    overflow-x: clip;
    overflow-y: visible;
    padding-top: 14px;
  }

  /* ── Card base ── */
  .card {
    position: absolute;
    width: 195px;
    background: #fff;
    border: 1px solid rgba(26,107,58,0.18);
    padding: 14px 14px 12px;
    display: flex;
    flex-direction: column;
    gap: 6px;
    text-decoration: none;
    color: inherit;
    box-shadow: 2px 4px 12px rgba(0,0,0,0.08), 0 1px 3px rgba(0,0,0,0.04);
    transform: rotate(var(--rot, 0deg));
    transition: transform 0.2s ease, box-shadow 0.2s ease, z-index 0s;
  }

  a.card:hover {
    transform: rotate(0deg) translateY(-4px);
    box-shadow: 4px 8px 24px rgba(0,0,0,0.14);
    z-index: 10;
  }

  /* ── Pin ── */
  .pin {
    position: absolute;
    top: -12px;
    left: 50%;
    transform: translateX(-50%);
    width: 22px;
    height: 22px;
    z-index: 2;
    filter: drop-shadow(0 1px 2px rgba(0,0,0,0.15));
    transition: transform 0.2s ease;
  }

  a.card:hover .pin {
    transform: translateX(-50%) scale(1.2) rotate(15deg);
  }

  .pin-dim { opacity: 0.25; }

  /* ── Accent colours ── */
  .card-stories { border-color: rgba(208,17,111,0.22); z-index: 2; }
  .card-places  { border-color: rgba(26,107,58,0.22);  z-index: 3; }
  .card-talks   { border-color: rgba(26,107,58,0.2);   z-index: 2; }
  .card-readme  { border-color: rgba(208,17,111,0.18); z-index: 4; }
  .card-garden  { border-color: rgba(26,107,58,0.18);  z-index: 3; }
  .card-vizardry { border-color: rgba(26,107,58,0.22); z-index: 5; }

  /* ── Tag ── */
  .card-tag {
    font-family: "TT Jenevers", serif;
    font-size: 12px;
    font-weight: 400;
    font-style: italic;
    letter-spacing: 0.01em;
    color: #1a6b3a;
    padding-top: 4px;
  }

  .card-stories .card-tag,
  .card-readme  .card-tag { color: #d0116f; }

  /* ── Dividers ── */
  .card-divider {
    height: 1px;
    background: rgba(26,107,58,0.12);
    flex-shrink: 0;
  }
  .card-divider.dashed {
    background: none;
    border-top: 1px dashed rgba(26,107,58,0.15);
  }
  .card-stories .card-divider,
  .card-stories .card-divider.dashed,
  .card-readme  .card-divider,
  .card-readme  .card-divider.dashed {
    background: rgba(208,17,111,0.1);
    border-top-color: rgba(208,17,111,0.12);
  }

  /* ── Story image ── */
  .card-latest-img {
    width: 100%;
    height: 65px;
    background-size: cover;
    background-position: center;
    filter: grayscale(10%);
    flex-shrink: 0;
  }

  /* ── Title ── */
  .card-title {
    font-family: "TT Jenevers", serif;
    font-size: 15px;
    font-weight: 500;
    line-height: 1.35;
    color: #111;
  }

  /* ── Details ── */
  .card-detail {
    font-family: "DM Mono", monospace;
    font-size: 8.5px;
    letter-spacing: 0.04em;
    color: #555;
    line-height: 1.5;
    display: flex;
    align-items: center;
    gap: 5px;
  }

  .card-detail.muted { color: #bbb; }
  .coming { font-style: italic; }

  /* ── Live pip ── */
  .live-pip {
    display: inline-block;
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background: #d0116f;
    flex-shrink: 0;
    animation: pulse 2s infinite;
  }

  @keyframes pulse {
    0%, 100% { opacity: 1; transform: scale(1); }
    50%       { opacity: 0.4; transform: scale(1.6); }
  }

  /* ── India mini map ── */
  .mini-map {
    width: 100%;
    flex-shrink: 0;
    border: 1px solid rgba(208,17,111,0.28);
    overflow: hidden;
    margin-top: 2px;
  }

  .india-map {
    width: 100%;
    height: auto;
    display: block;
  }

  /* ── Footer toggle button ── */
  .footer-btn {
    position: absolute;
    bottom: -1px;
    right: 20px;
    background: #fff;
    border: 1px solid rgba(26,107,58,0.18);
    border-bottom: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 6px;
    padding: 5px 12px 6px;
    font-family: "DM Mono", monospace;
    font-size: 9px;
    font-weight: 600;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: #1a6b3a;
    transition: background 0.15s, color 0.15s;
    z-index: 20;
  }

  .footer-btn:hover {
    background: rgba(26,107,58,0.04);
  }

  .footer-btn.open {
    background: rgba(26,107,58,0.06);
    border-color: rgba(26,107,58,0.28);
  }

  .footer-btn-flower {
    width: 12px;
    height: 12px;
    transition: transform 0.35s ease;
    opacity: 0.7;
  }

  .footer-btn:hover .footer-btn-flower,
  .footer-btn.open .footer-btn-flower {
    transform: rotate(30deg);
    opacity: 1;
  }

  .footer-btn-label {
    line-height: 1;
  }

  .footer-btn-arrow {
    font-size: 10px;
    opacity: 0.5;
    line-height: 1;
  }

  /* ── Corner flower accents ── */
  .card::after {
    content: '';
    position: absolute;
    background-image: url('/flower.svg');
    background-size: contain;
    background-repeat: no-repeat;
    opacity: 0.1;
    pointer-events: none;
    width: 12px;
    height: 12px;
    bottom: 8px;
    right: 8px;
  }
  .card-stories::after { transform: rotate(-20deg); opacity: 0.13; }
  .card-places::after  { transform: rotate(30deg); }
  .card-talks::after   { transform: rotate(-10deg); }
  .card-readme::after  { transform: rotate(25deg); opacity: 0.13; }
  .card-garden::after  { transform: rotate(-15deg); }
  .card-vizardry::after { transform: rotate(20deg); }

  /* ── Vizardry feature image (single chart) ── */
  .card-feature {
    width: 100%;
    aspect-ratio: 3 / 2;
    background-size: cover;
    background-position: center;
    background-color: #f7f9f7;
    flex-shrink: 0;
    filter: grayscale(8%);
  }
</style>
