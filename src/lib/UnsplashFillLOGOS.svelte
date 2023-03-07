<script>
  export let size = '24';
  export let color = 'currentColor';
  export let ariaLabel = 'unsplash fill';
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
    <path d="M8.5 11v5h7v-5H21v10H3V11h5.5zm7-8v5h-7V3h7z" />
  </g>
</svg>
