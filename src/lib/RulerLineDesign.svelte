<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '24';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'ruler line';
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
    d="M6.34323 14.7278L3.5148 17.5563L7.05033 21.0918L20.4854 7.65678L16.9498 4.12124L14.8285 6.24257L16.2427 7.65678L14.8285 9.07099L13.4143 7.65678L11.293 9.7781L13.4143 11.8994L12.0001 13.3136L9.87876 11.1923L7.75744 13.3136L9.17165 14.7278L7.75744 16.1421L6.34323 14.7278ZM17.6569 1.99992L22.6067 6.94967C22.9972 7.3402 22.9972 7.97336 22.6067 8.36389L7.75744 23.2131C7.36692 23.6037 6.73375 23.6037 6.34323 23.2131L1.39348 18.2634C1.00295 17.8729 1.00295 17.2397 1.39348 16.8492L16.2427 1.99992C16.6332 1.6094 17.2664 1.6094 17.6569 1.99992Z"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-remix.codewithshin.com/)
## Props
@prop export let size = ctx.size || '24';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'ruler line';
-->
