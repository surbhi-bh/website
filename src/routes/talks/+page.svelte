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

  const typeColor = { talk: '#1a6b3a', training: '#d0116f', panel: '#7b5ea7' };

  const ejnItem = items.find(i => i.id === '4');
  onMount(() => { gardenPanel.set(ejnItem); });

  function handleClick(item) {
    if (item.id === '4') return; // EJN stays, panel already open
    if (item.link && item.link !== '#') {
      window.open(item.link, '_blank', 'noopener,noreferrer');
    }
  }
</script>

<svelte:head>
  <title>Surbhi Bhatia — Talks</title>
</svelte:head>

<section class="section">
  <div class="section-header">
    <span class="section-title">Talks</span>
  </div>

  <p class="text-body" style="margin-bottom: 2rem; margin-top: 0.25rem;">
    Speaking, teaching, and in conversation — on data journalism, visualisation, and the craft of making numbers matter.
  </p>

  <!-- Talks + Trainings side by side -->
  <div class="two-col">
    <!-- Talks column -->
    <div class="col">
      <div class="col-heading" style="color:{typeColor.talk}">talks</div>
      {#each talks as item}
        <button class="item-row" on:click={() => handleClick(item)}>
          <div class="item-title">{item.title}</div>
          <div class="item-event">
            {item.event}{#if item.location} · <span class="item-location">{item.location}</span>{/if}
          </div>
          <div class="item-meta">
            <span class="item-year">{item.year}</span>
            {#each item.tags as tag}
              <span class="item-tag">{tag}</span>
            {/each}
          </div>
        </button>
      {/each}
    </div>

    <!-- Trainings column -->
    <div class="col">
      <div class="col-heading" style="color:{typeColor.training}">trainings</div>
      {#each trainings as item}
        <button class="item-row" on:click={() => handleClick(item)}>
          <div class="item-title">{item.title}</div>
          <div class="item-event">
            {item.event}{#if item.location} · <span class="item-location">{item.location}</span>{/if}
          </div>
          <div class="item-meta">
            {#if item.year}<span class="item-year">{item.year}</span>{/if}
            {#each item.tags as tag}
              <span class="item-tag">{tag}</span>
            {/each}
          </div>
        </button>
      {/each}
    </div>
  </div>

  <!-- Panels below -->
  <div class="panels-section">
    <div class="col-heading" style="color:{typeColor.panel}">panels</div>
    <div class="panels-list">
      {#each panels as item}
        <button class="panel-row" on:click={() => handleClick(item)}>
          <div class="panel-left">
            <div class="item-title">{item.title}</div>
            <div class="item-event">
              {item.event}{#if item.location} · <span class="item-location">{item.location}</span>{/if}
            </div>
          </div>
          <div class="panel-right">
            <span class="item-year">{item.year}</span>
            <div class="panel-tags">
              {#each item.tags as tag}
                <span class="item-tag">{tag}</span>
              {/each}
            </div>
          </div>
        </button>
      {/each}
    </div>
  </div>

</section>

<style>
  /* ── Two column layout ── */
  .two-col {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0 48px;
    margin-bottom: 2.5rem;
    padding-bottom: 2rem;
    border-bottom: 1px solid rgba(26,107,58,0.1);
  }

  .col {
    display: flex;
    flex-direction: column;
  }

  .col-heading {
    font-family: "DM Mono", monospace;
    font-size: 9px;
    font-weight: 700;
    letter-spacing: 0.16em;
    text-transform: uppercase;
    margin-bottom: 10px;
    padding-bottom: 6px;
    border-bottom: 1px solid rgba(26,107,58,0.1);
  }

  /* ── Item rows ── */
  .item-row {
    display: flex;
    flex-direction: column;
    gap: 3px;
    padding: 9px 0;
    border-bottom: 1px solid rgba(26,107,58,0.06);
    background: none;
    border-left: none;
    border-right: none;
    border-top: none;
    text-align: left;
    cursor: pointer;
    transition: background 0.15s;
    width: 100%;
  }

  .item-row:last-child { border-bottom: none; }

  .item-row:hover { background: rgba(26,107,58,0.03); }

  .item-meta {
    display: flex;
    align-items: center;
    gap: 6px;
    flex-wrap: wrap;
    margin-top: 2px;
  }

  .item-tag {
    font-family: "DM Mono", monospace;
    font-size: 7px;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: rgba(26,107,58,0.5);
    border: 1px solid rgba(26,107,58,0.15);
    padding: 1px 5px;
  }

  .item-title {
    font-size: 13px;
    font-weight: 600;
    color: #111;
    line-height: 1.35;
  }


  .item-event {
    font-family: "DM Mono", monospace;
    font-size: 9px;
    color: #999;
    letter-spacing: 0.03em;
  }

  .item-location { color: #ccc; }

  .item-year {
    font-family: "DM Mono", monospace;
    font-size: 8px;
    color: #bbb;
    letter-spacing: 0.06em;
  }

  /* ── Panels section ── */
  .panels-section {
    margin-top: 0;
  }

  .panels-list {
    display: flex;
    flex-direction: column;
  }

  .panel-row {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 24px;
    padding: 9px 0;
    border-bottom: 1px solid rgba(26,107,58,0.06);
    background: none;
    border-left: none;
    border-right: none;
    border-top: none;
    text-align: left;
    cursor: pointer;
    transition: background 0.15s;
    width: 100%;
  }

  .panel-row:last-child { border-bottom: none; }
  .panel-row:hover { background: rgba(26,107,58,0.03); }

  .panel-left {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 3px;
  }

  .panel-right {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 4px;
    flex-shrink: 0;
  }

  .panel-tags {
    display: flex;
    gap: 4px;
    flex-wrap: wrap;
    justify-content: flex-end;
  }
</style>
