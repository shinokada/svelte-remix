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
    ariaLabel = 'camera switch fill Media',
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
      d="M9 3H15L17 5H21C21.5523 5 22 5.44772 22 6V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V6C2 5.44772 2.44772 5 3 5H7L9 3ZM14.6839 18.3677L13.7892 16.5785C13.2509 16.8482 12.6432 17 12 17C9.79086 17 8 15.2091 8 13H10L7.83875 8.67749C6.70523 9.76898 6 11.3021 6 13C6 16.3137 8.68629 19 12 19C12.9647 19 13.8763 18.7723 14.6839 18.3677ZM9.31613 7.63226L10.2108 9.42151C10.7491 9.15179 11.3568 9 12 9C14.2091 9 16 10.7909 16 13H14L16.1613 17.3225C17.2948 16.231 18 14.6979 18 13C18 9.68629 15.3137 7 12 7C11.0353 7 10.1237 7.22769 9.31613 7.63226Z"
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
      d="M9 3H15L17 5H21C21.5523 5 22 5.44772 22 6V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V6C2 5.44772 2.44772 5 3 5H7L9 3ZM14.6839 18.3677L13.7892 16.5785C13.2509 16.8482 12.6432 17 12 17C9.79086 17 8 15.2091 8 13H10L7.83875 8.67749C6.70523 9.76898 6 11.3021 6 13C6 16.3137 8.68629 19 12 19C12.9647 19 13.8763 18.7723 14.6839 18.3677ZM9.31613 7.63226L10.2108 9.42151C10.7491 9.15179 11.3568 9 12 9C14.2091 9 16 10.7909 16 13H14L16.1613 17.3225C17.2948 16.231 18 14.6979 18 13C18 9.68629 15.3137 7 12 7C11.0353 7 10.1237 7.22769 9.31613 7.63226Z"
    />
  </svg>
{/if}

<!--
@component
[Go to docs](https://svelte-remix.codewithshin.com/)
## Props
@props: 
-->
