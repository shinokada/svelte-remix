import type { MetaProps } from 'runes-meta-tags';

const title = 'Custom icons - Svelte Remix'
const description = 'How to create a custom icons with Svelte Remix'
const imgUrl = 'https://open-graph-vercel.vercel.app/api/svelte-remix'
export const load = () => {
  const pageMetaTags = Object.freeze({
    title,
    description,
    og: {
      title,
      description,
      image: imgUrl
    },
    twitter: {
      title,
      description,
      image: imgUrl
    }
  }) satisfies MetaProps;
  return { pageMetaTags };
};