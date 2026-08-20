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
    d="M4.93945 4.96094C7.86569 2.03348 12.1756 1.29525 15.7754 2.77832C16.5718 3.07449 17.2661 3.49585 17.8076 3.8877L14.8018 5.27734C12.003 4.10183 8.79674 4.9012 6.83984 6.86035C4.27606 9.42495 3.69417 13.8137 6.48047 16.7822L6.75781 17.0664L0.124023 23C1.99897 21.0271 3.89507 18.5729 2.75977 15.8096C1.23981 12.1122 2.12498 7.77906 4.93945 4.96094ZM23.9004 0.0996094C21.6357 3.27424 20.7155 5.48855 21.7031 9.74023L21.6963 9.7334C22.4495 12.9342 21.6438 16.4839 19.043 19.0879C15.7641 22.3728 10.5173 23.1041 6.19629 20.1475L9.20898 18.751C11.9667 19.8351 14.984 19.3584 17.1523 17.1875C19.3206 15.0165 19.8074 11.8547 18.7178 9.22363C18.5107 8.72479 17.8897 8.599 17.4551 8.91992L8.58984 15.4717L21.2891 2.70117V2.71191L23.9004 0.0996094Z"
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
