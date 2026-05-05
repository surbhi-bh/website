<script>
  // All 15 stories from the Google Sheet (gid=0)
  // Columns: id, title, date, publisher, image, tags, link, description
  const allStories = [
    {
      id: 1,
      title: "Bollywood Falls out of Love",
      date: "Jan 2026",
      publisher: "Kontinentalist",
      image: "/images/kontinentalist_bollywood.png",
      tags: ["entertainment", "art & culture"],
      link: "https://kontinentalist.com/stories/bollywood-falls-out-of-love",
      description: "",
      pink: false
    },
    {
      id: 2,
      title: "Deeper and Deeper: India's Water Race to the Bottom",
      date: "Jun 2025",
      publisher: "Thibi.co / Earth Journalism Network",
      image: "/images/thibi_ejnacademy.png",
      tags: ["climate", "water", "agriculture"],
      link: "https://site.thibi.co/originals/india-groundwater-crisis",
      description: "",
      pink: true
    },
    {
      id: 3,
      title: "Battle of the chocolate bars",
      date: "Aug 2024",
      publisher: "The Pudding Cup Winner '24 · The Lede Program",
      image: "/images/the-pudding-cup-winner.png",
      tags: ["art & culture", "award-winning"],
      link: "https://surbhi-bh.github.io/chocolate-wars/",
      description: "Winner of The Pudding Cup",
      pink: false
    },
    {
      id: 4,
      title: "The rise of Gurgaon",
      date: "Jul 2024",
      publisher: "The Lede Program for Data Journalism",
      image: "/images/lede-gurgaon.png",
      tags: ["cities"],
      link: "https://surbhi-bh.github.io/the-rise-of-gurgaon/",
      description: "Analysis of Gurgaon's development",
      pink: true
    },
    {
      id: 5,
      title: "Shall we call it the Metropolitan Meow-seum of Art?",
      date: "Jul 2024",
      publisher: "The Lede Program for Data Journalism",
      image: "/images/lede-met-cats.png",
      tags: ["art & culture"],
      link: "https://surbhi-bh.github.io/cats-at-the-met-museum/",
      description: "Analysis of cats in the Met Museum collection",
      pink: false
    },
    {
      id: 6,
      title: "Reviving the Arkavathi river using nature-based solutions",
      date: "Feb 2024",
      publisher: "Revisual Labs",
      image: "/images/revisuallabs_arkavathy.png",
      tags: ["climate", "water", "cities"],
      link: "https://csp.wwfindia.org/reviving-the-arkavathi-river/",
      description: "",
      pink: true
    },
    {
      id: 7,
      title: "Climate action needs more women on board",
      date: "Sep 2023",
      publisher: "Global Partnership Finalist '23 · Festival De Datos",
      image: "/images/global-partnership-finalist.png",
      tags: ["gender", "climate", "award-winning"],
      link: "https://surbhi-bh.github.io/sdg17-climate-action-and-gender-equality.html",
      description: "World Bank Global Partnership Finalist",
      pink: false
    },
    {
      id: 8,
      title: "Bollywood's gender revolution: Women are rewriting the rules",
      date: "Mar 2023",
      publisher: "SABEW Award Winner '23 · Nikkei Asia",
      image: "/images/sabew-nikkei-winner.png",
      tags: ["entertainment", "gender", "award-winning"],
      link: "https://asia.nikkei.com/Spotlight/The-Big-Story/Bollywood-s-gender-revolution-Women-are-rewriting-the-rules",
      description: "SABEW Award Winner",
      pink: true
    },
    {
      id: 9,
      title: "Around the Wordle in 365 days",
      date: "Feb 2023",
      publisher: "Personal project",
      image: "/images/words-of-wordle.png",
      tags: ["art & culture"],
      link: "https://surbhi-bh.github.io/words_of_wordle.html",
      description: "Analysis of Wordle words over a year",
      pink: false
    },
    {
      id: 10,
      title: "The data shows Bollywood's struggle with original ideas",
      date: "Aug 2022",
      publisher: "Mint",
      image: "/images/mint-bollywood-remakes.png",
      tags: ["entertainment", "art & culture"],
      link: "https://www.livemint.com/industry/media/bollywoods-eternal-struggle-with-original-ideas-here-s-what-data-shows-11661772790605.html",
      description: "Analysis of Bollywood remakes",
      pink: true
    },
    {
      id: 11,
      title: "Why there have been so few women in India's Administrative Services",
      date: "Jan 2022",
      publisher: "IndiaSpend",
      image: "/images/indiaspend-ias.png",
      tags: ["policy", "gender"],
      link: "https://www.indiaspend.com/gendercheck/why-there-have-been-so-few-women-in-indias-administrative-services-795991",
      description: "Gender analysis in Indian bureaucracy",
      pink: false
    },
    {
      id: 12,
      title: "The real value of India's passport",
      date: "Nov 2021",
      publisher: "The Morning Context",
      image: "/images/tmc-passport.png",
      tags: ["economy", "policy"],
      link: "https://themorningcontext.com/chaos/the-real-value-of-indias-passport",
      description: "Analysis of Indian passport value",
      pink: true
    },
    {
      id: 13,
      title: "Needed: A new relationship contract between RBI and govt",
      date: "Aug 2020",
      publisher: "Mint",
      image: "/images/mint-rbi.png",
      tags: ["economy", "policy"],
      link: "https://www.livemint.com/news/india/needed-a-new-relationship-contract-between-rbi-and-govt-11598025084129.html",
      description: "",
      pink: false
    },
    {
      id: 14,
      title: "India's fiscal performance in nine charts",
      date: "Feb 2020",
      publisher: "Mint",
      image: "/images/mint-fiscal-deficit.png",
      tags: ["economy", "policy"],
      link: "https://www.livemint.com/news/india/india-s-fiscal-performance-in-nine-charts-11581857139177.html",
      description: "Analysis of India's fiscal performance",
      pink: true
    },
    {
      id: 15,
      title: "What the Nobel says about economics",
      date: "Oct 2019",
      publisher: "Mint",
      image: "/images/mint-nobel-prize.png",
      tags: ["economy", "policy"],
      link: "https://www.livemint.com/news/india/what-the-nobel-says-about-economics-11571680373108.html",
      description: "Analysis of Nobel Prize in Economics",
      pink: false
    }
  ];

  // Tags: 'all' first, 'award-winning' last, rest alphabetical
  const allTags = [
    'all',
    ...[...new Set(allStories.flatMap(s => s.tags))]
      .filter(t => t !== 'award-winning')
      .sort((a, b) => a.localeCompare(b)),
    'award-winning'
  ];

  let activeTag = 'all';

  $: filteredStories = activeTag === 'all'
    ? allStories
    : allStories.filter(s => s.tags.includes(activeTag));

  function selectTag(tag) { activeTag = tag; }
</script>

<svelte:head>
  <title>Surbhi Bhatia — Visual Stories</title>
</svelte:head>

<section class="section">
  <!-- Tag filter pills -->
  <div class="tag-filters">
    {#each allTags as tag}
      <button class="tag-pill" class:active={activeTag === tag} on:click={() => selectTag(tag)}>{tag}</button>
    {/each}
  </div>

  <!-- Stories grid -->
  <div class="vs-grid">
    {#each filteredStories as story (story.id)}
        <a class="vs-card" class:pink={story.pink} href={story.link} target="_blank" rel="noopener noreferrer">
          <div class="vs-image-wrap">
            <img src={story.image} alt={story.title} loading="lazy" />
          </div>
          <div class="vs-text-panel" class:pink-panel={story.pink}>
            <div class="vs-tags">
              {#each story.tags as t}
                <span class="vs-tag" class:vs-tag-pink={story.pink}>{t}</span>
              {/each}
            </div>
            <div class="vs-title">{story.title}</div>
            <div class="vs-pub">{story.publisher} · {story.date}</div>
          </div>
        </a>
      {/each}
  </div>
</section>

<style>
  /* ── Intro ── */
  .vs-intro {
    margin-bottom: 16px;
    margin-top: 4px;
  }

  /* ── Tag filter pills ── */
  .tag-filters {
    display: flex;
    flex-wrap: wrap;
    gap: 0;
    margin-bottom: 24px;
  }

  .tag-pill {
    font-family: "DM Mono", monospace;
    font-size: 12px;
    font-weight: 400;
    letter-spacing: 0.08em;
    text-transform: lowercase;
    padding: 2px 10px;
    border: none;
    border-bottom: 1px solid transparent;
    background: transparent;
    color: #ccc;
    cursor: pointer;
    transition: all 0.2s;
    line-height: 1.6;
  }

  .tag-pill:hover { color: #111; }

  .tag-pill.active {
    color: #111;
    border-bottom-color: #d0116f;
  }

  /* ── Grid ── */
  .vs-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
    max-width: 1020px;
  }

  /* ── Card ── */
  .vs-card {
    display: flex;
    flex-direction: column;
    border: 1px solid rgba(26, 107, 58, 0.25);
    color: inherit;
    text-decoration: none;
    transition: transform 0.22s ease, box-shadow 0.22s ease;
    overflow: hidden;
  }

  .vs-card.pink {
    border-color: rgba(196, 30, 90, 0.25);
  }

  .vs-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 24px rgba(26, 107, 58, 0.15);
  }

  .vs-card.pink:hover {
    box-shadow: 0 8px 24px rgba(196, 30, 90, 0.15);
  }

  /* ── Image ── */
  .vs-image-wrap {
    width: 100%;
    padding-top: 70%;
    position: relative;
    overflow: hidden;
    background: #e8ede9;
  }

  .vs-image-wrap img {
    position: absolute !important;
    top: 0 !important;
    left: 0 !important;
    width: 100% !important;
    object-fit: cover !important;
    display: block !important;
    transition: transform 0.35s ease;
  }

  /* ── Text panel — simple green grid (default) ── */
  .vs-text-panel {
    padding: 12px 14px 14px;
    border-top: 1px solid rgba(26, 107, 58, 0.15);
    background-color: #fff;
    background-image:
      linear-gradient(rgba(26, 107, 58, 0.08) 1px, transparent 1px),
      linear-gradient(90deg, rgba(26, 107, 58, 0.08) 1px, transparent 1px);
    background-size: 20px 20px;
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 6px;
    transition: border-top-color 0.22s ease;
  }

  .vs-card:hover .vs-text-panel {
    border-top-color: rgba(26, 107, 58, 0.35);
  }

  /* ── Text panel — simple pink grid (alternate) ── */
  .vs-text-panel.pink-panel {
    border-top: 1px solid rgba(196, 30, 90, 0.15);
    background-image:
      linear-gradient(rgba(196, 30, 90, 0.07) 1px, transparent 1px),
      linear-gradient(90deg, rgba(196, 30, 90, 0.07) 1px, transparent 1px);
    background-size: 20px 20px;
  }

  .vs-card:hover .vs-text-panel.pink-panel {
    border-top-color: rgba(196, 30, 90, 0.35);
  }

  /* ── Tags row ── */
  .vs-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 4px;
  }

  .vs-tag {
    font-family: "DM Mono", monospace;
    font-size: 7px;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: #1a6b3a;
    font-weight: 500;
  }

  .vs-tag + .vs-tag::before {
    content: '·';
    margin-right: 4px;
    opacity: 0.5;
  }

  .vs-tag.vs-tag-pink {
    color: #c41e5a;
  }

  /* ── Title ── */
  .vs-title {
    font-size: 14px;
    font-weight: 700;
    line-height: 1.4;
    color: #111;
  }

  .vs-title a {
    color: inherit;
    text-decoration: none;
  }

  .vs-title a:hover {
    text-decoration: underline;
    text-underline-offset: 2px;
  }

  /* ── Publisher + year ── */
  .vs-pub {
    font-family: "DM Mono", monospace;
    font-size: 8px;
    font-weight: 500;
    color: #999;
    letter-spacing: 0.04em;
    margin-top: auto;
  }
</style>
