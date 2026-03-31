<script>
  import { onMount } from 'svelte';

  const HW_GLYPHS = {
    a:{g:'𓄿',n:'Egyptian vulture'}, b:{g:'𓃀',n:'human leg'}, c:{g:'𓎡',n:'basket'},
    d:{g:'𓂧',n:'hand'}, e:{g:'𓇋',n:'reed'}, f:{g:'𓆑',n:'horned viper'},
    g:{g:'𓂿',n:'pot stand'}, h:{g:'𓉔',n:'shelter'}, i:{g:'𓇋',n:'reed'},
    j:{g:'𓆓',n:'cobra'}, k:{g:'𓎡',n:'basket'}, l:{g:'𓃭',n:'lion'},
    m:{g:'𓅓',n:'owl'}, n:{g:'𓈖',n:'water'}, o:{g:'𓂝',n:'forearm'},
    p:{g:'𓉐',n:'mat'}, q:{g:'𓃻',n:'hill slope'}, r:{g:'𓂋',n:'mouth'},
    s:{g:'𓋴',n:'folded cloth'}, t:{g:'𓏏',n:'bread loaf'}, u:{g:'𓅱',n:'quail chick'},
    v:{g:'𓆑',n:'horned viper'}, w:{g:'𓅱',n:'quail chick'}, x:{g:'𓎡',n:'basket'},
    y:{g:'𓇌',n:'two reeds'}, z:{g:'𓊃',n:'door bolt'}
  };

  const R='#d0116f', Y='#1a6b3a', B='#1a6b3a', W='#ffffff', K='#1a1a1a';

  let hwLetters = [];
  let outputVisible = false;
  let svgContent = '';
  let cards = [];
  let dlFlash = [false, false];

  function hwSVGContent(size) {
    const glyphs = hwLetters.map(l => HW_GLYPHS[l] ? HW_GLYPHS[l].g : '?').join('');
    const rx = Math.round(size * 0.1875);
    const topH = Math.round(size * 0.8125);
    const botH = size - topH;
    const pad = size * 0.1;
    const maxW = size - pad * 2;
    const fs = Math.round(size * 0.44);
    const ty = Math.round(topH * 0.62 + fs * 0.35);
    const h = size / 2;
    const tl = Math.round(maxW);
    return `<defs>
      <clipPath id="hwCA${size}"><rect width="${size}" height="${size}" rx="${rx}"/></clipPath>
      <clipPath id="hwCR${size}"><rect x="${h}" y="0" width="${h}" height="${size}"/></clipPath>
    </defs>
    <rect width="${size}" height="${size}" rx="${rx}" fill="${W}"/>
    <rect x="${h}" y="0" width="${h}" height="${topH}" fill="${R}" clip-path="url(#hwCA${size})"/>
    <rect x="0" y="${topH}" width="${h}" height="${botH}" fill="${B}" clip-path="url(#hwCA${size})"/>
    <rect x="${h}" y="${topH}" width="${h}" height="${botH}" fill="${Y}" clip-path="url(#hwCA${size})"/>
    <text x="${h}" y="${ty}" font-family="Georgia,serif" font-size="${fs}" text-anchor="middle" textLength="${tl}" lengthAdjust="spacingAndGlyphs" fill="${K}" clip-path="url(#hwCA${size})">${glyphs}</text>
    <text x="${h}" y="${ty}" font-family="Georgia,serif" font-size="${fs}" text-anchor="middle" textLength="${tl}" lengthAdjust="spacingAndGlyphs" fill="${W}" clip-path="url(#hwCR${size})">${glyphs}</text>`;
  }

  function hwMakeSVGStr(size) {
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${size} ${size}" width="${size}" height="${size}">${hwSVGContent(size)}</svg>`;
  }

  let inputValue = 'SB';

  function hwGenerate() {
    const val = inputValue.replace(/[^a-zA-Z]/g,'').toLowerCase().slice(0,2);
    if (!val.length) return;
    hwLetters = val.split('');
    svgContent = hwSVGContent(128);
    cards = hwLetters.map(l => ({ l, info: HW_GLYPHS[l] }));
    outputVisible = true;
  }

  function hwDownloadSVG() {
    const blob = new Blob([hwMakeSVGStr(128)], {type:'image/svg+xml'});
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = `favicon-${hwLetters.join('').toUpperCase()}.svg`;
    a.click();
    dlFlash = [true, false];
    setTimeout(() => { dlFlash = [false, false]; }, 2000);
  }

  function hwDownloadPNG() {
    const size = 512;
    const svg = hwMakeSVGStr(size);
    const img = new Image();
    const url = URL.createObjectURL(new Blob([svg], {type:'image/svg+xml'}));
    img.onload = () => {
      const c = document.createElement('canvas');
      c.width = c.height = size;
      c.getContext('2d').drawImage(img, 0, 0);
      URL.revokeObjectURL(url);
      c.toBlob(b => {
        const a = document.createElement('a');
        a.href = URL.createObjectURL(b);
        a.download = `favicon-${hwLetters.join('').toUpperCase()}.png`;
        a.click();
      }, 'image/png');
    };
    img.src = url;
    dlFlash = [false, true];
    setTimeout(() => { dlFlash = [false, false]; }, 2000);
  }

  onMount(() => {
    hwGenerate();
  });
</script>

<svelte:head>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link href="https://fonts.googleapis.com/css2?family=Slabo+27px&display=swap" rel="stylesheet">
</svelte:head>

<div class="hw-wrap">
  <h2 class="hw-title">Your initials<br>in hieroglyphs</h2>

  <div class="hw-input-area">
    <div class="hw-label">Enter your initials</div>
    <div class="hw-input-wrap">
      <input
        type="text"
        maxlength="2"
        placeholder="SB"
        autocomplete="off"
        spellcheck="false"
        bind:value={inputValue}
        on:keydown={e => e.key === 'Enter' && hwGenerate()}
      >
      <button class="hw-go" on:click={hwGenerate}>→</button>
    </div>
  </div>

  <div class="hw-output" class:visible={outputVisible}>
    <svg class="hw-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
      {@html svgContent}
    </svg>

    <div class="hw-breakdown">
      {#each cards as { l, info }}
        <div class="hw-card">
          <div class="hw-glyph">{info ? info.g : '?'}</div>
          <span class="hw-letter">{l.toUpperCase()}</span>
          <span class="hw-name">{info ? info.n : 'unknown'}</span>
        </div>
      {/each}
    </div>

    <div class="hw-divider"></div>

    <div class="hw-dl-row">
      <button class="hw-dl" class:done={dlFlash[0]} on:click={hwDownloadSVG}>
        {dlFlash[0] ? 'Downloaded ✓' : 'Download SVG'}
      </button>
      <button class="hw-dl" class:done={dlFlash[1]} on:click={hwDownloadPNG}>
        {dlFlash[1] ? 'Downloaded ✓' : 'Download PNG'}
      </button>
    </div>
  </div>
</div>

<style>
  .hw-wrap {
    font-family: 'Slabo 27px', Georgia, serif;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 28px;
    padding: 32px 20px 40px;
    color: #1a1a1a;
  }

  .hw-title {
    font-size: 22px;
    font-weight: 400;
    letter-spacing: 0.02em;
    line-height: 1.3;
    text-align: center;
  }

  .hw-input-area {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
  }

  .hw-label {
    font-size: 10px;
    letter-spacing: 0.32em;
    text-transform: uppercase;
    opacity: 0.32;
  }

  .hw-input-wrap {
    display: flex;
    border: 1px solid rgba(0,0,0,0.14);
    border-radius: 6px;
    overflow: hidden;
  }

  .hw-input-wrap input {
    font-family: 'Slabo 27px', Georgia, serif;
    font-size: 26px;
    letter-spacing: 0.3em;
    text-transform: uppercase;
    color: #1a1a1a;
    background: transparent;
    border: none;
    outline: none;
    padding: 11px 20px 11px 24px;
    width: 110px;
    text-align: center;
  }

  .hw-input-wrap input::placeholder {
    opacity: 0.2;
    font-style: italic;
    font-size: 20px;
    letter-spacing: 0.15em;
  }

  .hw-go {
    background: #d0116f;
    color: #ffffff;
    border: none;
    font-family: 'Slabo 27px', serif;
    font-size: 18px;
    padding: 0 18px;
    cursor: pointer;
    transition: background 0.2s;
  }

  .hw-go:hover { background: #a80e58; }

  .hw-output {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    opacity: 0;
    transform: translateY(12px);
    transition: opacity 0.5s ease, transform 0.5s ease;
  }

  .hw-output.visible { opacity: 1; transform: translateY(0); }

  .hw-svg {
    display: block;
    border-radius: 24px;
    box-shadow: 0 4px 24px rgba(0,0,0,0.1);
  }

  .hw-breakdown {
    display: flex;
    gap: 28px;
    justify-content: center;
  }

  .hw-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3px;
  }

  .hw-glyph { font-size: 38px; line-height: 1; }

  .hw-letter {
    font-size: 10px;
    letter-spacing: 0.25em;
    text-transform: uppercase;
    opacity: 0.32;
    display: block;
    text-align: center;
  }

  .hw-name {
    font-size: 11px;
    font-style: italic;
    opacity: 0.38;
    display: block;
    text-align: center;
  }

  .hw-divider {
    width: 90px;
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(0,0,0,0.1), transparent);
  }

  .hw-dl-row { display: flex; gap: 10px; }

  .hw-dl {
    background: transparent;
    border: 1px solid rgba(0,0,0,0.14);
    color: #1a1a1a;
    font-family: 'Slabo 27px', serif;
    font-size: 11px;
    letter-spacing: 0.18em;
    padding: 7px 14px;
    cursor: pointer;
    border-radius: 4px;
    transition: all 0.15s;
    text-transform: uppercase;
  }

  .hw-dl:hover { background: rgba(0,0,0,0.04); }
  .hw-dl.done { border-color: #1a6b3a; color: #1a6b3a; }
</style>
