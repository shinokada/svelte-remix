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
    ariaLabel = 'honor of kings fill Logos',
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
    d="M21.1592 4.25759C21.1934 7.75736 21.7504 9.06895 21.947 10.9594C22.248 13.8533 21.2897 16.8534 19.072 19.0711C15.4057 22.7374 9.60078 22.9617 5.67278 19.744L8.52438 16.8913C10.8676 18.561 14.1415 18.3448 16.2436 16.2426C18.346 14.1403 18.562 10.8658 16.8917 8.52257L21.1592 4.25759ZM18.3292 4.25604L15.4776 7.10872C13.1344 5.439 9.86048 5.65522 7.75834 7.75736C5.65619 9.8595 5.43998 13.1334 7.10969 15.4766L2.8428 19.7424C2.80859 16.2426 2.25158 14.931 2.05494 13.0406C1.75392 10.1467 2.71224 7.1466 4.92991 4.92893C8.59624 1.2626 14.4012 1.03831 18.3292 4.25604ZM12.001 8C14.2101 8 16.001 9.79086 16.001 12C16.001 14.2091 14.2101 16 12.001 16C9.79184 16 8.00098 14.2091 8.00098 12C8.00098 9.79086 9.79184 8 12.001 8ZM12.001 10.5C11.1725 10.5 10.501 11.1716 10.501 12C10.501 12.8284 11.1725 13.5 12.001 13.5C12.8294 13.5 13.501 12.8284 13.501 12C13.501 11.1716 12.8294 10.5 12.001 10.5Z"
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
@prop ariaLabel = 'honor of kings fill Logos'
@prop ...restProps
-->
