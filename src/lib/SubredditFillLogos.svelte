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
    d="M12 2C13.9936 2 15.8495 2.58549 17.4092 3.59082L12.0273 16.2109H14.2002L19.0156 4.87598C20.8572 6.68972 22 9.211 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2ZM12.1875 7.78809C11.6774 7.77861 11.1744 7.90714 10.7314 8.16016C10.3081 8.40791 9.95661 8.72329 9.67773 9.10547H9.63867V7.91211H7.55469V16.2109H9.69336V11.8105C9.69336 11.4028 9.78825 11.0513 9.98047 10.7568C10.1578 10.4751 10.4076 10.2462 10.7041 10.0947C10.9962 9.94702 11.2919 9.87312 11.5918 9.87305L11.5908 9.87207C11.7208 9.87178 11.8507 9.88429 11.9785 9.9082C12.0728 9.91992 12.1648 9.94728 12.25 9.98926L13.1104 7.93555C13.0271 7.89892 12.9002 7.86604 12.7305 7.83496C12.5605 7.80385 12.3786 7.78809 12.1875 7.78809Z"
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
