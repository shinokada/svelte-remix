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
    ariaLabel = 'key 2 fill Others',
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
    d="M10.313 11.5656L18.253 3.62561L20.3744 5.74693L18.9602 7.16114L21.0815 9.28246L17.5459 12.818L15.4246 10.6967L12.4343 13.687C13.4182 15.5719 13.1186 17.9524 11.5355 19.5355C9.58291 21.4881 6.41709 21.4881 4.46447 19.5355C2.51184 17.5829 2.51184 14.4171 4.46447 12.4644C6.04755 10.8814 8.42809 10.5818 10.313 11.5656ZM9.41421 17.4142C10.1953 16.6331 10.1953 15.3668 9.41421 14.5858C8.63316 13.8047 7.36684 13.8047 6.58579 14.5858C5.80474 15.3668 5.80474 16.6331 6.58579 17.4142C7.36684 18.1952 8.63316 18.1952 9.41421 17.4142Z"
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
@prop ariaLabel = 'key 2 fill Others'
@prop ...restProps
-->
