<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '24';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'stock fill';
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
    d="M8.00488 5.00293H11.0049V14.0029H8.00488V17.0029H6.00488V14.0029H3.00488V5.00293H6.00488V2.00293H8.00488V5.00293ZM18.0049 10.0029H21.0049V19.0029H18.0049V22.0029H16.0049V19.0029H13.0049V10.0029H16.0049V7.00293H18.0049V10.0029Z"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-remix.codewithshin.com/)
## Props
@prop export let size = ctx.size || '24';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'stock fill';
-->
