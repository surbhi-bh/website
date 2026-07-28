<script>
  import { onMount, onDestroy } from 'svelte';
  import { gardenPanel } from '$lib/gardenStore.js';

  const items = [
    {
      id: '11',
      type: 'talk',
      year: 2026,
      month: 5,
      title: 'The Other Interface: Designing to minimise the need for shadow systems',
      event: 'GitLab',
      location: 'Bangalore',
      description: 'On how we to minimise shadow data systems in large-scale organisations through better interface design.',
      tags: ['data systems', 'design'],
      image: '/images/talk-the-other-interface.png',
      link: 'https://luma.com/wo9kofo5?tk=iB0AYk',
    },
    {
      id: '12',
      type: 'talk',
      year: 2026,
      month: 7,
      title: 'Chart Party Night',
      event: 'Design Demo Nights',
      location: 'Bangalore',
      description: 'A lightning talk showcasing the process behind my entries for the #30DayChartChallenge this year.',
      tags: ['data visualisation'],
      image: '/images/talk-design-demo-night.jpeg',
      link: '#',
    },
    {
      id: '13',
      type: 'training',
      year: 2026,
      month: 7,
      title: 'Plot Twist: Using AI in dataviz',
      event: 'Lady Sri Ram College, University of Delhi',
      location: 'Virtual',
      description: 'A hands-on introduction to using AI across the data visualisation workflow.',
      tags: ['AI', 'data visualisation'],
      image: '/images/talk-plot-twist.jpeg',
      link: '#',
    },
    {
      id: '14',
      type: 'exhibition',
      year: 2026,
      month: 7,
      title: 'Panes of Heat: A window into hotter days and warmer nights across urban India',
      event: 'Data, Otherwise @ Vizchitra',
      location: 'Bangalore',
      description: 'A physical data installation visualising the gap between recorded air temperature and felt heat across four Indian cities.',
      tags: ['climate', 'data visualisation'],
      image: '/images/exhibition-panes-of-heat.jpg',
      link: 'https://vizchitra.com/2026/exhibition',
    },
    {
      id: '15',
      type: 'talk',
      year: 2026,
      month: 7,
      title: 'Kuch Kuch Data Hai: Bollywood, Visualised',
      event: 'Vizchitra',
      location: 'Bangalore',
      description: 'A visual journey through Bollywood, uncovering the data trails movies leave behind.',
      tags: ['bollywood', 'data visualisation'],
      image: '/images/talk-kuch-kuch-data-hai-stage.jpeg',
      link: 'https://vizchitra.com/2026/sessions/kuch-kuch-data-hai',
    },
    {
      id: '16',
      type: 'talk',
      year: 2026,
      month: 6,
      title: 'DraftGPT: Fast ≠ Finished in Vibe-Coding Data Visualisation',
      event: 'Outlier Conference, Data Visualisation Society',
      location: 'Virtual',
      description: 'A behind-the-scenes walkthrough of the Kontinentalist story, exploring the promises and limits of vibe coding in data visualisation.',
      tags: ['AI', 'data visualisation'],
      image: '/images/talk-outlier-conference-dvs.jpeg',
      link: 'https://outlier2026.vfairs.com/en/speakers-page',
    },
    {
      id: '1',
      type: 'panel',
      year: 2026,
      title: 'Coding for Equality: Policy Levers for a Gender‑Responsive Agri‑AI Ecosystem',
      event: 'MS Swaminathan Research Foundation',
      location: 'Mumbai',
      description: 'On how to build an inclusive AI ecosystem in agriculture to empower women farmers and close systemic gaps.',
      tags: ['gender', 'AI', 'agriculture'],
      image: null,
      link: 'https://ai4agri.maharashtra.gov.in/',
    },
    {
      id: '2',
      type: 'panel',
      year: 2024,
      title: 'Finding Data: Sources to harness for evidence-backed reporting',
      event: 'Science Journalists Association of India (SJAI)',
      location: 'Pune',
      description: 'Spoke about finding credible data in science communication: where to look, how to verify, and when to trust your datasets.',
      tags: ['data journalism', 'science'],
      image: null,
      link: 'https://www.sjai.in/program-details-sjai-conference-2024',
    },
    {
      id: '3',
      type: 'training',
      year: 2024,
      title: 'CGIAR workshop on pitching stories',
      event: 'Consortium of International Agricultural Research Centers (CGIAR)',
      location: 'Online',
      description: 'A practical guide on how to craft story pitches and translate them into published work.',
      tags: ['storytelling', 'journalism'],
      image: null,
      link: '#',
    },
    {
      id: '4',
      type: 'training',
      year: 2024,
      title: 'Environmental Data Journalism Academy',
      event: 'Thibi.co and Earth Journalism Network',
      location: 'Online / Bengaluru',
      description: 'Developed and led training on data-driven storytelling on groundwater issues in India. Mentored 15 journalists in data analysis, quantitative skills, visualisation tools, and turning reportage into compelling narratives.',
      tags: ['data journalism', 'climate', 'data visualisation'],
      image: '/images/training-thibi-ejn.png',
      link: 'https://site.thibi.co/ejn-training/home',
    },
    {
      id: '5',
      type: 'panel',
      year: 2023,
      title: 'Crafting stories about gender-responsive agricultural solutions',
      event: 'Consortium of International Agricultural Research Centers (CGIAR)',
      location: 'Online',
      description: 'How gender-disaggregated data strengthens reporting, analysis, and public understanding.',
      tags: ['gender', 'data journalism'],
      image: null,
      link: 'https://gender.cgiar.org/news/crafting-stories-about-gender-responsive-agricultural-solutions-why-and-how',
    },
    {
      id: '6',
      type: 'talk',
      year: 2023,
      title: 'Using data journalism to promote gender equality',
      event: 'Equal Measures 2030 & Tableau Foundation',
      location: 'Online / India & Kenya',
      description: 'Spoke about data stories on women\'s representation at the global climate summit, and in Indian administrative services, developed using Tableau.',
      tags: ['gender', 'data journalism'],
      image: null,
      link: 'https://equalmeasures2030.org/blogs/using-data-journalism-to-promote-gender-equality-with-surbhi-bhatia/',
    },
    {
      id: '7',
      type: 'talk',
      year: 2022,
      title: 'Mapping India\'s law-tech landscape',
      event: 'DAKSH Centre of Excellence for Law and Technology, IIT-Delhi',
      location: 'Online',
      description: 'Curated discussions on how legal-technology is changing the landscape for courts and lawyers.',
      tags: ['policy', 'data journalism'],
      image: null,
      link: 'https://daksh-lawtech-iitd.org/event/authors-roundtable-i/',
    },
    {
      id: '8',
      type: 'talk',
      year: 2020,
      title: 'Storytelling with Data',
      event: 'Centre for Information Technology and Public Policy, IIIT Bengaluru',
      location: 'Online / Bengaluru',
      description: 'A behind-the-scenes look at how data journalism turns complex issues into clear, visual, and evidence-based stories.',
      tags: ['data journalism', 'storytelling'],
      image: null,
      link: 'https://citapp.iiitb.ac.in/talks___talk_series/talk-by-surbhi-bhatia-on-storytelling-with-data/',
    },
    {
      id: '9',
      type: 'talk',
      year: 2019,
      title: 'Time to resolve insolvencies in India',
      event: 'Young Scholars Initiative, Asia Convening, Hanoi',
      location: 'Hanoi, Vietnam',
      description: 'Presented our work on case disposal rates for various National Company Law Tribunal benches in India.',
      tags: ['policy', 'economy'],
      image: null,
      link: 'https://blog.theleapjournal.org/2019/03/time-to-resolve-insolvencies-in-india.html',
    },
    {
      id: '10',
      type: 'training',
      year: null,
      title: 'Introductory and Intermediate R programming',
      event: 'St. Xavier\'s College (Autonomous)',
      location: 'Mumbai',
      description: 'Taught master\'s students how to tidy datasets using R.',
      tags: ['data journalism', 'coding'],
      image: null,
      link: '#',
    },
  ];

  // Reverse-chronological within each group. `year` may be null (undated
  // trainings sink to the end); `month` is optional and defaults to 0.
  function byRecency(a, b) {
    const ya = a.year ?? -Infinity;
    const yb = b.year ?? -Infinity;
    if (ya !== yb) return yb - ya;
    return (b.month ?? 0) - (a.month ?? 0);
  }
  $: talks       = items.filter(i => i.type === 'talk').sort(byRecency);
  $: trainings   = items.filter(i => i.type === 'training').sort(byRecency);
  $: panels      = items.filter(i => i.type === 'panel').sort(byRecency);
  $: exhibitions = items.filter(i => i.type === 'exhibition').sort(byRecency);

  const typeColor = { talk: '#1a6b3a', training: '#1a6b3a', panel: '#1a6b3a', exhibition: '#1a6b3a' };

  onMount(() => {
    const defaultItem = items.find(i => i.id === '12');
    if (defaultItem) gardenPanel.set(defaultItem);
  });

  // Belt-and-braces: clear the panel when leaving the talks page so the
  // Chart Party Night default doesn't linger on the next route.
  onDestroy(() => {
    gardenPanel.set(null);
  });

  function handleClick(item) {
    gardenPanel.set(item);
  }
</script>

<svelte:head>
  <title>Talks | Surbhi Bhatia</title>
</svelte:head>

<section class="section">
  <!-- TALKS -->
  <div class="group">
    <div class="group-label">Talks</div>
    {#each talks as item}
      <a class="item-card" href={item.link !== '#' ? item.link : null} target={item.link !== '#' ? '_blank' : null} rel="noopener noreferrer" on:click|preventDefault={() => handleClick(item)}>
        <div class="item-year">{item.year}</div>
        <div class="item-title">{item.title}</div>
        <div class="item-event">{item.event}{#if item.location}, <span class="item-location">{item.location}</span>{/if}</div>
        {#if item.description}
          <div class="item-desc">{item.description}</div>
        {/if}
        <div class="item-tags">
          {#each item.tags as tag}
            <span class="item-tag">{tag}</span>
          {/each}
        </div>
      </a>
    {/each}
  </div>

  <!-- TRAININGS -->
  <div class="group">
    <div class="group-label">Trainings</div>
    {#each trainings as item}
      <a class="item-card" href={item.link !== '#' ? item.link : null} target={item.link !== '#' ? '_blank' : null} rel="noopener noreferrer" on:click|preventDefault={() => handleClick(item)}>
        {#if item.year}<div class="item-year">{item.year}</div>{/if}
        <div class="item-title">{item.title}</div>
        <div class="item-event">{item.event}{#if item.location}, <span class="item-location">{item.location}</span>{/if}</div>
        {#if item.description}
          <div class="item-desc">{item.description}</div>
        {/if}
        <div class="item-tags">
          {#each item.tags as tag}
            <span class="item-tag">{tag}</span>
          {/each}
        </div>
      </a>
    {/each}
  </div>

  <!-- PANELS -->
  <div class="group">
    <div class="group-label">Panels</div>
    {#each panels as item}
      <a class="item-card" href={item.link !== '#' ? item.link : null} target={item.link !== '#' ? '_blank' : null} rel="noopener noreferrer" on:click|preventDefault={() => handleClick(item)}>
        <div class="item-year">{item.year}</div>
        <div class="item-title">{item.title}</div>
        <div class="item-event">{item.event}{#if item.location}, <span class="item-location">{item.location}</span>{/if}</div>
        {#if item.description}
          <div class="item-desc">{item.description}</div>
        {/if}
        <div class="item-tags">
          {#each item.tags as tag}
            <span class="item-tag">{tag}</span>
          {/each}
        </div>
      </a>
    {/each}
  </div>

  <!-- EXHIBITIONS -->
  <div class="group">
    <div class="group-label">Exhibitions</div>
    {#each exhibitions as item}
      <a class="item-card" href={item.link !== '#' ? item.link : null} target={item.link !== '#' ? '_blank' : null} rel="noopener noreferrer" on:click|preventDefault={() => handleClick(item)}>
        <div class="item-year">{item.year}</div>
        <div class="item-title">{item.title}</div>
        <div class="item-event">{item.event}{#if item.location}, <span class="item-location">{item.location}</span>{/if}</div>
        {#if item.description}
          <div class="item-desc">{item.description}</div>
        {/if}
        <div class="item-tags">
          {#each item.tags as tag}
            <span class="item-tag">{tag}</span>
          {/each}
        </div>
      </a>
    {/each}
  </div>
</section>

<style>
  .group {
    margin-bottom: 3rem;
  }

  .group-label {
    font-size: 17px;
    font-weight: 700;
    line-height: 1.35;
    color: #1a6b3a;
    margin-bottom: 14px;
  }

  .item-card {
    display: block;
    padding: 18px 0;
    border-bottom: 1px solid rgba(26,107,58,0.08);
    text-decoration: none;
    color: inherit;
    cursor: pointer;
    transition: background 0.15s;
    position: relative;
  }

  .item-card:last-child { border-bottom: none; }
  .item-card:hover { background: rgba(26,107,58,0.02); }

  .item-year {
    font-family: "DM Mono", monospace;
    font-size: 14px;
    font-weight: 500;
    color: #1a6b3a;
    letter-spacing: 0.04em;
    margin-bottom: 6px;
  }

  .item-title {
    font-family: "TT Jenevers", serif;
    font-size: 18px;
    font-weight: 500;
    color: #111;
    line-height: 1.3;
    margin-bottom: 6px;
  }

  .item-event {
    font-family: "DM Mono", monospace;
    font-size: 12px;
    font-weight: 700;
    color: #d0116f;
    letter-spacing: 0.02em;
    margin-bottom: 8px;
    line-height: 1.5;
  }

  .item-location {
    color: #d0116f;
    font-weight: 600;
  }

  .item-desc {
    font-family: "TT Jenevers", serif;
    font-size: 15px;
    font-weight: 400;
    color: #555;
    line-height: 1.6;
    margin-bottom: 12px;
    padding-right: 30%;
  }

  .item-tags {
    display: flex;
    gap: 5px;
    flex-wrap: wrap;
    justify-content: flex-end;
  }

  .item-tag {
    font-family: "DM Mono", monospace;
    font-size: 8px;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: rgba(26,107,58,0.7);
    border: 1px solid rgba(26,107,58,0.25);
    padding: 2px 6px;
  }

  /* ── Mobile: remove right-padding on descriptions, tighten layout ── */
  @media (max-width: 768px) {
    .item-desc { padding-right: 0; }
    .item-title { font-size: 16px; }
    .group { margin-bottom: 2rem; }
  }
</style>
