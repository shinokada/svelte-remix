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
    ariaLabel = 'sort number desc Editor',
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
    d="M9 11L9.00054 3H7.31304L5 3.61978V5.9485L7 5.41V11H9ZM22 8L18 3L14 8H17V21H19V8H22ZM8 16.5C7.44772 16.5 7 16.0523 7 15.5C7 14.9477 7.44772 14.5 8 14.5C8.55228 14.5 9 14.9477 9 15.5C9 16.0523 8.55228 16.5 8 16.5ZM10.5729 17.0436C10.8441 16.5926 11 16.0645 11 15.5C11 13.8431 9.65685 12.5 8 12.5C6.34315 12.5 5 13.8431 5 15.5C5 16.9695 6.05661 18.1923 7.45156 18.45L5.97931 21H8.28871L10.5729 17.0436Z"
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
@prop ariaLabel = 'sort number desc Editor'
@prop ...restProps
-->
