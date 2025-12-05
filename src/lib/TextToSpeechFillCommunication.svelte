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
    focusable = ctx.focusable || 'false',
    ariaLabel,
    ...restProps
  }: Props = $props();

  const ariaDescribedby = $derived([title?.id, desc?.id].filter(Boolean).join(' ') || undefined);
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
    d="M13.4141 5.58594C12.6332 6.36698 12.6331 7.63306 13.4141 8.41406L19.2666 14.2666C19.9325 14.9325 20.9886 15.0587 21.6885 14.4287C21.7949 14.3329 21.8978 14.233 22 14.1328V17C22 19.2091 20.2091 21 18 21H6C3.79086 21 2 19.2091 2 17V7C2 4.79086 3.79086 3 6 3H16L13.4141 5.58594ZM6 11H9V17H11V11H14V9H6V11ZM20.6572 1.34277C22.1049 2.79049 23 4.79086 23 7C23 9.20914 22.1049 11.2095 20.6572 12.6572L19.2422 11.2422C20.328 10.1564 21 8.65685 21 7C21 5.34315 20.328 3.8436 19.2422 2.75781L20.6572 1.34277ZM17.8281 4.17188C18.552 4.89573 19 5.89543 19 7C19 8.10457 18.552 9.10427 17.8281 9.82812L16.4141 8.41406C16.776 8.05213 17 7.55228 17 7C17 6.44772 16.776 5.94787 16.4141 5.58594L17.8281 4.17188Z"
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
@prop focusable = ctx.focusable || 'false'
@prop ariaLabel
@prop ...restProps
-->
