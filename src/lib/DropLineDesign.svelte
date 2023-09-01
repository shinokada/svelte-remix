<script>
  export let size = '24';
  export let role = 'img';
  export let color = 'currentColor';
  export let ariaLabel = 'drop line';
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
    d="M12 3.09698L7.05025 8.04673C4.31658 10.7804 4.31658 15.2126 7.05025 17.9462C9.78392 20.6799 14.2161 20.6799 16.9497 17.9462C19.6834 15.2126 19.6834 10.7804 16.9497 8.04673L12 3.09698ZM12 0.268555L18.364 6.63252C21.8787 10.1472 21.8787 15.8457 18.364 19.3604C14.8492 22.8752 9.15076 22.8752 5.63604 19.3604C2.12132 15.8457 2.12132 10.1472 5.63604 6.63252L12 0.268555Z"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-remix.vercel.app/)
## Props
@prop export let size = '24';
@prop export let role = 'img';
@prop export let color = 'currentColor';
@prop export let ariaLabel = 'drop line';
-->
