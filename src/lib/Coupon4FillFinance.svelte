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
    ariaLabel = 'coupon 4 fill Finance',
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
    d="M10.0049 20.9997H3.00488C2.4526 20.9997 2.00488 20.5519 2.00488 19.9997V3.99966C2.00488 3.44738 2.4526 2.99966 3.00488 2.99966H10.0049C10.0049 4.10423 10.9003 4.99966 12.0049 4.99966C13.1095 4.99966 14.0049 4.10423 14.0049 2.99966H21.0049C21.5572 2.99966 22.0049 3.44738 22.0049 3.99966V19.9997C22.0049 20.5519 21.5572 20.9997 21.0049 20.9997H14.0049C14.0049 19.8951 13.1095 18.9997 12.0049 18.9997C10.9003 18.9997 10.0049 19.8951 10.0049 20.9997ZM6.00488 7.99966V15.9997H8.00488V7.99966H6.00488ZM16.0049 7.99966V15.9997H18.0049V7.99966H16.0049Z"
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
@prop ariaLabel = 'coupon 4 fill Finance'
@prop ...restProps
-->
