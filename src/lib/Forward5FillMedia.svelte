<script lang='ts'>
  import { getContext } from 'svelte';
  import type { CtxType, Props } from './types'

  const ctx: CtxType = getContext('iconCtx') ?? {};

  let { 
    size = ctx.size || '24',
    role = ctx.role || 'img',
    color = ctx.color || 'currentColor',
    title,
    desc,
    ariaLabel =  "forward 5 fill Media" ,
    ...restProps 
  }: Props = $props();

  let ariaDescribedby = `${title?.id || ''} ${desc?.id || ''}`;
  const hasDescription = $derived(!!(title?.id || desc?.id));
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  {...restProps}
  {role}
  width={size}
  height={size}
  fill={color}
  aria-label={ariaLabel}
  aria-describedby={hasDescription ? ariaDescribedby : undefined}
  viewBox="0 0 24 24"
>
  {#if title?.id && title.title}
    <title id="{title.id}">{title.title}</title>
  {/if}
  {#if desc?.id && desc.desc}
    <desc id="{desc.id}">{desc.desc}</desc>
  {/if}
    <path d="M2 12C2 6.47715 6.47715 2 12 2 15.0159 2 17.72 3.33509 19.5534 5.44648L22 3V9H16L18.1351 6.86543C16.6676 5.11383 14.4639 4 12 4 7.58172 4 4 7.58172 4 12 4 16.4183 7.58172 20 12 20 16.4183 20 20 16.4183 20 12H22C22 17.5228 17.5228 22 12 22 6.47715 22 2 17.5228 2 12ZM14.5 10V8.5H9.5V12.75H12.625C12.9702 12.75 13.25 13.0298 13.25 13.375 13.25 13.7202 12.9702 14 12.625 14H9.5V15.5H12.625C13.7986 15.5 14.75 14.5486 14.75 13.375 14.75 12.2014 13.7986 11.25 12.625 11.25H11V10H14.5Z"/>
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
@prop ariaLabel =  "forward 5 fill Media"
@prop ...restProps
-->
