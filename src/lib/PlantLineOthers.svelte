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
    ariaLabel = 'plant line Others',
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
    d="M5.99805 2C8.68733 2 11.0224 3.51653 12.1947 5.74104C13.372 4.08252 15.3086 3 17.498 3H20.998V5.5C20.998 9.08985 18.0879 12 14.498 12H12.998V13H17.998V20C17.998 21.1046 17.1026 22 15.998 22H7.99805C6.89348 22 5.99805 21.1046 5.99805 20V13H10.998V11H8.99805C5.13205 11 1.99805 7.86599 1.99805 4V2H5.99805ZM15.998 15H7.99805V20H15.998V15ZM18.998 5H17.498C15.0128 5 12.998 7.01472 12.998 9.5V10H14.498C16.9833 10 18.998 7.98528 18.998 5.5V5ZM5.99805 4H3.99805C3.99805 6.76142 6.23662 9 8.99805 9H10.998C10.998 6.23858 8.75947 4 5.99805 4Z"
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
@prop ariaLabel = 'plant line Others'
@prop ...restProps
-->
