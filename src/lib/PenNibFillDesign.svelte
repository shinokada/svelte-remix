<script lang="ts">
  import { getContext } from 'svelte';
  import type { CtxType, Props } from './types';

  const ctx: CtxType = getContext('iconCtx') ?? {};

  let {
    size = ctx.size || '24',
    role = ctx.role || 'img',
    color = ctx.color || 'currentColor',
    title,
    desc,
    ariaLabel = 'pen nib fill Design',
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
    d="M4.92898 21.4819L10.775 15.6359C11.4423 15.8141 12.1837 15.6414 12.7071 15.118C13.4882 14.3369 13.4882 13.0706 12.7071 12.2896C11.9261 11.5085 10.6598 11.5085 9.87872 12.2896C9.35526 12.813 9.18263 13.5544 9.36081 14.2217L3.51476 20.0677L2.4541 19.0071C5.28253 15.7072 6.34319 12.0539 7.7574 5.9256L14.1214 5.21849L19.7783 10.8754L19.0711 17.2393C12.9429 18.6535 9.28947 19.7142 5.98964 22.5426L4.92898 21.4819ZM16.5962 2.03651L22.9428 8.38312C23.1381 8.57838 23.1381 8.89496 22.9428 9.09022C22.8679 9.16513 22.7712 9.21431 22.6665 9.23067L21.1924 9.46113L15.5356 3.80428L15.7477 2.31935C15.7868 2.04599 16.04 1.85604 16.3134 1.89509C16.4205 1.91039 16.5197 1.96001 16.5962 2.03651Z"
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
@prop ariaLabel = 'pen nib fill Design'
@prop ...restProps
-->
