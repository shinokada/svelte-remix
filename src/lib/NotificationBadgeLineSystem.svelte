<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '24';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'notification badge line';
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
    d="M13.3414 4C13.1203 4.62556 13 5.29873 13 6H5V20H19V12C19.7013 12 20.3744 11.8797 21 11.6586V21C21 21.5523 20.5523 22 20 22H4C3.44772 22 3 21.5523 3 21V5C3 4.44772 3.44772 4 4 4H13.3414ZM19 8C20.1046 8 21 7.10457 21 6C21 4.89543 20.1046 4 19 4C17.8954 4 17 4.89543 17 6C17 7.10457 17.8954 8 19 8ZM19 10C16.7909 10 15 8.20914 15 6C15 3.79086 16.7909 2 19 2C21.2091 2 23 3.79086 23 6C23 8.20914 21.2091 10 19 10Z"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-remix.codewithshin.com/)
## Props
@prop export let size = ctx.size || '24';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'notification badge line';
-->
