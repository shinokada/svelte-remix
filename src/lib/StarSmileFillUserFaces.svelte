<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '24';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'star smile fill';
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
    d="M11.9986 0.5L16.2246 6.68342L23.4113 8.7918L18.8364 14.7217L19.052 22.2082L11.9986 19.6897L4.94519 22.2082L5.16082 14.7217L0.585938 8.7918L7.77262 6.68342L11.9986 0.5ZM9.99862 12H7.99862C7.99862 14.2091 9.78948 16 11.9986 16C14.1408 16 15.8897 14.316 15.9937 12.1996L15.9986 12H13.9986C13.9986 13.1046 13.1032 14 11.9986 14C10.9443 14 10.0805 13.1841 10.0041 12.1493L9.99862 12Z"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-remix.codewithshin.com/)
## Props
@prop export let size = ctx.size || '24';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'star smile fill';
-->
