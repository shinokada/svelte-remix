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
    ariaLabel = 'e bike line Map',
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
      d="M15.5006 6.93685C17.5926 8.14727 19 10.4093 19 13V21H14.8293C14.4175 22.1652 13.3062 23 12 23C10.6938 23 9.58254 22.1652 9.17071 21H5V13C5 10.4093 6.40741 8.14727 8.49936 6.93685C8.33754 6.645 8.21115 6.33078 8.12602 6H5V4H8.12602C8.57006 2.27477 10.1362 1 12 1C13.8638 1 15.4299 2.27477 15.874 4H19V6H15.874C15.7888 6.33078 15.6625 6.645 15.5006 6.93685ZM14.0474 8.43703C13.4484 8.79457 12.7482 9 12 9C11.2518 9 10.5516 8.79457 9.95263 8.43703C8.21207 9.21922 7 10.9681 7 13V19H9V15C9 13.3431 10.3431 12 12 12C13.6569 12 15 13.3431 15 15V19H17V13C17 10.9681 15.7879 9.21922 14.0474 8.43703ZM12 14C11.4477 14 11 14.4477 11 15V20C11 20.5523 11.4477 21 12 21C12.5523 21 13 20.5523 13 20V15C13 14.4477 12.5523 14 12 14ZM12 7C13.1046 7 14 6.10457 14 5C14 3.89543 13.1046 3 12 3C10.8954 3 10 3.89543 10 5C10 6.10457 10.8954 7 12 7Z"
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
      d="M15.5006 6.93685C17.5926 8.14727 19 10.4093 19 13V21H14.8293C14.4175 22.1652 13.3062 23 12 23C10.6938 23 9.58254 22.1652 9.17071 21H5V13C5 10.4093 6.40741 8.14727 8.49936 6.93685C8.33754 6.645 8.21115 6.33078 8.12602 6H5V4H8.12602C8.57006 2.27477 10.1362 1 12 1C13.8638 1 15.4299 2.27477 15.874 4H19V6H15.874C15.7888 6.33078 15.6625 6.645 15.5006 6.93685ZM14.0474 8.43703C13.4484 8.79457 12.7482 9 12 9C11.2518 9 10.5516 8.79457 9.95263 8.43703C8.21207 9.21922 7 10.9681 7 13V19H9V15C9 13.3431 10.3431 12 12 12C13.6569 12 15 13.3431 15 15V19H17V13C17 10.9681 15.7879 9.21922 14.0474 8.43703ZM12 14C11.4477 14 11 14.4477 11 15V20C11 20.5523 11.4477 21 12 21C12.5523 21 13 20.5523 13 20V15C13 14.4477 12.5523 14 12 14ZM12 7C13.1046 7 14 6.10457 14 5C14 3.89543 13.1046 3 12 3C10.8954 3 10 3.89543 10 5C10 6.10457 10.8954 7 12 7Z"
    />
  </svg>
{/if}

<!--
@component
[Go to docs](https://svelte-remix.codewithshin.com/)
## Props
@props: 
-->
