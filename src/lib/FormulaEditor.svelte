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
    ariaLabel =  "formula Editor" ,
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
    <path d="M10 2C7.79086 2 6 3.79086 6 6V9H3V11H6V18C6 19.1046 5.10457 20 4 20H3V22H4C6.20914 22 8 20.2091 8 18V11H11V9H8V6C8 4.89543 8.89543 4 10 4H11V2H10ZM15.2022 16.9971L11.8907 21H14.4864L16.5 18.5659L18.5137 21H21.1093L17.7979 16.9971L21.1046 13H18.5089L16.5 15.4283L14.4912 13H11.8955L15.2022 16.9971Z"/>
</svg>

