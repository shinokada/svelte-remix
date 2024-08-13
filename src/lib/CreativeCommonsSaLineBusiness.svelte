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
    ariaLabel =  "creative commons sa line Business" ,
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
    <path d="M17 12C17 8.68628 14.7615 6 12 6 9.82275 6 7.97058 7.66992 7.2843 10.0006L6 10 8.5 13 11 10 9.40125 10.0002C9.91992 8.80457 10.8895 8 12 8 13.6569 8 15 9.79089 15 12 15 14.2091 13.6569 16 12 16 10.8899 16 9.92065 15.196 9.40186 14.0011L7.28467 14.0006C7.97131 16.3307 9.82312 18 12 18 14.7615 18 17 15.3137 17 12ZM12 2C9.23987 2 6.73865 3.12134 4.93005 4.93005 3.12134 6.73865 2 9.23987 2 12 2 14.7601 3.12134 17.2614 4.93005 19.0699 6.73865 20.8787 9.23987 22 12 22 14.7601 22 17.2614 20.8787 19.0699 19.0699 20.8787 17.2614 22 14.7601 22 12 22 9.23987 20.8787 6.73865 19.0699 4.93005 17.2614 3.12134 14.7601 2 12 2ZM6.34424 6.34424C7.79358 4.8949 9.79224 4 12 4 14.2078 4 16.2064 4.8949 17.6558 6.34424 19.1051 7.79358 20 9.79224 20 12 20 14.2078 19.1051 16.2064 17.6558 17.6558 16.2064 19.1051 14.2078 20 12 20 9.79224 20 7.79358 19.1051 6.34424 17.6558 4.8949 16.2064 4 14.2078 4 12 4 9.79224 4.8949 7.79358 6.34424 6.34424Z"/>
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
@prop ariaLabel =  "creative commons sa line Business"
@prop ...restProps
-->
