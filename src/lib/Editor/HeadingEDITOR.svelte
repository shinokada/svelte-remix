<script>
	export let size = '24';
	export let color = 'currentColor';
	export let ariaLabel = 'heading';
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
		<path d="M17 11V4h2v17h-2v-8H7v8H5V4h2v7z" />
	</g>
</svg>
