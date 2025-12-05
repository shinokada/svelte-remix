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
    d="M4 12C4 16.4183 7.58172 20 12 20C14.7485 20 17.1746 18.6137 18.6152 16.5H16V14.5H22V20.5H20V18.001C18.1762 20.4286 15.2723 22 12 22C6.47715 22 2 17.5228 2 12H4ZM11.5293 8.31934C11.7059 7.8935 12.2943 7.89349 12.4707 8.31934L12.7236 8.93066C13.1556 9.97346 13.9615 10.8062 14.9746 11.2568L15.6924 11.5762C16.1026 11.759 16.1026 12.3562 15.6924 12.5391L14.9326 12.877C13.9449 13.3162 13.1534 14.1194 12.7139 15.1279L12.4668 15.6934C12.2864 16.1075 11.7137 16.1075 11.5332 15.6934L11.2871 15.1279C10.8476 14.1193 10.0552 13.3163 9.06738 12.877L8.30762 12.5391C7.89744 12.3562 7.89741 11.759 8.30762 11.5762L9.02539 11.2568C10.0385 10.8062 10.8445 9.97348 11.2764 8.93066L11.5293 8.31934ZM12 2C17.5228 2 22 6.47715 22 12H20C20 7.58172 16.4183 4 12 4C9.25151 4 6.82543 5.38634 5.38477 7.5H8V9.5H2V3.5H4V5.99902C5.82382 3.57144 8.72774 2 12 2Z"
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
