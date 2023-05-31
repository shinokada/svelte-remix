<script>
  export let size = '24';
  export let color = 'currentColor';
  export let ariaLabel = 'water flash fill';
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
    d="M5.64092 6.63886L12.0049 0.274902L18.3688 6.63886C21.8836 10.1536 21.8836 15.8521 18.3688 19.3668C14.8541 22.8815 9.15564 22.8815 5.64092 19.3668C2.1262 15.8521 2.1262 10.1536 5.64092 6.63886H5.64092ZM13.0049 11.0028V6.50282L8.50488 13.0028H11.0049V17.5028L15.5049 11.0028H13.0049Z"
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
