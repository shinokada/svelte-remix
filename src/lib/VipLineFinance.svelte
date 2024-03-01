<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '24';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'vip line';
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
    d="M2.00488 19H22.0049V21H2.00488V19ZM11.0049 8H13.0049V16H11.0049V8ZM7.97001 8L6.10912 13.1127L4.24824 8H2.12334L5.10912 15.9637H7.10912L10.0949 8H7.97001ZM17.0049 14V16H15.0049V8H19.0049C20.6617 8 22.0049 9.34315 22.0049 11C22.0049 12.6569 20.6617 14 19.0049 14H17.0049ZM17.0049 10V12H19.0049C19.5572 12 20.0049 11.5523 20.0049 11C20.0049 10.4477 19.5572 10 19.0049 10H17.0049ZM2.00488 3H22.0049V5H2.00488V3Z"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-remix.codewithshin.com/)
## Props
@prop export let size = ctx.size || '24';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'vip line';
-->
