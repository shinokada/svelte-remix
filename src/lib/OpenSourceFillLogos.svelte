<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '24';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'open source fill';
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
    d="M12.001 2C17.5238 2 22.001 6.47715 22.001 12C22.001 16.1302 19.497 19.6757 15.9243 21.201L13.4058 14.6514C14.3548 14.1476 15.001 13.1493 15.001 12C15.001 10.3431 13.6578 9 12.001 9C10.3441 9 9.00098 10.3431 9.00098 12C9.00098 13.1497 9.64766 14.1483 10.5971 14.6519L8.07863 21.2014C4.5054 19.6763 2.00098 16.1306 2.00098 12C2.00098 6.47715 6.47813 2 12.001 2Z"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-remix.codewithshin.com/)
## Props
@prop export let size = ctx.size || '24';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'open source fill';
-->
