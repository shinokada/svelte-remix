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
    d="M5 16H17.8079C17.4099 14.185 16.3432 12.8528 14.1474 11.9115C13.9274 11.8171 13.8096 11.5713 13.8853 11.3443C13.9521 11.1436 14.1504 11.0171 14.3605 11.041L18.8456 11.5508C19.2427 11.596 19.6285 11.4003 19.8268 11.0534L20.6527 9.60794C20.8612 9.24304 20.8193 8.7867 20.5479 8.46586L15.5 2.5002V0.287109C9.33622 2.83971 5.00008 8.91347 5 16ZM4 17H19V20H20V22H3V20H4V17ZM15 7C15 7.55228 14.5523 8 14 8C13.4477 8 13 7.55228 13 7C13 6.44772 13.4477 6 14 6C14.5523 6 15 6.44772 15 7Z"
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
