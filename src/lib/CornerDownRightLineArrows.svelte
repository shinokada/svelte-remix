<script>
  export let size = '24';
  export let role = 'img';
  export let color = 'currentColor';
  export let ariaLabel = 'corner down right line';
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
    d="M5.00014 13.9999L5 5.00003L7 5L7.00011 11.9999L17.1719 12L13.2222 8.05027L14.6364 6.63606L21.0004 13L14.6364 19.364L13.2222 17.9498L17.172 14L5.00014 13.9999Z"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-remix.vercel.app/)
## Props
@prop export let size = '24';
@prop export let role = 'img';
@prop export let color = 'currentColor';
@prop export let ariaLabel = 'corner down right line';
-->
