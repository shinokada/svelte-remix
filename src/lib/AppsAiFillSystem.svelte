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
    focusable = 'false',
    ariaLabel,
    ...restProps
  }: Props = $props();

  let ariaDescribedby = $derived(`${title?.id || ''} ${desc?.id || ''}`.trim());
  const hasDescription = $derived(!!(title?.id || desc?.id));
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  {...restProps}
  {role}
  width={size}
  height={size}
  fill={color}
  {focusable}
  aria-label={title?.id ? undefined : ariaLabel}
  aria-labelledby={title?.id || undefined}
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
    d="M6.75 2.5C9.09721 2.5 11 4.40279 11 6.75V11H6.75C4.40279 11 2.5 9.09721 2.5 6.75 2.5 4.40279 4.40279 2.5 6.75 2.5ZM6.75 13H11V17.25C11 19.5972 9.09721 21.5 6.75 21.5 4.40279 21.5 2.5 19.5972 2.5 17.25 2.5 14.9028 4.40279 13 6.75 13ZM13 13H17.25C19.5972 13 21.5 14.9028 21.5 17.25 21.5 19.5972 19.5972 21.5 17.25 21.5 14.9028 21.5 13 19.5972 13 17.25V13ZM18.008 10.0695 17.746 10.6702C17.5543 11.1099 16.9457 11.1099 16.7539 10.6702L16.492 10.0695C16.0251 8.99837 15.184 8.14559 14.1345 7.67906L13.3273 7.32028C12.8909 7.12628 12.8909 6.49155 13.3273 6.29754L14.0893 5.95881C15.1658 5.48028 16.022 4.59594 16.4809 3.48847L16.7499 2.83932C16.9374 2.38689 17.5626 2.38689 17.75 2.83932L18.019 3.48847C18.478 4.59594 19.3342 5.48028 20.4107 5.95881L21.1726 6.29754C21.6091 6.49155 21.6091 7.12628 21.1726 7.32028L20.3656 7.67906C19.316 8.14559 18.475 8.99837 18.008 10.0695Z"
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
@prop focusable = 'false'
@prop ariaLabel
@prop ...restProps
-->
