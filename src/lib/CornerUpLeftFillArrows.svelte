<script>
  export let size = '24';
  export let color = 'currentColor';
  export let ariaLabel = 'corner up left fill';
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
    d="M19.0003 10.0003L19.0004 19.0001L17.0004 19.0002L17.0003 12.0003L9.41421 12.0002V17.4144L3 11.0001L9.41421 4.58594L9.41421 10.0002L19.0003 10.0003Z"
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
