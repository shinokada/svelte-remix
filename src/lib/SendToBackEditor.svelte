<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '24';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'send to back';
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
    d="M11 3C11.5523 3 12 3.44772 12 4V6H17C17.5523 6 18 6.44772 18 7V12H20C20.5523 12 21 12.4477 21 13V20C21 20.5523 20.5523 21 20 21H13C12.4477 21 12 20.5523 12 20V18H7C6.44772 18 6 17.5523 6 17V12H4C3.44772 12 3 11.5523 3 11V4C3 3.44772 3.44772 3 4 3H11ZM16 8H12V11C12 11.5523 11.5523 12 11 12H8V16H12V13C12 12.4477 12.4477 12 13 12H16V8Z"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-remix.codewithshin.com/)
## Props
@prop export let size = ctx.size || '24';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'send to back';
-->
