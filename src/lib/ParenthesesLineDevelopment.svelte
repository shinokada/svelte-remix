<script lang="ts">
  import { getContext } from 'svelte';
  import type { CtxType, Props } from './types';

  const ctx: CtxType = getContext('iconCtx') ?? {};

  let {
    size = ctx.size || '24',
    role = ctx.role || 'img',
    color = ctx.color || 'currentColor',
    title,
    desc,
    ariaLabel = 'parentheses line Development',
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
    d="M6.92316 21C5.11268 18.6642 4 15.493 4 12C4 8.50702 5.11268 5.33579 6.92316 3H8.93729C7.23506 5.3884 6.2 8.54241 6.2 12C6.2 15.4576 7.23506 18.6116 8.93729 21H6.92316ZM17.0741 21H15.06C16.7622 18.6116 17.7973 15.4576 17.7973 12C17.7973 8.54241 16.7622 5.3884 15.06 3H17.0741C18.8846 5.33579 19.9973 8.50702 19.9973 12C19.9973 15.493 18.8846 18.6642 17.0741 21Z"
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
@prop ariaLabel = 'parentheses line Development'
@prop ...restProps
-->
