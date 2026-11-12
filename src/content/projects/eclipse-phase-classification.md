---
title: "Eclipse Phase Classifier"
summary: "A CNN that sorts citizen-science eclipse photos into eight phases, trained on a labeled subset of NASA's Eclipse Megamovie dataset. I also built the keyboard-driven labeling tool the team used to create the training set."
order: 20
featured: true
year: "2023–24"
status: "Research · Sonoma State"
accent: "#FFB27A"
panel: "#3A2230"
bullets:
  - "~88% accuracy across 8 classes vs ~70% for a SIFT bag-of-words baseline"
  - "Oversampled training set to correct a heavy \"total eclipse\" skew"
tech: ["Python", "CNN", "OpenCV", "SIFT + KNN"]
gallery:
  - src: "/images/eclipse-dataset.jpg"
    alt: "Sample images from each of the eight eclipse classes"
    kind: "contain"
  - src: "/images/eclipse-confusion.jpg"
    alt: "Confusion matrix for the CNN"
    kind: "contain"
  - src: "/images/eclipse-poster.jpg"
    alt: "Research poster"
    kind: "wide"
links:
  - label: "Eclipse Megamovie write-up"
    href: "https://eclipsemegamovie.org/resources/news/koret-student-project?data=7"
caseStudy: false
---
