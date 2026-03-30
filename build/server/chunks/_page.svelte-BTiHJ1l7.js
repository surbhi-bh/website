import { h as head, f as ensure_array_like, k as escape_html, d as attr_class, j as attr, n as stringify } from './index-BIKb7vfB.js';

function _page($$renderer) {
  const weeks = [
    { label: "Week 1", days: [1, 2, 3, 4, 5, 6, 7] },
    { label: "Week 2", days: [8, 9, 10, 11, 12, 13, 14] },
    { label: "Week 3", days: [15, 16, 17, 18, 19, 20, 21] },
    { label: "Week 4", days: [22, 23, 24, 25, 26, 27, 28, 29, 30] }
  ];
  const GITHUB_BASE = "/images/30daychartchallenge-2026";
  const dayImages = { 1: `${GITHUB_BASE}/day1.png` };
  const dayText = {
    1: {
      title: "What goes into the sambar",
      subtitle: "Part-to-whole · South Indian recipes across 5 states"
    }
  };
  const SHEET_EMBED = "https://docs.google.com/spreadsheets/d/1gIfy29NpunmZFod69Y3bSmU_Wf3rKz3KDAQa6k-KwWM/pubhtml?widget=true&headers=false";
  head("1salapz", $$renderer, ($$renderer2) => {
    $$renderer2.title(($$renderer3) => {
      $$renderer3.push(`<title>30-Day Chart Challenge 2026 — Surbhi Bhatia</title>`);
    });
  });
  $$renderer.push(`<section class="section challenge-section svelte-1salapz"><div class="challenge-header svelte-1salapz"><a href="/vizardry" class="back-link svelte-1salapz">← vizardry</a> <div class="tag-line svelte-1salapz"><span class="challenge-tag svelte-1salapz">30-day-chart-challenge 2026</span></div> <h1 class="challenge-title svelte-1salapz">A chart a day keeps the fog away</h1> <div class="challenge-byline svelte-1salapz">Surbhi Bhatia</div> <p class="challenge-intro svelte-1salapz">My experience doing the 30-day chart challenge — one chart every day in April, exploring a different prompt, dataset, or technique each time.</p></div> <div class="weeks-outer svelte-1salapz"><!--[-->`);
  const each_array = ensure_array_like([[0, 1], [2, 3]]);
  for (let $$index_2 = 0, $$length = each_array.length; $$index_2 < $$length; $$index_2++) {
    let pair = each_array[$$index_2];
    $$renderer.push(`<div class="weeks-row svelte-1salapz"><!--[-->`);
    const each_array_1 = ensure_array_like(pair);
    for (let $$index_1 = 0, $$length2 = each_array_1.length; $$index_1 < $$length2; $$index_1++) {
      let wi = each_array_1[$$index_1];
      const week = weeks[wi];
      $$renderer.push(`<div class="week-col svelte-1salapz"><div class="week-label svelte-1salapz">${escape_html(week.label)}</div> <!--[-->`);
      const each_array_2 = ensure_array_like(week.days);
      for (let $$index = 0, $$length3 = each_array_2.length; $$index < $$length3; $$index++) {
        let day = each_array_2[$$index];
        $$renderer.push(`<div${attr_class("tile svelte-1salapz", void 0, { "has-image": !!dayImages[day] })}><div class="tile-img svelte-1salapz">`);
        if (dayImages[day]) {
          $$renderer.push("<!--[0-->");
          $$renderer.push(`<img${attr("src", dayImages[day])}${attr("alt", `Day ${stringify(day)}`)} class="svelte-1salapz"/>`);
        } else {
          $$renderer.push("<!--[-1-->");
          $$renderer.push(`<div class="tile-placeholder svelte-1salapz"></div>`);
        }
        $$renderer.push(`<!--]--></div> <div class="tile-text svelte-1salapz"><div class="tile-day svelte-1salapz">Day ${escape_html(day)}</div> `);
        if (dayText[day]) {
          $$renderer.push("<!--[0-->");
          $$renderer.push(`<div class="tile-title svelte-1salapz">${escape_html(dayText[day].title)}</div> <div class="tile-sub svelte-1salapz">${escape_html(dayText[day].subtitle)}</div>`);
        } else {
          $$renderer.push("<!--[-1-->");
        }
        $$renderer.push(`<!--]--></div></div>`);
      }
      $$renderer.push(`<!--]--></div>`);
    }
    $$renderer.push(`<!--]--></div>`);
  }
  $$renderer.push(`<!--]--></div> <div class="sheet-section svelte-1salapz"><div class="sheet-title svelte-1salapz">Challenge log</div> <iframe${attr("src", SHEET_EMBED)} class="sheet-iframe svelte-1salapz" title="30-day chart challenge log" frameborder="0" scrolling="no"></iframe></div></section> `);
  {
    $$renderer.push("<!--[-1-->");
  }
  $$renderer.push(`<!--]-->`);
}

export { _page as default };
//# sourceMappingURL=_page.svelte-BTiHJ1l7.js.map
