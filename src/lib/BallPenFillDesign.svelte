<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '24';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'ball pen fill';
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
    d="M17.8492 11.8051L17.1421 11.098L7.24264 20.9975H3V16.7549L14.3137 5.44114L19.9706 11.098C20.3611 11.4885 20.3611 12.1217 19.9706 12.5122L12.8995 19.5833L11.4853 18.1691L17.8492 11.8051ZM18.5563 2.61272L21.3848 5.44114C21.7753 5.83167 21.7753 6.46483 21.3848 6.85536L19.9706 8.26957L15.7279 4.02693L17.1421 2.61272C17.5327 2.22219 18.1658 2.22219 18.5563 2.61272Z"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-remix.codewithshin.com/)
## Props
@prop export let size = ctx.size || '24';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'ball pen fill';
-->
