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
    ariaLabel = 'direction line Map',
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
    d="M12.0001 3.5148L3.5148 12.0001L12.0001 20.4854L20.4854 12.0001L12.0001 3.5148ZM12.7072 1.39348L22.6067 11.293C22.9972 11.6835 22.9972 12.3167 22.6067 12.7072L12.7072 22.6067C12.3167 22.9972 11.6835 22.9972 11.293 22.6067L1.39348 12.7072C1.00295 12.3167 1.00295 11.6835 1.39348 11.293L11.293 1.39348C11.6835 1.00295 12.3167 1.00295 12.7072 1.39348ZM13.0001 10.0001V7.50008L16.5001 11.0001L13.0001 14.5001V12.0001H10.0001V15.0001H8.00008V11.0001C8.00008 10.4478 8.4478 10.0001 9.00008 10.0001H13.0001Z"
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
@prop ariaLabel = 'direction line Map'
@prop ...restProps
-->
