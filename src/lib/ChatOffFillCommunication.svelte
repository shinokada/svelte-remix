<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '24';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'chat off fill';
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
    d="M2.80777 1.39355L22.6068 21.1925L21.1925 22.6068L17.5846 18.9996L6.45516 19.0002L2.00016 22.5002V4.00016C2.00016 3.83085 2.04223 3.67138 2.11649 3.53162L1.39355 2.80777L2.80777 1.39355ZM21.0002 3.00016C21.5524 3.00016 22.0002 3.44787 22.0002 4.00016V17.7852L7.21416 3.00016H21.0002Z"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-remix.codewithshin.com/)
## Props
@prop export let size = ctx.size || '24';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'chat off fill';
-->
