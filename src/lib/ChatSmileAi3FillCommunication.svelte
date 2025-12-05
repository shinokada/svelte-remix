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
    d="M12 1.99995C12.9057 1.99995 13.7829 2.12193 14.6172 2.3476C14.2223 3.14739 14 4.04767 14 4.99995C14 8.31367 16.6863 11 20 11C20.6685 11 21.3106 10.8882 21.9111 10.6865C21.9676 11.1164 22 11.5546 22 12C22 17.5228 17.5228 22 12 22H2L4.92871 19.0713C3.11908 17.2616 2 14.7614 2 12C2.00002 6.47713 6.47717 1.99995 12 1.99995ZM8 13C8 15.2091 9.79086 17 12 17C14.2091 17 16 15.2091 16 13H8ZM19.5293 1.31928C19.7058 0.893498 20.2942 0.893484 20.4707 1.31928L20.7236 1.93061C21.1555 2.97341 21.9615 3.80612 22.9746 4.25679L23.6914 4.57612C24.1022 4.75881 24.1022 5.35633 23.6914 5.53902L22.9326 5.87691C21.945 6.31619 21.1534 7.11942 20.7139 8.12789L20.4668 8.69332C20.2863 9.10745 19.7136 9.10745 19.5332 8.69332L19.2861 8.12789C18.8466 7.11941 18.0551 6.31619 17.0674 5.87691L16.3076 5.53902C15.8974 5.35616 15.8974 4.75893 16.3076 4.57612L17.0254 4.25679C18.0384 3.80612 18.8445 2.97342 19.2764 1.93061L19.5293 1.31928Z"
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
