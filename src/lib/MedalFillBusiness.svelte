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
    ariaLabel = 'medal fill Business',
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
    d="M12 7.00002C16.4183 7.00002 20 10.5817 20 15C20 19.4183 16.4183 23 12 23C7.58172 23 4 19.4183 4 15C4 10.5817 7.58172 7.00002 12 7.00002ZM12 10.5L10.6775 13.1797L7.72025 13.6094L9.86012 15.6953L9.35497 18.6406L12 17.25L14.645 18.6406L14.1399 15.6953L16.2798 13.6094L13.3225 13.1797L12 10.5ZM13 1.99902L18 2.00002V5.00002L16.6366 6.13758C15.5305 5.55773 14.3025 5.17887 13.0011 5.04951L13 1.99902ZM11 1.99902L10.9997 5.04943C9.6984 5.17866 8.47046 5.55738 7.36441 6.13706L6 5.00002V2.00002L11 1.99902Z"
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
@prop ariaLabel = 'medal fill Business'
@prop ...restProps
-->
