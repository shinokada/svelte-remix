<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '24';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'key 2 fill';
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
    d="M10.313 11.5655L18.253 3.62549L20.3744 5.74681L18.9602 7.16102L21.0815 9.28234L17.5459 12.8179L15.4246 10.6966L12.4343 13.6868C13.4182 15.5718 13.1186 17.9523 11.5355 19.5354C9.58291 21.488 6.41709 21.488 4.46447 19.5354C2.51184 17.5828 2.51184 14.4169 4.46447 12.4643C6.04755 10.8812 8.42809 10.5816 10.313 11.5655ZM9.41421 17.4141C10.1953 16.633 10.1953 15.3667 9.41421 14.5856C8.63316 13.8046 7.36684 13.8046 6.58579 14.5856C5.80474 15.3667 5.80474 16.633 6.58579 17.4141C7.36684 18.1951 8.63316 18.1951 9.41421 17.4141Z"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-remix.codewithshin.com/)
## Props
@prop export let size = ctx.size || '24';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'key 2 fill';
-->
