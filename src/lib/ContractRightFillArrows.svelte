<script>
  export let size = '24';
  export let role = 'img';
  export let color = 'currentColor';
  export let ariaLabel = 'contract right fill';
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
    d="M8.58598 4.58594L16.0003 12.0002L8.58615 19.4144L8.58608 13.0003L3.00002 13.0004L3 11.0004L8.58605 11.0003L8.58598 4.58594ZM18.0001 19.0002L18.0001 5.00018H20.0001L20.0001 19.0002H18.0001Z"
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
