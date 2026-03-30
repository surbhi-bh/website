<script>
  import { gardenPanel } from '$lib/gardenStore.js';

  const allItems = [
    { id: 'vs-1',  type: 'visual story', year: 2026, title: 'Bollywood Falls out of Love', publisher: 'Kontinentalist', collaborators: ['Griselda Gabriele'], tags: ['entertainment', 'art & culture'], link: 'https://kontinentalist.com/stories/bollywood-falls-out-of-love', description: 'A data-driven look at how Bollywood romantic tropes are shifting.' },
    { id: 'vs-2',  type: 'visual story', year: 2025, title: "Deeper and Deeper: India's Water Race to the Bottom", publisher: 'Thibi.co and Earth Journalism Network', collaborators: ['Eva Constantaras', 'Aika Rey', 'Lu Min Lwin', 'Kavya Sukumar', 'Thi Ha Ko Ko', 'Sweta Daga', 'Supriya Vohra', 'Nihar Gokhale', 'Yan Naung Oak'], tags: ['climate', 'water', 'agriculture'], link: 'https://site.thibi.co/originals/india-groundwater-crisis', description: "Mapping India's groundwater crisis through data." },
    { id: 'vs-3',  type: 'visual story', year: 2024, title: 'Battle of the chocolate bars', publisher: 'The Lede Program for Data Journalism', collaborators: ['My lovely classmates at Lede\'24'], tags: ['art & culture', 'award-winning'], link: 'https://surbhi-bh.github.io/chocolate-wars/', description: 'Winner of The Pudding Cup 2024.' },
    { id: 'vs-4',  type: 'visual story', year: 2024, title: 'The rise of Gurgaon', publisher: 'The Lede Program for Data Journalism', collaborators: [], tags: ['cities'], link: 'https://surbhi-bh.github.io/the-rise-of-gurgaon/', description: 'How Gurgaon became a city from a village in two decades.' },
    { id: 'vs-5',  type: 'visual story', year: 2024, title: 'Shall we call it the Metropolitan Meow-seum of Art?', publisher: 'The Lede Program for Data Journalism', collaborators: [], tags: ['art & culture'], link: 'https://surbhi-bh.github.io/cats-at-the-met-museum/', description: 'Cats in the Met Museum collection, analysed.' },
    { id: 'vs-6',  type: 'visual story', year: 2024, title: 'Reviving the Arkavathi river using nature-based solutions', publisher: 'Revisual Labs', collaborators: ['Aman Bhargava', 'Swathi Singh', 'Gurman Bhatia'], tags: ['climate', 'water', 'cities'], link: 'https://csp.wwfindia.org/reviving-the-arkavathi-river/', description: 'Visualising river restoration strategies.' },
    { id: 'vs-7',  type: 'visual story', year: 2023, title: 'Climate action needs more women on board', publisher: 'Festival De Datos', collaborators: [], tags: ['gender', 'climate', 'award-winning'], link: 'https://surbhi-bh.github.io/sdg17-climate-action-and-gender-equality.html', description: 'World Bank Global Partnership Finalist.' },
    { id: 'vs-8',  type: 'visual story', year: 2023, title: "Bollywood's gender revolution: Women are rewriting the rules", publisher: 'Nikkei Asia', collaborators: ['Jui Chakravorty', 'Kiran Sharma', 'Sayan Chakraborty'], tags: ['entertainment', 'gender', 'award-winning'], link: 'https://asia.nikkei.com/Spotlight/The-Big-Story/Bollywood-s-gender-revolution-Women-are-rewriting-the-rules', description: 'SABEW Award Winner 2023.' },
    { id: 'vs-9',  type: 'visual story', year: 2023, title: 'Around the Wordle in 365 days', publisher: 'Personal', collaborators: [], tags: ['art & culture'], link: 'https://surbhi-bh.github.io/words_of_wordle.html', description: 'A year of Wordle words, visualised.' },
    { id: 'vs-10', type: 'visual story', year: 2022, title: "The data shows Bollywood's struggle with original ideas", publisher: 'Mint', collaborators: [], tags: ['entertainment', 'art & culture'], link: 'https://www.livemint.com/industry/media/bollywoods-eternal-struggle-with-original-ideas-here-s-what-data-shows-11661772790605.html', description: 'Analysis of Bollywood remakes using data.' },
    { id: 'vs-11', type: 'visual story', year: 2022, title: "Why there have been so few women in India's Administrative Services", publisher: 'IndiaSpend', collaborators: ['Akshi Chawla'], tags: ['policy', 'gender'], link: 'https://www.indiaspend.com/gendercheck/why-there-have-been-so-few-women-in-indias-administrative-services-795991', description: 'Gender gap analysis in the Indian Administrative Services.' },
    { id: 'vs-12', type: 'visual story', year: 2021, title: "The real value of India's passport", publisher: 'The Morning Context', collaborators: ['Omkar Khandekar'], tags: ['economy', 'policy'], link: 'https://themorningcontext.com/chaos/the-real-value-of-indias-passport', description: 'Visa-free access and passport power, visualised.' },
    { id: 'vs-13', type: 'visual story', year: 2020, title: 'Needed: A new relationship contract between RBI and govt', publisher: 'Mint', collaborators: ['Pramit Bhattacharya'], tags: ['economy', 'policy'], link: 'https://www.livemint.com/news/india/needed-a-new-relationship-contract-between-rbi-and-govt-11598025084129.html', description: "Data behind India's central bank independence debate." },
    { id: 'vs-14', type: 'visual story', year: 2020, title: "India's fiscal performance in nine charts", publisher: 'Mint', collaborators: [], tags: ['economy', 'policy'], link: 'https://www.livemint.com/news/india/india-s-fiscal-performance-in-nine-charts-11581857139177.html', description: 'Deficit, spending, and revenue — nine charts.' },
    { id: 'vs-15', type: 'visual story', year: 2019, title: 'What the Nobel says about economics', publisher: 'Mint', collaborators: ['Vishnu Padmanabhan'], tags: ['economy', 'policy'], link: 'https://www.livemint.com/news/india/what-the-nobel-says-about-economics-11571680373108.html', description: 'Unpacking the Nobel Prize in Economics through data.' },
    { id: 'tk-1',  type: 'talk', year: 2023, title: 'Using data journalism to promote gender equality', publisher: 'Equal Measures 2030 & Tableau Foundation', collaborators: [], tags: ['gender', 'data journalism'], link: 'https://equalmeasures2030.org/blogs/using-data-journalism-to-promote-gender-equality-with-surbhi-bhatia/', description: 'Spoke about data stories on women\'s representation at the global climate summit.' },
    { id: 'tk-2',  type: 'talk', year: 2022, title: "Mapping India's law-tech landscape", publisher: 'DAKSH Centre, IIT-Delhi', collaborators: [], tags: ['policy', 'data journalism'], link: 'https://daksh-lawtech-iitd.org/event/authors-roundtable-i/', description: 'Curated discussions on how legal-technology is changing the landscape for courts and lawyers.' },
    { id: 'th-1',  type: 'thought', year: 2024, title: 'Finding patterns in noise', publisher: '', collaborators: [], tags: ['method'], link: '/thoughts/finding-patterns-in-noise', description: 'On the art of knowing when signal is just noise in disguise.' },
    { id: 'th-2',  type: 'thought', year: 2024, title: 'Colour is not decoration', publisher: '', collaborators: [], tags: ['design'], link: '/thoughts/colour-is-not-decoration', description: 'Why colour choices in data vis are always an argument.' },
  ];

  const groupModes = ['by year', 'by publication', 'by collaborator'];
  let activeMode = 'by year';

  const typeColor = {
    'visual story': '#1a6b3a',
    'talk':         '#d0116f',
    'thought':      '#7b5ea7',
    'seed':         '#b87333',
  };

  function groupBy(items, mode) {
    const groups = {};
    items.forEach(item => {
      if (mode === 'by collaborator') {
        const keys = item.collaborators.length ? item.collaborators : ['solo'];
        keys.forEach(k => {
          if (!groups[k]) groups[k] = [];
          groups[k].push(item);
        });
      } else {
        const key = mode === 'by year'
          ? String(item.year)
          : (item.publisher || 'personal / other');
        if (!groups[key]) groups[key] = [];
        groups[key].push(item);
      }
    });
    const keys = Object.keys(groups).sort((a, b) =>
      mode === 'by year' ? Number(b) - Number(a) : a.localeCompare(b)
    );
    return keys.map(k => ({ key: k, items: groups[k] }));
  }

  $: grouped = groupBy(allItems, activeMode);

  function selectItem(item) {
    const current = null; // read from store inline isn't reactive here, handle via click
    gardenPanel.update(v => v?.id === item.id ? null : item);
  }
</script>

<svelte:head>
  <title>Surbhi Bhatia — Garden</title>
</svelte:head>

<section class="section garden-section">

  <div class="garden-header">
    <span class="section-title">Garden</span>
    <div class="mode-tabs">
      {#each groupModes as mode}
        <button class="mode-btn" class:active={activeMode === mode} on:click={() => activeMode = mode}>{mode}</button>
      {/each}
    </div>
  </div>

  <!-- Dense flowing text stream -->
  <div class="garden-stream">
    {#each grouped as group, gi}
      {#if gi > 0}<img src="/flower.svg" alt="" class="g-flower g-flower-group" />{/if
      }<span class="g-key">{group.key}</span
      ><span class="g-slash"> / </span
      >{#each group.items as item, i
        }<span
          class="g-item"
          on:click={() => selectItem(item)}
          on:keydown={(e) => e.key === 'Enter' && selectItem(item)}
          role="button"
          tabindex="0"
        ><span class="g-item-title">{item.title}</span></span
        >{#if i < group.items.length - 1}<img src="/flower.svg" alt="" class="g-flower" />{/if}{/each
      }
    {/each}
  </div>

</section>

<style>
  .garden-section {
    max-width: 100%;
  }

  .garden-header {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    margin-bottom: 20px;
  }

  .mode-tabs {
    display: flex;
    gap: 0;
    border-bottom: 1px solid rgba(26,107,58,0.12);
    margin-bottom: -20px;
  }

  .mode-btn {
    font-family: "DM Mono", monospace;
    font-size: 11px;
    font-weight: 400;
    letter-spacing: 0.08em;
    text-transform: lowercase;
    padding: 4px 12px 5px;
    border: none;
    border-bottom: 2px solid transparent;
    background: transparent;
    color: #bbb;
    cursor: pointer;
    transition: all 0.2s;
    margin-bottom: -1px;
  }

  .mode-btn:hover { color: #333; }

  .mode-btn.active {
    color: #111;
    border-bottom-color: #1a6b3a;
  }

  /* ── Dense flowing stream ── */
  .garden-stream {
    font-family: "Inter", sans-serif;
    font-size: 12px;
    font-weight: 300;
    line-height: 2.2;
    color: #333;
  }

  /* Group key — the "title" part: green, slightly bigger than entry */
  .g-key {
    font-family: "Inter", sans-serif;
    font-size: 13px;
    font-weight: 600;
    color: #1a6b3a;
  }

  /* The / separator — green, bold */
  .g-slash {
    color: #1a6b3a;
    font-size: 13px;
    font-weight: 700;
    margin: 0 3px;
  }

  /* Each item — smaller entry text, clickable */
  .g-item {
    display: inline;
    cursor: pointer;
  }

  .g-item:hover .g-item-title {
    color: #d0116f;
  }

  .g-item-title {
    font-size: 11px;
    font-weight: 300;
    color: #444;
    transition: color 0.15s;
  }

  /* flower between items */
  .g-flower {
    display: inline;
    width: 13px;
    height: 13px;
    vertical-align: middle;
    margin: 0 6px;
    opacity: 0.55;
    position: relative;
    top: -1px;
  }

  /* larger flower between groups */
  .g-flower-group {
    width: 16px;
    height: 16px;
    opacity: 0.35;
    margin: 0 10px;
  }
</style>
