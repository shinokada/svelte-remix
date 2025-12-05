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
    d="M10.9513 15.8933C10.0076 16.5855 8.80705 17 7.5 17C4.46243 17 2 14.7614 2 12C2 8.45193 5.52486 5.91097 8.64404 3.66245C9.92046 2.74232 11.1289 1.87116 12.0001 1C12.8713 1.87114 14.0797 2.74228 15.3561 3.66238C18.4752 5.91092 22 8.4519 22 12C22 14.7614 19.5376 17 16.5 17C15.193 17 13.9924 16.5855 13.0487 15.8933C13.333 17.5389 14.0578 18.713 14.8432 19.9853C14.965 20.1827 15.0884 20.3826 15.2118 20.5869C15.5961 21.2232 15.1253 22 14.382 22H9.61803C8.87465 22 8.4039 21.2232 8.7882 20.5869C8.91159 20.3826 9.03495 20.1827 9.15685 19.9853C9.94224 18.713 10.667 17.5389 10.9513 15.8933Z"
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
