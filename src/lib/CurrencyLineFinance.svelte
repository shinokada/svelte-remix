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
    ariaLabel = 'currency line Finance',
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
    d="M17.0047 16.0027H19.0047V4.00275H9.00468V6.00275H17.0047V16.0027ZM17.0047 18.0027V21.0019C17.0047 21.5546 16.5547 22.0027 15.9978 22.0027H4.01154C3.45548 22.0027 3.00488 21.5581 3.00488 21.0019L3.00748 7.00362C3.00759 6.45085 3.45752 6.00275 4.0143 6.00275H7.00468V3.00275C7.00468 2.45046 7.4524 2.00275 8.00468 2.00275H20.0047C20.557 2.00275 21.0047 2.45046 21.0047 3.00275V17.0027C21.0047 17.555 20.557 18.0027 20.0047 18.0027H17.0047ZM5.0073 8.00275L5.00507 20.0027H15.0047V8.00275H5.0073ZM7.00468 16.0027H11.5047C11.7808 16.0027 12.0047 15.7789 12.0047 15.5027C12.0047 15.2266 11.7808 15.0027 11.5047 15.0027H8.50468C7.12397 15.0027 6.00468 13.8835 6.00468 12.5027C6.00468 11.122 7.12397 10.0027 8.50468 10.0027H9.00468V9.00275H11.0047V10.0027H13.0047V12.0027H8.50468C8.22854 12.0027 8.00468 12.2266 8.00468 12.5027C8.00468 12.7789 8.22854 13.0027 8.50468 13.0027H11.5047C12.8854 13.0027 14.0047 14.122 14.0047 15.5027C14.0047 16.8835 12.8854 18.0027 11.5047 18.0027H11.0047V19.0027H9.00468V18.0027H7.00468V16.0027Z"
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
@prop ariaLabel = 'currency line Finance'
@prop ...restProps
-->
