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
    ariaLabel = 'vip line Finance',
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
    d="M2.00488 19H22.0049V21H2.00488V19ZM11.0049 8H13.0049V16H11.0049V8ZM7.97001 8L6.10912 13.1127L4.24824 8H2.12334L5.10912 15.9637H7.10912L10.0949 8H7.97001ZM17.0049 14V16H15.0049V8H19.0049C20.6617 8 22.0049 9.34315 22.0049 11C22.0049 12.6569 20.6617 14 19.0049 14H17.0049ZM17.0049 10V12H19.0049C19.5572 12 20.0049 11.5523 20.0049 11C20.0049 10.4477 19.5572 10 19.0049 10H17.0049ZM2.00488 3H22.0049V5H2.00488V3Z"
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
@prop ariaLabel = 'vip line Finance'
@prop ...restProps
-->
