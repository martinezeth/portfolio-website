---
title: "FeltFolio"
summary: "A private ledger for casino sessions. Shared Kotlin Multiplatform core, native SwiftUI interface, Supabase sync with offline-first writes. A full rebuild of an earlier Swift-only version, with a commissioned icon and wordmark."
order: 30
featured: true
year: "2025–26"
status: "In TestFlight"
accent: "#D8B45A"
panel: "#1F4A3C"
bullets:
  - "Android follows on the same shared core"
  - "Conflict-safe sync queue for offline sessions"
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
links:
  - label: "feltfolio.app"
    href: "https://feltfolio.app"
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
