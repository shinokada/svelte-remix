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
    focusable = (ctx.focusable as Props['focusable']) || 'false',
    ariaLabel,
    ...restProps
  }: Props = $props();

  const ariaDescribedby = $derived(desc?.id && desc.desc ? desc.id : undefined);
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  {...restProps}
  {role}
  width={size}
  height={size}
  fill={color}
  {focusable}
  aria-label={ariaLabel || undefined}
  aria-labelledby={title?.id || undefined}
  aria-describedby={ariaDescribedby}
  viewBox="0 0 24 24"
>
  {#if title?.id && title.title}
    <title id={title.id}>{title.title}</title>
  {/if}
  {#if desc?.id && desc.desc}
    <desc id={desc.id}>{desc.desc}</desc>
  {/if}
  <path
    d="M19 12C21.2091 12 23 13.7909 23 16C23 17.2628 22.414 18.388 21.5 19.1211V23.5L19 22L16.5 23.5V19.1211C15.586 18.388 15 17.2628 15 16C15 13.7909 16.7909 12 19 12ZM20 2C20.5523 2 21 2.44772 21 3V10H19V4H5V20H13V22H4C3.44772 22 3 21.5523 3 21V3C3 2.44772 3.44772 2 4 2H20ZM19 14C17.8954 14 17 14.8954 17 16C17 17.1046 17.8954 18 19 18C20.1046 18 21 17.1046 21 16C21 14.8954 20.1046 14 19 14ZM13 15H8V13H13V15ZM16 11H8V9H16V11Z"
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
@prop focusable = (ctx.focusable as Props['focusable']) || 'false',
@prop ariaLabel
@prop ...restProps
-->
