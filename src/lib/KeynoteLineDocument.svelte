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
    ariaLabel =  "keynote line Document" ,
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
    <path d="M4.43967 10H19.5605L18.3605 4H5.63967L4.43967 10ZM13.0001 12V20H17.0001V22H7.00006V20H11.0001V12H2.99187C2.44411 12 2.086 11.5703 2.19547 11.023L3.80465 2.97705C3.91258 2.43744 4.4447 2 5.00094 2H18.9992C19.552 2 20.086 2.42969 20.1955 2.97705L21.8047 11.023C21.9126 11.5626 21.5448 12 21.0083 12H13.0001Z"/>
</svg>

