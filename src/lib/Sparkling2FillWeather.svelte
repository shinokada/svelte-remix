<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '24';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'sparkling 2 fill';
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
    d="M17.0007 1.20801 18.3195 3.68083 20.7923 4.99968 18.3195 6.31852 17.0007 8.79134 15.6818 6.31852 13.209 4.99968 15.6818 3.68083 17.0007 1.20801ZM8.00065 4.33301 10.6673 9.33301 15.6673 11.9997 10.6673 14.6663 8.00065 19.6663 5.33398 14.6663.333984 11.9997 5.33398 9.33301 8.00065 4.33301ZM19.6673 16.333 18.0007 13.208 16.334 16.333 13.209 17.9997 16.334 19.6663 18.0007 22.7913 19.6673 19.6663 22.7923 17.9997 19.6673 16.333Z"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-remix.codewithshin.com/)
## Props
@prop export let size = ctx.size || '24';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'sparkling 2 fill';
-->
