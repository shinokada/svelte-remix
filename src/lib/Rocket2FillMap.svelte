<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '24';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'rocket 2 fill';
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
    d="M8.49816 20.0047H15.5018C14.8432 21.5841 13.5794 22.848 12 23.5066C10.4206 22.848 9.15679 21.5841 8.49816 20.0047ZM18 14.8095L20 17.0777V19.0047H4V17.0777L6 14.8095V9.00475C6 5.5215 8.50442 2.55819 12 1.45996C15.4956 2.55819 18 5.5215 18 9.00475V14.8095ZM12 11.0047C13.1046 11.0047 14 10.1093 14 9.00475C14 7.90018 13.1046 7.00475 12 7.00475C10.8954 7.00475 10 7.90018 10 9.00475C10 10.1093 10.8954 11.0047 12 11.0047Z"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-remix.vercel.app/)
## Props
@prop export let size = ctx.size || '24';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'rocket 2 fill';
-->
