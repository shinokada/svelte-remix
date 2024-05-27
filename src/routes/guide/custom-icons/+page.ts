import type { MetaProps } from 'runes-meta-tags';

export const load = () => {
  const pageMetaTags = Object.freeze({
    title: 'Custom icons example - Svelte Remix',
    description: 'How to create a custom icons with Svelte Remix',
    og: {
      title: 'Custom icons example - Svelte Remix',
      description: 'How to create a custom icons with Svelte Remix'
    },
    twitter: {
      title: 'Custom icons example - Svelte Remix',
      description: 'How to create a custom icons with Svelte Remix'
    }
  }) satisfies MetaProps;
  return { pageMetaTags };
};
