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
    focusable = ctx.focusable || 'false',
    ariaLabel,
    ...restProps
  }: Props = $props();

  const ariaDescribedby = $derived([title?.id, desc?.id].filter(Boolean).join(' ') || undefined);
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
    d="M9.17157 9.33147C7.60948 7.76938 7.60948 5.23672 9.17157 3.67462L12 0.846191L14.8284 3.67462C16.3905 5.23672 16.3905 7.76938 14.8284 9.33147C14.3039 9.85601 13.6699 10.2044 13 10.3767V12H18C18.5523 12 19 12.4477 19 13V20H21V22H3V20H5V13C5 12.4477 5.44772 12 6 12H11V10.3767C10.3301 10.2044 9.69611 9.85601 9.17157 9.33147ZM10.5858 5.08883C9.80474 5.86988 9.80474 7.13621 10.5858 7.91726C11.3668 8.69831 12.6332 8.69831 13.4142 7.91726C14.1953 7.13621 14.1953 5.86988 13.4142 5.08883L12 3.67462L10.5858 5.08883Z"
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
@prop focusable = ctx.focusable || 'false'
@prop ariaLabel
@prop ...restProps
-->
