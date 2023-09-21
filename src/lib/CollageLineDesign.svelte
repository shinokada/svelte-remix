<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '24';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'collage line';
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
    d="M20 3.10645C20.5523 3.10645 21 3.55416 21 4.10645V20.1064C21 20.6587 20.5523 21.1064 20 21.1064H4C3.44772 21.1064 3 20.6587 3 20.1064V4.10645C3 3.55416 3.44772 3.10645 4 3.10645H20ZM11.1888 13.2649L5 14.3554V19.1064H12.218L11.1888 13.2649ZM19 5.10645H11.781L14.249 19.1064H19V5.10645ZM9.75 5.10645H5V12.3244L10.8415 11.2953L9.75 5.10645Z"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-remix.vercel.app/)
## Props
@prop export let size = ctx.size || '24';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'collage line';
-->
