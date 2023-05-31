<script>
  export let size = '24';
  export let color = 'currentColor';
  export let ariaLabel = 'corner up right double line';
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
    d="M4.00014 10.0003L4 19.0002L6 19.0002L6.00011 12.0003L12.1719 12.0002L8.22222 15.9499L9.63643 17.3642L16.0004 11.0002L9.63643 4.63623L8.22221 6.05044L12.172 10.0002L4.00014 10.0003ZM15.2506 4.63623L13.8364 6.05044L18.7861 11.0002L13.8364 15.9499L15.2506 17.3642L21.6145 11.0002L15.2506 4.63623Z"
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
