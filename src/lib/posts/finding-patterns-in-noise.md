---
title: Finding Patterns in Noise
date: 2026-02-14
slug: finding-patterns-in-noise
tags: [data, journalism, visualisation]
excerpt: What happens when you stare at a dataset long enough — and what to do when the pattern you find isn't the one you were looking for.
---

There is a particular kind of frustration that comes with a dataset that refuses to cooperate. You have a story in mind. The data has other plans.

I spent three weeks last year with a spreadsheet of [district-level crop yield data](https://data.gov.in/) across six Indian states. I was looking for evidence of a rainfall-yield correlation that my editor and I were convinced existed. The scatterplot looked like someone had sneezed on graph paper.

## The wrong question

The problem, I eventually realised, was not the data. It was the question. I was asking *whether* rainfall correlated with yield, when the more interesting question was *when* it stopped correlating — and what filled that gap.

Irrigation infrastructure. Specifically, the uneven rollout of drip irrigation subsidies in Maharashtra versus Madhya Pradesh between 2018 and 2022.

## What I learned

A few things I now do before any analysis:

1. **Write down your assumption explicitly.** Not "I think X causes Y" but "I expect that when X increases by one unit, Y increases by approximately Z, holding everything else constant." The specificity forces honesty.
2. **Plot the residuals, not just the fit.** The noise is where the story lives.
3. **Find the exception first.** The district that doesn't fit the pattern is usually the most interesting one.

The story that ran was not the one we planned. It was better.
