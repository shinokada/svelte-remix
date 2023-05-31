<script>
  export let size = '24';
  export let color = 'currentColor';
  export let ariaLabel = 'openbase fill';
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
    d="M12.0001 2.75977L21.9992 5.99576L21.1001 15.4638L12.0001 22.3232L2.90012 15.4598L2.01074 5.99977L12.0001 2.75977ZM12.0001 3.58511L3.18898 6.43476L12.0001 20.7929L20.8058 6.43476L12.0001 3.58511Z"
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
