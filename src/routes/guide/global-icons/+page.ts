import type { MetaProps } from 'runes-meta-tags';

export const load = () => {
  const pageMetaTags = Object.freeze({
    title: 'Setting Global Icon - Svelte Remix',
    description: 'Setting Global Icon using setContext with Svelte Remix',
    og: {
      title: 'Setting Global Icon - Svelte Remix',
      description: 'Setting Global Icon using setContext with Svelte Remix'
    },
    twitter: {
      title: 'Setting Global Icon - Svelte Remix',
      description: 'Setting Global Icon using setContext with Svelte Remix'
    }
  }) satisfies MetaProps;
  return { pageMetaTags };
};
