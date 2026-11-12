/**
 * Site-wide settings. Everything an employer sees that is not a project
 * lives here, so updating a link never means touching a component.
 */
export const site = {
  name: 'Ethan Martinez',
  title: 'Software Engineer',
  location: 'Based in California',
  range: ['Machine learning', 'Full stack', 'Web', 'Apps'],
  email: 'ethanjmartinez@outlook.com',
  github: 'https://github.com/martinezeth',
  linkedin: 'https://www.linkedin.com/in/martinezeth/',
  // Substack: uncomment and fill in once the first post is live. While it is null
  // every Substack link on the site is hidden.
  substack: null as string | null,
  // substack: 'https://ethanmartinez.substack.com',
  // GoatCounter site code, e.g. "ethanmartinez". null = no analytics script.
  // Read from the build environment so local builds never count.
  goatcounter: (import.meta.env.PUBLIC_GOATCOUNTER as string | undefined) || null,
  description:
    'Ethan Martinez is a software engineer working across machine learning, full-stack web, and apps. LLM systems on Amazon Bedrock, a CNN for NASA eclipse imagery, and products shipped to both app stores.',
};
