<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '24';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'contrast drop fill';
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
    d="M12 0.269043L18.364 6.633C21.8787 10.1477 21.8787 15.8462 18.364 19.3609C14.8492 22.8756 9.15076 22.8756 5.63604 19.3609C2.12132 15.8462 2.12132 10.1477 5.63604 6.633L12 0.269043ZM12 3.09747L7.05025 8.04722C4.31658 10.7809 4.31658 15.213 7.05025 17.9467C8.41814 19.3146 10.2113 19.998 12.0042 19.997L12 3.09747Z"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-remix.codewithshin.com/)
## Props
@prop export let size = ctx.size || '24';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'contrast drop fill';
-->
