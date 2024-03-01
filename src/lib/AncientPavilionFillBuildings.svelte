<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '24';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'ancient pavilion fill';
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
    d="M1.51562 7.87678C1.67972 9.82977 3.08896 11.452 4.99982 11.8875V19.0013H2.99982V21.0013H20.9999V19.0013H18.9999V11.8875C20.9107 11.452 22.32 9.82977 22.484 7.87678C21.9936 7.95878 21.4971 8 20.9999 8C17.1858 8 13.7859 5.59592 12.5146 2H11.4851C10.2138 5.59592 6.81387 8 2.99982 8C2.50254 8 2.0061 7.95878 1.51562 7.87678ZM16.9999 19.0013H6.99982V12H16.9999V19.0013Z"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-remix.codewithshin.com/)
## Props
@prop export let size = ctx.size || '24';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'ancient pavilion fill';
-->
