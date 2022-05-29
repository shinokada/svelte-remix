<script>
	export let size = '24';
	export let color = 'currentColor';
	export let ariaLabel = 'bar chart line';
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
		<path d="M3 12h2v9H3v-9zm16-4h2v13h-2V8zm-8-6h2v19h-2V2z" />
	</g>
</svg>
