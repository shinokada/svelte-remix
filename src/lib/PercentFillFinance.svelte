<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '24';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'percent fill';
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
    d="M17.5049 21.0029C15.5719 21.0029 14.0049 19.4359 14.0049 17.5029C14.0049 15.5699 15.5719 14.0029 17.5049 14.0029C19.4379 14.0029 21.0049 15.5699 21.0049 17.5029C21.0049 19.4359 19.4379 21.0029 17.5049 21.0029ZM6.50488 10.0029C4.57189 10.0029 3.00488 8.43593 3.00488 6.50293C3.00488 4.56993 4.57189 3.00293 6.50488 3.00293C8.43788 3.00293 10.0049 4.56993 10.0049 6.50293C10.0049 8.43593 8.43788 10.0029 6.50488 10.0029ZM19.076 3.51765L20.4902 4.93186L4.93382 20.4882L3.5196 19.074L19.076 3.51765Z"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-remix.codewithshin.com/)
## Props
@prop export let size = ctx.size || '24';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'percent fill';
-->
