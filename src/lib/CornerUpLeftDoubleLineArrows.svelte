<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '24';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'corner up left double line';
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
    d="M20.0001 10.0003L20.0003 19.0002L18.0003 19.0002L18.0002 12.0003L11.8283 12.0002L15.7781 15.9499L14.3638 17.3642L7.99988 11.0002L14.3638 4.63623L15.7781 6.05044L11.8283 10.0002L20.0001 10.0003ZM8.7497 4.63623L10.1639 6.05044L5.21417 11.0002L10.1639 15.9499L8.7497 17.3642L2.38574 11.0002L8.7497 4.63623Z"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-remix.codewithshin.com/)
## Props
@prop export let size = ctx.size || '24';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'corner up left double line';
-->
