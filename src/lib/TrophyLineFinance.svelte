<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '24';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'trophy line';
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
    d="M13.0049 16.941V19.0029H18.0049V21.0029H6.00488V19.0029H11.0049V16.941C7.05857 16.4489 4.00488 13.0825 4.00488 9.00293V3.00293H20.0049V9.00293C20.0049 13.0825 16.9512 16.4489 13.0049 16.941ZM6.00488 5.00293V9.00293C6.00488 12.3166 8.69117 15.0029 12.0049 15.0029C15.3186 15.0029 18.0049 12.3166 18.0049 9.00293V5.00293H6.00488ZM1.00488 5.00293H3.00488V9.00293H1.00488V5.00293ZM21.0049 5.00293H23.0049V9.00293H21.0049V5.00293Z"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-remix.codewithshin.com/)
## Props
@prop export let size = ctx.size || '24';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'trophy line';
-->
