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
    ariaLabel = 'ghost 2 fill User replace_ariaLabel Faces',
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
    d="M12 2C15.5 2 18 5 19 8C22 9 23 11.73 23 14L20.2253 14.7928C19.796 14.9154 19.5 15.3078 19.5 15.7543V17.25C19.5 18.2165 18.7165 19 17.75 19H17.1536C16.4825 19 15.8562 19.3366 15.4858 19.8962C14.5576 21.2987 13.3957 22 12 22C10.6043 22 9.44238 21.2987 8.5142 19.8962C8.14383 19.3366 7.51746 19 6.84636 19H6.25C5.2835 19 4.5 18.2165 4.5 17.25V15.7543C4.5 15.3078 4.20402 14.9154 3.77472 14.7928L1 14C1 11.7337 2 9 5 8C6 5 8.5 2 12 2ZM12 12C11.1716 12 10.5 13.1193 10.5 14.5C10.5 15.8807 11.1716 17 12 17C12.8284 17 13.5 15.8807 13.5 14.5C13.5 13.1193 12.8284 12 12 12ZM9.5 8C8.67157 8 8 8.67157 8 9.5C8 10.3284 8.67157 11 9.5 11C10.3284 11 11 10.3284 11 9.5C11 8.67157 10.3284 8 9.5 8ZM14.5 8C13.6716 8 13 8.67157 13 9.5C13 10.3284 13.6716 11 14.5 11C15.3284 11 16 10.3284 16 9.5C16 8.67157 15.3284 8 14.5 8Z"
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
@prop ariaLabel = 'ghost 2 fill User replace_ariaLabel Faces'
@prop ...restProps
-->
