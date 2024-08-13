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
    ariaLabel =  "arrow turn back line Arrows" ,
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
    <path d="M17.0004 18.1716L14.4649 15.636L13.0507 17.0503L18.0004 22L22.9502 17.0503L21.536 15.636L19.0004 18.1716V11C19.0004 6.58172 15.4187 3 11.0004 3C6.58216 3 3.00044 6.58172 3.00044 11V20H5.00044V11C5.00044 7.68629 7.68673 5 11.0004 5C14.3142 5 17.0004 7.68629 17.0004 11V18.1716Z"/>
</svg>

