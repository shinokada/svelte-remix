<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '24';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'centos fill';
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
    d="M12 13.0607L16.47 17.531L12 22L7.53 17.53L12 13.0607ZM3.99968 16.1207L7.87868 19.9997L4 20L3.99968 16.1207ZM19.9997 16.1207L20 20L16.1207 19.9997L19.9997 16.1207ZM17.53 7.53L22 12L17.531 16.47L13.0607 12L17.53 7.53ZM6.47 7.53L10.9393 12L6.469 16.469L2 12L6.47 7.53ZM12 2L16.469 6.469L12 10.9393L7.53 6.47L12 2ZM7.87868 3.99968L3.99968 7.87868L4 4L7.87868 3.99968ZM20 4L19.9997 7.87868L16.1207 3.99968L20 4Z"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-remix.codewithshin.com/)
## Props
@prop export let size = ctx.size || '24';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'centos fill';
-->
