<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '24';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'google play fill';
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
    d="M3.60972 1.81396L13.793 12L3.61082 22.1864C3.41776 22.1048 3.24866 21.962 3.13555 21.7667C3.0474 21.6144 3.00098 21.4416 3.00098 21.2656V2.73453C3.00098 2.32109 3.25188 1.96625 3.60972 1.81396ZM14.5 12.707L16.802 15.009L5.86498 21.342L14.5 12.707ZM17.699 9.50896L20.5061 11.1347C20.9841 11.4114 21.1473 12.0232 20.8705 12.5011C20.783 12.6523 20.6574 12.778 20.5061 12.8655L17.698 14.491L15.207 12L17.699 9.50896ZM5.86498 2.65796L16.803 8.98996L14.5 11.293L5.86498 2.65796Z"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-remix.codewithshin.com/)
## Props
@prop export let size = ctx.size || '24';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'google play fill';
-->
