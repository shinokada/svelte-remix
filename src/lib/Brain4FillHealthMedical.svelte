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
    d="M19.5 4.7832V7.6709L22 9.11426V14.8867L19.499 16.3311L19.5 19.2178L14.5 22.1045L13 21.2383V14.9229L9.03613 12.6338L8.03613 14.3662L11 16.0771V21.2373L9.5 22.1045L4.5 19.2178V16.3311L2 14.8877L2.00098 9.11328L4.5 7.66992V4.78418L9.5 1.89746L11 2.76367V9.07715L14.9648 11.3662L15.9648 9.63379L12.999 7.92188V2.7627L14.501 1.89648L19.5 4.7832Z"
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
