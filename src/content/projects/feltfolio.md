---
title: "FeltFolio"
summary: "An iPhone app for tracking your bankroll on casino trips. Track every game as you play, see where you win and lose, and play a live session with friends."
order: 30
featured: true
year: "2025–26"
status: "In TestFlight"
accent: "#D8B45A"
panel: "#1F4A3C"
bullets:
  - "Live session tracking: log buy-ins, top-ups and cash-outs game by game with a running total. It works with no cell signal."
  - "Analytics and reports: your bankroll over time, results by game and casino, and a print-ready year-end PDF report or a spreadsheet export of any date range."
  - "Casino Passport: a map and a stamp book of every casino you have played."
  - "Crew Sessions: join friends in a shared session with lobby statistics and a live leaderboard."
tech: ["Kotlin Multiplatform", "SwiftUI", "Supabase"]
gallery:
  - src: "/images/feltfolio-home.jpg"
    alt: "FeltFolio home: all-time bankroll, a live session card, and recent sessions"
    kind: "phone"
  - src: "/images/feltfolio-live-session.jpg"
    alt: "A live session at Silver Mesa Casino with three games in play"
    kind: "phone"
  - src: "/images/feltfolio-crew-session.jpg"
    alt: "A crew session: four players, the crew total, and a running log"
    kind: "phone"
  - src: "/images/feltfolio-analytics.jpg"
    alt: "Analytics: all-time summary and bankroll over time"
    kind: "phone"
  - src: "/images/feltfolio-analytics-2.jpg"
    alt: "Analytics, continued: export, casino passport, and game performance"
    kind: "phone"
  - src: "/images/feltfolio-passport-stamps.jpg"
    alt: "Casino Passport: a stamp for each casino visited"
    kind: "phone"
  - src: "/images/feltfolio-passport-map.jpg"
    alt: "Casino Passport map view with visited casinos pinned"
    kind: "phone"
  - src: "/images/feltfolio-brand.jpg"
    alt: "FeltFolio's commissioned icon and wordmark"
    kind: "phone"
# TODO(ethan): restore the feltfolio.app link when the site is ready:
links: []
# Flip to true once the sections below are written; the panel then links to /projects/feltfolio/.
caseStudy: false
---

## Why the rebuild

TODO(ethan): Two or three paragraphs. What the first Swift-only version was, what it could not do, and the point where a rewrite became cheaper than patching it.

## What lives in the shared core

TODO(ethan): Where the Kotlin Multiplatform boundary sits: models, session math, the sync engine. What stayed in SwiftUI and why.

## Sync and offline

TODO(ethan): How writes queue when the device is offline, how conflicts resolve, what Supabase gave you for free and what it did not.

## What I would do differently

TODO(ethan): Short and direct.
