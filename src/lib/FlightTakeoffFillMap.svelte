<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '24';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'flight takeoff fill';
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
    d="M21.949 10.112C22.1634 10.9122 21.6886 11.7347 20.8884 11.9491L5.2218 16.1469C4.77856 16.2657 4.31138 16.0676 4.08866 15.6664L1.46582 10.9417L2.91471 10.5535L5.3825 12.998L10.4778 11.6328L5.96728 4.55914L7.89913 4.0415L14.8505 10.4611L20.1119 9.05131C20.9121 8.8369 21.7346 9.31177 21.949 10.112ZM4.00013 19.0002H20.0001V21.0002H4.00013V19.0002Z"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-remix.codewithshin.com/)
## Props
@prop export let size = ctx.size || '24';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'flight takeoff fill';
-->
