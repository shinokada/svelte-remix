<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '24';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'slice line';
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
    d="M15.6909 12.9146L17.4587 14.6823C11.4482 20.6927 6.4985 20.6927 2.25586 19.2785L17.8122 3.72217L21.3477 7.2577L15.6909 12.9146ZM12.8625 12.9146L18.5193 7.2577L17.8122 6.55059L6.3145 18.0483C9.04606 18.1557 11.6722 17.1419 14.5808 14.6329L12.8625 12.9146Z"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-remix.codewithshin.com/)
## Props
@prop export let size = ctx.size || '24';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'slice line';
-->
