<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '24';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'syringe fill';
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
    d="M21.6779 7.97912L20.2637 9.39333L18.1424 7.27201L16.021 9.39333L19.5566 12.9289L18.1424 14.3431L17.4353 13.636L11.0713 19.9999H5.41444L3.29312 22.1213L1.87891 20.707L4.00023 18.5857V12.9289L10.3642 6.56491L9.65708 5.8578L11.0713 4.44359L14.6068 7.97912L16.7281 5.8578L14.6068 3.73648L16.021 2.32227L21.6779 7.97912ZM9.65708 14.3431L6.82865 11.5147L5.41444 12.9289L8.24287 15.7573L9.65708 14.3431ZM12.4855 11.5147L9.65708 8.68623L8.24287 10.1004L11.0713 12.9289L12.4855 11.5147Z"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-remix.codewithshin.com/)
## Props
@prop export let size = ctx.size || '24';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'syringe fill';
-->
