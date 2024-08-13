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
    ariaLabel =  "money euro circle fill Finance" ,
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
    <path d="M12.0049 22.0027C6.48204 22.0027 2.00488 17.5256 2.00488 12.0027C2.00488 6.4799 6.48204 2.00275 12.0049 2.00275C17.5277 2.00275 22.0049 6.4799 22.0049 12.0027C22.0049 17.5256 17.5277 22.0027 12.0049 22.0027ZM10.0549 11.0027C10.2865 9.86163 11.2954 9.00275 12.5049 9.00275C13.1201 9.00275 13.6834 9.22496 14.1189 9.59351L15.8198 8.45951C14.9973 7.56402 13.8166 7.00275 12.5049 7.00275C10.1886 7.00275 8.28107 8.75277 8.03235 11.0027H7.00488V13.0027H8.03235C8.28107 15.2527 10.1886 17.0027 12.5049 17.0027C13.8166 17.0027 14.9973 16.4415 15.8198 15.546L14.1188 14.412C13.6833 14.7806 13.1201 15.0027 12.5049 15.0027C11.2954 15.0027 10.2865 14.1439 10.0549 13.0027H15.0049V11.0027H10.0549Z"/>
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
@prop ariaLabel =  "money euro circle fill Finance"
@prop ...restProps
-->
