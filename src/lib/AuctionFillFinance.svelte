<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '24';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'auction fill';
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
    d="M14.0049 20.0027V22.0027H2.00488V20.0027H14.0049ZM14.5907 0.688965L22.3688 8.46714L20.9546 9.88135L19.894 9.5278L17.4191 12.0027L23.076 17.6595L21.6617 19.0737L16.0049 13.4169L13.6007 15.821L13.8836 16.9524L12.4693 18.3666L4.69117 10.5885L6.10539 9.17425L7.23676 9.45709L13.53 3.16384L13.1765 2.10318L14.5907 0.688965Z"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-remix.codewithshin.com/)
## Props
@prop export let size = ctx.size || '24';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'auction fill';
-->
