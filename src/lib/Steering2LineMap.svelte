<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '24';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'steering 2 line';
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
    d="M12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2ZM8 13L4.06201 13.001C4.51365 16.6192 7.38163 19.4869 11 19.9381V16C9.34315 16 8 14.6569 8 13ZM19.938 13.001L16 13C16 14.6569 14.6569 16 13 16L13.001 19.938C16.6189 19.4864 19.4864 16.6189 19.938 13.001ZM14 12H10V13C10 13.5523 10.4477 14 11 14H13C13.5523 14 14 13.5523 14 13V12ZM12 4C7.92037 4 4.55396 7.05371 4.06189 11H8C8 10.4477 8.44772 10 9 10H15C15.5523 10 16 10.4477 16 11H19.9381C19.446 7.05371 16.0796 4 12 4Z"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-remix.codewithshin.com/)
## Props
@prop export let size = ctx.size || '24';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'steering 2 line';
-->
