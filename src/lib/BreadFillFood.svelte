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
    ariaLabel = 'bread fill Food',
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
    d="M1 7C1 4.79086 2.79086 3 5 3H7C4.79086 3 3 4.79086 3 7C3 8.48168 3.8052 9.77343 5 10.4646V19C5 20.6569 6.34315 22 8 22H6C4.34315 22 3 20.6569 3 19V10.4646C1.8052 9.77343 1 8.48168 1 7ZM8 22V20C7.44772 20 7 19.5523 7 19V9.12212L6.33325 8.88645C5.5551 8.61142 5 7.86925 5 7C5 5.89543 5.89543 5 7 5V3H19C21.2091 3 23 4.79086 23 7C23 8.48168 22.1948 9.77343 21 10.4646V19C21 20.6569 19.6569 22 18 22H8Z"
  />
</svg>
