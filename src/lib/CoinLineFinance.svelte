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
    d="M12.0049 4.00281C18.08 4.00281 23.0049 6.6891 23.0049 10.0028V14.0028C23.0049 17.3165 18.08 20.0028 12.0049 20.0028C6.03824 20.0028 1.18114 17.4116 1.00957 14.1797L1.00488 14.0028V10.0028C1.00488 6.6891 5.92975 4.00281 12.0049 4.00281ZM12.0049 16.0028C8.28443 16.0028 4.99537 14.9953 3.00466 13.4533L3.00488 14.0028C3.00488 15.885 6.88751 18.0028 12.0049 18.0028C17.0156 18.0028 20.8426 15.9723 20.9999 14.1207L21.0049 14.0028L21.0061 13.4525C19.0155 14.995 15.726 16.0028 12.0049 16.0028ZM12.0049 6.00281C6.88751 6.00281 3.00488 8.12061 3.00488 10.0028C3.00488 11.885 6.88751 14.0028 12.0049 14.0028C17.1223 14.0028 21.0049 11.885 21.0049 10.0028C21.0049 8.12061 17.1223 6.00281 12.0049 6.00281Z"
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
