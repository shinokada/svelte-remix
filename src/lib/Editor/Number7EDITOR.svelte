<script>
	export let size = '24';
	export let color = 'currentColor';
	export let ariaLabel = 'number 7';
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
		<path d="M19 2v1.5L10.763 22H8.574l8.013-18H6V2z" />
	</g>
</svg>
