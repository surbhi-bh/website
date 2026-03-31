<script>
  import '../app.css';
  import { page } from '$app/stores';
  import { beforeNavigate } from '$app/navigation';
  import FootnoteChart from '$lib/components/FootnoteChart.svelte';
  import HierogylphWidget from '$lib/components/HieroglyphWidget.svelte';
  import { gardenPanel, footerExpanded } from '$lib/gardenStore.js';

  // Reset footer when navigating away from home
  $: if ($page.url.pathname !== '/') footerExpanded.set(false);

  // Clear the panel on every page navigation
  beforeNavigate(() => gardenPanel.set(null));

  const mainLinks = [
    { href: '/read-me', label: 'read.me' },
    { href: '/visual-stories', label: 'visual stories' },
    { href: '/talks', label: 'talks' },
    { href: '/vizardry', label: 'vizardry', disabled: true },
  ];

  const gardenLinks = [
    { href: '/seeds', label: 'seeds', disabled: true },
    { href: '/thoughts', label: 'thoughts', disabled: true },
    { href: '/bookmarks', label: 'bookmarks', disabled: true },
    { href: '/garden', label: 'garden' },
    { href: '/places', label: 'places' },
    { href: '/colophon', label: 'colophon' },
  ];

  function isActive(href, pathname) {
    if (href === '/') return pathname === '/';
    if (href === '/read-me') return pathname === '/read-me';
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

<div class="container" class:has-panel={$gardenPanel !== null}>

  <!-- SIDEBAR -->
  <aside class="sidebar">
    <a href="/" class="brand-name" class:active={isActive('/', $page.url.pathname)}>
      <img src="/flower.svg" class="brand-flower" class:brand-flower-visible={isActive('/', $page.url.pathname)} alt="" />Surbhi Bhatia
    </a>

    <div class="nav-section">
      <div class="nav-title">now · here</div>
      <ul class="nav-links">
        {#each mainLinks as link}
          <li>
            {#if link.disabled}
              <span class="nav-link nav-link-dim">{link.label}</span>
            {:else}
              <a
                href={link.href}
                class="nav-link"
                class:active={isActive(link.href, $page.url.pathname)}
              >{link.label}</a>
            {/if}
          </li>
        {/each}
      </ul>
    </div>

    <div class="nav-section">
      <ul class="nav-links">
        {#each gardenLinks as link}
          <li class:li-garden={link.href === '/garden'}>
            {#if link.disabled}
              <span class="nav-link nav-link-dim">{link.label}</span>
            {:else}
              <a
                href={link.href}
                class="nav-link"
                class:nav-link-garden={link.href === '/garden'}
                class:active={isActive(link.href, $page.url.pathname)}
                style={link.label === 'places' ? 'margin-top: 1rem;' : ''}
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
    <div class="main-inner">
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
</style>
