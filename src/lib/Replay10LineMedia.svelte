<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '24';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'replay 10 line';
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
    d="M12 2C17.5228 2 22 6.47715 22 12 22 17.5228 17.5228 22 12 22 6.47715 22 2 17.5228 2 12H4C4 16.4183 7.58172 20 12 20 16.4183 20 20 16.4183 20 12 20 7.58172 16.4183 4 12 4 9.25022 4 6.82447 5.38734 5.38451 7.50024L8 7.5V9.5H2V3.5H4L3.99989 5.99918C5.82434 3.57075 8.72873 2 12 2ZM15.5 13.25C15.5 13.8023 15.0523 14.25 14.5 14.25 13.9477 14.25 13.5 13.8023 13.5 13.25V10.75C13.5 10.1977 13.9477 9.75 14.5 9.75 15.0523 9.75 15.5 10.1977 15.5 10.75V13.25ZM14.5 8.25C13.1193 8.25 12 9.36929 12 10.75V13.25C12 14.6307 13.1193 15.75 14.5 15.75 15.8807 15.75 17 14.6307 17 13.25V10.75C17 9.36929 15.8807 8.25 14.5 8.25ZM8.5 15.5V8.5H10V15.5H8.5Z"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-remix.codewithshin.com/)
## Props
@prop export let size = ctx.size || '24';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'replay 10 line';
-->
