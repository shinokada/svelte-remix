<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '24';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'supabase fill';
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
    d="M3.08378 15.2505C1.42044 15.2505 0.483971 13.3382 1.5038 12.0242L10.2099 0.806805C10.794 0.0542043 11.9999 0.467253 11.9999 1.41993V8.75048H20.9159C22.5793 8.75048 23.5157 10.6627 22.4959 11.9767L13.7898 23.1941C13.2057 23.9467 11.9999 23.5337 11.9999 22.581V15.2505H3.08378Z"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-remix.codewithshin.com/)
## Props
@prop export let size = ctx.size || '24';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'supabase fill';
-->
