<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '24';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'creative commons zero fill';
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
    d="M12 2C17.52 2 22 6.48 22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12 2ZM12 6C9.23858 6 7 8.68629 7 12C7 15.3137 9.23858 18 12 18C14.7614 18 17 15.3137 17 12C17 8.68629 14.7614 6 12 6ZM14.3253 9.47238C14.747 10.1614 15 11.0413 15 12C15 14.2091 13.6569 16 12 16C11.5589 16 11.1401 15.8731 10.7629 15.6452L14.3253 9.47238ZM12 8C12.4411 8 12.8599 8.12691 13.2371 8.35483L9.67474 14.5276C9.25296 13.8386 9 12.9587 9 12C9 9.79086 10.3431 8 12 8Z"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-remix.codewithshin.com/)
## Props
@prop export let size = ctx.size || '24';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'creative commons zero fill';
-->
