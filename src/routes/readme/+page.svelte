<script>
  import { onMount, onDestroy } from 'svelte';
  import { footerExpanded } from '$lib/gardenStore.js';

  onMount(() => footerExpanded.set(true));
  onDestroy(() => footerExpanded.set(false));

  // level: minimum level to show
  // only: exact level — hides at other levels (used for alternate versions of same content)
  const bio = [
    { level: 1, html: `I turn numbers into meaningful insights and memorable stories using visuals, design, code, and storytelling techniques.` },
    { level: 2, html: `My work has featured in Kontinentalist, Nikkei Asia, Mint, IndiaSpend, The Hindu, Moneycontrol, and <a href="/visual-stories" class="inline-link">more</a>.` },
    { level: 3, html: `Some of it has been recognised by <a href="https://www.data4sdgs.org/blog/announcing-our-three-data-viz-contest-finalists" target="_blank" rel="noopener" class="inline-link">Festival De Datos</a>, <a href="https://asia.nikkei.com/announcements/nikkei-asia-wins-two-sabew-best-in-business-awards" target="_blank" rel="noopener" class="inline-link">Society of American Business Editors and Writers</a>, and <a href="https://pudding.cool/pudding-cup/" target="_blank" rel="noopener" class="inline-link">The Pudding</a>.` },

    { break: true },

    { level: 1, html: `I am currently based in Bangalore, and have lived in Delhi, Bombay, Auroville and New York.` },
    { level: 2, html: `Living across these <a href="/places" class="inline-link">cities</a> has shaped who I am and how I see the world.` },

    { break: true },

    { only: 1, html: `As a self-taught coder, I found my way into data storytelling and visualisation somewhat by accident.` },
    { level: 2, html: `I found my way into data storytelling and visualisation somewhat by accident. For most of my career, I have been self-taught in both code and design, learning what I know on the go: through work, curiosity, and the occasional online rabbit hole.` },

    { break: true, minLevel: 2 },

    { level: 2, html: `I studied economics and started my career working with professors on financial data. That's where I made my first few graphs in R using ggplot. It was life-changing.` },

    { break: true, minLevel: 2 },

    { level: 2, html: `From there, I moved to a newsroom, working in a small team to tell data-driven stories using charts and words for anyone picking up the newspaper that day, anywhere in the country.` },

    { break: true, minLevel: 2 },

    { level: 2, html: `This leap, from learning the skills to work with data to making it make sense for others, defines my journey.` },

    { break: true },

    { level: 1, html: `In 2024, I went to Columbia University to study data journalism as part of the Lede Program.` },
    { level: 3, html: `It helped me put structure to what I had been learning along the way, and pushed me to think more intentionally about data + visual storytelling.` },

    { break: true },

    { level: 1, html: `Since then, I've worked both independently and with corporates, multilaterals, think tanks, research groups, and design studios.` },
    { level: 3, html: `The skills tend to cut across and translate very well into solving and building things in these settings.` },

    { break: true },

    { level: 3, html: `Nothing brightens my day quite like a good yoga class and hitting 10k steps.` },
    { level: 1, html: `I track my foot-steps in the foot-er… foot-note… of this page using a step-chart.` },
  ];

  let level = 1;

  $: visible = bio.filter(s => {
    if (s.break) return s.minLevel ? level >= s.minLevel : true;
    if (s.only !== undefined) return level === s.only;
    return s.level <= level;
  });
</script>

<svelte:head>
  <title>Surbhi Bhatia — read.me</title>
</svelte:head>

<section class="section" id="readme">

  <div class="headline">
    I am Surbhi, a <span style="color: #d0116f;">data journalist</span> and <span style="color: #d0116f;">data visualisation trainer</span>.
  </div>

  <div class="slider-wrap">
    <div class="slider-track">
      <button class="slider-stop" class:active={level === 1} on:click={() => level = 1}>
        <img src="/flower.svg" alt="" class="stop-flower" />
      </button>
      <div class="slider-segment" class:filled={level >= 2}></div>
      <button class="slider-stop" class:active={level === 2} on:click={() => level = 2}>
        <img src="/flower.svg" alt="" class="stop-flower" />
      </button>
      <div class="slider-segment" class:filled={level >= 3}></div>
      <button class="slider-stop" class:active={level === 3} on:click={() => level = 3}>
        <img src="/flower.svg" alt="" class="stop-flower" />
      </button>
    </div>
    <div class="slider-labels">
      <span class="slider-label" class:active={level === 1} on:click={() => level = 1}>~80 words</span>
      <span class="slider-label" class:active={level === 2} on:click={() => level = 2}>~270 words</span>
      <span class="slider-label" class:active={level === 3} on:click={() => level = 3}>~370 words</span>
    </div>
  </div>

  <div class="bio-body">
    {#each visible as item}
      {#if item.break}
        <div class="bio-gap"></div>
      {:else}
        <span class="bio-sentence" class:bio-sentence-dim={item.level === 3 && level === 3}>
          {@html item.html}{' '}
        </span>
      {/if}
    {/each}
  </div>

</section>

<style>
  .slider-wrap {
    display: flex;
    flex-direction: column;
    gap: 6px;
    margin-bottom: 1.6rem;
    width: 200px;
  }

  .slider-track {
    display: flex;
    align-items: center;
    width: 100%;
    height: 20px;
  }

  .slider-segment {
    flex: 1;
    height: 1px;
    background: #e0e0e0;
    transition: background 0.2s;
  }

  .slider-segment.filled {
    background: rgba(208,17,111,0.3);
  }

  .slider-stop {
    background: none;
    border: none;
    padding: 0;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 20px;
    height: 20px;
    flex-shrink: 0;
    position: relative;
  }

  .stop-flower {
    width: 13px;
    height: 13px;
    opacity: 0.25;
    transition: opacity 0.15s, transform 0.15s;
    display: block;
  }

  .slider-stop.active .stop-flower {
    opacity: 1;
    transform: scale(1.2);
  }

  .slider-stop:not(.active):hover .stop-flower {
    opacity: 0.5;
  }

  .slider-labels {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }

  .slider-label {
    font-family: "DM Mono", monospace;
    font-size: 9.5px;
    color: #ccc;
    letter-spacing: 0.04em;
    cursor: pointer;
    transition: color 0.15s;
    user-select: none;
    line-height: 1;
  }

  .slider-label.active {
    color: #444;
  }

  .bio-body {
    font-size: 17px;
    font-weight: 400;
    color: #111;
    line-height: 1.6;
  }

  .bio-gap {
    height: 0.85rem;
  }

  .bio-sentence {
    display: inline;
    animation: fadeIn 0.3s ease;
  }

  @keyframes fadeIn {
    from { opacity: 0; }
    to   { opacity: 1; }
  }
</style>
