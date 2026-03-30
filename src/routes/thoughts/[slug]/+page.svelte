<script>
  export let data;
  const { metadata, content: Content } = data;
</script>

<svelte:head>
  <title>{metadata.title} — Surbhi Bhatia</title>
</svelte:head>

<article class="section post">
  <div class="post-meta">
    <a href="/thoughts" class="post-back">← thoughts</a>
    <span class="post-date">{new Date(metadata.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
  </div>
  <h1 class="headline">{metadata.title}</h1>
  <div class="post-tags">
    {#each metadata.tags as tag}
      <span class="post-tag">{tag}</span>
    {/each}
  </div>
  <div class="post-body text-body">
    <Content />
  </div>
</article>

<style>
  .post { max-width: 680px; }
  .post-meta { display: flex; align-items: baseline; gap: 1.5rem; margin-bottom: 1.5rem; }
  .post-back { font-size: 12px; font-family: var(--font-mono); color: var(--dim); }
  .post-date { font-size: 12px; font-family: var(--font-mono); color: var(--dim2); }
  .post-tags { display: flex; gap: 0.5rem; margin-bottom: 2rem; flex-wrap: wrap; }
  .post-tag { font-size: 10px; font-family: var(--font-mono); color: #1a6b3a; border: 1px solid rgba(26,107,58,0.3); padding: 1px 7px; letter-spacing: 0.06em; }
  .post-body :global(h2) { font-size: 16px; font-weight: 600; margin: 2rem 0 0.75rem; color: var(--text); }
  .post-body :global(p) { font-size: 17px; line-height: 1.7; margin-bottom: 1rem; color: #111; font-weight: 300; }
  .post-body :global(ol), .post-body :global(ul) { padding-left: 1.5rem; margin-bottom: 1rem; }
  .post-body :global(li) { font-size: 16px; line-height: 1.7; color: #111; font-weight: 300; margin-bottom: 0.3rem; }
  .post-body :global(strong) { font-weight: 600; }
  .post-body :global(a) { color: var(--text); border-bottom: 1px solid var(--dim2); }
  .post-body :global(a:hover) { border-bottom-color: var(--text); }
</style>
