<script>
  import { onMount } from 'svelte';
  import { gardenPanel } from '$lib/gardenStore.js';

  const items = [
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

  $: talks     = items.filter(i => i.type === 'talk');
  $: trainings = items.filter(i => i.type === 'training');
  $: panels    = items.filter(i => i.type === 'panel');

  const typeColor = { talk: '#1a6b3a', training: '#1a6b3a', panel: '#1a6b3a' };

  const ejnItem = items.find(i => i.id === '4');
  onMount(() => { gardenPanel.set(ejnItem); });

  function handleClick(item) {
    gardenPanel.set(item);
  }
</script>

<svelte:head>
  <title>Surbhi Bhatia — Talks</title>
</svelte:head>

<section class="section">
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
</style>
