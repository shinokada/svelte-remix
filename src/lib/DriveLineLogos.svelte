<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '24';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'drive line';
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
    d="M9.09742 6.15002L4.31009 14.4429L6.06471 17.4745L10.8502 9.18584L9.09742 6.15002ZM7.79701 18.474H17.3651L19.1162 15.4399H9.54877L7.79701 18.474ZM19.1109 13.4399L14.3252 5.1499H10.8294L15.6156 13.4399H19.1109ZM8.52 3.1499H15.48L22 14.4442L18.52 20.474H5.49L2 14.4442L8.52 3.1499ZM12.0049 11.1858L10.7035 13.4399H13.3062L12.0049 11.1858Z"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-remix.codewithshin.com/)
## Props
@prop export let size = ctx.size || '24';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'drive line';
-->
