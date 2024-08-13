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
    ariaLabel =  "send to back Editor" ,
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
    <path d="M11 3C11.5523 3 12 3.44772 12 4V6H17C17.5523 6 18 6.44772 18 7V12H20C20.5523 12 21 12.4477 21 13V20C21 20.5523 20.5523 21 20 21H13C12.4477 21 12 20.5523 12 20V18H7C6.44772 18 6 17.5523 6 17V12H4C3.44772 12 3 11.5523 3 11V4C3 3.44772 3.44772 3 4 3H11ZM16 8H12V11C12 11.5523 11.5523 12 11 12H8V16H12V13C12 12.4477 12.4477 12 13 12H16V8Z"/>
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
@prop ariaLabel =  "send to back Editor"
@prop ...restProps
-->
