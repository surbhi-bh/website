<script>
  import { onMount, onDestroy } from 'svelte';
  import { browser } from '$app/environment';
  onMount(() => {
    document.body.classList.add('chart-challenge-wide');
    window.scrollTo(0, 0);
  });
  onDestroy(() => {
    if (browser) document.body.classList.remove('chart-challenge-wide');
  });
</script>

<style>
  :global(body.chart-challenge-wide .main-inner) {
    max-width: none;
  }
</style>

<slot />
