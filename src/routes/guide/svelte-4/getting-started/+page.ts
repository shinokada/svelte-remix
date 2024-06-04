import type { MetaProps } from 'runes-meta-tags';

const title = 'Getting Started - Svelte Remix v1'
const description = 'How to get started with Svelte Remix v1'
const imgUrl = 'https://open-graph-vercel.vercel.app/api/svelte-remix'

export const load = ({ url }) => {
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
