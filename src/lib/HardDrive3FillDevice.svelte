<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '24';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'hard drive 3 fill';
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
    d="M5.5 2C4.99568 2 4.57028 2.37554 4.50772 2.87597L3.00772 14.876C3.00258 14.9171 3 14.9585 3 15V21C3 21.5523 3.44772 22 4 22H20C20.5523 22 21 21.5523 21 21V15C21 14.9585 20.9974 14.9171 20.9923 14.876L19.4923 2.87597C19.4297 2.37554 19.0043 2 18.5 2H5.5ZM5 16H19V20H5V16ZM15 17H17V19H15V17ZM13 17H11V19H13V17Z"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-remix.codewithshin.com/)
## Props
@prop export let size = ctx.size || '24';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'hard drive 3 fill';
-->
