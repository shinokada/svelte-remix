import type { MetaProps } from 'runes-meta-tags';

export const load = () => {
  const pageMetaTags = Object.freeze({
    title: 'Props - Svelte Remix v2',
    description: 'How to use props with Svelte Remix v2',
    og: {
      title: 'Props - Svelte Remix v2',
      description: 'How to use props with Svelte Remix v2'
    },
    twitter: {
      title: 'Props - Svelte Remix v2',
      description: 'How to use props with Svelte Remix v2'
    }
  }) satisfies MetaProps;
  return { pageMetaTags };
};
