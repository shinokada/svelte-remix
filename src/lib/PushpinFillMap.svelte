<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '24';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'pushpin fill';
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
    d="M22.3126 10.1752L20.8984 11.5894L20.1913 10.8823L15.9486 15.125L15.2415 18.6605L13.8273 20.0747L9.58466 15.8321L4.63492 20.7818L3.2207 19.3676L8.17045 14.4179L3.92781 10.1752L5.34202 8.76101L8.87756 8.0539L13.1202 3.81126L12.4131 3.10416L13.8273 1.68994L22.3126 10.1752Z"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-remix.codewithshin.com/)
## Props
@prop export let size = ctx.size || '24';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'pushpin fill';
-->
