<script>
  export let size = '24';
  export let color = 'currentColor';
  export let ariaLabel = 'arrow right fill';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  width={size}
  height={size}
  fill={color}
  class={$$props.class}
  {...$$restProps}
  aria-label={ariaLabel}
  viewBox="0 0 24 24"
>
  <g>
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M12 13H4v-2h8V4l8 8-8 8z" />
  </g>
</svg>
