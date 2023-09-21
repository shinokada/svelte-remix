<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '24';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'windows line';
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
    d="M21.001 2.5V21.5L3.00098 19.5V4.5L21.001 2.5ZM19.001 12.999L12.001 13V18.487L19.001 19.2655V12.999ZM5.00098 17.7099L10.001 18.265V13L5.00098 12.999V17.7099ZM19.001 10.999V4.73453L12.001 5.512V11L19.001 10.999ZM10.001 5.734L5.00098 6.29009V10.999L10.001 11V5.734Z"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-remix.vercel.app/)
## Props
@prop export let size = ctx.size || '24';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'windows line';
-->
