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
    d="M12 1.5C15.0376 1.5 17.5 3.96243 17.5 7C17.5 8.77579 16.6584 10.355 15.3523 11.3606C17.2389 12.4091 18.5 14.3186 18.5 16.5C18.5 19.8137 15.5899 22.5 12 22.5C8.41015 22.5 5.5 19.8137 5.5 16.5C5.5 14.3186 6.7611 12.4091 8.64703 11.3589C7.34158 10.355 6.5 8.77579 6.5 7C6.5 3.96243 8.96243 1.5 12 1.5ZM12 12.5C9.48055 12.5 7.5 14.3282 7.5 16.5C7.5 18.6718 9.48055 20.5 12 20.5C14.5194 20.5 16.5 18.6718 16.5 16.5C16.5 14.3282 14.5194 12.5 12 12.5ZM12 3.5C10.067 3.5 8.5 5.067 8.5 7C8.5 8.933 10.067 10.5 12 10.5C13.933 10.5 15.5 8.933 15.5 7C15.5 5.067 13.933 3.5 12 3.5Z"
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
