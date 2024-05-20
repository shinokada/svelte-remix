import type { MetaProps } from 'runes-meta-tags';

export const load = () => {
  const pageMetaTags = Object.freeze({
    title: 'Icons - Svelte Remix',
    description: 'Icons page to change colors and sizes',
    og: {
      title: 'Icons - Svelte Remix',
      description: 'Icons page to change colors and sizes'
    },
    twitter: {
      title: 'Icons - Svelte Remix',
      description: 'Icons page to change colors and sizes'
    }
  }) satisfies MetaProps;
  return { pageMetaTags };
};
