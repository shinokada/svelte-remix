<script>
  export let size = '24';
  export let role = 'img';
  export let color = 'currentColor';
  export let ariaLabel = 'price tag fill';
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
    d="M3.00488 6.99981L11.4502 1.36961C11.7861 1.14568 12.2237 1.14568 12.5596 1.36961L21.0049 6.99981V20.9998C21.0049 21.5521 20.5572 21.9998 20.0049 21.9998H4.00488C3.4526 21.9998 3.00488 21.5521 3.00488 20.9998V6.99981ZM12.0049 10.9998C13.1095 10.9998 14.0049 10.1044 14.0049 8.99981C14.0049 7.89524 13.1095 6.99981 12.0049 6.99981C10.9003 6.99981 10.0049 7.89524 10.0049 8.99981C10.0049 10.1044 10.9003 10.9998 12.0049 10.9998Z"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-remix.vercel.app/)
## Props
@prop export let size = '24';
@prop export let role = 'img';
@prop export let color = 'currentColor';
@prop export let ariaLabel = 'price tag fill';
-->
