<script>
  export let size = '24';
  export let color = 'currentColor';
  export let ariaLabel = 'bar chart horizontal fill';
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
    <path d="M12 3v4H3V3h9zm4 14v4H3v-4h13zm6-7v4H3v-4h19z" />
  </g>
</svg>
