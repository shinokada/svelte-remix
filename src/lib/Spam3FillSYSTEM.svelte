<script>
  export let size = '24';
  export let color = 'currentColor';
  export let ariaLabel = 'spam 3 fill';
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
    d="M15.935 2.50098L21.5 8.06595V15.936L15.935 21.501H8.06497L2.5 15.936V8.06595L8.06497 2.50098H15.935ZM7.99926 11.0002V13.0002H15.9993V11.0002H7.99926Z"
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
