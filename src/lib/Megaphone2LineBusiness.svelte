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
    focusable = (ctx.focusable as Props['focusable']) || 'false',
    ariaLabel,
    ...restProps
  }: Props = $props();

  const ariaDescribedby = $derived(desc?.id && desc.desc ? desc.id : undefined);
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  {...restProps}
  {role}
  width={size}
  height={size}
  fill={color}
  {focusable}
  aria-label={ariaLabel || undefined}
  aria-labelledby={title?.id || undefined}
  aria-describedby={ariaDescribedby}
  viewBox="0 0 24 24"
>
  {#if title?.id && title.title}
    <title id={title.id}>{title.title}</title>
  {/if}
  {#if desc?.id && desc.desc}
    <desc id={desc.id}>{desc.desc}</desc>
  {/if}
  <path
    d="M12.3096 20.095C12.416 21.1597 11.6637 22.1194 10.6045 22.2707C9.66942 22.4041 8.76909 21.8635 8.44629 20.9758L7 16.9993H12L12.3096 20.095ZM19.4453 2.03645C20.1099 1.59342 21 2.06979 21 2.86848V18.1311C20.9997 18.9294 20.1097 19.4059 19.4453 18.9631L15 16.0003H7.5C4.46271 16.0003 2.00045 13.5374 2 10.5003C2 7.46275 4.46243 5.00031 7.5 5.00031H15L19.4453 2.03645ZM15.6055 7.0003H7.5C5.56704 7.0003 4.00008 8.56738 4 10.5003C4.00051 12.433 5.56752 14.0003 7.5 14.0003H15.6055L19 16.261V4.73664L15.6055 7.0003Z"
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
@prop focusable = (ctx.focusable as Props['focusable']) || 'false',
@prop ariaLabel
@prop ...restProps
-->
