<script lang="ts">
  import { getContext } from 'svelte';
  import type { BaseProps, Props } from './types';

  const ctx: BaseProps = getContext('iconCtx') ?? {};

  let {
    size = ctx.size || '24',
    role = ctx.role || 'img',
    color = ctx.color || 'currentColor',
    title,
    desc,
    focusable = 'false',
    ariaLabel,
    ...restProps
  }: Props = $props();

  let ariaDescribedby = $derived(`${title?.id || ''} ${desc?.id || ''}`.trim());
  const hasDescription = $derived(!!(title?.id || desc?.id));
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  {...restProps}
  {role}
  width={size}
  height={size}
  fill={color}
  {focusable}
  aria-label={title?.id ? undefined : ariaLabel}
  aria-labelledby={title?.id || undefined}
  aria-describedby={hasDescription ? ariaDescribedby : undefined}
  viewBox="0 0 24 24"
>
  {#if title?.id && title.title}
    <title id={title.id}>{title.title}</title>
  {/if}
  {#if desc?.id && desc.desc}
    <desc id={desc.id}>{desc.desc}</desc>
  {/if}
  <path
    d="M18 3C20.2091 3 22 4.79086 22 7V17C22 19.2091 20.2091 21 18 21H6C3.79086 21 2 19.2091 2 17V7C2 4.79086 3.79086 3 6 3H18ZM12.5879 7.39941C12.3673 6.86706 11.6327 6.86708 11.4121 7.39941L11.0947 8.16309C10.5548 9.46657 9.54772 10.5081 8.28125 11.0713L7.38477 11.4697C6.87165 11.6982 6.87153 12.4455 7.38477 12.6738L8.33496 13.0957C9.56954 13.6448 10.5591 14.6486 11.1084 15.9092L11.416 16.6162C11.6416 17.1338 12.3584 17.1338 12.584 16.6162L12.8916 15.9092C13.4409 14.6486 14.4305 13.6448 15.665 13.0957L16.6152 12.6738C17.1285 12.4455 17.1284 11.6982 16.6152 11.4697L15.7188 11.0713C14.4522 10.5081 13.4442 9.46657 12.9043 8.16309L12.5879 7.39941Z"
  />
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
@prop focusable = 'false'
@prop ariaLabel
@prop ...restProps
-->
