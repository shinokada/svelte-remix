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
    ariaLabel = 'medium fill Logos',
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
    d="M13.4093 12.0071C13.4093 15.4573 10.6314 18.2544 7.20454 18.2544C3.77771 18.2544 1 15.4582 1 12.0071C1 8.55605 3.77792 5.76001 7.20454 5.76001C10.6312 5.76001 13.4093 8.55689 13.4093 12.0071ZM20.216 12.0071C20.216 15.2551 18.8269 17.8878 17.1136 17.8878C15.4003 17.8878 14.0112 15.2542 14.0112 12.0071C14.0112 8.75999 15.4003 6.1264 17.1136 6.1264C18.8269 6.1264 20.216 8.75999 20.216 12.0071ZM23 12.0071C23 14.9171 22.5114 17.276 21.9088 17.276C21.3063 17.276 20.8177 14.9163 20.8177 12.0071C20.8177 9.09793 21.3063 6.73823 21.9091 6.73823C22.5118 6.73823 23 9.0973 23 12.0071Z"
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
@prop ariaLabel = 'medium fill Logos'
@prop ...restProps
-->
