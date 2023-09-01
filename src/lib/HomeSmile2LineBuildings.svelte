<script>
  export let size = '24';
  export let role = 'img';
  export let color = 'currentColor';
  export let ariaLabel = 'home smile 2 line';
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
    d="M19 18.9999V9.79863L12 4.27662L5 9.79863V18.9999H19ZM21 19.9999C21 20.5522 20.5523 20.9999 20 20.9999H4C3.44772 20.9999 3 20.5522 3 19.9999V9.31379C3 9.00761 3.14027 8.7183 3.38065 8.52867L11.3807 2.21781C11.7438 1.9313 12.2562 1.9313 12.6193 2.21781L20.6193 8.52867C20.8597 8.7183 21 9.00761 21 9.31379V19.9999ZM7 11.9999H9C9 13.6568 10.3431 14.9999 12 14.9999C13.6569 14.9999 15 13.6568 15 11.9999H17C17 14.7613 14.7614 16.9999 12 16.9999C9.23858 16.9999 7 14.7613 7 11.9999Z"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-remix.vercel.app/)
## Props
@prop export let size = '24';
@prop export let role = 'img';
@prop export let color = 'currentColor';
@prop export let ariaLabel = 'home smile 2 line';
-->
