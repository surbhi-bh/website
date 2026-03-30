<script>
  import { onMount } from 'svelte';
  import WorldMap from '$lib/components/WorldMap.svelte';

  // 0 = brief, 1 = longer, 2 = full story, 3 = full story with map
  let readmeStep = 0;

  const wordCounts = ['~20 words', '~60 words', '~100 words', '~130 words'];

  function expandReadme(step) {
    readmeStep = step;
  }

  $: currentWordCount = wordCounts[readmeStep];
  $: showMore1 = readmeStep >= 1;
  $: showMore2 = readmeStep >= 2;
  $: showMore3 = readmeStep >= 3;
</script>

<svelte:head>
  <title>Surbhi Bhatia — read.me</title>
</svelte:head>

<section class="section" id="readme">
  <div class="expand-row">
    <button
      class="exp-btn"
      class:on={readmeStep >= 0}
      on:click={() => expandReadme(0)}
    >brief</button>
    <button
      class="exp-btn"
      class:on={readmeStep >= 1}
      on:click={() => expandReadme(1)}
    >longer</button>
    <button
      class="exp-btn"
      class:on={readmeStep >= 2}
      on:click={() => expandReadme(2)}
    >full story</button>
    <button
      class="exp-btn"
      class:on={readmeStep >= 3}
      on:click={() => expandReadme(3)}
    >full story with map</button>
    <span class="word-count-display">{currentWordCount}</span>
  </div>

  <div class="headline">
    I am Surbhi, a <span style="color: #d0116f;">data journalist</span> and <span style="color: #d0116f;">data visualisation trainer</span>.
  </div>

  <div class="text-body">
    I turn numbers into meaningful insights and memorable stories using visuals, design, code, and storytelling techniques.
  </div>

  <div class="bio-more" class:open={showMore1}>
    My work has featured in Kontinentalist, Nikkei Asia, Mint, IndiaSpend, The Hindu, Moneycontrol, and more. Some of it has been recognised by Festival De Datos, SABEW, and The Pudding.
  </div>

  <div class="bio-more" class:open={showMore2}>
    As a <strong>self-taught coder</strong>, most of what I know, I have learnt on the go. And I continue to refine my skills in the design and data visualisation space by finding new ways to make data speak.
  </div>

  {#if showMore3}
    <div class="bio-more open">
      <WorldMap />
    </div>
  {/if}

  <div class="bio-more" class:open={showMore3}>
    I'm currently based in Bangalore, previously lived in Delhi, Bombay, Auroville, and New York. My journey spans research, journalism, and systems thinking — always seeking to understand how things break and how to make them more resilient.
  </div>

  <div class="bio-more" class:open={showMore3}>
    I care deeply about how information shapes understanding — and how a well-told data story can move people to see the world differently.
  </div>
</section>
