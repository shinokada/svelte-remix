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
    ariaLabel = 'firebase line Logos',
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
    d="M9.22296 8.70695L6.91128 13.0414L8.00027 6.32592L9.22296 8.70695ZM10.3684 6.55928L7.69485 1.35292C7.47439 0.923595 6.83377 1.02489 6.75651 1.50129L4 18.4998L5.74819 19.5926L10.94 22.8375C11.5885 23.2428 12.4115 23.2428 13.06 22.8375L20 18.5L18.1424 5.96098C18.0828 5.5587 17.5934 5.39205 17.3007 5.67433L14.566 8.31132L12.4412 4.32721C12.2529 3.97426 11.7471 3.97426 11.5588 4.32721L10.3684 6.55928ZM13.0692 9.75472L8.66667 14L12 7.75L13.0692 9.75472ZM7.23219 18.1616L16.5911 9.137L17.8297 17.4979L12 21.1415L7.23219 18.1616Z"
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
@prop ariaLabel = 'firebase line Logos'
@prop ...restProps
-->
