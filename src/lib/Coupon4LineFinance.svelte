<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '24';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'coupon 4 line';
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
    d="M10.0049 21H3.00488C2.4526 21 2.00488 20.5523 2.00488 20V4C2.00488 3.44772 2.4526 3 3.00488 3H10.0049C10.0049 4.10457 10.9003 5 12.0049 5C13.1095 5 14.0049 4.10457 14.0049 3H21.0049C21.5572 3 22.0049 3.44772 22.0049 4V20C22.0049 20.5523 21.5572 21 21.0049 21H14.0049C14.0049 19.8954 13.1095 19 12.0049 19C10.9003 19 10.0049 19.8954 10.0049 21ZM8.54001 19C9.23163 17.8044 10.5243 17 12.0049 17C13.4854 17 14.7781 17.8044 15.4698 19H20.0049V5H15.4698C14.7781 6.1956 13.4854 7 12.0049 7C10.5243 7 9.23163 6.1956 8.54001 5H4.00488V19H8.54001ZM6.00488 8H8.00488V16H6.00488V8ZM16.0049 8H18.0049V16H16.0049V8Z"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-remix.codewithshin.com/)
## Props
@prop export let size = ctx.size || '24';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'coupon 4 line';
-->
