<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '24';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'hourglass 2 line';
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
    d="M4 2H20V6.45994L13.5366 12L20 17.5401V22H4V17.5401L10.4634 12L4 6.45994V2ZM12 10.6829L18 5.54007V4H6V5.54007L12 10.6829ZM12 13.3171L6 18.4599V20H18V18.4599L12 13.3171Z"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-remix.codewithshin.com/)
## Props
@prop export let size = ctx.size || '24';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'hourglass 2 line';
-->
