<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '24';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'empathize fill';
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
    d="M18.3643 10.9792C19.9264 12.5413 19.9264 15.0739 18.3643 16.636L12.7075 22.2929C12.317 22.6834 11.6838 22.6834 11.2933 22.2929L5.63642 16.636C4.07432 15.0739 4.07432 12.5413 5.63642 10.9792C7.19851 9.41709 9.73117 9.41709 11.2933 10.9792L11.9997 11.6856L12.7075 10.9792C14.2696 9.41709 16.8022 9.41709 18.3643 10.9792ZM12.0004 1C14.2095 1 16.0004 2.79086 16.0004 5C16.0004 7.20914 14.2095 9 12.0004 9C9.79124 9 8.00038 7.20914 8.00038 5C8.00038 2.79086 9.79124 1 12.0004 1Z"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-remix.codewithshin.com/)
## Props
@prop export let size = ctx.size || '24';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'empathize fill';
-->
