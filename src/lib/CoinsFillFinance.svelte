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
    ariaLabel = 'coins fill Finance',
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
    d="M14.0049 2.00275C18.4232 2.00275 22.0049 5.58447 22.0049 10.0027C22.0049 13.2474 20.0733 16.0408 17.2973 17.296C16.0422 20.0717 13.249 22.0027 10.0049 22.0027C5.5866 22.0027 2.00488 18.421 2.00488 14.0027C2.00488 10.7586 3.9359 7.96548 6.71122 6.71006C7.96681 3.93431 10.7603 2.00275 14.0049 2.00275ZM11.0049 9.00275H9.00488V10.0027C7.62417 10.0027 6.50488 11.122 6.50488 12.5027C6.50488 13.8282 7.53642 14.9128 8.84051 14.9974L9.00488 15.0027H11.0049L11.0948 15.0108C11.328 15.0531 11.5049 15.2573 11.5049 15.5027C11.5049 15.7482 11.328 15.9524 11.0948 15.9947L11.0049 16.0027H7.00488V18.0027H9.00488V19.0027H11.0049V18.0027C12.3856 18.0027 13.5049 16.8835 13.5049 15.5027C13.5049 14.1773 12.4733 13.0927 11.1693 13.0081L11.0049 13.0027H9.00488L8.91501 12.9947C8.68176 12.9524 8.50488 12.7482 8.50488 12.5027C8.50488 12.2573 8.68176 12.0531 8.91501 12.0108L9.00488 12.0027H13.0049V10.0027H11.0049V9.00275ZM14.0049 4.00275C12.2214 4.00275 10.6196 4.78091 9.52064 6.01623C9.68133 6.00758 9.84254 6.00275 10.0049 6.00275C14.4232 6.00275 18.0049 9.58447 18.0049 14.0027C18.0049 14.1654 18 14.327 17.9905 14.4872C19.2265 13.3885 20.0049 11.7865 20.0049 10.0027C20.0049 6.68904 17.3186 4.00275 14.0049 4.00275Z"
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
@prop ariaLabel = 'coins fill Finance'
@prop ...restProps
-->
