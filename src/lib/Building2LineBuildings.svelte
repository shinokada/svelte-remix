<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '24';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'building 2 line';
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
    d="M3 19.0002V5.70058C3 5.28007 3.26307 4.90449 3.65826 4.76079L13.3291 1.24411C13.5886 1.14974 13.8755 1.28361 13.9699 1.54313C13.9898 1.5979 14 1.65573 14 1.714V6.66682L20.3162 8.77223C20.7246 8.90834 21 9.29048 21 9.72091V19.0002H23V21.0002H1V19.0002H3ZM5 19.0002H12V3.85555L5 6.40101V19.0002ZM19 19.0002V10.4417L14 8.77501V19.0002H19Z"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-remix.codewithshin.com/)
## Props
@prop export let size = ctx.size || '24';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'building 2 line';
-->
