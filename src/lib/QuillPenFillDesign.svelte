<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '24';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'quill pen fill';
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
    d="M21 1.99658C6 1.99658 4 15.9966 3 21.9966C3.66667 21.9966 4.33275 21.9966 4.99824 21.9966C5.66421 18.6635 7.33146 16.8301 10 16.4966C14 15.9966 17 12.4966 18 9.49658L16.5 8.49658C16.8333 8.16325 17.1667 7.82992 17.5 7.49658C18.5 6.49658 19.5042 4.99658 21 1.99658Z"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-remix.codewithshin.com/)
## Props
@prop export let size = ctx.size || '24';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'quill pen fill';
-->
