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
    ariaLabel = 'opera line Logos',
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
    d="M14.7665 19.5091C17.8219 18.3834 20.001 15.4462 20.001 12C20.001 8.55381 17.8219 5.61656 14.7665 4.4909C16.7122 5.97596 18.001 8.93354 18.001 12C18.001 15.0665 16.7122 18.024 14.7665 19.5091ZM9.23543 4.4909C6.18001 5.61656 4.00098 8.55381 4.00098 12C4.00098 15.4462 6.18001 18.3834 9.23543 19.5091C7.28979 18.024 6.00098 15.0665 6.00098 12C6.00098 8.93354 7.28979 5.97596 9.23543 4.4909ZM12.001 22C6.47813 22 2.00098 17.5228 2.00098 12C2.00098 6.47715 6.47813 2 12.001 2C17.5238 2 22.001 6.47715 22.001 12C22.001 17.5228 17.5238 22 12.001 22ZM12.001 18.5C14.001 18.5 16.001 15.4667 16.001 12C16.001 8.53333 14.001 5.5 12.001 5.5C10.001 5.5 8.00098 8.53333 8.00098 12C8.00098 15.4667 10.001 18.5 12.001 18.5Z"
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
@prop ariaLabel = 'opera line Logos'
@prop ...restProps
-->
