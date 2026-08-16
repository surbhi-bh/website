<script>
  import { gardenPanel } from '$lib/gardenStore.js';

  const allItems = [
    { id: 'vs-16', type: 'visual story', year: 2026, title: 'Panes of Heat', publisher: 'Data, Otherwise @ VizChitra 2026', collaborators: ['Kashvi Bansal', 'Parth Bisen'], tags: ['climate'], link: 'https://surbhi-bh.github.io/panes-of-heat/', image: '/images/panes-of-heat.png', description: 'Data installation that uses UTCI data to show difference between the heat we measure and the heat we experience' },
    { id: 'vs-1',  type: 'visual story', year: 2026, title: 'Bollywood Falls out of Love', publisher: 'Kontinentalist', collaborators: ['Griselda Gabriele'], tags: ['entertainment', 'art & culture'], link: 'https://kontinentalist.com/stories/bollywood-falls-out-of-love', image: '/images/kontinentalist_bollywood.png', description: '' },
    { id: 'vs-2',  type: 'visual story', year: 2025, title: "Deeper and Deeper: India's Water Race to the Bottom", publisher: 'Thibi.co and Earth Journalism Network', collaborators: ['Eva Constantaras', 'Aika Rey', 'Lu Min Lwin', 'Kavya Sukumar', 'Thi Ha Ko Ko', 'Sweta Daga', 'Supriya Vohra', 'Nihar Gokhale', 'Yan Naung Oak'], tags: ['climate', 'water', 'agriculture'], link: 'https://site.thibi.co/originals/india-groundwater-crisis', image: '/images/thibi_ejnacademy.png', description: '' },
    { id: 'vs-3',  type: 'visual story', year: 2024, title: 'Battle of the chocolate bars', publisher: 'The Lede Program for Data Journalism', collaborators: ['My lovely classmates at Lede\'24'], tags: ['art & culture', 'award-winning'], link: 'https://surbhi-bh.github.io/chocolate-wars/', image: '/images/the-pudding-cup-winner.png', description: 'Winner of The Pudding Cup' },
    { id: 'vs-4',  type: 'visual story', year: 2024, title: 'The rise of Gurgaon', publisher: 'The Lede Program for Data Journalism', collaborators: [], tags: ['cities'], link: 'https://surbhi-bh.github.io/the-rise-of-gurgaon/', image: '/images/lede-gurgaon.png', description: '' },
    { id: 'vs-5',  type: 'visual story', year: 2024, title: 'Shall we call it the Metropolitan Meow-seum of Art?', publisher: 'The Lede Program for Data Journalism', collaborators: [], tags: ['art & culture'], link: 'https://surbhi-bh.github.io/cats-at-the-met-museum/', image: '/images/lede-met-cats.png', description: '' },
    { id: 'vs-6',  type: 'visual story', year: 2024, title: 'Reviving the Arkavathi river using nature-based solutions', publisher: 'Revisual Labs', collaborators: ['Aman Bhargava', 'Swathi Singh', 'Gurman Bhatia'], tags: ['climate', 'water', 'cities'], link: 'https://csp.wwfindia.org/reviving-the-arkavathi-river/', image: '/images/revisuallabs_arkavathy.png', description: '' },
    { id: 'vs-7',  type: 'visual story', year: 2023, title: 'Climate action needs more women on board', publisher: 'Festival De Datos', collaborators: [], tags: ['gender', 'climate', 'award-winning'], link: 'https://surbhi-bh.github.io/sdg17-climate-action-and-gender-equality.html', image: '/images/global-partnership-finalist.png', description: 'World Bank Global Partnership Finalist' },
    { id: 'vs-8',  type: 'visual story', year: 2023, title: "Bollywood's gender revolution: Women are rewriting the rules", publisher: 'Nikkei Asia', collaborators: ['Jui Chakravorty', 'Kiran Sharma', 'Sayan Chakraborty'], tags: ['entertainment', 'gender', 'award-winning'], link: 'https://asia.nikkei.com/Spotlight/The-Big-Story/Bollywood-s-gender-revolution-Women-are-rewriting-the-rules', image: '/images/sabew-nikkei-winner.png', description: 'SABEW Award Winner' },
    { id: 'vs-9',  type: 'visual story', year: 2023, title: 'Around the Wordle in 365 days', publisher: '', collaborators: [], tags: ['art & culture'], link: 'https://surbhi-bh.github.io/words_of_wordle.html', image: '/images/words-of-wordle.png', description: '' },
    { id: 'vs-10', type: 'visual story', year: 2022, title: "The data shows Bollywood's struggle with original ideas", publisher: 'Mint', collaborators: [], tags: ['entertainment', 'art & culture'], link: 'https://www.livemint.com/industry/media/bollywoods-eternal-struggle-with-original-ideas-here-s-what-data-shows-11661772790605.html', image: '/images/mint-bollywood-remakes.png', description: '' },
    { id: 'vs-11', type: 'visual story', year: 2022, title: "Why there have been so few women in India's Administrative Services", publisher: 'IndiaSpend', collaborators: ['Akshi Chawla'], tags: ['policy', 'gender'], link: 'https://www.indiaspend.com/gendercheck/why-there-have-been-so-few-women-in-indias-administrative-services-795991', image: '/images/indiaspend-ias.png', description: '' },
    { id: 'vs-12', type: 'visual story', year: 2021, title: "The real value of India's passport", publisher: 'The Morning Context', collaborators: ['Omkar Khandekar'], tags: ['economy', 'policy'], link: 'https://themorningcontext.com/chaos/the-real-value-of-indias-passport', image: '/images/tmc-passport.png', description: '' },
    { id: 'vs-13', type: 'visual story', year: 2020, title: 'Needed: A new relationship contract between RBI and govt', publisher: 'Mint', collaborators: ['Pramit Bhattacharya'], tags: ['economy', 'policy'], link: 'https://www.livemint.com/news/india/needed-a-new-relationship-contract-between-rbi-and-govt-11598025084129.html', image: '/images/mint-rbi.png', description: '' },
    { id: 'vs-14', type: 'visual story', year: 2020, title: "India's fiscal performance in nine charts", publisher: 'Mint', collaborators: [], tags: ['economy', 'policy'], link: 'https://www.livemint.com/news/india/india-s-fiscal-performance-in-nine-charts-11581857139177.html', image: '/images/mint-fiscal-deficit.png', description: '' },
    { id: 'vs-15', type: 'visual story', year: 2019, title: 'What the Nobel says about economics', publisher: 'Mint', collaborators: ['Vishnu Padmanabhan'], tags: ['economy', 'policy'], link: 'https://www.livemint.com/news/india/what-the-nobel-says-about-economics-11571680373108.html', image: '/images/mint-nobel-prize.png', description: '' },
    { id: 'vs-25', type: 'visual story', year: 2023, title: "Shark Tank and India's startup story, in charts", publisher: 'Mint', collaborators: [], tags: ['entertainment', 'economy'], link: 'https://www.livemint.com/companies/start-ups/shark-tank-and-india-s-startup-story-in-charts-11681325377779.html', image: '/images/mint-shark-tank.png', description: '' },
    { id: 'vs-26', type: 'visual story', year: 2022, title: 'Five charts tell the floundering story of multiplexes', publisher: 'Mint', collaborators: ['Saurabh Modi'], tags: ['entertainment'], link: 'https://www.livemint.com/industry/media/multiplexes-long-road-to-recovery-in-charts-11668616460692.html', image: '/images/mint-multiplexes.png', description: '' },
    { id: 'vs-17', type: 'visual story', year: 2020, title: "Mapped: How India's boundaries evolved since 1947", publisher: 'Mint', collaborators: ['Sriharsha Devulapalli'], tags: ['policy'], link: 'https://www.livemint.com/news/india/mapped-how-india-s-boundaries-evolved-since-1947-11597045290911.html', image: '/images/mint-india-boundary.png', description: '' },
    { id: 'vs-18', type: 'visual story', year: 2020, title: "Are India's youth giving up on marriage?", publisher: 'Mint', collaborators: ['Sriharsha Devulapalli'], tags: [], link: 'https://www.livemint.com/news/india/are-india-s-youth-giving-up-on-marriage-11590763737075.html', image: '/images/mint-youth-marriage.png', description: '' },
    { id: 'vs-19', type: 'visual story', year: 2020, title: "Mapping Mumbai's slum challenge in coronavirus battle", publisher: 'Mint', collaborators: ['Sneha Alexander'], tags: ['cities'], link: 'https://www.livemint.com/news/india/mapping-mumbai-s-slum-challenge-in-coronavirus-battle-11586334352966.html', image: '/images/mint-mumbai-covid.png', description: '' },
    { id: 'vs-20', type: 'visual story', year: 2020, title: 'The economic impact of coronavirus and the response so far, in nine charts', publisher: 'Mint', collaborators: ['Pramit Bhattacharya'], tags: ['economy'], link: 'https://www.livemint.com/news/india/the-economic-impact-of-coronavirus-and-the-response-so-far-in-nine-charts-11584334473089.html', image: '/images/mint-covid-response.png', description: '' },
    { id: 'vs-21', type: 'visual story', year: 2020, title: 'More women are joining corporate boards but very few get the corner office', publisher: 'Mint', collaborators: ['Pramit Bhattacharya'], tags: ['gender'], link: 'https://www.livemint.com/companies/news/more-women-are-joining-corporate-boards-but-very-few-get-the-corner-office-11583133282585.html', image: '/images/mint-women-corporate.png', description: '' },
    { id: 'vs-22', type: 'visual story', year: 2020, title: 'Can UBI re-ignite the economy?', publisher: 'Mint', collaborators: ['Vishnu Padmanabhan'], tags: ['economy', 'policy'], link: 'https://www.livemint.com/news/india/can-ubi-reignite-the-economy-11580293689566.html', image: '/images/mint-ubi.png', description: '' },
    { id: 'vs-23', type: 'visual story', year: 2020, title: 'Long and short of budget speeches', publisher: 'Mint', collaborators: ['Sriharsha Devulapalli'], tags: ['economy', 'policy'], link: 'https://www.livemint.com/budget/news/long-and-short-of-budget-speeches-11580055345565.html', image: '/images/mint-budget-speech.png', description: '' },
    { id: 'vs-24', type: 'visual story', year: 2020, title: 'Rich states hit hard by slowdown', publisher: 'Mint', collaborators: [], tags: ['economy', 'policy'], link: 'https://www.livemint.com/news/india/rich-states-hit-hard-in-slowdown-11578389525946.html', image: '/images/mint-state-tracker.png', description: '' },
    { id: 'vs-27', type: 'visual story', year: 2019, title: 'Rethinking insurance on deposits', publisher: 'Mint', collaborators: [], tags: ['economy', 'policy'], link: 'https://www.livemint.com/industry/banking/rethinking-deposit-insurance-for-indian-banks-11576479588631.html', image: '/images/mint-deposit-insurance.png', description: '' },
    { id: 'tk-11', type: 'talk', year: 2026, title: 'The Other Interface: Designing to minimise the need for shadow systems', publisher: 'GitLab', collaborators: [], tags: ['data systems', 'design'], link: 'https://luma.com/wo9kofo5?tk=iB0AYk', image: '/images/talk-the-other-interface.png', description: 'On how we to minimise shadow data systems in large-scale organisations through better interface design.' },
    { id: 'tk-12', type: 'talk', year: 2026, title: 'Chart Party Night', publisher: 'Design Demo Nights', collaborators: [], tags: ['data visualisation'], link: '#', image: '/images/talk-design-demo-night.jpeg', description: 'A lightning talk showcasing the process behind my entries for the #30DayChartChallenge this year.' },
    { id: 'tk-13', type: 'training', year: 2026, title: 'Plot Twist: Using AI in dataviz', publisher: 'Lady Sri Ram College, University of Delhi', collaborators: [], tags: ['AI', 'data visualisation'], link: '#', image: '/images/talk-plot-twist.jpeg', description: 'A hands-on introduction to using AI across the data visualisation workflow.' },
    { id: 'tk-14', type: 'exhibition', year: 2026, title: 'Panes of Heat: A window into hotter days and warmer nights across urban India', publisher: 'Data, Otherwise @ Vizchitra', collaborators: [], tags: ['climate', 'data visualisation'], link: 'https://vizchitra.com/2026/exhibition', image: '/images/exhibition-panes-of-heat.jpg', description: 'A physical data installation visualising the gap between recorded air temperature and felt heat across four Indian cities.' },
    { id: 'tk-15', type: 'talk', year: 2026, title: 'Kuch Kuch Data Hai: Bollywood, Visualised', publisher: 'Vizchitra', collaborators: [], tags: ['bollywood', 'data visualisation'], link: 'https://vizchitra.com/2026/sessions/kuch-kuch-data-hai', image: '/images/talk-kuch-kuch-data-hai-stage.jpeg', description: 'A visual journey through Bollywood, uncovering the data trails movies leave behind.' },
    { id: 'tk-16', type: 'talk', year: 2026, title: 'DraftGPT: Fast ≠ Finished in Vibe-Coding Data Visualisation', publisher: 'Outlier Conference, Data Visualisation Society', collaborators: [], tags: ['AI', 'data visualisation'], link: 'https://outlier2026.vfairs.com/en/speakers-page', image: '/images/talk-outlier-conference-dvs.jpeg', description: 'A behind-the-scenes walkthrough of the Kontinentalist story, exploring the promises and limits of vibe coding in data visualisation.' },
    { id: 'tk-p1', type: 'panel', year: 2026, title: 'Coding for Equality: Policy Levers for a Gender‑Responsive Agri‑AI Ecosystem', publisher: 'MS Swaminathan Research Foundation', collaborators: [], tags: ['gender', 'AI', 'agriculture'], link: 'https://ai4agri.maharashtra.gov.in/', image: '/images/panel-mssrf.jpeg', description: 'On how to build an inclusive AI ecosystem in agriculture to empower women farmers and close systemic gaps.' },
    { id: 'tk-p2', type: 'panel', year: 2024, title: 'Finding Data: Sources to harness for evidence-backed reporting', publisher: 'Science Journalists Association of India (SJAI)', collaborators: [], tags: ['data journalism', 'science'], link: 'https://www.sjai.in/program-details-sjai-conference-2024', image: '/images/panel-sjai.jpeg', description: 'Spoke about finding credible data in science communication: where to look, how to verify, and when to trust your datasets.' },
    { id: 'tk-t3', type: 'training', year: 2024, title: 'CGIAR workshop on pitching stories', publisher: 'Consortium of International Agricultural Research Centers (CGIAR)', collaborators: [], tags: ['storytelling', 'journalism'], link: '#', description: 'A practical guide on how to craft story pitches and translate them into published work.' },
    { id: 'tk-t4', type: 'training', year: 2024, title: 'Environmental Data Journalism Academy', publisher: 'Thibi.co and Earth Journalism Network', collaborators: [], tags: ['data journalism', 'climate', 'data visualisation'], link: 'https://site.thibi.co/ejn-training/home', image: '/images/training-thibi-ejn.png', description: 'Developed and led training on data-driven storytelling on groundwater issues in India. Mentored 15 journalists in data analysis, quantitative skills, visualisation tools, and turning reportage into compelling narratives.' },
    { id: 'tk-p5', type: 'panel', year: 2023, title: 'Crafting stories about gender-responsive agricultural solutions', publisher: 'Consortium of International Agricultural Research Centers (CGIAR)', collaborators: [], tags: ['gender', 'data journalism'], link: 'https://gender.cgiar.org/news/crafting-stories-about-gender-responsive-agricultural-solutions-why-and-how', image: '/images/panel-cgiar-online.jpeg', description: 'How gender-disaggregated data strengthens reporting, analysis, and public understanding.' },
    { id: 'tk-1',  type: 'talk', year: 2023, title: 'Using data journalism to promote gender equality', publisher: 'Equal Measures 2030 & Tableau Foundation', collaborators: [], tags: ['gender', 'data journalism'], link: 'https://equalmeasures2030.org/blogs/using-data-journalism-to-promote-gender-equality-with-surbhi-bhatia/', description: 'Spoke about data stories on women\'s representation at the global climate summit, and in Indian administrative services, developed using Tableau.' },
    { id: 'tk-2',  type: 'talk', year: 2022, title: "Mapping India's law-tech landscape", publisher: 'DAKSH Centre of Excellence for Law and Technology, IIT-Delhi', collaborators: [], tags: ['policy', 'data journalism'], link: 'https://daksh-lawtech-iitd.org/event/authors-roundtable-i/', description: 'Curated discussions on how legal-technology is changing the landscape for courts and lawyers.' },
    { id: 'tk-8',  type: 'talk', year: 2020, title: 'Storytelling with Data', publisher: 'Centre for Information Technology and Public Policy, IIIT Bengaluru', collaborators: [], tags: ['data journalism', 'storytelling'], link: 'https://citapp.iiitb.ac.in/talks___talk_series/talk-by-surbhi-bhatia-on-storytelling-with-data/', description: 'A behind-the-scenes look at how data journalism turns complex issues into clear, visual, and evidence-based stories.' },
    { id: 'tk-9',  type: 'talk', year: 2019, title: 'Time to resolve insolvencies in India', publisher: 'Young Scholars Initiative, Asia Convening, Hanoi', collaborators: [], tags: ['policy', 'economy'], link: 'https://blog.theleapjournal.org/2019/03/time-to-resolve-insolvencies-in-india.html', description: 'Presented our work on case disposal rates for various National Company Law Tribunal benches in India.' },
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
    const keys = Object.keys(groups)
      .filter(k => k !== 'personal / other')
      .sort((a, b) => mode === 'by year' ? Number(b) - Number(a) : a.localeCompare(b));
    return keys.map(k => ({ key: k, items: groups[k] }));
  }

  $: grouped = groupBy(allItems, activeMode);

  function selectItem(item) {
    const current = null; // read from store inline isn't reactive here, handle via click
    gardenPanel.update(v => v?.id === item.id ? null : item);
  }
</script>

<svelte:head>
  <title>Garden | Surbhi Bhatia</title>
</svelte:head>

<section class="section garden-section">

  <div class="garden-header">
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
      }<span class="g-key" class:g-key-num={/^\d+$/.test(group.key)}>{group.key}</span
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

  /* Numeric keys (years) read smaller than letters at the same font-size — bump them */
  .g-key-num {
    font-size: 15px;
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
