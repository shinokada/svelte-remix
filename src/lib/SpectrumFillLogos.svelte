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
    ariaLabel = 'spectrum fill Logos',
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
    d="M13.1997 2.00596C21.2413 2.09306 22.0006 3.25009 22.0006 12.0001L21.9948 13.1991C21.9077 21.2408 20.7506 22.0001 12.0006 22.0001L10.8016 21.9942C3.14288 21.9113 2.08947 20.8579 2.00651 13.1991L2.00098 11.6908L2.00651 10.801C2.09154 2.95085 3.19615 2.04037 11.3885 2.00146L13.1997 2.00596ZM8.25064 7.00009H7.66731C7.33265 7.00009 7.0555 7.24681 7.00787 7.56825L7.00064 7.66675V11.3334C7.00064 11.6683 7.24737 11.9453 7.56881 11.9929L7.66731 12.0001H8.25064C10.2549 12.0001 11.8919 13.5725 11.9954 15.5509L12.0006 15.7501V16.3334C12.0006 16.6683 12.2474 16.9453 12.5688 16.9929L12.6673 17.0001H16.334C16.6686 17.0001 16.9458 16.7535 16.9934 16.432L17.0006 16.3334V15.7501C17.0006 11.0039 13.2218 7.14029 8.50863 7.00382L8.25064 7.00009Z"
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
@prop ariaLabel = 'spectrum fill Logos'
@prop ...restProps
-->
