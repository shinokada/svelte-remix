<script>
  export let size = '24';
  export let role = 'img';
  export let color = 'currentColor';
  export let ariaLabel = 'file gif line';
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
    d="M16 2L20.9997 7L21 20.9925C21 21.5489 20.5551 22 20.0066 22H3.9934C3.44476 22 3 21.5447 3 21.0082V2.9918C3 2.44405 3.44749 2 3.9985 2H16ZM15 4H5V20H19V8H15V4ZM13 10V15H12V10H13ZM11 10V11H9C8.44772 11 8 11.4477 8 12V13C8 13.5523 8.44772 14 9 14H10V13H9V12H11V14C11 14.5523 10.5523 15 10 15H9C7.89543 15 7 14.1046 7 13V12C7 10.8954 7.89543 10 9 10H11ZM17 10V11H15V12H17V13H15V15H14V10H17Z"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-remix.vercel.app/)
## Props
@prop export let size = '24';
@prop export let role = 'img';
@prop export let color = 'currentColor';
@prop export let ariaLabel = 'file gif line';
-->
