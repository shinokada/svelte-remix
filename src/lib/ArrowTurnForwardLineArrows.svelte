<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '24';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'arrow turn forward line';
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
    d="M17.0005 5.82843V13C17.0005 16.3137 14.3142 19 11.0005 19C7.68678 19 5.00049 16.3137 5.00049 13V4H3.00049V13C3.00049 17.4183 6.58221 21 11.0005 21C15.4188 21 19.0005 17.4183 19.0005 13V5.82843L21.536 8.36396L22.9502 6.94975L18.0005 2L13.0507 6.94975L14.465 8.36396L17.0005 5.82843Z"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-remix.codewithshin.com/)
## Props
@prop export let size = ctx.size || '24';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'arrow turn forward line';
-->
