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
    focusable = 'false',
    ariaLabel,
    ...restProps
  }: Props = $props();

  let ariaDescribedby = $derived(`${title?.id || ''} ${desc?.id || ''}`.trim());
  const hasDescription = $derived(!!(title?.id || desc?.id));
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  {...restProps}
  {role}
  width={size}
  height={size}
  fill={color}
  {focusable}
  aria-label={title?.id ? undefined : ariaLabel}
  aria-labelledby={title?.id || undefined}
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
    d="M11.0002 11.5V8.23202L8.17007 9.86602L7.17007 8.13397L10.0002 6.5L7.17007 4.86602L8.17007 3.13397L11.0002 4.76798V1.5H13.0002V4.76792L15.8303 3.13397L16.8303 4.86603L14.0002 6.5L16.8303 8.13397L15.8303 9.86602L13.0002 8.23208V11.5H11.0002ZM21.4596 12.884L18.6294 14.518V11.25H16.6294V14.518L13.7992 12.884L12.7992 14.616L15.6294 16.25L12.7993 17.884L13.7993 19.616L16.6294 17.9821V21.25H18.6294V17.9821L21.4595 19.616L22.4595 17.884L19.6294 16.25L22.4596 14.616L21.4596 12.884ZM7.37109 17.9815L7.37109 21.2495L5.37109 21.2495L5.37109 17.9816L2.54102 19.6155L1.54102 17.8835L4.37114 16.2495L1.54102 14.6155L2.54102 12.8835L5.37109 14.5174L5.37109 11.2495H7.37109L7.37109 14.5175L10.2013 12.8835L11.2013 14.6155L8.37114 16.2495L11.2013 17.8835L10.2013 19.6155L7.37109 17.9815Z"
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
@prop focusable = 'false'
@prop ariaLabel
@prop ...restProps
-->
