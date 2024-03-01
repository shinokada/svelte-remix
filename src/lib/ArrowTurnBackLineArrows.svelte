<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '24';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'arrow turn back line';
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
    d="M17.0005 18.1716L14.465 15.636L13.0507 17.0503L18.0005 22L22.9502 17.0503L21.536 15.636L19.0005 18.1716V11C19.0005 6.58172 15.4188 3 11.0005 3C6.58221 3 3.00049 6.58172 3.00049 11V20H5.00049V11C5.00049 7.68629 7.68678 5 11.0005 5C14.3142 5 17.0005 7.68629 17.0005 11V18.1716Z"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-remix.codewithshin.com/)
## Props
@prop export let size = ctx.size || '24';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'arrow turn back line';
-->
