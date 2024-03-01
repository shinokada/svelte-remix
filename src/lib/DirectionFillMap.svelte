<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '24';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'direction fill';
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
    d="M9.00008 10.0001C8.4478 10.0001 8.00008 10.4478 8.00008 11.0001V15.0001H10.0001V12.0001H13.0001V14.5001L16.5001 11.0001L13.0001 7.50008V10.0001H9.00008ZM12.7072 1.39348L22.6067 11.293C22.9972 11.6835 22.9972 12.3167 22.6067 12.7072L12.7072 22.6067C12.3167 22.9972 11.6835 22.9972 11.293 22.6067L1.39348 12.7072C1.00295 12.3167 1.00295 11.6835 1.39348 11.293L11.293 1.39348C11.6835 1.00295 12.3167 1.00295 12.7072 1.39348Z"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-remix.codewithshin.com/)
## Props
@prop export let size = ctx.size || '24';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'direction fill';
-->
