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
    focusable = (ctx.focusable as Props['focusable']) || 'false',
    ariaLabel,
    ...restProps
  }: Props = $props();

  const ariaDescribedby = $derived(desc?.id && desc.desc ? desc.id : undefined);
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
    d="M20.1025 3.00488C20.6067 3.05621 21 3.48232 21 4V20L20.9951 20.1025C20.9472 20.573 20.573 20.9472 20.1025 20.9951L20 21H4C3.48232 21 3.05621 20.6067 3.00488 20.1025L3 20V4C3 3.44772 3.44772 3 4 3H20L20.1025 3.00488ZM5 19H19V5H5V19ZM9 17H7V15H9V17ZM13 17H11V15H13V17ZM17 17H15V15H17V17ZM11 15H9V13H11V15ZM15 15H13V13H15V15ZM9 13H7V11H9V13ZM13 13H11V11H13V13ZM17 13H15V11H17V13ZM11 11H9V9H11V11ZM15 11H13V9H15V11ZM9 9H7V7H9V9ZM13 9H11V7H13V9ZM17 9H15V7H17V9Z"
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
@prop focusable = (ctx.focusable as Props['focusable']) || 'false',
@prop ariaLabel
@prop ...restProps
-->
