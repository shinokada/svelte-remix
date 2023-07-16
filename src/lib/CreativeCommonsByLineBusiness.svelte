<script>
  export let size = '24';
  export let role = 'img';
  export let color = 'currentColor';
  export let ariaLabel = 'creative commons by line';
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
    d="M14 7C14 8.10461 13.1046 9 12 9 10.8954 9 10 8.10461 10 7 10 5.89539 10.8954 5 12 5 13.1046 5 14 5.89539 14 7ZM15 11C15 10.4478 14.5522 10 14 10H10C9.44775 10 9 10.4478 9 11V15H10.5V19H13.5V15H15V11ZM12 2C6.47717 2 2 6.47717 2 12 2 17.5228 6.47717 22 12 22 17.5228 22 22 17.5228 22 12 22 6.47717 17.5228 2 12 2ZM4 12C4 7.58167 7.58167 4 12 4 16.4183 4 20 7.58167 20 12 20 16.4183 16.4183 20 12 20 7.58167 20 4 16.4183 4 12Z"
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
