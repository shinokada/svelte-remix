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
    ariaLabel =  "stack overflow line Logos" ,
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
    <path d="M18.001 20.0025V15.0001H20.001V22.0025H4.00098V15.0001H6.00098V20.0025H18.001ZM7.50098 18.0001V16.0001H16.501V18.0001H7.50098ZM7.578 13.6197L7.9253 11.65L16.7886 13.2129L16.4413 15.1825L7.578 13.6197ZM9.21156 8.11608L10.2116 6.38403L18.0058 10.884L17.0058 12.6161L9.21156 8.11608ZM12.6289 3.5031L14.161 2.21753L19.9461 9.11193L18.414 10.3975L12.6289 3.5031Z"/>
</svg>

