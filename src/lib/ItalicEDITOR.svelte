<script>
  export let size = '24';
  export let color = 'currentColor';
  export let ariaLabel = 'italic';
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
    <path d="M15 20H7v-2h2.927l2.116-12H9V4h8v2h-2.927l-2.116 12H15z" />
  </g>
</svg>
