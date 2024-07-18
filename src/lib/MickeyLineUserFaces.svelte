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
    ariaLabel = 'mickey line User replace_ariaLabel Faces',
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
    d="M4.61716 10.9134C2.5546 10.5031 1 8.68312 1 6.5C1 4.01472 3.01472 2 5.5 2C7.90266 2 9.86552 3.88299 9.99338 6.25375C10.6346 6.08811 11.307 6 12 6C12.693 6 13.3654 6.08811 14.0066 6.25375C14.1345 3.88299 16.0973 2 18.5 2C20.9853 2 23 4.01472 23 6.5C23 8.68312 21.4454 10.5031 19.3828 10.9134C19.7804 11.8632 20 12.906 20 14C20 18.4183 16.4183 22 12 22C7.58172 22 4 18.4183 4 14C4 12.906 4.21961 11.8632 4.61716 10.9134ZM3 6.5C3 7.88071 4.11929 9 5.5 9C5.5898 9 5.6785 8.99527 5.76585 8.98603C6.36594 8.24086 7.0969 7.60551 7.92382 7.11489C7.97357 6.91818 8 6.71217 8 6.5C8 5.11929 6.88071 4 5.5 4C4.11929 4 3 5.11929 3 6.5ZM18.2341 8.98603C18.3215 8.99527 18.4102 9 18.5 9C19.8807 9 21 7.88071 21 6.5C21 5.11929 19.8807 4 18.5 4C17.1193 4 16 5.11929 16 6.5C16 6.71217 16.0264 6.91818 16.0762 7.11489C16.9031 7.60551 17.6341 8.24086 18.2341 8.98603ZM6 14C6 17.3137 8.68629 20 12 20C15.3137 20 18 17.3137 18 14C18 10.6863 15.3137 8 12 8C8.68629 8 6 10.6863 6 14Z"
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
@prop ariaLabel = 'mickey line User replace_ariaLabel Faces'
@prop ...restProps
-->
