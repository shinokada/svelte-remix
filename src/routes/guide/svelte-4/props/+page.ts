import type { MetaProps } from 'runes-meta-tags';

export const load = () => {
  const pageMetaTags = Object.freeze({
    title: 'Props - Svelte Remix v1',
    description: 'How to use props with Svelte Remix v1',
    og: {
      title: 'Props - Svelte Remix v1',
      description: 'How to use props with Svelte Remix v1'
    },
    twitter: {
      title: 'Props - Svelte Remix v1',
      description: 'How to use props with Svelte Remix v1'
    }
  }) satisfies MetaProps;
  return { pageMetaTags };
};
