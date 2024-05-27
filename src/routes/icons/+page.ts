import type { MetaProps } from 'runes-meta-tags';

export const load = () => {
  const pageMetaTags = Object.freeze({
    title: 'Icons - Svelte Remix',
    description: 'Explore all SVG icons for our library! Browse and search names, different colors, adjust size, and easily copy icon names with a single click. Find the perfect icon for your project.',
    og: {
      title: 'Icons - Svelte Remix',
      description: 'Explore all SVG icons for our library! Browse and search names, different colors, adjust size, and easily copy icon names with a single click. Find the perfect icon for your project.'
    },
    twitter: {
      title: 'Icons - Svelte Remix',
      description: 'Explore all SVG icons for our library! Browse and search names, different colors, adjust size, and easily copy icon names with a single click. Find the perfect icon for your project.'
    }
  }) satisfies MetaProps;
  return { pageMetaTags };
};
