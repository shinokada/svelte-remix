<script>
  export let size = '24';
  export let color = 'currentColor';
  export let ariaLabel = 'corner left down line';
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
    d="M10.0003 5.00014L19.0002 5L19.0002 7L12.0003 7.00011L12.0002 17.1719L15.9499 13.2222L17.3642 14.6364L11.0002 21.0004L4.63623 14.6364L6.05044 13.2222L10.0002 17.172L10.0003 5.00014Z"
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
