<script lang="ts">
  import { getContext } from 'svelte';
  type TitleType = {
    id?: string;
    title?: string;
  };
  type DescType = {
    id?: string;
    desc?: string;
  };
  interface BaseProps {
    size?: string;
    role?: string;
    color?: string;
    withEvents?: boolean;
    onclick?: (event: MouseEvent) => void;
    onkeydown?: (event: KeyboardEvent) => void;
    onkeyup?: (event: KeyboardEvent) => void;
    class?: string;
  }
  interface CtxType extends BaseProps {}
  const ctx: CtxType = getContext('iconCtx') ?? {};
  interface Props extends BaseProps {
    title?: TitleType;
    desc?: DescType;
    ariaLabel?: string;
  }

  let {
    size = ctx.size || '24',
    role = ctx.role || 'img',
    color = ctx.color || 'currentColor',
    withEvents = ctx.withEvents || false,
    title,
    desc,
    class: classname,
    ariaLabel = 'red packet fill Finance',
    onclick,
    onkeydown,
    onkeyup,
    ...restProps
  }: Props = $props();

  let ariaDescribedby = `${title?.id || ''} ${desc?.id || ''}`;
  const hasDescription = $derived(!!(title?.id || desc?.id));
</script>

{#if withEvents}
  <svg
    xmlns="http://www.w3.org/2000/svg"
    {...restProps}
    {role}
    width={size}
    height={size}
    class={classname}
    fill={color}
    aria-label={ariaLabel}
    aria-describedby={hasDescription ? ariaDescribedby : undefined}
    viewBox="0 0 24 24"
    {onclick}
    {onkeydown}
    {onkeyup}
  >
    {#if title?.id && title.title}
      <title id={title.id}>{title.title}</title>
    {/if}
    {#if desc?.id && desc.desc}
      <desc id={desc.id}>{desc.desc}</desc>
    {/if}
    <path
      d="M21.0049 5.94028C19.2657 7.91075 16.8895 9.30566 14.1986 9.80276C13.7739 9.02805 12.9507 8.50281 12.0049 8.50281C11.0591 8.50281 10.2359 9.02805 9.8112 9.80276C7.12025 9.30566 4.74405 7.91075 3.00488 5.94028V3.00281C3.00488 2.45052 3.4526 2.00281 4.00488 2.00281H20.0049C20.5572 2.00281 21.0049 2.45052 21.0049 3.00281V5.94028ZM21.0049 8.72704V21.0028C21.0049 21.5551 20.5572 22.0028 20.0049 22.0028H4.00488C3.4526 22.0028 3.00488 21.5551 3.00488 21.0028V8.72704C4.86501 10.2897 7.13757 11.3774 9.63575 11.8032C9.96947 12.7914 10.9041 13.5028 12.0049 13.5028C13.1057 13.5028 14.0403 12.7914 14.374 11.8032C16.8722 11.3774 19.1448 10.2897 21.0049 8.72704Z"
    />
  </svg>
{:else}
  <svg
    xmlns="http://www.w3.org/2000/svg"
    {...restProps}
    {role}
    width={size}
    height={size}
    class={classname}
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
      d="M21.0049 5.94028C19.2657 7.91075 16.8895 9.30566 14.1986 9.80276C13.7739 9.02805 12.9507 8.50281 12.0049 8.50281C11.0591 8.50281 10.2359 9.02805 9.8112 9.80276C7.12025 9.30566 4.74405 7.91075 3.00488 5.94028V3.00281C3.00488 2.45052 3.4526 2.00281 4.00488 2.00281H20.0049C20.5572 2.00281 21.0049 2.45052 21.0049 3.00281V5.94028ZM21.0049 8.72704V21.0028C21.0049 21.5551 20.5572 22.0028 20.0049 22.0028H4.00488C3.4526 22.0028 3.00488 21.5551 3.00488 21.0028V8.72704C4.86501 10.2897 7.13757 11.3774 9.63575 11.8032C9.96947 12.7914 10.9041 13.5028 12.0049 13.5028C13.1057 13.5028 14.0403 12.7914 14.374 11.8032C16.8722 11.3774 19.1448 10.2897 21.0049 8.72704Z"
    />
  </svg>
{/if}

<!--
@component
[Go to docs](https://svelte-remix.codewithshin.com/)
## Props
@props: 
-->
