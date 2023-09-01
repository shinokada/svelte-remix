<script>
  export let size = '24';
  export let role = 'img';
  export let color = 'currentColor';
  export let ariaLabel = 'advertisement line';
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
    d="M12.598 16 9.39893 8H7.39893L5.39893 13 5.39795 13.002 4.19897 16H6.35303L6.75293 15H10.043L10.443 16H12.598ZM7.552 13 8.39893 10.8851 9.24402 13H7.552ZM17 8H19V16H16C14.3431 16 13 14.6569 13 13 13 11.3431 14.3431 10 16 10H17V8ZM16 12C15.4478 12 15 12.4478 15 13 15 13.5522 15.4478 14 16 14H17V12H16ZM21 3H3C2.44775 3 2 3.44775 2 4V20C2 20.5522 2.44775 21 3 21H21C21.5522 21 22 20.5522 22 20V4C22 3.44775 21.5522 3 21 3ZM4 19V5H20V19H4Z"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-remix.vercel.app/)
## Props
@prop export let size = '24';
@prop export let role = 'img';
@prop export let color = 'currentColor';
@prop export let ariaLabel = 'advertisement line';
-->
