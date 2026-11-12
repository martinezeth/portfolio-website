import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

/**
 * Each project is one Markdown file in src/content/projects/.
 * Frontmatter drives the home page. Body (optional) is the project page.
 *
 * Promote a card to a big panel: set `featured: true` and give it `accent`,
 * `panel`, `bullets` and a `gallery`. Demote it: `featured: false`.
 */
const image = z.object({
  src: z.string(),
  alt: z.string(),
  // "phone" = portrait screenshot in a phone frame; "wide" = landscape tile
  // (the whole image is always shown); "brand" = icon + wordmark tile.
  kind: z.enum(['phone', 'wide', 'contain', 'brand']).default('wide'),
  // brand only: the wordmark image and the small caption under it.
  lockup: z.string().optional(),
  caption: z.string().optional(),
});

const projects = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    // One or two sentences shown on the home page.
    summary: z.string(),
    // Lower sorts first within its group (featured or more).
    order: z.number(),
    // true = big panel under Selected Work; false = card under More Work.
    featured: z.boolean().default(false),
    // Year or range as shown: "2025", "2023–24".
    year: z.string().optional(),
    // Short status chip: "In TestFlight", "Shipped · 12+ Releases".
    status: z.string().optional(),
    // Project's own brand color, used for its status chip and bullet dashes.
    accent: z.string().optional(),
    // Deep color behind its media and in its panel gradient.
    panel: z.string().optional(),
    // Two or three proof points, shown as dashed bullets on a panel.
    bullets: z.array(z.string()).default([]),
    tech: z.array(z.string()).default([]),
    // Images for the panel gallery (featured) or the card cover (first one).
    gallery: z.array(image).default([]),
    // Small eyebrow on a More Work card: "Senior project · 2024".
    eyebrow: z.string().optional(),
    // Big numeral cover for a card with no image, e.g. "5,639" + "sets migrated · 0 failures".
    stat: z.object({ value: z.string(), label: z.string() }).optional(),
    // A note under a panel, e.g. why there are no screenshots.
    note: z.string().optional(),
    links: z
      .array(z.object({ label: z.string(), href: z.string().url() }))
      .default([]),
    // true = the Markdown body becomes /projects/<id>/ and the panel links to it.
    caseStudy: z.boolean().default(false),
  }),
});

export const collections = { projects };
