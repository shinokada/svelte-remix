<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '24';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'suitcase 2 line';
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
    d="M18 23H16V22H8V23H6V22H5C3.89543 22 3 21.1046 3 20V7C3 5.89543 3.89543 5 5 5H8V3C8 2.44772 8.44772 2 9 2H15C15.5523 2 16 2.44772 16 3V5H19C20.1046 5 21 5.89543 21 7V20C21 21.1046 20.1046 22 19 22H18V23ZM19 7H5V20H19V7ZM10 9V18H8V9H10ZM16 9V18H14V9H16ZM14 4H10V5H14V4Z"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-remix.codewithshin.com/)
## Props
@prop export let size = ctx.size || '24';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'suitcase 2 line';
-->
