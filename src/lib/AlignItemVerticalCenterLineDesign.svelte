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
    ariaLabel = 'align item vertical center line Design',
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
    d="M9 18L9 6L6 6L6 18H9ZM5 20C4.44772 20 4 19.5523 4 19L4 13H2V11H4L4 5C4 4.44771 4.44771 4 5 4H10C10.5523 4 11 4.44771 11 5V11H13V7C13 6.44771 13.4477 6 14 6L19 6C19.5523 6 20 6.44772 20 7V11H22V13H20V17C20 17.5523 19.5523 18 19 18H14C13.4477 18 13 17.5523 13 17V13H11V19C11 19.5523 10.5523 20 10 20H5ZM15 16H18V8L15 8V16Z"
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
@prop ariaLabel = 'align item vertical center line Design'
@prop ...restProps
-->
