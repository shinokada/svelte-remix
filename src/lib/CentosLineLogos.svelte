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
    ariaLabel =  "centos line Logos" ,
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
    <path d="M12 2L16.292 6.292L17.353 5.232L16.1207 3.99968L20 4L19.9997 7.87868L18.767 6.646L17.707 7.707L22 12L17.708 16.293L18.767 17.352L19.9997 16.1207L20 20L16.1207 19.9997L17.352 18.767L16.293 17.707L12 22L7.707 17.707L6.646 18.767L7.87868 19.9997L4 20L3.99968 16.1207L5.231 17.352L6.292 16.292L2 12L6.293 7.707L5.231 6.646L3.99968 7.87868L4 4L7.87868 3.99968L6.646 5.231L7.708 6.293L12 2ZM12 13.4128L9.12 16.292L12 19.1716L14.879 16.292L12 13.4128ZM7.707 9.121L4.82843 12L7.706 14.878L10.5858 11.9986L7.707 9.121ZM16.292 9.121L13.4149 11.9993L16.293 14.878L19.1716 12L16.292 9.121ZM12 4.82843L9.122 7.707L12.0007 10.5851L14.878 7.706L12 4.82843Z"/>
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
@prop ariaLabel =  "centos line Logos"
@prop ...restProps
-->
