---
title: "Eclipse Phase Classifier"
summary: "Undergraduate research for NASA's Eclipse Megamovie 2024, which collected 80,000+ citizen-science photos of the April 2024 total solar eclipse. The images arrived unlabeled, so the goal was to train a model that could accurately sort them into eight categories: the stages of the eclipse from partial to total, and being able to determine which photos did not feature an eclipse. I built the keyboard-driven labeling tool that cut labeling from one to two minutes per image to a few seconds, which let the team build a human-verified training set much faster, and I helped train and evaluate the CNN that learned from it."
order: 20
featured: true
year: "2023–24"
status: "Undergraduate Research · Sonoma State"
accent: "#FFB27A"
panel: "#3A2230"
bullets:
  - "~88% accuracy across 8 classes vs ~70% for a SIFT bag-of-words baseline"
  - "Labeling tool took each image from 1–2 minutes to a few seconds"
  - "Oversampled the training set to correct a heavy \"total eclipse\" skew"
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
