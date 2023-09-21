<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '24';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'home heart line';
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
    d="M20 20.0001C20 20.5524 19.5523 21.0001 19 21.0001H5C4.44772 21.0001 4 20.5524 4 20.0001V11.0001H1L11.3273 1.61162C11.7087 1.26488 12.2913 1.26488 12.6727 1.61162L23 11.0001H20V20.0001ZM18 19.0001V9.15757L12 3.70302L6 9.15757V19.0001H18ZM12 17.0001L8.64124 13.6413C7.76256 12.7627 7.76256 11.338 8.64124 10.4594C9.51992 9.58068 10.9445 9.58068 11.8232 10.4594L12 10.6361L12.1768 10.4594C13.0555 9.58068 14.4801 9.58068 15.3588 10.4594C16.2374 11.338 16.2374 12.7627 15.3588 13.6413L12 17.0001Z"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-remix.vercel.app/)
## Props
@prop export let size = ctx.size || '24';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'home heart line';
-->
