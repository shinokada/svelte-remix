<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '24';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'coin fill';
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
    d="M23.0049 12.0029V14.0029C23.0049 17.3166 18.08 20.0029 12.0049 20.0029C6.03824 20.0029 1.18114 17.4117 1.00957 14.1798L1.00488 14.0029V12.0029C1.00488 15.3166 5.92975 18.0029 12.0049 18.0029C18.08 18.0029 23.0049 15.3166 23.0049 12.0029ZM12.0049 4.00293C18.08 4.00293 23.0049 6.68922 23.0049 10.0029C23.0049 13.3166 18.08 16.0029 12.0049 16.0029C5.92975 16.0029 1.00488 13.3166 1.00488 10.0029C1.00488 6.68922 5.92975 4.00293 12.0049 4.00293Z"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-remix.codewithshin.com/)
## Props
@prop export let size = ctx.size || '24';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'coin fill';
-->
