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
    d="M23.4132 8.7918L18.0211 13.7783L16.6058 12.363L18.8719 10.2674L14.039 9.69434L12.0006 5.27502L11.2169 6.97405L9.70961 5.46678L12.0006 0.5L15.3862 7.84006L23.4132 8.7918ZM8.45885 9.87258L5.12921 10.2674L8.70231 13.5717L7.75383 18.3451L12.0006 15.968L16.2473 18.3451L16.0777 17.4914L8.45885 9.87258ZM18.6224 20.0361L19.054 22.2082L12.0006 18.26L4.94715 22.2082L6.52248 14.2799L0.587891 8.7918L6.65832 8.07205L1.39397 2.80769L2.80818 1.39348L22.6072 21.1925L21.193 22.6067L18.6224 20.0361Z"
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
