---
title: Colour Is Not Decoration
date: 2026-03-01
slug: colour-is-not-decoration
tags: [design, dataviz, colour]
excerpt: On the discipline of using colour in data visualisation — and why the prettiest charts are often the least honest.
---

I have a rule I break constantly: never use more than three colours in a chart.

The rule exists because every colour you add is a claim. You are telling the reader that this dimension of the data is important enough to encode visually. If you add a fourth colour because it *looks nice*, you are lying — not about the data, but about what matters.

## Colour as argument

The best colour decisions I have seen in data journalism are ones where the colour *is* the argument. ProPublica's [Surgeon Scorecard](https://projects.propublica.org/surgeons/) used a single red-to-green gradient. The argument was in the choice of endpoints. The Washington Post's Covid excess mortality work used a muted palette for every country except the one being discussed. The argument was contrast.

When colour is decoration, the reader's eye wanders. When colour is argument, it lands.

## The grey trick

The most useful thing I learned in my first year of making charts: grey is not a neutral colour. It is an active choice to say *this element is context, not content*.

Make everything grey. Then add colour only where you want the reader to look first. That order of operations — grey first, colour second — produces better charts than starting with colour and trying to tone it down.

## On accessibility

Roughly 8% of men have some form of colour vision deficiency. Designing for deuteranopia (red-green) is not a nice-to-have. It is table stakes. I run every palette through [Coblis](https://www.color-blindness.com/coblis-color-blindness-simulator/) before publishing.

The constraints of accessible colour design are not a limitation. They are a useful forcing function toward clarity.
