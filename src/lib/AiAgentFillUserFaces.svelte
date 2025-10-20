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
    d="M12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2ZM12 15C9.71266 15 7.65042 15.961 6.19238 17.5C7.65042 19.039 9.71266 20 12 20C14.2871 20 16.3486 19.0387 17.8066 17.5C16.3486 15.9613 14.2871 15 12 15ZM12.4707 5.31934C12.2943 4.89337 11.7058 4.89339 11.5293 5.31934L11.2764 5.93066C10.8445 6.97341 10.0384 7.80621 9.02539 8.25684L8.30762 8.57617C7.89751 8.75905 7.89744 9.35625 8.30762 9.53906L9.06738 9.87695C10.0551 10.3163 10.8476 11.1193 11.2871 12.1279L11.5332 12.6934C11.7138 13.1073 12.2863 13.1073 12.4668 12.6934L12.7139 12.1279C13.1534 11.1194 13.9449 10.3163 14.9326 9.87695L15.6924 9.53906C16.1026 9.35624 16.1025 8.75907 15.6924 8.57617L14.9746 8.25684C13.9616 7.8062 13.1556 6.9734 12.7236 5.93066L12.4707 5.31934Z"
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
