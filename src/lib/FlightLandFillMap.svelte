<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '24';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'flight land fill';
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
    d="M20.949 14.8881C20.7346 15.6883 19.9121 16.1632 19.1119 15.9488L3.44528 11.751C3.00205 11.6322 2.69653 11.227 2.70424 10.7682L2.79514 5.36509L4.24403 5.75332L5.15891 9.10429L10.2542 10.4696L9.88479 2.08838L11.8166 2.60602L14.6269 11.6412L19.8883 13.051C20.6885 13.2654 21.1634 14.0879 20.949 14.8881ZM4.00008 18.9999H20.0001V20.9999H4.00008V18.9999Z"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-remix.codewithshin.com/)
## Props
@prop export let size = ctx.size || '24';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'flight land fill';
-->
