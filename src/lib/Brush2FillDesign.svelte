<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '24';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'brush 2 fill';
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
    d="M16.5357 15.9466L18.657 13.8253L15.475 10.6433L19.0106 7.1078L16.8892 4.98648L13.3537 8.52201L10.1717 5.34003L8.05041 7.46135L16.5357 15.9466ZM13.3537 5.69359L16.1821 2.86516C16.5727 2.47463 17.2058 2.47463 17.5963 2.86516L21.1319 6.40069C21.5224 6.79122 21.5224 7.42438 21.1319 7.81491L18.3035 10.6433L20.7783 13.1182C21.1689 13.5087 21.1689 14.1419 20.7783 14.5324L13.0002 22.3106C12.6096 22.7011 11.9765 22.7011 11.5859 22.3106L1.68645 12.4111C1.29592 12.0206 1.29592 11.3874 1.68645 10.9969L9.46462 3.21871C9.85515 2.82819 10.4883 2.82819 10.8788 3.21871L13.3537 5.69359Z"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-remix.codewithshin.com/)
## Props
@prop export let size = ctx.size || '24';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'brush 2 fill';
-->
