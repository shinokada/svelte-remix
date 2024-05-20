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
    ariaLabel = 'car fill Map',
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
      d="M19 20H5V21C5 21.5523 4.55228 22 4 22H3C2.44772 22 2 21.5523 2 21V12L4.51334 5.29775C4.80607 4.51715 5.55231 4 6.386 4H17.614C18.4477 4 19.1939 4.51715 19.4867 5.29775L22 12V21C22 21.5523 21.5523 22 21 22H20C19.4477 22 19 21.5523 19 21V20ZM4.136 12H19.864L17.614 6H6.386L4.136 12ZM6.5 17C7.32843 17 8 16.3284 8 15.5C8 14.6716 7.32843 14 6.5 14C5.67157 14 5 14.6716 5 15.5C5 16.3284 5.67157 17 6.5 17ZM17.5 17C18.3284 17 19 16.3284 19 15.5C19 14.6716 18.3284 14 17.5 14C16.6716 14 16 14.6716 16 15.5C16 16.3284 16.6716 17 17.5 17Z"
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
      d="M19 20H5V21C5 21.5523 4.55228 22 4 22H3C2.44772 22 2 21.5523 2 21V12L4.51334 5.29775C4.80607 4.51715 5.55231 4 6.386 4H17.614C18.4477 4 19.1939 4.51715 19.4867 5.29775L22 12V21C22 21.5523 21.5523 22 21 22H20C19.4477 22 19 21.5523 19 21V20ZM4.136 12H19.864L17.614 6H6.386L4.136 12ZM6.5 17C7.32843 17 8 16.3284 8 15.5C8 14.6716 7.32843 14 6.5 14C5.67157 14 5 14.6716 5 15.5C5 16.3284 5.67157 17 6.5 17ZM17.5 17C18.3284 17 19 16.3284 19 15.5C19 14.6716 18.3284 14 17.5 14C16.6716 14 16 14.6716 16 15.5C16 16.3284 16.6716 17 17.5 17Z"
    />
  </svg>
{/if}

<!--
@component
[Go to docs](https://svelte-remix.codewithshin.com/)
## Props
@props: 
-->
