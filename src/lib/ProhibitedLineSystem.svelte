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
    ariaLabel = 'prohibited line System',
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
    d="M7.0943 5.68009L18.3199 16.9057C19.3736 15.5506 20 13.8491 20 12C20 7.58172 16.4183 4 12 4C10.1509 4 8.44939 4.62644 7.0943 5.68009ZM16.9057 18.3199L5.68009 7.0943C4.62644 8.44939 4 10.1509 4 12C4 16.4183 7.58172 20 12 20C13.8491 20 15.5506 19.3736 16.9057 18.3199ZM4.92893 4.92893C6.73748 3.12038 9.23885 2 12 2C17.5228 2 22 6.47715 22 12C22 14.7611 20.8796 17.2625 19.0711 19.0711C17.2625 20.8796 14.7611 22 12 22C6.47715 22 2 17.5228 2 12C2 9.23885 3.12038 6.73748 4.92893 4.92893Z"
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
@prop ariaLabel = 'prohibited line System'
@prop ...restProps
-->
