<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '24';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'single quotes l';
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
    d="M9.58341 17.3211C8.55316 16.2275 8 15 8 13.0104C8 9.51092 10.4565 6.37372 14.0306 4.82324L14.9233 6.20085C11.588 8.00545 10.9362 10.3461 10.6756 11.8221C11.2126 11.5444 11.9156 11.4467 12.6047 11.5106C14.4091 11.6778 15.8312 13.1591 15.8312 15C15.8312 16.933 14.2642 18.5 12.3312 18.5C11.2581 18.5 10.232 18.0096 9.58341 17.3211Z"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-remix.vercel.app/)
## Props
@prop export let size = ctx.size || '24';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'single quotes l';
-->
