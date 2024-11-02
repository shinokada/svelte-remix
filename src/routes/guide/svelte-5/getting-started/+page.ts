import type { MetaProps } from 'runes-meta-tags';

const title = 'Getting Started - Svelte Remix v2';
const description = 'How to get started with Svelte Remix v2';
const imgUrl = 'https://open-graph-vercel.vercel.app/api/svelte-remix';

export const load = () => {
  const pageMetaTags: MetaProps = {
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
  };
  return { pageMetaTags };
};
