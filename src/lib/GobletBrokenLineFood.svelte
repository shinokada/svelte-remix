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
    d="M17.867 2L18.989 9.8584C19.2911 11.9726 18.468 13.7895 17.1091 15.0469C16.0043 16.0691 14.5407 16.7321 12.9998 16.9346V20H17.9998V22H5.99977V20H10.9998V16.9346C9.45891 16.7322 7.9952 16.069 6.89039 15.0469C5.53153 13.7895 4.7075 11.9726 5.00953 9.8584L6.13258 2H17.867ZM14.0769 4L13.5662 4.88379L16.1648 6.38379L13.4148 11.1475L11.6824 10.1475L13.4324 7.11621L10.8347 5.61621L11.7683 4H7.86695L6.98902 10.1416C6.79115 11.5273 7.31117 12.7105 8.24879 13.5781C9.20342 14.4614 10.5824 15 11.9998 15C13.417 14.9999 14.7962 14.4614 15.7507 13.5781C16.6882 12.7105 17.2074 11.5272 17.0095 10.1416L16.1326 4H14.0769Z"
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
