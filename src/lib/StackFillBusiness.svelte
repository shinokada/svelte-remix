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
    ariaLabel = 'stack fill Business',
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
    <title id={title.id}>{title.title}</title>
  {/if}
  {#if desc?.id && desc.desc}
    <desc id={desc.id}>{desc.desc}</desc>
  {/if}
  <path
    d="M20.0834 10.4999L21.2855 11.2212C21.5223 11.3633 21.599 11.6704 21.457 11.9072C21.4147 11.9776 21.3559 12.0365 21.2855 12.0787L12.0001 17.6499L2.71463 12.0787C2.47784 11.9366 2.40106 11.6295 2.54313 11.3927C2.58536 11.3223 2.64425 11.2634 2.71463 11.2212L3.91672 10.4999L12.0001 15.3499L20.0834 10.4999ZM20.0834 15.1999L21.2855 15.9212C21.5223 16.0633 21.599 16.3704 21.457 16.6072C21.4147 16.6776 21.3559 16.7365 21.2855 16.7787L12.5145 22.0412C12.1979 22.2313 11.8022 22.2313 11.4856 22.0412L2.71463 16.7787C2.47784 16.6366 2.40106 16.3295 2.54313 16.0927C2.58536 16.0223 2.64425 15.9634 2.71463 15.9212L3.91672 15.1999L12.0001 20.0499L20.0834 15.1999ZM12.5145 1.30864L21.2855 6.5712C21.5223 6.71327 21.599 7.0204 21.457 7.25719C21.4147 7.32757 21.3559 7.38647 21.2855 7.42869L12.0001 12.9999L2.71463 7.42869C2.47784 7.28662 2.40106 6.97949 2.54313 6.7427C2.58536 6.67232 2.64425 6.61343 2.71463 6.5712L11.4856 1.30864C11.8022 1.11864 12.1979 1.11864 12.5145 1.30864Z"
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
@prop ariaLabel = 'stack fill Business'
@prop ...restProps
-->
