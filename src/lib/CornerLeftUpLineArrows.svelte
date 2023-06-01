<script>
  export let size = '24';
  export let role = 'img';
  export let color = 'currentColor';
  export let ariaLabel = 'corner left up line';
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
    d="M10.0003 19.0003L19.0002 19.0004L19.0002 17.0004L12.0003 17.0003L12.0002 6.82845L15.9499 10.7782L17.3642 9.36396L11.0002 3L4.63623 9.36396L6.05044 10.7782L10.0002 6.8284L10.0003 19.0003Z"
  /></svg
>
<!--
@component
[Go to Document](https://svelte-remix.codewithshin.com/)
## Props
@prop size = '24';
@prop role = 'img';
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
