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
    ariaLabel =  "sofa fill Others" ,
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
    <path d="M15 3H9C6.02024 3 3.54782 5.17213 3.07974 8.01937C3.21811 8.00655 3.35829 8 3.5 8C5.98528 8 8 10.0147 8 12.5V14H16V12.5C16 10.0147 18.0147 8 20.5 8C20.6417 8 20.7819 8.00655 20.9203 8.01937C20.4522 5.17213 17.9798 3 15 3ZM21 10.05C20.8384 10.0172 20.6712 10 20.5 10C19.1193 10 18 11.1193 18 12.5V17H16V16H8V17H6V12.5C6 11.1193 4.88071 10 3.5 10C3.32877 10 3.16156 10.0172 3 10.05C1.85888 10.2816 1 11.2905 1 12.5C1 13.0886 1.18173 13.5388 1.39024 14.0554C1.67083 14.7505 1.9999 15.5658 1.99978 17V20C1.99978 20.5523 2.44749 21 2.99978 21H12H21.0002C21.5525 21 22.0002 20.5523 22.0002 20V17C22.0001 15.5658 22.3292 14.7505 22.6098 14.0554C22.8183 13.5388 23 13.0886 23 12.5C23 11.2905 22.1411 10.2816 21 10.05Z"/>
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
@prop ariaLabel =  "sofa fill Others"
@prop ...restProps
-->
