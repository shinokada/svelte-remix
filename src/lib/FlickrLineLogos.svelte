<script lang="ts">
  import { getContext } from 'svelte';
  import type { BaseProps, Props } from './types';

  const ctx: BaseProps = getContext('iconCtx') ?? {};

  let {
    size = ctx.size || '24',
    role = ctx.role || 'img',
    color = ctx.color || 'currentColor',
    title,
    desc,
    ariaLabel = 'flickr line Logos',
    ...restProps
  }: Props = $props();

  let ariaDescribedby = `${title?.id || ''} ${desc?.id || ''}`;
  const hasDescription = $derived(!!(title?.id || desc?.id));
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  {...restProps}
  {role}
  width={size}
  height={size}
  fill={color}
  aria-label={ariaLabel}
  aria-describedby={hasDescription ? ariaDescribedby : undefined}
  viewBox="0 0 24 24"
>
  {#if title?.id && title.title}
    <title id={title.id}>{title.title}</title>
  {/if}
  {#if desc?.id && desc.desc}
    <desc id={desc.id}>{desc.desc}</desc>
  {/if}
  <path
    d="M5.99998 17C8.76146 17 11 14.7615 11 12 11 9.23899 8.76146 7 5.99998 7 3.23849 7 1 9.23899 1 12 1 14.7615 3.23849 17 5.99998 17ZM8.99995 12C8.99995 13.6569 7.65689 15 5.99998 15 4.34306 15 3 13.6569 3 12 3 10.3434 4.34319 9 5.99998 9 7.65676 9 8.99995 10.3434 8.99995 12ZM18 17C20.7615 17 23 14.7615 23 12 23 9.23899 20.7615 7 18 7 15.2385 7 13 9.23899 13 12 13 14.7615 15.2385 17 18 17ZM21 12C21 13.6569 19.6569 15 18 15 16.3431 15 15 13.6569 15 12 15 10.3434 16.3432 9 18 9 19.6568 9 21 10.3434 21 12Z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-remix.codewithshin.com/)
## Props
@prop size = ctx.size || '24'
@prop role = ctx.role || 'img'
@prop color = ctx.color || 'currentColor'
@prop title
@prop desc
@prop ariaLabel = 'flickr line Logos'
@prop ...restProps
-->
