<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '24';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'travesti fill';
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
    d="M7.53802 9.95077L4.66252 7.07527L2.18765 9.55015L0.773438 8.13593L7.1374 1.77197L8.55161 3.18619L6.07674 5.66106L8.95224 8.53656C10.214 7.57253 11.7908 6.99989 13.5014 6.99989C17.6435 6.99989 21.0014 10.3578 21.0014 14.4999C21.0014 18.642 17.6435 21.9999 13.5014 21.9999C9.35922 21.9999 6.00136 18.642 6.00136 14.4999C6.00136 12.7894 6.574 11.2126 7.53802 9.95077Z"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-remix.codewithshin.com/)
## Props
@prop export let size = ctx.size || '24';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'travesti fill';
-->
