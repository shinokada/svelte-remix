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
    ariaLabel = 'creative commons nd line Business',
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
    d="M8 9H16V11H8V9ZM8 15V13H16V15H8ZM2 12C2 6.47717 6.47717 2 12 2 17.5228 2 22 6.47717 22 12 22 17.5228 17.5228 22 12 22 6.47717 22 2 17.5228 2 12ZM12 4C7.58167 4 4 7.58167 4 12 4 16.4183 7.58167 20 12 20 16.4183 20 20 16.4183 20 12 20 7.58167 16.4183 4 12 4Z"
  />
</svg>
