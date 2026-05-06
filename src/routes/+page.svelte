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
    <a class="card card-stories" href="/visual-stories" style="top:18px; left:14px; --rot:-2deg;">
      <img src="/flower.svg" class="pin" alt="" />
      <div class="card-tag">Visual stories</div>
      <div class="card-latest-img" style="background-image:url('/images/kontinentalist_bollywood.png')"></div>
      <div class="card-title">Bollywood Falls out of Love</div>
      <div class="card-detail">Kontinentalist, Jan 2026</div>
    </a>

    <!-- PLACES — top centre, slightly overlapping -->
    <a class="card card-places" href="/places" style="top:8px; left:222px; --rot:1.5deg;">
      <img src="/flower.svg" class="pin" alt="" />
      <div class="card-tag">Places</div>
      <div class="card-detail"><span class="live-pip"></span><span class="place-label">Currently:</span> Bangalore</div>
      <div class="previous-line"><span class="place-label-prev">Previous:</span> Delhi, Bombay,<br/>Auroville, New York</div>
      <div class="mini-map">
        <svg class="india-map" viewBox="42 18 42 28" xmlns="http://www.w3.org/2000/svg">
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
    <a class="card card-talks" href="/talks" style="top:24px; left:422px; --rot:-1deg;">
      <img src="/flower.svg" class="pin" alt="" />
      <div class="card-tag">Talks</div>
      <div class="card-detail upcoming-label">Upcoming</div>
      <div class="card-title">Designing to minimise the need for shadow systems</div>
      <div class="card-detail">The Other Interface, Gitlab</div>
      <div class="card-detail">Bangalore, May 2026</div>
    </a>

    <!-- READ.ME — bottom left, overlapping talks -->
    <a class="card card-readme" href="/read-me" style="top:200px; left:100px; --rot:1.2deg;">
      <img src="/flower.svg" class="pin" alt="" />
      <div class="card-tag">read.me</div>
      <div class="card-desc">About my journey as a data journalist and data viz-ard, searching for insights and turning numbers into memorable visual stories.</div>
    </a>

    <!-- GARDEN — bottom centre -->
    <a class="card card-garden" href="/garden" style="top:200px; left:312px; --rot:-1.8deg;">
      <img src="/flower.svg" class="pin" alt="" />
      <div class="card-tag">Garden</div>
      <div class="card-desc">A growing archive of my work, gathered across years, publications, and fellow-makers.</div>
    </a>

    <!-- VIZARDRY — bottom right -->
    <a class="card card-vizardry" href="/vizardry/30-day-chart-challenge-2026" style="top:190px; left:495px; --rot:2.5deg;">
      <img src="/flower.svg" class="pin" alt="" />
      <div class="card-tag">Vizardry</div>
      <div class="card-title">30 Day Chart Challenge 2026</div>
      <div class="card-feature" style="background-image:url('/images/30daychartchallenge-2026/day24-south-china-morning-post.png')"></div>
      <div class="card-detail card-detail-right">April 2026</div>
    </a>

    <!-- FOOTER TOGGLE — bottom right corner tab -->
    <button class="footer-btn" class:open={$footerExpanded} on:click={() => footerExpanded.update(v => !v)}>
      <img src="/flower.svg" class="footer-btn-flower" alt="" />
      <span class="footer-btn-label">foot(er)-note</span>
      <span class="footer-btn-arrow">{$footerExpanded ? '↓' : '↑'}</span>
    </button>

  </div>

  <!-- ELSEWHERE — under board, bottom-left -->
  <div class="home-elsewhere">
    <div class="elsewhere-icons">
      <a href="https://www.linkedin.com/in/surbhi-bhatia" target="_blank" rel="noopener" aria-label="LinkedIn" class="elsewhere-icon">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z"/>
        </svg>
      </a>
      <a href="https://x.com/surbhaai" target="_blank" rel="noopener" aria-label="X" class="elsewhere-icon">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.66l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25h6.83l4.713 6.231 5.447-6.231zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z"/>
        </svg>
      </a>
      <a href="https://bsky.app/profile/surbhaai.bsky.social" target="_blank" rel="noopener" aria-label="Bluesky" class="elsewhere-icon">
        <svg width="14" height="14" viewBox="0 0 600 530" fill="currentColor" aria-hidden="true">
          <path d="M135.72 44.03C202.216 93.951 273.74 195.17 300 249.49c26.262-54.316 97.782-155.54 164.28-205.46C512.26 8.009 590 -19.862 590 68.825c0 17.712-10.155 148.79-16.111 170.07-20.703 73.984-96.16 92.854-163.28 81.433 117.3 19.964 147.14 86.092 82.697 152.22-122.39 125.59-175.91-31.511-189.63-71.766-2.514-7.38-3.69-10.832-3.708-7.896-.017-2.936-1.193.516-3.707 7.896-13.714 40.255-67.233 197.36-189.63 71.766-64.444-66.128-34.605-132.26 82.697-152.22-67.124 11.421-142.58-7.45-163.28-81.433C20.106 217.616 9.952 86.537 9.952 68.825c0-88.687 77.742-60.816 125.72-24.795z"/>
        </svg>
      </a>
      <a href="https://github.com/surbhi-bh" target="_blank" rel="noopener" aria-label="GitHub" class="elsewhere-icon">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.55 0-.27-.01-.99-.02-1.94-3.2.69-3.87-1.54-3.87-1.54-.52-1.32-1.27-1.67-1.27-1.67-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.76 2.69 1.25 3.35.96.1-.74.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.46.11-3.05 0 0 .96-.31 3.15 1.18a10.95 10.95 0 0 1 5.74 0c2.19-1.49 3.15-1.18 3.15-1.18.62 1.59.23 2.76.11 3.05.74.81 1.18 1.84 1.18 3.1 0 4.42-2.69 5.4-5.25 5.68.41.36.78 1.06.78 2.14 0 1.55-.01 2.79-.01 3.17 0 .31.21.67.8.55C20.21 21.39 23.5 17.08 23.5 12 23.5 5.65 18.35.5 12 .5z"/>
        </svg>
      </a>
      <a href="mailto:surbhibhatia1906@gmail.com" aria-label="Email" class="elsewhere-icon">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <rect x="2" y="4" width="20" height="16" rx="2"/>
          <path d="M2 7l10 7 10-7"/>
        </svg>
      </a>
    </div>
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
    z-index: 15;
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
  .card-talks   { border-color: rgba(26,107,58,0.2);   z-index: 4; }
  .card-readme  { border-color: rgba(208,17,111,0.18); z-index: 4; }
  .card-garden  { border-color: rgba(26,107,58,0.18);  z-index: 3; }
  .card-vizardry { border-color: rgba(26,107,58,0.22); z-index: 5; }

  /* ── Tag (heading) ── */
  .card-tag {
    font-size: 14px;
    font-weight: 700;
    color: #1a6b3a;
    padding-top: 2px;
    margin-bottom: 4px;
  }

  .card-stories .card-tag,
  .card-readme  .card-tag { color: #d0116f; }

  .card-desc {
    font-family: "TT Jenevers", serif;
    font-size: 13px;
    font-weight: 400;
    color: #444;
    line-height: 1.5;
  }

  .upcoming-label {
    font-family: "DM Mono", monospace;
    font-size: 8.5px;
    font-weight: 600;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: #d0116f;
  }

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

  .card-vizardry .card-title {
    font-size: 11px;
    white-space: nowrap;
    overflow: visible;
    letter-spacing: -0.005em;
  }

  /* ── Details ── */
  .card-detail {
    font-family: "DM Mono", monospace;
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 0.02em;
    color: #444;
    line-height: 1.5;
    display: flex;
    align-items: center;
    gap: 5px;
  }

  .card-detail.muted { color: #888; font-weight: 500; }
  .card-detail-right { justify-content: flex-end; margin-top: auto; }
  .coming { font-style: italic; }

  .place-label {
    color: #d0116f;
    font-weight: 700;
  }

  .place-label-prev {
    color: #1a6b3a;
    font-weight: 700;
  }

  .previous-line {
    font-family: "DM Mono", monospace;
    color: #1a6b3a;
    font-weight: 600;
    font-size: 9.5px;
    letter-spacing: 0.01em;
    line-height: 1.5;
  }

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
    padding: 6px 12px 7px;
    font-size: 13px;
    font-weight: 700;
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

  /* ── Home elsewhere ── */
  .home-elsewhere {
    margin-top: 8px;
    display: flex;
    align-items: flex-start;
  }

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
