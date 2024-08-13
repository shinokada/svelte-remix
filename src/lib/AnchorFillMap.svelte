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
    ariaLabel =  "anchor fill Map" ,
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
    <path d="M13 9.87398V19.928C16.6187 19.4745 19.4869 16.5923 19.9381 12.9558H17L20.7042 7C21.529 8.46132 22 10.1508 22 11.9509C22 17.5009 17.5228 22 12 22C6.47715 22 2 17.5009 2 11.9509C2 10.1508 2.47097 8.46132 3.29582 7L7 12.9558H4.06189C4.51314 16.5923 7.38128 19.4745 11 19.928V9.87398C9.27477 9.42994 8 7.86384 8 6C8 3.79086 9.79086 2 12 2C14.2091 2 16 3.79086 16 6C16 7.86384 14.7252 9.42994 13 9.87398ZM12 8C13.1046 8 14 7.10457 14 6C14 4.89543 13.1046 4 12 4C10.8954 4 10 4.89543 10 6C10 7.10457 10.8954 8 12 8Z"/>
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
@prop ariaLabel =  "anchor fill Map"
@prop ...restProps
-->
