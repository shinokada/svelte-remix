<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '24';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'corner up left double fill';
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
    d="M20.0005 19.0001 20.0004 10.0003 14.4143 10.0002V4.58594L8.00014 11.0001 14.4143 17.4144V12.0002L18.0004 12.0003 18.0005 19.0002 20.0005 19.0001ZM10.1639 6.05029 8.7497 4.63608 2.38574 11 8.7497 17.364 10.1639 15.9498 5.21417 11 10.1639 6.05029Z"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-remix.codewithshin.com/)
## Props
@prop export let size = ctx.size || '24';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'corner up left double fill';
-->
