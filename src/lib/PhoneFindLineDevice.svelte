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
    ariaLabel = 'phone find line Device',
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
    d="M18 2C18.5523 2 19 2.44772 19 3V11H17V4H7V20H11V22H6C5.44772 22 5 21.5523 5 21V3C5 2.44772 5.44772 2 6 2H18ZM15 12C17.2091 12 19 13.7909 19 16C19 16.7419 18.798 17.4366 18.446 18.0322L20.6569 20.2426L19.2426 21.6569L17.0313 19.4466C16.4359 19.7982 15.7415 20 15 20C12.7909 20 11 18.2091 11 16C11 13.7909 12.7909 12 15 12ZM15 14C13.8954 14 13 14.8954 13 16C13 17.1046 13.8954 18 15 18C16.1046 18 17 17.1046 17 16C17 14.8954 16.1046 14 15 14Z"
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
@prop ariaLabel = 'phone find line Device'
@prop ...restProps
-->
