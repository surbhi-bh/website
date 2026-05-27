<script>
  import { onMount, onDestroy } from 'svelte';
  import { footerExpanded } from '$lib/gardenStore.js';

  onMount(() => footerExpanded.set(true));
  onDestroy(() => footerExpanded.set(false));

  const paragraphs = [
    `I’m a data journalist, and have spent many years searching for insights and composing stories that are coded and designed to turn numbers into striking and memorable visuals. I love working across diverse topics to uncover what may really be happening in the boundless worlds of bollywood movies, digital commerce, climate change, urbanisation, and chocolates.`,
    `For most of my career, I’ve been self-taught in both code and design, learning what I know on the go: through work, curiosity, and the occasional online rabbit hole.`,
    `I’ve worked with different mindsets across many settings like urgency in newsrooms, immersion in academia, clarity in communications, and creativity in design studios. Along the way, I’ve worked with xKDR Forum, Mint, World Bank, Thibi, Open Network for Digital Commerce, and written for Kontinentalist, Nikkei Asia, IndiaSpend, The Hindu, and more. My work has been recognised by the <a href="https://asia.nikkei.com/announcements/nikkei-asia-wins-two-sabew-best-in-business-awards" target="_blank" rel="noopener" class="inline-link">Society for Advancing Business Editing and Writing (SABEW)</a>, <a href="https://www.data4sdgs.org/blog/announcing-our-three-data-viz-contest-finalists" target="_blank" rel="noopener" class="inline-link">Festival de Datos</a>, and <a href="https://pudding.cool/pudding-cup/" target="_blank" rel="noopener" class="inline-link">The Pudding</a>.`,
    `I’m currently based in Bangalore, and have previously lived in Delhi, Bombay, Auroville, and New York.`,
    `While I agree that correlation is not causation, I believe strongly that walkable cities make for a better life. I track my footsteps in the foot-er… foot-note… of this page using a step chart.`,
  ];
</script>

<svelte:head>
  <title>Surbhi Bhatia — read.me</title>
</svelte:head>

<section class="section" id="readme">

  <div class="headline">
    I am Surbhi, a <span style="color: #d0116f;">data journalist</span> and <span style="color: #d0116f;">data visualisation trainer</span>.
  </div>

  <div class="bio-body">
    {#each paragraphs as p}
      <p class="bio-paragraph">{@html p}</p>
    {/each}
  </div>

</section>

<style>
  .bio-body {
    font-size: 17px;
    font-weight: 400;
    color: #111;
    line-height: 1.6;
  }

  .bio-paragraph {
    margin: 0 0 0.85rem 0;
  }

  .bio-paragraph:last-child {
    margin-bottom: 0;
  }
</style>
