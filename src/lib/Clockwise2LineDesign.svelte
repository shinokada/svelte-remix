<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '24';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'clockwise 2 line';
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
    d="M10.5858 3.99997L8.75736 2.17154L10.1716 0.757324L14.4142 4.99997L10.1716 9.24261L8.75736 7.82839L10.5858 5.99997H8C6.34315 5.99997 5 7.34311 5 8.99997V13H3V8.99997C3 6.23854 5.23858 3.99997 8 3.99997H10.5858ZM9 11C9 10.4477 9.44772 9.99997 10 9.99997H20C20.5523 9.99997 21 10.4477 21 11V21C21 21.5522 20.5523 22 20 22H10C9.44772 22 9 21.5522 9 21V11ZM11 12V20H19V12H11Z"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-remix.codewithshin.com/)
## Props
@prop export let size = ctx.size || '24';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'clockwise 2 line';
-->
