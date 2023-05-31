<script>
  export let size = '24';
  export let color = 'currentColor';
  export let ariaLabel = 'expand left right line';
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
    d="M9.04304 5.79297 2.83594 12.0001 9.04304 18.2072 10.4573 16.793 5.66436 12.0001 10.4573 7.20718 9.04304 5.79297ZM14.957 18.2073 21.1641 12.0002 14.957 5.79312 13.5427 7.20733 18.3356 12.0002 13.5427 16.7931 14.957 18.2073Z"
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
