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
    d="M17.0002 2V4L13.0002 3.999V6H16.0002V8C18.2093 8 20.0002 9.79086 20.0002 12V20C20.0002 21.1046 19.1048 22 18.0002 22H6.0002C4.89563 22 4.0002 21.1046 4.0002 20V12C4.0002 9.79086 5.79106 8 8.0002 8V6H11.0002V3.999L7.5002 4C6.8702 4 6.1302 4.49 5.3002 5.6L3.7002 4.4C4.8702 2.84 6.1302 2 7.5002 2H17.0002ZM13.0002 12H11.0002V14H9.0002V16H10.9992L11.0002 18H13.0002L12.9992 16H15.0002V14H13.0002V12Z"
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
