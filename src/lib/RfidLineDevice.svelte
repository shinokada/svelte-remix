<script lang='ts'>
  import { getContext } from 'svelte';
  import type { CtxType, Props } from './types'

  const ctx: CtxType = getContext('iconCtx') ?? {};

  let { 
    size = ctx.size || '24',
    role = ctx.role || 'img',
    color = ctx.color || 'currentColor',
    title,
    desc,
    ariaLabel =  "rfid line Device" ,
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
    <title id="{title.id}">{title.title}</title>
  {/if}
  {#if desc?.id && desc.desc}
    <desc id="{desc.id}">{desc.desc}</desc>
  {/if}
    <path d="M18.364 18.3641C21.8787 14.8493 21.8787 9.15086 18.364 5.63614L19.7782 4.22192C24.0739 8.51769 24.0739 15.4825 19.7782 19.7783L18.364 18.3641ZM5.63604 5.63614C2.12132 9.15086 2.12132 14.8493 5.63604 18.3641L4.22183 19.7783C-0.0739417 15.4825 -0.0739417 8.51769 4.22183 4.22192L5.63604 5.63614ZM15.5355 15.5355C17.4882 13.5829 17.4882 10.4171 15.5355 8.46445L16.9497 7.05024C19.6834 9.78391 19.6834 14.2161 16.9497 16.9497L15.5355 15.5355ZM8.46447 8.46445C6.51184 10.4171 6.51184 13.5829 8.46447 15.5355L7.05025 16.9497C4.31658 14.2161 4.31658 9.78391 7.05025 7.05024L8.46447 8.46445ZM12 14.0001C13.1046 14.0001 14 13.1046 14 12.0001C14 10.8955 13.1046 10.0001 12 10.0001C10.8954 10.0001 10 10.8955 10 12.0001C10 13.1046 10.8954 14.0001 12 14.0001Z"/>
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
@prop ariaLabel =  "rfid line Device"
@prop ...restProps
-->
