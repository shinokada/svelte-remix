<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '24';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'dislike fill';
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
    d="M2.80777 1.39355L21.1925 19.7783L19.7783 21.1925L16.0316 17.4456L12 21.4852L3.52154 12.9932C1.48186 10.7095 1.49309 7.2403 3.55524 4.96974L1.39355 2.80777L2.80777 1.39355ZM20.2428 4.75752C22.5054 7.02488 22.5831 10.6372 20.4788 12.9932L18.8442 14.6292L7.2604 3.04566C8.92926 2.8395 10.6682 3.33385 12.0011 4.52869C14.3502 2.42016 17.9802 2.49016 20.2428 4.75752Z"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-remix.codewithshin.com/)
## Props
@prop export let size = ctx.size || '24';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'dislike fill';
-->
