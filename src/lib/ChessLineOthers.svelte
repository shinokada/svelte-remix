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
    d="M15.5 0.287109C14.8092 0.573189 14.1414 0.903497 13.5 1.2745C8.41874 4.21385 5.00007 9.70768 5 16H4V20H3V22H20V20H19V16H17.8079C17.6579 15.3163 17.4132 14.7012 17.0489 14.1496C16.4823 13.2917 15.6268 12.5877 14.3897 12.019C14.2591 11.959 14.1273 11.902 13.9945 11.8473C13.8804 11.8004 13.8483 11.6519 13.9355 11.5647C13.9898 11.5104 14.0574 11.5117 14.1267 11.5255L15.8799 11.8762L18.2932 12.3589C18.7153 12.4433 19.144 12.2481 19.3576 11.8744L20.6527 9.60794C20.8612 9.24304 20.8193 8.7867 20.5479 8.46586L15.5 2.5V0.287109ZM17 20H6V18.0002H17V20ZM7 16C7.00007 10.7793 9.66759 6.17842 13.7185 3.49105L18.569 9.2234L17.9787 10.2563L14.4816 9.55692C13.7702 9.41464 13.0347 9.63724 12.5216 10.1502C11.3888 11.2825 11.8463 13.127 13.2345 13.6972C14.4814 14.2095 15.094 14.7791 15.4356 15.3394C15.5531 15.532 15.6544 15.7496 15.7375 16H7ZM14 8C14.5523 8 15 7.55228 15 7C15 6.44772 14.5523 6 14 6C13.4477 6 13 6.44772 13 7C13 7.55228 13.4477 8 14 8Z"
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
