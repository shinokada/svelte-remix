<script>
	export let size = '24';
	export let color = 'currentColor';
	export let ariaLabel = 'arrow up fill';
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
		<path d="M13 12v8h-2v-8H4l8-8 8 8z" />
	</g>
</svg>
