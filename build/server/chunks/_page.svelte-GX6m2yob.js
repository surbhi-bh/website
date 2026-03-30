import { h as head, d as attr_class, k as escape_html } from './index-BIKb7vfB.js';

function WorldMap($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let currentMapMode = "lived";
    $$renderer2.push(`<div class="world-map"><div class="map-container" id="mapContainer"><img src="/world-map.svg" alt="World map" id="mapImage"/> <div class="map-canvas" id="mapCanvas"></div> <div class="map-toggle"><button${attr_class("map-toggle-btn", void 0, { "active": currentMapMode === "lived" })}>lived</button> <button${attr_class("map-toggle-btn", void 0, { "active": currentMapMode === "been" })}>been</button></div></div></div>`);
  });
}
function _page($$renderer) {
  let currentWordCount, showMore1, showMore2, showMore3;
  let readmeStep = 0;
  const wordCounts = ["~20 words", "~60 words", "~100 words", "~130 words"];
  currentWordCount = wordCounts[readmeStep];
  showMore1 = readmeStep >= 1;
  showMore2 = readmeStep >= 2;
  showMore3 = readmeStep >= 3;
  head("1uha8ag", $$renderer, ($$renderer2) => {
    $$renderer2.title(($$renderer3) => {
      $$renderer3.push(`<title>Surbhi Bhatia — read.me</title>`);
    });
  });
  $$renderer.push(`<section class="section" id="readme"><div class="expand-row"><button${attr_class("exp-btn", void 0, { "on": readmeStep >= 0 })}>brief</button> <button${attr_class("exp-btn", void 0, { "on": readmeStep >= 1 })}>longer</button> <button${attr_class("exp-btn", void 0, { "on": readmeStep >= 2 })}>full story</button> <button${attr_class("exp-btn", void 0, { "on": readmeStep >= 3 })}>full story with map</button> <span class="word-count-display">${escape_html(currentWordCount)}</span></div> <div class="headline">I am Surbhi, a <span style="color: #d0116f;">data journalist</span> and <span style="color: #d0116f;">data visualisation trainer</span>.</div> <div class="text-body">I turn numbers into meaningful insights and memorable stories using visuals, design, code, and storytelling techniques.</div> <div${attr_class("bio-more", void 0, { "open": showMore1 })}>My work has featured in Kontinentalist, Nikkei Asia, Mint, IndiaSpend, The Hindu, Moneycontrol, and more. Some of it has been recognised by Festival De Datos, SABEW, and The Pudding.</div> <div${attr_class("bio-more", void 0, { "open": showMore2 })}>As a <strong>self-taught coder</strong>, most of what I know, I have learnt on the go. And I continue to refine my skills in the design and data visualisation space by finding new ways to make data speak.</div> `);
  if (showMore3) {
    $$renderer.push("<!--[0-->");
    $$renderer.push(`<div class="bio-more open">`);
    WorldMap($$renderer);
    $$renderer.push(`<!----></div>`);
  } else {
    $$renderer.push("<!--[-1-->");
  }
  $$renderer.push(`<!--]--> <div${attr_class("bio-more", void 0, { "open": showMore3 })}>I'm currently based in Bangalore, previously lived in Delhi, Bombay, Auroville, and New York. My journey spans research, journalism, and systems thinking — always seeking to understand how things break and how to make them more resilient.</div> <div${attr_class("bio-more", void 0, { "open": showMore3 })}>I care deeply about how information shapes understanding — and how a well-told data story can move people to see the world differently.</div></section>`);
}

export { _page as default };
//# sourceMappingURL=_page.svelte-GX6m2yob.js.map
