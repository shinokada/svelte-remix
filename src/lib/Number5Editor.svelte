<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '24';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'number 5';
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
    d="M18.0005 2V4H9.30073L8.62386 10.4448C9.60799 9.84532 10.7639 9.5 12.0005 9.5C15.5904 9.5 18.5005 12.4101 18.5005 16C18.5005 19.5899 15.5904 22.5 12.0005 22.5C8.95483 22.5 6.39837 20.4052 5.69336 17.5778L7.634 17.0922C8.12205 19.0497 9.89193 20.5 12.0005 20.5C14.4858 20.5 16.5005 18.4853 16.5005 16C16.5005 13.5147 14.4858 11.5 12.0005 11.5C9.97832 11.5 8.72286 12.139 8.04033 13.0293L6.46536 11.848L7.50054 2H18.0005Z"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-remix.codewithshin.com/)
## Props
@prop export let size = ctx.size || '24';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'number 5';
-->
