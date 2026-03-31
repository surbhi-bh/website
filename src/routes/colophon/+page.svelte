<script>
  import { onMount } from 'svelte';
  import { gardenPanel } from '$lib/gardenStore.js';

  onMount(() => {
    gardenPanel.set({ widget: 'hieroglyph' });
  });
</script>

<svelte:head>
  <title>Surbhi Bhatia — Colophon</title>
</svelte:head>

<section class="section">
  <div class="text-block">
    <div class="headline">How this site is made.</div>
    <p class="text-body">
      A note on the tools, typefaces, and thinking behind this website.
    </p>
  </div>

  <div class="text-block">
    <p class="text-body"><strong>Built with</strong> SvelteKit — a framework for building fast, static-first web applications.</p>
    <p class="text-body"><strong>Visualisations</strong> use D3.js for data binding and layout, with Rough.js for hand-drawn aesthetics in the step counter chart.</p>
    <p class="text-body"><strong>Typefaces:</strong> Inter (UI, body text) and DM Mono (labels, code, the footnote band). Both served via Google Fonts.</p>
    <p class="text-body"><strong>Accent colour:</strong> <span style="color: #d0116f; font-family: var(--font-mono);">#d0116f</span> — a warm, assertive pink.</p>
    <p class="text-body"><strong>The footnote band</strong> at the bottom of every page shows a real step-count chart — a small, personal data point rendered in graph-paper style.</p>
    <p class="text-body"><strong>Navigation</strong> uses a flower SVG as the active-link indicator — a small nod to the garden metaphor running through the site structure.</p>
  </div>

  <div class="text-block">
    <p class="text-body" style="color: var(--dim); font-size: 15px;">
      The sidebar layout is fixed at 280px. The main content area is max 700px wide. The footnote band is fixed at the bottom, 130px tall.
    </p>
    <p class="text-body" style="color: var(--dim); font-size: 15px;">
      No tracking. No cookies. No analytics. Just pages.
    </p>
  </div>
</section>
