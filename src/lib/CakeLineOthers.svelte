<script>
  export let size = '24';
  export let role = 'img';
  export let color = 'currentColor';
  export let ariaLabel = 'cake line';
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
    d="M13 6.99993V10.9999L20 10.9999C20.5523 10.9999 21 11.4476 21 11.9999V19.9999L23 19.9999V21.9999H1V19.9999L3 19.9999V11.9999C3 11.4476 3.44772 10.9999 4 10.9999L11 10.9999V6.99993H13ZM19 12.9999H5V19.9999H19V12.9999ZM13.8301 0.401855C14.6586 1.83673 14.1669 3.6715 12.7321 4.49993L11 5.49993C10.1716 4.06505 10.6632 2.23028 12.0981 1.40186L13.8301 0.401855Z"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-remix.vercel.app/)
## Props
@prop export let size = '24';
@prop export let role = 'img';
@prop export let color = 'currentColor';
@prop export let ariaLabel = 'cake line';
-->
