<script>
  import '../app.css';
  import { page } from '$app/stores';
  import { beforeNavigate, afterNavigate } from '$app/navigation';
  import FootnoteChart from '$lib/components/FootnoteChart.svelte';
  import HierogylphWidget from '$lib/components/HieroglyphWidget.svelte';
  import { gardenPanel, footerExpanded } from '$lib/gardenStore.js';

  // Reset footer when navigating away from home or readme
  $: if ($page.url.pathname !== '/' && $page.url.pathname !== '/readme') footerExpanded.set(false);

  let mobileMenuOpen = false;

  // Clear the panel and close mobile menu on every page navigation
  beforeNavigate(() => { gardenPanel.set(null); mobileMenuOpen = false; });

  // Scroll to top on every route change so the new page doesn't appear to
  // load "below" the previous one when the user was scrolled down.
  afterNavigate(() => {
    if (typeof window !== 'undefined') window.scrollTo(0, 0);
  });

  // Routes that need a wide main column (no 700px cap)
  $: isWideRoute = $page.url.pathname.startsWith('/vizardry/');

  const navLinks = [
    { href: '/readme', label: 'read.me' },
    { href: '/visual-stories', label: 'visual stories' },
    { href: '/talks', label: 'talks' },
    { href: '/vizardry', label: 'vizardry' },
    { href: '/garden', label: 'garden' },
    { href: '/places', label: 'places' },
    { href: '/colophon', label: 'colophon', disabled: true },
  ];

  function isActive(href, pathname) {
    if (href === '/') return pathname === '/';
    if (href === '/readme') return pathname === '/readme';
    return pathname.startsWith(href);
  }

  const typeColor = {
    'visual story': '#1a6b3a',
    'talk':         '#d0116f',
    'thought':      '#7b5ea7',
    'seed':         '#b87333',
  };

</script>

<svelte:head>
  <title>Surbhi Bhatia | Data Journalist & Visual Storyteller</title>
  <link href="https://fonts.googleapis.com/css2?family=DM+Mono:wght@300;400&display=swap" rel="stylesheet">
  <script src="https://d3js.org/d3.v7.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/roughjs@4.5.2/bundled/rough.js"></script>
</svelte:head>

<!-- MOBILE TOP BAR -->
<header class="mobile-topbar">
  <a href="/" class="brand-name brand-name-mobile" class:active={isActive('/', $page.url.pathname)}>Surbhi Bhatia</a>
  <button class="mobile-menu-btn" class:menu-open={mobileMenuOpen} aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'} on:click={() => mobileMenuOpen = !mobileMenuOpen}>
    <img src="/flower.svg" class="mobile-menu-flower" alt="" />
  </button>
</header>

<!-- MOBILE OVERLAY -->
{#if mobileMenuOpen}
  <div class="mobile-overlay" role="presentation" on:click={() => mobileMenuOpen = false}></div>
{/if}

<div class="container" class:has-panel={$gardenPanel !== null}>

  <!-- SIDEBAR -->
  <aside class="sidebar" class:mobile-open={mobileMenuOpen}>
    <a href="/" class="brand-name" class:active={isActive('/', $page.url.pathname)}>
      <img src="/flower.svg" class="brand-flower" class:brand-flower-visible={isActive('/', $page.url.pathname)} alt="" />Surbhi Bhatia
    </a>

    <div class="nav-section">
      <ul class="nav-links">
        {#each navLinks as link}
          <li class:li-garden={link.href === '/garden'}>
            {#if link.disabled}
              <span class="nav-link nav-link-dim">{link.label}</span>
            {:else}
              <a
                href={link.href}
                class="nav-link"
                class:nav-link-garden={link.href === '/garden'}
                class:active={isActive(link.href, $page.url.pathname)}
              >{link.label}</a>
            {/if}
          </li>
        {/each}
      </ul>
    </div>

    <div class="nav-spacer"></div>
    <div class="sidebar-footer"></div>
  </aside>

  <!-- MAIN CONTENT -->
  <main class="main">
    <div class="main-inner" class:main-inner-wide={isWideRoute}>
      <slot />
    </div>
  </main>

  <!-- THIRD PANEL — only shown when gardenPanel store has content -->
  {#if $gardenPanel}
    {@const item = $gardenPanel}
    <aside class="third-panel" style="--tc:{typeColor[item.type] || '#1a6b3a'}">
      <button class="third-panel-close" on:click={() => gardenPanel.set(null)}>×</button>

      {#if item.widget === 'hieroglyph'}
        <!-- Hieroglyph widget panel (colophon page) -->
        <HierogylphWidget />
      {:else if item.widget === 'place'}
        <!-- Place panel (places page) -->
        <div class="tp-type" style="color:{item.mode === 'lived' ? '#d0116f' : '#1a6b3a'}">{item.mode}</div>
        <div class="tp-title">{item.name}{#if item.isLive} <span style="font-size:12px; color:#d0116f;">✦ now</span>{/if}</div>
        <p class="tp-desc">{item.note}</p>
      {:else}
        <!-- Standard item panel (garden, talks pages) -->
        <div class="tp-type" style="color:{typeColor[item.type] || '#888'}">{item.type}</div>
        <div class="tp-title">{item.title}</div>
        {#if item.image}
          <img src={item.image} alt={item.title} class="tp-photo" />
        {/if}
        {#if item.publisher}
          <div class="tp-pub">{item.publisher}</div>
        {/if}
        {#if item.event}
          <div class="tp-pub">{item.event}{#if item.location} · {item.location}{/if}</div>
        {/if}
        <div class="tp-year">{item.year}</div>
        {#if item.description}
          <p class="tp-desc">{item.description}</p>
        {/if}
        {#if item.collaborators && item.collaborators.length}
          <div class="tp-collab"><span class="tp-label">with</span> {item.collaborators.join(', ')}</div>
        {/if}
        <div class="tp-tags">
          {#each item.tags as t}
            <span class="tp-tag">{t}</span>
          {/each}
        </div>
        {#if item.link && item.link !== '#'}
          <a href={item.link} target="_blank" rel="noopener" class="tp-link">read / view ↗</a>
        {/if}
      {/if}
    </aside>
  {/if}

</div>

<!-- FOOTNOTE FOOTER BAND -->
<FootnoteChart collapsed={true} />

<style>
  /* Three-column layout when panel is open */
  :global(.container.has-panel) {
    grid-template-columns: 280px 1fr 320px;
  }

  /* Wide route (e.g. vizardry challenge pages): remove the 700px cap on main-inner */
  :global(.main-inner.main-inner-wide) {
    max-width: none;
  }

  /* Third panel */
  .third-panel {
    border-left: 1px solid rgba(26,107,58,0.15);
    padding: 32px 24px 40px;
    background-color: #fff;
    background-image:
      linear-gradient(rgba(26,107,58,0.05) 1px, transparent 1px),
      linear-gradient(90deg, rgba(26,107,58,0.05) 1px, transparent 1px);
    background-size: 20px 20px;
    display: flex;
    flex-direction: column;
    gap: 14px;
    position: sticky;
    top: 0;
    height: 100vh;
    overflow-y: auto;
  }

  .third-panel-close {
    position: absolute;
    top: 10px;
    right: 14px;
    background: none;
    border: none;
    font-size: 20px;
    color: #bbb;
    cursor: pointer;
    line-height: 1;
    padding: 0;
  }

  .third-panel-close:hover { color: #d0116f; }

  .tp-type {
    font-family: "DM Mono", monospace;
    font-size: 8px;
    letter-spacing: 0.16em;
    text-transform: uppercase;
    font-weight: 600;
    margin-top: 8px;
  }

  .tp-title {
    font-size: 17px;
    font-weight: 700;
    line-height: 1.35;
    color: #111;
  }

  .tp-photo {
    width: 100%;
    display: block;
    filter: grayscale(15%);
    transition: filter 0.3s;
  }

  .tp-photo:hover { filter: grayscale(0%); }

  .tp-pub {
    font-family: "DM Mono", monospace;
    font-size: 10px;
    color: #888;
    letter-spacing: 0.04em;
  }

  .tp-year {
    font-family: "DM Mono", monospace;
    font-size: 32px;
    font-weight: 200;
    color: #1a6b3a;
    line-height: 1;
  }

  .tp-desc {
    font-size: 13px;
    font-weight: 300;
    color: #444;
    line-height: 1.65;
    font-family: "Inter", sans-serif;
  }

  .tp-collab {
    font-family: "DM Mono", monospace;
    font-size: 10px;
    color: #888;
  }

  .tp-label {
    font-size: 8px;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: #ccc;
    margin-right: 4px;
  }

  .tp-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 4px;
  }

  .tp-tag {
    font-family: "DM Mono", monospace;
    font-size: 8px;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: #1a6b3a;
    border: 1px solid rgba(26,107,58,0.25);
    padding: 2px 7px;
  }

  .tp-link {
    display: inline-block;
    margin-top: 4px;
    font-family: "DM Mono", monospace;
    font-size: 11px;
    color: #d0116f;
    text-decoration: none;
    border-bottom: 1px solid rgba(208,17,111,0.3);
    padding-bottom: 1px;
    transition: border-color 0.2s;
  }

  .tp-link:hover { border-bottom-color: #d0116f; }

  :global(.brand-name) {
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: 7px;
    color: #d0116f;
  }

  :global(.brand-flower) {
    width: 18px;
    height: 18px;
    flex-shrink: 0;
    opacity: 0;
    transform: rotate(-90deg) scale(0.5);
    transition: opacity 0.3s ease, transform 0.3s ease;
  }

  :global(.brand-flower-visible) {
    opacity: 1;
    transform: rotate(0deg) scale(1);
  }

  :global(.nav-link-dim) {
    font-size: 18px;
    font-weight: 300;
    font-family: inherit;
    letter-spacing: normal;
    color: #ccc;
    cursor: default;
    padding: 0px 0 0px 28px;
    display: block;
  }

  /* ── Mobile top bar (hidden on desktop, shown on narrow viewports) ── */
  .mobile-topbar {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 52px;
    background: #fff;
    border-bottom: 1px solid rgba(26,107,58,0.12);
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    z-index: 400;
  }

  .mobile-menu-btn {
    background: none;
    border: none;
    cursor: pointer;
    color: #1a6b3a;
    display: flex;
    align-items: center;
    padding: 6px;
    margin-right: -6px;
    transition: opacity 0.15s;
  }

  .mobile-menu-btn:hover { opacity: 0.85; }

  .mobile-menu-flower {
    width: 24px;
    height: 24px;
    display: block;
    transform-origin: 50% 50%;
    /* Slow continuous rotation when the menu is closed */
    animation: menu-flower-spin 14s linear infinite;
  }

  .mobile-menu-btn.menu-open .mobile-menu-flower {
    /* When the drawer is open: spin slightly faster + pink drop shadow */
    animation: menu-flower-spin 6s linear infinite;
    filter: drop-shadow(0 0 6px rgba(208,17,111,0.45));
  }

  @keyframes menu-flower-spin {
    from { transform: rotate(0deg); }
    to   { transform: rotate(360deg); }
  }


  .mobile-overlay {
    position: fixed;
    inset: 0;
    background: rgba(0,0,0,0.28);
    z-index: 250;
  }

  /* ── Mobile breakpoint: collapse sidebar into a slide-out drawer ── */
  @media (max-width: 768px) {
    .mobile-topbar { display: flex; }

    :global(.container) {
      display: block !important;
    }

    :global(.sidebar) {
      position: fixed !important;
      top: 0 !important;
      left: -260px !important;
      width: 240px !important;
      height: 100dvh !important;
      height: 100vh !important;
      overflow-y: auto !important;
      overflow-x: hidden !important;
      transition: left 0.25s ease, box-shadow 0.25s ease !important;
      z-index: 300 !important;
    }

    :global(.sidebar.mobile-open) {
      left: 0 !important;
      box-shadow: 6px 0 28px rgba(0,0,0,0.14) !important;
    }

    :global(.main) {
      padding-top: 68px !important;
      padding-left: 1.25rem !important;
      padding-right: 1.25rem !important;
    }

    /* ── Footnote/step-chart band on mobile ──
       Stack the left (stat + toggles) and right (chart) vertically so the chart
       can use the full width. Override the desktop 280px+1fr columns. */
    :global(.footnote-band) {
      grid-template-columns: 1fr !important;
      grid-template-rows: auto auto;
      height: auto !important;
      min-height: 0;
    }

    :global(.footnote-left) {
      padding: 8px 14px !important;
      grid-template-columns: 1fr auto !important;
      gap: 10px !important;
    }

    :global(.footnote-number) { font-size: 22px !important; }
    :global(.footnote-label)  { font-size: 12px !important; }
    :global(.footnote-sub)    { font-size: 11px !important; }
    :global(.footnote-tog)    { font-size: 10px !important; }

    :global(.footnote-right) {
      height: 80px !important;
      width: 100% !important;
      min-width: 0 !important;
    }

    :global(.footnote-right svg) {
      width: 100% !important;
      height: 80px !important;
      display: block;
    }

    /* Collapsed strip on non-home pages */
    :global(.footnote-collapsed) {
      height: 26px !important;
      padding: 0 14px !important;
    }
    :global(.footnote-label-slim) { font-size: 12px !important; }

    /* Inside the drawer: hide the brand name and the first nav section title
       so the menu starts straight with the nav items (read.me first). */
    :global(.sidebar > .brand-name) { display: none !important; }
    :global(.sidebar .nav-title)    { display: none !important; }
    /* Push the drawer content below the fixed 52px topbar so the first item
       (read.me) isn't hidden under it. */
    :global(.sidebar) { padding: 68px 0.8rem 1.25rem 0.75rem !important; }

    /* Nav link gutter: room for the leading flower marker (20px wide) plus a
       small visual gap before the word. */
    :global(.sidebar .nav-link),
    :global(.sidebar .nav-link-dim) {
      padding-left: 28px !important;
      font-size: 17px !important;
      padding-top: 5px !important;
      padding-bottom: 5px !important;
    }

    /* Active links: clear black; disabled (.nav-link-dim) keeps its grey */
    :global(.sidebar .nav-link:not(.nav-link-dim)) {
      color: #111 !important;
      font-weight: 400 !important;
    }

    /* ── Third panel (talks/garden item detail) as a bottom sheet on mobile ── */
    .third-panel {
      position: fixed !important;
      left: 0 !important;
      right: 0 !important;
      bottom: 0 !important;
      top: auto !important;
      height: 78vh !important;
      max-height: 78dvh !important;
      width: 100% !important;
      border-left: none !important;
      border-top: 1px solid rgba(26,107,58,0.18) !important;
      border-top-left-radius: 14px !important;
      border-top-right-radius: 14px !important;
      box-shadow: 0 -8px 28px rgba(0,0,0,0.18) !important;
      padding: 28px 20px 32px !important;
      overflow-y: auto !important;
      z-index: 320 !important;
      animation: third-panel-slide-up 0.28s ease-out;
    }

    /* Grab-handle hint at the top of the sheet */
    .third-panel::before {
      content: '';
      position: sticky;
      top: 0;
      display: block;
      width: 40px;
      height: 4px;
      border-radius: 2px;
      background: rgba(26,107,58,0.22);
      margin: -10px auto 8px;
    }

    .third-panel-close {
      top: 14px !important;
      right: 16px !important;
      font-size: 26px !important;
      width: 32px;
      height: 32px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      background: rgba(26,107,58,0.06);
      color: #1a6b3a;
    }
  }

  @keyframes third-panel-slide-up {
    from { transform: translateY(100%); }
    to   { transform: translateY(0); }
  }
</style>
