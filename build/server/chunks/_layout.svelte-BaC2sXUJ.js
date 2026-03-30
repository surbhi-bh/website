import { c as store_get, h as head, d as attr_class, f as ensure_array_like, j as attr, k as escape_html, l as attr_style, m as slot, n as stringify, o as unsubscribe_stores, p as fallback, q as bind_props, r as getContext } from './index-BIKb7vfB.js';
import { o as writable } from './root-3_p3bPF0.js';
import './state.svelte-BjskqbnX.js';

const getStores = () => {
  const stores$1 = getContext("__svelte__");
  return {
    /** @type {typeof page} */
    page: {
      subscribe: stores$1.page.subscribe
    },
    /** @type {typeof navigating} */
    navigating: {
      subscribe: stores$1.navigating.subscribe
    },
    /** @type {typeof updated} */
    updated: stores$1.updated
  };
};
const page = {
  subscribe(fn) {
    const store = getStores().page;
    return store.subscribe(fn);
  }
};
function FootnoteChart($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let collapsed = fallback($$props["collapsed"], false);
    if (collapsed && true) {
      $$renderer2.push("<!--[0-->");
      $$renderer2.push(`<div class="footnote-band footnote-collapsed" role="button" tabindex="0"><div class="footnote-label footnote-label-slim">foot(er)-note ↑</div></div>`);
    } else {
      $$renderer2.push("<!--[-1-->");
      $$renderer2.push(`<div${attr_class("footnote-band", void 0, { "footnote-expandable": collapsed })}><div class="footnote-left"><div${attr_class("footnote-left-stat", void 0, { "clickable": collapsed })}${attr("role", collapsed ? "button" : "presentation")}${attr("tabindex", collapsed ? 0 : -1)}><div class="footnote-label">foot(er)-note${escape_html(collapsed ? " ↓" : "")}</div> <div class="footnote-number" id="footnoteNumber">0</div> <div class="footnote-sub" id="footnoteSub">steps yesterday</div></div> <div class="footnote-togs"><button class="footnote-tog on">daily</button> <button class="footnote-tog">weekly</button> <button class="footnote-tog">monthly</button></div></div> <div class="footnote-right"><div id="footnoteChart"></div> <div id="footnoteTooltip"></div></div></div>`);
    }
    $$renderer2.push(`<!--]-->`);
    bind_props($$props, { collapsed });
  });
}
const gardenPanel = writable(null);
function _layout($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    const mainLinks = [
      { href: "/", label: "read.me" },
      { href: "/visual-stories", label: "visual stories" },
      { href: "/talks", label: "talks" },
      { href: "/vizardry", label: "vizardry" }
    ];
    const gardenLinks = [
      { href: "/seeds", label: "seeds" },
      { href: "/thoughts", label: "thoughts" },
      { href: "/bookmarks", label: "bookmarks" },
      { href: "/garden", label: "garden" },
      { href: "/colophon", label: "colophon" }
    ];
    function isActive(href, pathname) {
      if (href === "/") return pathname === "/";
      return pathname.startsWith(href);
    }
    const typeColor = {
      "visual story": "#1a6b3a",
      "talk": "#d0116f",
      "thought": "#7b5ea7",
      "seed": "#b87333"
    };
    if (!store_get($$store_subs ??= {}, "$page", page).url.pathname.startsWith("/garden") && !store_get($$store_subs ??= {}, "$page", page).url.pathname.startsWith("/talks")) {
      gardenPanel.set(null);
    }
    head("12qhfyh", $$renderer2, ($$renderer3) => {
      $$renderer3.title(($$renderer4) => {
        $$renderer4.push(`<title>Surbhi Bhatia | Data Journalist &amp; Visual Storyteller</title>`);
      });
      $$renderer3.push(`<link href="https://fonts.googleapis.com/css2?family=DM+Mono:wght@300;400&amp;family=Inter:wght@200;300;400&amp;display=swap" rel="stylesheet"/> `);
      $$renderer3.push(`<script src="https://d3js.org/d3.v7.min.js"><\/script>`);
      $$renderer3.push(` `);
      $$renderer3.push(`<script src="https://cdn.jsdelivr.net/npm/roughjs@4.5.2/bundled/rough.js"><\/script>`);
    });
    $$renderer2.push(`<div${attr_class("container", void 0, {
      "has-panel": store_get($$store_subs ??= {}, "$gardenPanel", gardenPanel) !== null
    })}><aside class="sidebar"><div class="brand-name">Surbhi Bhatia</div> <div class="nav-section"><div class="nav-title">now · here</div> <ul class="nav-links"><!--[-->`);
    const each_array = ensure_array_like(mainLinks);
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let link = each_array[$$index];
      $$renderer2.push(`<li><a${attr("href", link.href)}${attr_class("nav-link", void 0, {
        "active": isActive(link.href, store_get($$store_subs ??= {}, "$page", page).url.pathname)
      })}>${escape_html(link.label)}</a></li>`);
    }
    $$renderer2.push(`<!--]--></ul></div> <div class="nav-section"><div class="nav-title">garden</div> <ul class="nav-links"><!--[-->`);
    const each_array_1 = ensure_array_like(gardenLinks);
    for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
      let link = each_array_1[$$index_1];
      $$renderer2.push(`<li${attr_class("", void 0, { "li-garden": link.href === "/garden" })}>`);
      if (link.href === "/bookmarks") {
        $$renderer2.push("<!--[0-->");
        $$renderer2.push(`<span class="nav-link" style="cursor:default;color:#ccc;">${escape_html(link.label)}</span>`);
      } else {
        $$renderer2.push("<!--[-1-->");
        $$renderer2.push(`<a${attr("href", link.href)}${attr_class("nav-link", void 0, {
          "nav-link-garden": link.href === "/garden",
          "active": isActive(link.href, store_get($$store_subs ??= {}, "$page", page).url.pathname)
        })}${attr_style(link.label === "colophon" ? "margin-top: 1rem;" : "")}>${escape_html(link.label)}</a>`);
      }
      $$renderer2.push(`<!--]--></li>`);
    }
    $$renderer2.push(`<!--]--></ul></div> <div class="nav-spacer"></div> <div class="sidebar-footer"></div></aside> <main class="main"><div class="main-inner"><!--[-->`);
    slot($$renderer2, $$props, "default", {});
    $$renderer2.push(`<!--]--></div></main> `);
    if (store_get($$store_subs ??= {}, "$gardenPanel", gardenPanel)) {
      $$renderer2.push("<!--[0-->");
      const item = store_get($$store_subs ??= {}, "$gardenPanel", gardenPanel);
      $$renderer2.push(`<aside class="third-panel svelte-12qhfyh"${attr_style(`--tc:${stringify(typeColor[item.type] || "#1a6b3a")}`)}><button class="third-panel-close svelte-12qhfyh">×</button> <div class="tp-type svelte-12qhfyh"${attr_style(`color:${stringify(typeColor[item.type] || "#888")}`)}>${escape_html(item.type)}</div> <div class="tp-title svelte-12qhfyh">${escape_html(item.title)}</div> `);
      if (item.image) {
        $$renderer2.push("<!--[0-->");
        $$renderer2.push(`<img${attr("src", item.image)}${attr("alt", item.title)} class="tp-photo svelte-12qhfyh"/>`);
      } else {
        $$renderer2.push("<!--[-1-->");
      }
      $$renderer2.push(`<!--]--> `);
      if (item.publisher) {
        $$renderer2.push("<!--[0-->");
        $$renderer2.push(`<div class="tp-pub svelte-12qhfyh">${escape_html(item.publisher)}</div>`);
      } else {
        $$renderer2.push("<!--[-1-->");
      }
      $$renderer2.push(`<!--]--> `);
      if (item.event) {
        $$renderer2.push("<!--[0-->");
        $$renderer2.push(`<div class="tp-pub svelte-12qhfyh">${escape_html(item.event)}`);
        if (item.location) {
          $$renderer2.push("<!--[0-->");
          $$renderer2.push(`· ${escape_html(item.location)}`);
        } else {
          $$renderer2.push("<!--[-1-->");
        }
        $$renderer2.push(`<!--]--></div>`);
      } else {
        $$renderer2.push("<!--[-1-->");
      }
      $$renderer2.push(`<!--]--> <div class="tp-year svelte-12qhfyh">${escape_html(item.year)}</div> `);
      if (item.description) {
        $$renderer2.push("<!--[0-->");
        $$renderer2.push(`<p class="tp-desc svelte-12qhfyh">${escape_html(item.description)}</p>`);
      } else {
        $$renderer2.push("<!--[-1-->");
      }
      $$renderer2.push(`<!--]--> `);
      if (item.collaborators && item.collaborators.length) {
        $$renderer2.push("<!--[0-->");
        $$renderer2.push(`<div class="tp-collab svelte-12qhfyh"><span class="tp-label svelte-12qhfyh">with</span> ${escape_html(item.collaborators.join(", "))}</div>`);
      } else {
        $$renderer2.push("<!--[-1-->");
      }
      $$renderer2.push(`<!--]--> <div class="tp-tags svelte-12qhfyh"><!--[-->`);
      const each_array_2 = ensure_array_like(item.tags);
      for (let $$index_2 = 0, $$length = each_array_2.length; $$index_2 < $$length; $$index_2++) {
        let t = each_array_2[$$index_2];
        $$renderer2.push(`<span class="tp-tag svelte-12qhfyh">${escape_html(t)}</span>`);
      }
      $$renderer2.push(`<!--]--></div> `);
      if (item.link && item.link !== "#") {
        $$renderer2.push("<!--[0-->");
        $$renderer2.push(`<a${attr("href", item.link)} target="_blank" rel="noopener" class="tp-link svelte-12qhfyh">read / view ↗</a>`);
      } else {
        $$renderer2.push("<!--[-1-->");
      }
      $$renderer2.push(`<!--]--></aside>`);
    } else {
      $$renderer2.push("<!--[-1-->");
    }
    $$renderer2.push(`<!--]--></div> `);
    FootnoteChart($$renderer2, {
      collapsed: store_get($$store_subs ??= {}, "$page", page).url.pathname !== "/"
    });
    $$renderer2.push(`<!---->`);
    if ($$store_subs) unsubscribe_stores($$store_subs);
  });
}

export { _layout as default };
//# sourceMappingURL=_layout.svelte-BaC2sXUJ.js.map
