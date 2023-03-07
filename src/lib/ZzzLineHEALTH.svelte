<script>
  export let size = '24';
  export let color = 'currentColor';
  export let ariaLabel = 'zzz line';
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
    <path
      d="M11 11v2l-5.327 6H11v2H3v-2l5.326-6H3v-2h8zm10-8v2l-5.327 6H21v2h-8v-2l5.326-6H13V3h8z"
    />
  </g>
</svg>
