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
    ariaLabel = 'creative commons nc line Business',
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
    d="M12 2C6.47717 2 2 6.47717 2 12C2 17.5228 6.47717 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47717 17.5228 2 12 2ZM7.09436 5.68018C8.4491 4.62708 10.1512 4 12 4C16.4183 4 20 7.58167 20 12C20 13.8488 19.3729 15.5509 18.3198 16.9056L16.165 14.7509C16.3781 14.3829 16.5 13.9557 16.5 13.5C16.5 12.1193 15.3807 11 14 11H10C9.72388 11 9.5 10.7761 9.5 10.5C9.5 10.2239 9.72388 10 10 10H15.5V8H13V6H11V8H10C9.81836 8 9.64111 8.01929 9.47046 8.05615L7.09436 5.68018ZM5.68018 7.09436L7.83496 9.24915C7.62195 9.61707 7.5 10.0443 7.5 10.5C7.5 11.8807 8.61926 13 10 13H14C14.2761 13 14.5 13.2239 14.5 13.5C14.5 13.7761 14.2761 14 14 14H8.5V16H11V18H13V16H14C14.1818 16 14.359 15.9807 14.5297 15.9438L16.9056 18.3198C15.5509 19.3729 13.8488 20 12 20C7.58167 20 4 16.4183 4 12C4 10.1512 4.62708 8.4491 5.68018 7.09436Z"
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
@prop ariaLabel = 'creative commons nc line Business'
@prop ...restProps
-->
