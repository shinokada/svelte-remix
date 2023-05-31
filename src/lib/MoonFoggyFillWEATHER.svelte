<script>
  export let size = '24';
  export let color = 'currentColor';
  export let ariaLabel = 'moon foggy fill';
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
    d="M16 20.3344V18H14V14H3.33238C3.11567 13.2034 3 12.3652 3 11.5C3 6.93948 6.21346 3.12954 10.4996 2.21094C10.1765 3.07935 10 4.01903 10 4.99995C10 9.41823 13.5817 13 18 13C19.4531 13 20.8157 12.6125 21.9902 11.9354C21.8178 15.7576 19.3867 18.9916 16 20.3344ZM7 20H14V22H7V20ZM2 16H12V18H2V16Z"
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
