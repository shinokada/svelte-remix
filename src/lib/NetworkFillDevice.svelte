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
    d="M14 3C14.5523 3 15 3.44772 15 4V8C15 8.55228 14.5523 9 14 9H13V11H21V13H18V15H19C19.5523 15 20 15.4477 20 16V20C20 20.5523 19.5523 21 19 21H15C14.4477 21 14 20.5523 14 20V16C14 15.4477 14.4477 15 15 15H16V13H8V15H9C9.55228 15 10 15.4477 10 16V20C10 20.5523 9.55228 21 9 21H5C4.44772 21 4 20.5523 4 20V16L4.00488 15.8975C4.05621 15.3933 4.48232 15 5 15H6V13H3V11H11V9H10C9.44772 9 9 8.55228 9 8V4C9 3.44772 9.44772 3 10 3H14Z"
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
