<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '24';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'drag move 2 line';
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
    d="M11 11V5.82843L9.17157 7.65685L7.75736 6.24264L12 2L16.2426 6.24264L14.8284 7.65685L13 5.82843V11H18.1716L16.3431 9.17157L17.7574 7.75736L22 12L17.7574 16.2426L16.3431 14.8284L18.1716 13H13V18.1716L14.8284 16.3431L16.2426 17.7574L12 22L7.75736 17.7574L9.17157 16.3431L11 18.1716V13H5.82843L7.65685 14.8284L6.24264 16.2426L2 12L6.24264 7.75736L7.65685 9.17157L5.82843 11H11Z"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-remix.codewithshin.com/)
## Props
@prop export let size = ctx.size || '24';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'drag move 2 line';
-->
