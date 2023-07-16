<script>
  export let size = '24';
  export let role = 'img';
  export let color = 'currentColor';
  export let ariaLabel = 'spam 2 line';
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
    d="M15.935 2.50098L21.5 8.06595V15.936L15.935 21.501H8.06497L2.5 15.936V8.06595L8.06497 2.50098H15.935ZM15.1066 4.50098H8.8934L4.5 8.89437V15.1076L8.8934 19.501H15.1066L19.5 15.1076V8.89437L15.1066 4.50098ZM10.9993 15.0002H12.9993V17.0002H10.9993V15.0002ZM10.9993 7.00024H12.9993V13.0002H10.9993V7.00024Z"
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
