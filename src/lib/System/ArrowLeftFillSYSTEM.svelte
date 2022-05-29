<script>
	export let size = '24';
	export let color = 'currentColor';
	export let ariaLabel = 'arrow left fill';
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
		<path d="M12 13v7l-8-8 8-8v7h8v2z" />
	</g>
</svg>
