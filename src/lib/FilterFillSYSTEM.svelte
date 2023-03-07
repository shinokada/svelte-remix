<script>
  export let size = '24';
  export let color = 'currentColor';
  export let ariaLabel = 'filter fill';
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
    <path fill="none" d="M0 0H24V24H0z" />
    <path d="M21 4L21 6 20 6 14 15 14 22 10 22 10 15 4 6 3 6 3 4z" />
  </g>
</svg>
