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
    ariaLabel = 'flower line Others',
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
    d="M11.9999 2.07611L12.4551 2.30879C14.2208 3.21143 15.7328 4.53809 16.8573 6.15473C17.7852 5.71402 18.7788 5.38872 19.8193 5.19758L21 4.98071V12.9998C21 17.9703 16.9706 22 12 22C7.02944 22 3 17.9705 3 13V4.98071L4.18066 5.19758C5.22115 5.38871 6.2147 5.71398 7.14253 6.15465C8.26706 4.53805 9.77902 3.21141 11.5447 2.30879L11.9999 2.07611ZM8.87757 7.16504C10.1073 8.02646 11.1679 9.11266 12 10.3644C12.8322 9.11272 13.893 8.02642 15.1223 7.16515C14.2952 6.01594 13.2302 5.04923 11.9999 4.33741C10.7697 5.0492 9.70468 6.01587 8.87757 7.16504ZM10.8993 12.4338C10.0182 10.7202 8.65593 9.2932 6.99112 8.33225C6.3667 7.97183 5.6999 7.67707 5 7.45728V13C5 16.2899 7.26961 19.0497 10.3285 19.7992C10.1137 18.9004 10 17.9629 10 16.9998C10 15.383 10.3198 13.8411 10.8993 12.4338ZM12.4531 19.9855C16.1079 19.752 19 16.7136 19 12.9998V7.45728C18.3 7.67709 17.6332 7.97187 17.0088 8.33233C14.0127 10.0617 12 13.2963 12 16.9998C12 18.041 12.1588 19.0436 12.4531 19.9855Z"
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
@prop ariaLabel = 'flower line Others'
@prop ...restProps
-->
