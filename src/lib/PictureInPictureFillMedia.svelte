<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '24';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'picture in picture fill';
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
    d="M21 3C21.5523 3 22 3.44772 22 4V11H20V5H4V19H10V21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3H21ZM21 13C21.5523 13 22 13.4477 22 14V20C22 20.5523 21.5523 21 21 21H13C12.4477 21 12 20.5523 12 20V14C12 13.4477 12.4477 13 13 13H21Z"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-remix.codewithshin.com/)
## Props
@prop export let size = ctx.size || '24';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'picture in picture fill';
-->
