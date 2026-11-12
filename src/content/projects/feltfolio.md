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
# TODO(ethan): replace with the new screenshots when ready.
gallery:
  - src: "/images/feltfolio-login.jpg"
    alt: "FeltFolio sign-in"
    kind: "phone"
  - src: "/images/feltfolio-confirm-dark.jpg"
    alt: "FeltFolio email confirmation, dark mode"
    kind: "phone"
  - src: "/images/feltfolio-icon.png"
    alt: "FeltFolio icon"
    kind: "brand"
    lockup: "/images/feltfolio-lockup.png"
    caption: "Commissioned icon and wordmark"
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
