<script>
  export let size = '24';
  export let role = 'img';
  export let color = 'currentColor';
  export let ariaLabel = 'format clear';
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
    d="M12.6512 14.0654L11.6047 19.9999H9.57389L10.9247 12.3389L3.51465 4.92886L4.92886 3.51465L20.4852 19.071L19.071 20.4852L12.6512 14.0654ZM11.7727 7.53003L12.0425 5.99993H10.2426L8.24257 3.99993H19.9999V5.99993H14.0733L13.4991 9.25646L11.7727 7.53003Z"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-remix.vercel.app/)
## Props
@prop export let size = '24';
@prop export let role = 'img';
@prop export let color = 'currentColor';
@prop export let ariaLabel = 'format clear';
-->
