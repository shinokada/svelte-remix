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
    ariaLabel = 'brain 2 fill Health replace_ariaLabel Medical',
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
    d="M8.5 2C6.567 2 5 3.567 5 5.5C5 5.68016 5.01364 5.85714 5.03993 6.02997C3.32436 6.25523 2 7.72295 2 9.5C2 10.4793 2.40223 11.3647 3.05051 12C2.40223 12.6353 2 13.5207 2 14.5C2 15.9018 2.82359 17.1104 4.01353 17.6693C4.00457 17.7785 4 17.8888 4 18C4 20.2091 5.79086 22 8 22C9.19469 22 10.2671 21.4762 11 20.6458V3.05051C10.3647 2.40223 9.47934 2 8.5 2ZM13 3.05051V20.6458C13.7329 21.4762 14.8053 22 16 22C18.2091 22 20 20.2091 20 18C20 17.8888 19.9954 17.7785 19.9865 17.6693C21.1764 17.1104 22 15.9018 22 14.5C22 13.5207 21.5978 12.6353 20.9495 12C21.5978 11.3647 22 10.4793 22 9.5C22 7.72295 20.6756 6.25523 18.9601 6.02997C18.9864 5.85714 19 5.68016 19 5.5C19 3.567 17.433 2 15.5 2C14.5207 2 13.6353 2.40223 13 3.05051Z"
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
@prop ariaLabel = 'brain 2 fill Health replace_ariaLabel Medical'
@prop ...restProps
-->
