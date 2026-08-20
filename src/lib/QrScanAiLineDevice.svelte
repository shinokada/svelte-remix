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
    d="M5 19H9V21H3V16H5V19ZM21 21H15V19H19V16H21V21ZM21 13H3V11H21V13ZM18.5293 1.31934C18.7058 0.893559 19.2942 0.893545 19.4707 1.31934L19.7236 1.93067C20.1555 2.97348 20.9615 3.80618 21.9746 4.25685L22.6914 4.57619C23.1022 4.75887 23.1022 5.3564 22.6914 5.53908L21.9326 5.87697C20.945 6.31625 20.1534 7.11948 19.7139 8.12795L19.4668 8.69338C19.2863 9.10751 18.7136 9.10751 18.5332 8.69338L18.2861 8.12795C17.8466 7.11947 17.0551 6.31625 16.0674 5.87697L15.3076 5.53908C14.8974 5.35622 14.8974 4.75899 15.3076 4.57619L16.0254 4.25685C17.0384 3.80618 17.8445 2.97348 18.2764 1.93067L18.5293 1.31934ZM9 5.00001H5V8.00002H3V3.00001H9V5.00001Z"
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
