<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '24';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'navigation fill';
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
    d="M2.89945 2.30007L21.7052 8.56867C21.9672 8.65599 22.1088 8.93915 22.0215 9.20112C21.975 9.34065 21.8694 9.45262 21.7328 9.50725L13.0002 13.0003L8.57501 21.8506C8.45151 22.0976 8.15118 22.1977 7.90419 22.0742C7.77883 22.0115 7.68553 21.8991 7.64703 21.7644L2.26058 2.91177C2.18472 2.64626 2.33846 2.36951 2.60398 2.29365C2.70087 2.26597 2.80386 2.26821 2.89945 2.30007Z"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-remix.codewithshin.com/)
## Props
@prop export let size = ctx.size || '24';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'navigation fill';
-->
