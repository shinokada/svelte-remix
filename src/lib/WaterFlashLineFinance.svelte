<script lang="ts">
  import { getContext } from 'svelte';
  import type { BaseProps, Props } from './types';

  const ctx: BaseProps = getContext('iconCtx') ?? {};

  let {
    size = ctx.size || '24',
    role = ctx.role || 'img',
    color = ctx.color || 'currentColor',
    title,
    desc,
    ariaLabel = 'water flash line Finance',
    ...restProps
  }: Props = $props();

  let ariaDescribedby = `${title?.id || ''} ${desc?.id || ''}`;
  const hasDescription = $derived(!!(title?.id || desc?.id));
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  {...restProps}
  {role}
  width={size}
  height={size}
  fill={color}
  aria-label={ariaLabel}
  aria-describedby={hasDescription ? ariaDescribedby : undefined}
  viewBox="0 0 24 24"
>
  {#if title?.id && title.title}
    <title id={title.id}>{title.title}</title>
  {/if}
  {#if desc?.id && desc.desc}
    <desc id={desc.id}>{desc.desc}</desc>
  {/if}
  <path
    d="M12.0049 3.10321L7.05514 8.05295C4.32147 10.7866 4.32147 15.2188 7.05514 17.9524C9.78881 20.6861 14.221 20.6861 16.9546 17.9524C19.6883 15.2188 19.6883 10.7866 16.9546 8.05296L12.0049 3.10321ZM12.0049 0.27478L18.3688 6.63874C21.8836 10.1535 21.8836 15.8519 18.3688 19.3667C14.8541 22.8814 9.15564 22.8814 5.64092 19.3667C2.1262 15.8519 2.1262 10.1535 5.64092 6.63874L12.0049 0.27478ZM13.0049 11.0027H15.5049L11.0049 17.5027V13.0027H8.50488L13.0049 6.5027V11.0027Z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-remix.codewithshin.com/)
## Props
@prop size = ctx.size || '24'
@prop role = ctx.role || 'img'
@prop color = ctx.color || 'currentColor'
@prop title
@prop desc
@prop ariaLabel = 'water flash line Finance'
@prop ...restProps
-->
