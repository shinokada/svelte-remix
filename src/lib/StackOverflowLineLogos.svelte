<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '24';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'stack overflow line';
</script>

<svg
  width={size}
  height={size}
  fill={color}
  {...$$restProps}
  {role}
  aria-label={ariaLabel}
  on:click
  on:keydown
  on:keyup
  on:focus
  on:blur
  on:mouseenter
  on:mouseleave
  on:mouseover
  on:mouseout
  viewBox="0 0 24 24"
  xmlns="http://www.w3.org/2000/svg"
  ><path
    d="M18.001 20.0028V15.0003H20.001V22.0028H4.00098V15.0003H6.00098V20.0028H18.001ZM7.50098 18.0003V16.0003H16.501V18.0003H7.50098ZM7.578 13.6199L7.9253 11.6503L16.7886 13.2131L16.4413 15.1827L7.578 13.6199ZM9.21156 8.11632L10.2116 6.38427L18.0058 10.8843L17.0058 12.6163L9.21156 8.11632ZM12.6289 3.50335L14.161 2.21777L19.9461 9.11217L18.414 10.3977L12.6289 3.50335Z"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-remix.codewithshin.com/)
## Props
@prop export let size = ctx.size || '24';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'stack overflow line';
-->
