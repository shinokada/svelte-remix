<script>
  export let size = '24';
  export let color = 'currentColor';
  export let ariaLabel = 'pie chart 2 fill';
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
    d="M11 2.04947V13.0001H21.9506C21.4489 18.0534 17.1853 22.0001 12 22.0001C6.47715 22.0001 2 17.5229 2 12.0001C2 6.81475 5.94668 2.55119 11 2.04947ZM13 0.542969C18.5535 1.02133 22.9788 5.44662 23.4571 11.0001H13V0.542969Z"
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
