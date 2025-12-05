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
    focusable = ctx.focusable || 'false',
    ariaLabel,
    ...restProps
  }: Props = $props();

  const ariaDescribedby = $derived([title?.id, desc?.id].filter(Boolean).join(' ') || undefined);
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  {...restProps}
  {role}
  width={size}
  height={size}
  fill={color}
  {focusable}
  aria-label={ariaLabel || undefined}
  aria-labelledby={title?.id || undefined}
  aria-describedby={ariaDescribedby}
  viewBox="0 0 24 24"
>
  {#if title?.id && title.title}
    <title id={title.id}>{title.title}</title>
  {/if}
  {#if desc?.id && desc.desc}
    <desc id={desc.id}>{desc.desc}</desc>
  {/if}
  <path
    d="M1.99805 21.0001V19.0001L3.99805 18.9999V4.83465C3.99805 4.35136 4.34367 3.93723 4.81916 3.85078L14.2907 2.12868C14.6167 2.0694 14.9291 2.28564 14.9884 2.61167C14.9948 2.64708 14.998 2.68301 14.998 2.719V3.9999L18.998 4.00007C19.5503 4.00007 19.998 4.44779 19.998 5.00007V18.9999L21.998 19.0001V21.0001H17.998V6.00007L14.998 5.9999V21.0001H1.99805ZM12.998 4.3965L5.99805 5.66923V19.0001H12.998V4.3965ZM11.998 11.0001V13.0001H9.99805V11.0001H11.998Z"
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
@prop focusable = ctx.focusable || 'false'
@prop ariaLabel
@prop ...restProps
-->
