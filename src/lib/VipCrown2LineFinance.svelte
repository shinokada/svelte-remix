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
    ariaLabel = 'vip crown 2 line Finance',
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
    d="M3.49709 8.06467L4.78355 18.9996H19.2266L20.513 8.06467L16.5032 10.7379L12.0051 4.44054L7.50694 10.7379L3.49709 8.06467ZM2.80577 5.20009L7.00505 7.99961L11.1913 2.13884C11.5123 1.68943 12.1369 1.58534 12.5863 1.90635C12.6761 1.97049 12.7546 2.04905 12.8188 2.13884L17.0051 7.99961L21.2043 5.20009C21.6639 4.89374 22.2847 5.01791 22.5911 5.47744C22.7228 5.67506 22.7799 5.91311 22.7522 6.14898L21.109 20.1165C21.0497 20.6201 20.6229 20.9996 20.1158 20.9996H3.8943C3.38722 20.9996 2.9604 20.6201 2.90115 20.1165L1.25792 6.14898C1.19339 5.60048 1.58573 5.10352 2.13423 5.03899C2.37011 5.01124 2.60816 5.06835 2.80577 5.20009ZM12.0051 14.9996C10.9005 14.9996 10.0051 14.1042 10.0051 12.9996C10.0051 11.895 10.9005 10.9996 12.0051 10.9996C13.1096 10.9996 14.0051 11.895 14.0051 12.9996C14.0051 14.1042 13.1096 14.9996 12.0051 14.9996Z"
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
@prop ariaLabel = 'vip crown 2 line Finance'
@prop ...restProps
-->
