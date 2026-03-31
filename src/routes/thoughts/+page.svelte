<script>
  export let data;
</script>

<svelte:head>
  <title>Surbhi Bhatia — thoughts</title>
</svelte:head>

<section class="section">
  <div class="numbered-list">
    {#each data.posts as post, i}
      <div class="list-item">
        <div class="item-number">{String(i + 1).padStart(2, '0')}</div>
        <div class="item-content">
          <div class="item-title">
            <a href="/thoughts/{post.slug}">{post.title}</a>
          </div>
          <div class="item-meta">{new Date(post.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })} · {post.tags.join(', ')}</div>
          <div class="item-desc">{post.excerpt}</div>
        </div>
      </div>
    {/each}
  </div>
</section>
