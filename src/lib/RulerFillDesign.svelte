<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '24';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'ruler fill';
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
    d="M4.92901 13.3136L7.05033 15.435L8.46455 14.0207L6.34323 11.8994L8.46455 9.7781L11.293 12.6065L12.7072 11.1923L9.87876 8.36389L12.0001 6.24257L14.1214 8.36389L15.5356 6.94967L13.4143 4.82835L16.2427 1.99992C16.6332 1.6094 17.2664 1.6094 17.6569 1.99992L22.6067 6.94967C22.9972 7.3402 22.9972 7.97336 22.6067 8.36389L7.75744 23.2131C7.36692 23.6037 6.73375 23.6037 6.34323 23.2131L1.39348 18.2634C1.00295 17.8729 1.00295 17.2397 1.39348 16.8492L4.92901 13.3136Z"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-remix.codewithshin.com/)
## Props
@prop export let size = ctx.size || '24';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'ruler fill';
-->
