<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '24';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'ink bottle line';
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
    d="M16 8.99658L20.3714 10.7451C20.751 10.897 21 11.2647 21 11.6736V20.9966C21 21.5489 20.5523 21.9966 20 21.9966H4C3.44772 21.9966 3 21.5489 3 20.9966V11.6736C3 11.2647 3.24895 10.897 3.62861 10.7451L8 8.99658H16ZM15.6148 10.9966H8.38517L5 12.3506V19.9966H19V18.9966H8V13.9966H19V12.3506L15.6148 10.9966ZM16 2.99658C16.5523 2.99658 17 3.4443 17 3.99658V7.99658H7V3.99658C7 3.4443 7.44772 2.99658 8 2.99658H16ZM15 4.99658H9V5.99658H15V4.99658Z"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-remix.codewithshin.com/)
## Props
@prop export let size = ctx.size || '24';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'ink bottle line';
-->
