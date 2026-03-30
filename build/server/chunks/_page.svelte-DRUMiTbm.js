import { h as head, f as ensure_array_like, d as attr_class, k as escape_html, j as attr } from './index-BIKb7vfB.js';

function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let filteredStories;
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
    const allTags = [
      "all",
      ...[...new Set(allStories.flatMap((s) => s.tags))].filter((t) => t !== "award-winning").sort((a, b) => a.localeCompare(b)),
      "award-winning"
    ];
    let activeTag = "all";
    filteredStories = allStories;
    head("kw3m1h", $$renderer2, ($$renderer3) => {
      $$renderer3.title(($$renderer4) => {
        $$renderer4.push(`<title>Surbhi Bhatia — Visual Stories</title>`);
      });
    });
    $$renderer2.push(`<section class="section"><div class="section-header"><span class="section-title">Visual Stories</span></div> <p class="text-body vs-intro svelte-kw3m1h">Several pieces have won international awards — including the SABEW Best in Business Award, The Pudding Cup, and a World Bank Global Partnership finalist recognition.</p> <div class="tag-filters svelte-kw3m1h"><!--[-->`);
    const each_array = ensure_array_like(allTags);
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let tag = each_array[$$index];
      $$renderer2.push(`<button${attr_class("tag-pill svelte-kw3m1h", void 0, { "active": activeTag === tag })}>${escape_html(tag)}</button>`);
    }
    $$renderer2.push(`<!--]--></div> <div class="vs-grid svelte-kw3m1h"><!--[-->`);
    const each_array_1 = ensure_array_like(filteredStories);
    for (let $$index_2 = 0, $$length = each_array_1.length; $$index_2 < $$length; $$index_2++) {
      let story = each_array_1[$$index_2];
      $$renderer2.push(`<a${attr_class("vs-card svelte-kw3m1h", void 0, { "pink": story.pink })}${attr("href", story.link)} target="_blank" rel="noopener noreferrer"><div class="vs-image-wrap svelte-kw3m1h"><img${attr("src", story.image)}${attr("alt", story.title)} loading="lazy" class="svelte-kw3m1h"/></div> <div${attr_class("vs-text-panel svelte-kw3m1h", void 0, { "pink-panel": story.pink })}><div class="vs-tags svelte-kw3m1h"><!--[-->`);
      const each_array_2 = ensure_array_like(story.tags);
      for (let $$index_1 = 0, $$length2 = each_array_2.length; $$index_1 < $$length2; $$index_1++) {
        let t = each_array_2[$$index_1];
        $$renderer2.push(`<span${attr_class("vs-tag svelte-kw3m1h", void 0, { "vs-tag-pink": story.pink })}>${escape_html(t)}</span>`);
      }
      $$renderer2.push(`<!--]--></div> <div class="vs-title svelte-kw3m1h">${escape_html(story.title)}</div> <div class="vs-pub svelte-kw3m1h">${escape_html(story.publisher)} · ${escape_html(story.date)}</div></div></a>`);
    }
    $$renderer2.push(`<!--]--></div></section>`);
  });
}

export { _page as default };
//# sourceMappingURL=_page.svelte-DRUMiTbm.js.map
