import { h as head, l as attr_style, f as ensure_array_like, k as escape_html, n as stringify } from './index-BIKb7vfB.js';

function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let talks, trainings, panels;
    const items = [
      {
        id: "1",
        type: "panel",
        year: 2026,
        title: "Coding for Equality: Policy Levers for a Gender‑Responsive Agri‑AI Ecosystem",
        event: "MS Swaminathan Research Foundation",
        location: "Mumbai",
        description: "On how to build an inclusive AI ecosystem in agriculture to empower women farmers and close systemic gaps.",
        tags: ["gender", "AI", "agriculture"],
        image: null,
        link: "https://ai4agri.maharashtra.gov.in/"
      },
      {
        id: "2",
        type: "panel",
        year: 2024,
        title: "Finding Data: Sources to harness for evidence-backed reporting",
        event: "Science Journalists Association of India (SJAI)",
        location: "Pune",
        description: "Spoke about finding credible data in science communication: where to look, how to verify, and when to trust your datasets.",
        tags: ["data journalism", "science"],
        image: null,
        link: "https://www.sjai.in/program-details-sjai-conference-2024"
      },
      {
        id: "3",
        type: "training",
        year: 2024,
        title: "CGIAR workshop on pitching stories",
        event: "Consortium of International Agricultural Research Centers (CGIAR)",
        location: "Online",
        description: "A practical guide on how to craft story pitches and translate them into published work.",
        tags: ["storytelling", "journalism"],
        image: null,
        link: "#"
      },
      {
        id: "4",
        type: "training",
        year: 2024,
        title: "Environmental Data Journalism Academy",
        event: "Thibi.co and Earth Journalism Network",
        location: "Online / Bengaluru",
        description: "Developed and led training on data-driven storytelling on groundwater issues in India. Mentored 15 journalists in data analysis, quantitative skills, visualisation tools, and turning reportage into compelling narratives.",
        tags: ["data journalism", "climate", "data visualisation"],
        image: "/images/training-thibi-ejn.png",
        link: "https://site.thibi.co/ejn-training/home"
      },
      {
        id: "5",
        type: "panel",
        year: 2023,
        title: "Crafting stories about gender-responsive agricultural solutions",
        event: "Consortium of International Agricultural Research Centers (CGIAR)",
        location: "Online",
        description: "How gender-disaggregated data strengthens reporting, analysis, and public understanding.",
        tags: ["gender", "data journalism"],
        image: null,
        link: "https://gender.cgiar.org/news/crafting-stories-about-gender-responsive-agricultural-solutions-why-and-how"
      },
      {
        id: "6",
        type: "talk",
        year: 2023,
        title: "Using data journalism to promote gender equality",
        event: "Equal Measures 2030 & Tableau Foundation",
        location: "Online / India & Kenya",
        description: "Spoke about data stories on women's representation at the global climate summit, and in Indian administrative services, developed using Tableau.",
        tags: ["gender", "data journalism"],
        image: null,
        link: "https://equalmeasures2030.org/blogs/using-data-journalism-to-promote-gender-equality-with-surbhi-bhatia/"
      },
      {
        id: "7",
        type: "talk",
        year: 2022,
        title: "Mapping India's law-tech landscape",
        event: "DAKSH Centre of Excellence for Law and Technology, IIT-Delhi",
        location: "Online",
        description: "Curated discussions on how legal-technology is changing the landscape for courts and lawyers.",
        tags: ["policy", "data journalism"],
        image: null,
        link: "https://daksh-lawtech-iitd.org/event/authors-roundtable-i/"
      },
      {
        id: "8",
        type: "talk",
        year: 2020,
        title: "Storytelling with Data",
        event: "Centre for Information Technology and Public Policy, IIIT Bengaluru",
        location: "Online / Bengaluru",
        description: "A behind-the-scenes look at how data journalism turns complex issues into clear, visual, and evidence-based stories.",
        tags: ["data journalism", "storytelling"],
        image: null,
        link: "https://citapp.iiitb.ac.in/talks___talk_series/talk-by-surbhi-bhatia-on-storytelling-with-data/"
      },
      {
        id: "9",
        type: "talk",
        year: 2019,
        title: "Time to resolve insolvencies in India",
        event: "Young Scholars Initiative, Asia Convening, Hanoi",
        location: "Hanoi, Vietnam",
        description: "Presented our work on case disposal rates for various National Company Law Tribunal benches in India.",
        tags: ["policy", "economy"],
        image: null,
        link: "https://blog.theleapjournal.org/2019/03/time-to-resolve-insolvencies-in-india.html"
      },
      {
        id: "10",
        type: "training",
        year: null,
        title: "Introductory and Intermediate R programming",
        event: "St. Xavier's College (Autonomous)",
        location: "Mumbai",
        description: "Taught master's students how to tidy datasets using R.",
        tags: ["data journalism", "coding"],
        image: null,
        link: "#"
      }
    ];
    const typeColor = { talk: "#1a6b3a", training: "#d0116f", panel: "#7b5ea7" };
    items.find((i) => i.id === "4");
    talks = items.filter((i) => i.type === "talk");
    trainings = items.filter((i) => i.type === "training");
    panels = items.filter((i) => i.type === "panel");
    head("1y661i0", $$renderer2, ($$renderer3) => {
      $$renderer3.title(($$renderer4) => {
        $$renderer4.push(`<title>Surbhi Bhatia — Talks</title>`);
      });
    });
    $$renderer2.push(`<section class="section"><div class="section-header"><span class="section-title">Talks</span></div> <p class="text-body" style="margin-bottom: 2rem; margin-top: 0.25rem;">Speaking, teaching, and in conversation — on data journalism, visualisation, and the craft of making numbers matter.</p> <div class="two-col svelte-1y661i0"><div class="col svelte-1y661i0"><div class="col-heading svelte-1y661i0"${attr_style(`color:${stringify(typeColor.talk)}`)}>talks</div> <!--[-->`);
    const each_array = ensure_array_like(talks);
    for (let $$index_1 = 0, $$length = each_array.length; $$index_1 < $$length; $$index_1++) {
      let item = each_array[$$index_1];
      $$renderer2.push(`<button class="item-row svelte-1y661i0"><div class="item-title svelte-1y661i0">${escape_html(item.title)}</div> <div class="item-event svelte-1y661i0">${escape_html(item.event)}`);
      if (item.location) {
        $$renderer2.push("<!--[0-->");
        $$renderer2.push(`· <span class="item-location svelte-1y661i0">${escape_html(item.location)}</span>`);
      } else {
        $$renderer2.push("<!--[-1-->");
      }
      $$renderer2.push(`<!--]--></div> <div class="item-meta svelte-1y661i0"><span class="item-year svelte-1y661i0">${escape_html(item.year)}</span> <!--[-->`);
      const each_array_1 = ensure_array_like(item.tags);
      for (let $$index = 0, $$length2 = each_array_1.length; $$index < $$length2; $$index++) {
        let tag = each_array_1[$$index];
        $$renderer2.push(`<span class="item-tag svelte-1y661i0">${escape_html(tag)}</span>`);
      }
      $$renderer2.push(`<!--]--></div></button>`);
    }
    $$renderer2.push(`<!--]--></div> <div class="col svelte-1y661i0"><div class="col-heading svelte-1y661i0"${attr_style(`color:${stringify(typeColor.training)}`)}>trainings</div> <!--[-->`);
    const each_array_2 = ensure_array_like(trainings);
    for (let $$index_3 = 0, $$length = each_array_2.length; $$index_3 < $$length; $$index_3++) {
      let item = each_array_2[$$index_3];
      $$renderer2.push(`<button class="item-row svelte-1y661i0"><div class="item-title svelte-1y661i0">${escape_html(item.title)}</div> <div class="item-event svelte-1y661i0">${escape_html(item.event)}`);
      if (item.location) {
        $$renderer2.push("<!--[0-->");
        $$renderer2.push(`· <span class="item-location svelte-1y661i0">${escape_html(item.location)}</span>`);
      } else {
        $$renderer2.push("<!--[-1-->");
      }
      $$renderer2.push(`<!--]--></div> <div class="item-meta svelte-1y661i0">`);
      if (item.year) {
        $$renderer2.push("<!--[0-->");
        $$renderer2.push(`<span class="item-year svelte-1y661i0">${escape_html(item.year)}</span>`);
      } else {
        $$renderer2.push("<!--[-1-->");
      }
      $$renderer2.push(`<!--]--> <!--[-->`);
      const each_array_3 = ensure_array_like(item.tags);
      for (let $$index_2 = 0, $$length2 = each_array_3.length; $$index_2 < $$length2; $$index_2++) {
        let tag = each_array_3[$$index_2];
        $$renderer2.push(`<span class="item-tag svelte-1y661i0">${escape_html(tag)}</span>`);
      }
      $$renderer2.push(`<!--]--></div></button>`);
    }
    $$renderer2.push(`<!--]--></div></div> <div class="panels-section svelte-1y661i0"><div class="col-heading svelte-1y661i0"${attr_style(`color:${stringify(typeColor.panel)}`)}>panels</div> <div class="panels-list svelte-1y661i0"><!--[-->`);
    const each_array_4 = ensure_array_like(panels);
    for (let $$index_5 = 0, $$length = each_array_4.length; $$index_5 < $$length; $$index_5++) {
      let item = each_array_4[$$index_5];
      $$renderer2.push(`<button class="panel-row svelte-1y661i0"><div class="panel-left svelte-1y661i0"><div class="item-title svelte-1y661i0">${escape_html(item.title)}</div> <div class="item-event svelte-1y661i0">${escape_html(item.event)}`);
      if (item.location) {
        $$renderer2.push("<!--[0-->");
        $$renderer2.push(`· <span class="item-location svelte-1y661i0">${escape_html(item.location)}</span>`);
      } else {
        $$renderer2.push("<!--[-1-->");
      }
      $$renderer2.push(`<!--]--></div></div> <div class="panel-right svelte-1y661i0"><span class="item-year svelte-1y661i0">${escape_html(item.year)}</span> <div class="panel-tags svelte-1y661i0"><!--[-->`);
      const each_array_5 = ensure_array_like(item.tags);
      for (let $$index_4 = 0, $$length2 = each_array_5.length; $$index_4 < $$length2; $$index_4++) {
        let tag = each_array_5[$$index_4];
        $$renderer2.push(`<span class="item-tag svelte-1y661i0">${escape_html(tag)}</span>`);
      }
      $$renderer2.push(`<!--]--></div></div></button>`);
    }
    $$renderer2.push(`<!--]--></div></div></section>`);
  });
}

export { _page as default };
//# sourceMappingURL=_page.svelte-CsMRAMhI.js.map
