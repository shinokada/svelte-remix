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
    ariaLabel =  "lock star fill System" ,
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
    <path d="M12 1C8.68629 1 6 3.68629 6 7V8H4C3.44772 8 3 8.44772 3 9V21C3 21.5523 3.44772 22 4 22H13.044C12.6947 21.2389 12.5 20.3922 12.5 19.5C12.5 16.1863 15.1863 13.5 18.5 13.5C19.3922 13.5 20.2389 13.6947 21 14.044V9C21 8.44772 20.5523 8 20 8H18V7C18 3.68629 15.3137 1 12 1ZM16 8H8V7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7V8ZM21.145 23.1406L20.6399 20.1953L22.7798 18.1094L19.8225 17.6797L18.5 15L17.1775 17.6797L14.2202 18.1094L16.3601 20.1953L15.855 23.1406L18.5 21.75L21.145 23.1406Z"/>
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
@prop ariaLabel =  "lock star fill System"
@prop ...restProps
-->
