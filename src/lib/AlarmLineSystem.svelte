<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '24';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'alarm line';
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
    d="M11.9991 22.0001C7.02858 22.0001 2.99914 17.9707 2.99914 13.0001C2.99914 8.02956 7.02858 4.00012 11.9991 4.00012C16.9697 4.00012 20.9991 8.02956 20.9991 13.0001C20.9991 17.9707 16.9697 22.0001 11.9991 22.0001ZM11.9991 20.0001C15.8651 20.0001 18.9991 16.8661 18.9991 13.0001C18.9991 9.13412 15.8651 6.00012 11.9991 6.00012C8.13315 6.00012 4.99914 9.13412 4.99914 13.0001C4.99914 16.8661 8.13315 20.0001 11.9991 20.0001ZM12.9991 13.0001H15.9991V15.0001H10.9991V8.00012H12.9991V13.0001ZM1.74609 6.2826L5.28163 2.74707L6.69584 4.16128L3.16031 7.69682L1.74609 6.2826ZM18.7167 2.74707L22.2522 6.2826L20.838 7.69682L17.3024 4.16128L18.7167 2.74707Z"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-remix.codewithshin.com/)
## Props
@prop export let size = ctx.size || '24';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'alarm line';
-->
