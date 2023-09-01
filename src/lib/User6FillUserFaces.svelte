<script>
  export let size = '24';
  export let role = 'img';
  export let color = 'currentColor';
  export let ariaLabel = 'user 6 fill';
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
    d="M12.0009 17C15.6633 17 18.8659 18.5751 20.608 20.9247L18.766 21.796C17.3482 20.1157 14.8483 19 12.0009 19C9.15346 19 6.6535 20.1157 5.23577 21.796L3.39453 20.9238C5.13673 18.5747 8.33894 17 12.0009 17ZM12.0009 2C14.7623 2 17.0009 4.23858 17.0009 7V10C17.0009 12.7614 14.7623 15 12.0009 15C9.23945 15 7.00087 12.7614 7.00087 10V7C7.00087 4.23858 9.23945 2 12.0009 2Z"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-remix.vercel.app/)
## Props
@prop export let size = '24';
@prop export let role = 'img';
@prop export let color = 'currentColor';
@prop export let ariaLabel = 'user 6 fill';
-->
