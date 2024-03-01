<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '24';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'tumblr line';
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
    d="M8.00098 8C9.07612 8 11.4983 7.32669 11.4983 3.5V2H12.9982V8H18.001V10H12.9982V12.9091C13.0013 15.3906 13.0013 16.596 13.001 17C12.9992 19.2084 14.6163 20.4 17.7861 20.4V22C17.1509 21.9992 16.4034 21.9992 15.5437 22C13.1417 22.0023 10.9982 19.9649 10.9982 17.4545V10H7.00098V8H8.00098Z"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-remix.codewithshin.com/)
## Props
@prop export let size = ctx.size || '24';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'tumblr line';
-->
