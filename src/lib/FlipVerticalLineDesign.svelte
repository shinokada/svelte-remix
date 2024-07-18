<script lang="ts">
  import { getContext } from 'svelte';
  import type { CtxType, Props } from './types';

  const ctx: CtxType = getContext('iconCtx') ?? {};

  let {
    size = ctx.size || '24',
    role = ctx.role || 'img',
    color = ctx.color || 'currentColor',
    title,
    desc,
    ariaLabel = 'flip vertical line Design',
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
    d="M22 11L2 11L2 13L22 13V11ZM18 2C19.1046 2 20 2.89543 20 4V7C20 8.10457 19.1046 9 18 9L6 9C4.89543 9 4 8.10457 4 7L4 4C4 2.89543 4.89543 2 6 2L18 2ZM18 20H6V17L18 17V20ZM20 17C20 15.8954 19.1046 15 18 15L6 15C4.89543 15 4 15.8954 4 17L4 20C4 21.1046 4.89543 22 6 22H18C19.1046 22 20 21.1046 20 20V17Z"
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
@prop ariaLabel = 'flip vertical line Design'
@prop ...restProps
-->
