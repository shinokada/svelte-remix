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
    d="M19.4999 2.00098C20.0944 2.00063 20.6989 2.15072 21.2499 2.46875C22.924 3.43525 23.4977 5.57598 22.5312 7.25001L15.0311 20.2403C14.0646 21.9142 11.9238 22.488 10.2498 21.5215C9.41372 21.0387 8.85157 20.2605 8.61994 19.3975L7.1209 13.8028L15.8905 8.73927C16.3687 8.46311 16.5327 7.85126 16.2567 7.37306C15.9805 6.89505 15.3686 6.73096 14.8905 7.00685L6.12089 12.0713L2.02515 7.97462C0.658428 6.60771 0.658787 4.39204 2.02515 3.02539C2.65731 2.39319 3.53383 2.00021 4.49978 2L19.4999 2.00098Z"
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
