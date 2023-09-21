<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '24';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'door open fill';
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
    d="M1.99805 21.0003V19.0003L3.99805 19.0001V4.83489C3.99805 4.35161 4.34367 3.93748 4.81916 3.85102L14.2907 2.12892C14.6167 2.06965 14.9291 2.28589 14.9884 2.61191C14.9948 2.64733 14.998 2.68325 14.998 2.71924V4.00014L18.998 4.00032C19.5503 4.00032 19.998 4.44803 19.998 5.00032V19.0001L21.998 19.0003V21.0003H17.998V6.00032L14.998 6.00014V21.0003H1.99805ZM11.998 11.0003H9.99805V13.0003H11.998V11.0003Z"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-remix.vercel.app/)
## Props
@prop export let size = ctx.size || '24';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'door open fill';
-->
