<script>
	export let size = '24';
	export let color = 'currentColor';
	export let ariaLabel = 'drag move 2 fill';
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
		<path d="M18 11V8l4 4-4 4v-3h-5v5h3l-4 4-4-4h3v-5H6v3l-4-4 4-4v3h5V6H8l4-4 4 4h-3v5z" />
	</g>
</svg>
