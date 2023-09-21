<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '24';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'brush 3 fill';
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
    d="M20 10.9966V7.99658H14V3.99658H10V7.99658H4V10.9966H20ZM21 12.9966V20.9966C21 21.5489 20.5523 21.9966 20 21.9966H10V15.9966H8V21.9966H4C3.44772 21.9966 3 21.5489 3 20.9966V12.9966H2V6.99658C2 6.4443 2.44772 5.99658 3 5.99658H8V2.99658C8 2.4443 8.44772 1.99658 9 1.99658H15C15.5523 1.99658 16 2.4443 16 2.99658V5.99658H21C21.5523 5.99658 22 6.4443 22 6.99658V12.9966H21Z"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-remix.vercel.app/)
## Props
@prop export let size = ctx.size || '24';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'brush 3 fill';
-->
