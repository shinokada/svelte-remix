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
    ariaLabel = 'blogger fill Logos',
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
    d="M19.8224 9.72867H18.729C18.1402 9.72867 17.6355 9.22399 17.6355 8.63521C17.6355 5.52306 15.1121 2.99969 12 2.99969H8.63551C5.52336 2.99969 3 5.52306 3 8.63521V15.3642C3 18.4763 5.52336 20.9997 8.63551 20.9997H15.3645C18.4766 20.9997 21 18.4763 21 15.3642V10.9062C21 10.2333 20.4953 9.72867 19.8224 9.72867ZM8.5514 7.54175H12.5888C13.1776 7.54175 13.6822 8.04642 13.6822 8.63521C13.6822 9.22399 13.1776 9.72867 12.5888 9.72867H8.5514C7.96262 9.72867 7.45794 9.22399 7.45794 8.63521C7.45794 8.04642 7.96262 7.54175 8.5514 7.54175ZM15.4486 16.4576H8.63551C8.04673 16.4576 7.54206 15.953 7.54206 15.3642C7.54206 14.7754 8.04673 14.2707 8.63551 14.2707H15.4486C16.0374 14.2707 16.5421 14.7754 16.5421 15.3642C16.5421 15.953 16.0374 16.4576 15.4486 16.4576Z"
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
@prop ariaLabel = 'blogger fill Logos'
@prop ...restProps
-->
