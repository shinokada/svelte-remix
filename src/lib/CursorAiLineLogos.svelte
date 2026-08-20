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
    d="M11.5498 1.35371C11.8283 1.19393 12.1718 1.19388 12.4502 1.35371L21.1211 6.33028C21.3551 6.46462 21.5 6.71356 21.5 6.98263V17.0188L21.4941 17.1184C21.4632 17.3478 21.3266 17.5526 21.1221 17.6701L12.4502 22.6477L12.3428 22.6995C12.0868 22.8042 11.7933 22.7874 11.5498 22.6477L2.87891 17.6701C2.67422 17.5527 2.53781 17.3479 2.50684 17.1184L2.5 17.0188V6.98263C2.5 6.71356 2.64488 6.46462 2.87891 6.33028L11.5498 1.35371ZM4.5 7.70528V16.2942L12 20.5989V12.3049C12 12.1165 11.8987 11.9416 11.7344 11.8469L4.50879 7.69943L4.5 7.70528ZM13.3535 19.8215L19.5 16.2942V9.23849L13.3535 19.8215ZM5.86133 6.92403H18.1387L11.999 3.40059L5.86133 6.92403Z"
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
