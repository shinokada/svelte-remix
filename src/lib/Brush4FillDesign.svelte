<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '24';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'brush 4 fill';
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
    d="M20 15.9966H4V17.9966H20V15.9966ZM3 13.9966V3.99658C3 3.4443 3.44772 2.99658 4 2.99658H7V11.2693H9V2.99658H20C20.5523 2.99658 21 3.4443 21 3.99658V13.9966H22V18.9966C22 19.5489 21.5523 19.9966 21 19.9966H13V22.9966H11V19.9966H3C2.44772 19.9966 2 19.5489 2 18.9966V13.9966H3Z"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-remix.codewithshin.com/)
## Props
@prop export let size = ctx.size || '24';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'brush 4 fill';
-->
