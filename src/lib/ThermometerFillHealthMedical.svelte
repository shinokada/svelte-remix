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
    ariaLabel = 'thermometer fill Health replace_ariaLabel Medical',
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
    d="M20.5565 3.44367C22.1186 5.00576 22.1186 7.53842 20.5565 9.10052L12.3563 17.3008C11.714 17.943 10.8723 18.3476 9.96957 18.4479L6.59094 18.8221L4.29304 21.1213C3.90252 21.5119 3.26936 21.5119 2.87883 21.1213C2.48831 20.7308 2.48831 20.0976 2.87883 19.7071L5.17694 17.4081L5.55231 14.0306C5.65261 13.1279 6.05716 12.2862 6.69942 11.6439L14.8996 3.44367C16.4617 1.88157 18.9944 1.88157 20.5565 3.44367ZM11.3641 12.6361L9.9499 14.0503L12.0712 16.1716L13.4854 14.7574L11.3641 12.6361ZM14.1925 9.80763L12.7783 11.2218L14.8996 13.3432L16.3139 11.9289L14.1925 9.80763ZM17.021 6.9792L15.6068 8.39341L17.7281 10.5147L19.1423 9.10052L17.021 6.9792Z"
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
@prop ariaLabel = 'thermometer fill Health replace_ariaLabel Medical'
@prop ...restProps
-->
