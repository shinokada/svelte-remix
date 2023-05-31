<script>
  export let size = '24';
  export let color = 'currentColor';
  export let ariaLabel = 'home smile 2 fill';
</script>

<svg
  width={size}
  height={size}
  fill={color}
  class={$$props.class}
  {...$$restProps}
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
    d="M21 19.9999C21 20.5522 20.5523 20.9999 20 20.9999H4C3.44772 20.9999 3 20.5522 3 19.9999V9.31379C3 9.00761 3.14027 8.7183 3.38065 8.52867L11.3807 2.21781C11.7438 1.9313 12.2562 1.9313 12.6193 2.21781L20.6193 8.52867C20.8597 8.7183 21 9.00761 21 9.31379V19.9999ZM7 11.9999C7 14.7613 9.23858 16.9999 12 16.9999C14.7614 16.9999 17 14.7613 17 11.9999H15C15 13.6568 13.6569 14.9999 12 14.9999C10.3431 14.9999 9 13.6568 9 11.9999H7Z"
  /></svg
>
<!--
@component
[Go to Document](https://svelte-remix.codewithshin.com/)
## Props
@prop size = '24';
@prop color = 'currentColor';
@prop ariaLabel = 'icon file name';
## Event
- on:click
- on:keydown
- on:keyup
- on:focus
- on:blur
- on:mouseenter
- on:mouseleave
- on:mouseover
- on:mouseout
-->
