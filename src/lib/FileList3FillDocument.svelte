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
    ariaLabel = 'file list 3 fill Document',
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
    d="M19 22H5C3.34315 22 2 20.6569 2 19V3C2 2.44772 2.44772 2 3 2H17C17.5523 2 18 2.44772 18 3V15H22V19C22 20.6569 20.6569 22 19 22ZM18 17V19C18 19.5523 18.4477 20 19 20C19.5523 20 20 19.5523 20 19V17H18ZM6 7V9H14V7H6ZM6 11V13H14V11H6ZM6 15V17H11V15H6Z"
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
@prop ariaLabel = 'file list 3 fill Document'
@prop ...restProps
-->
