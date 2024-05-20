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
    ariaLabel = 'luggage cart line Map',
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
      d="M5.50045 20C6.32888 20 7.00045 20.6715 7.00045 21.5C7.00045 22.3284 6.32888 23 5.50045 23C4.67203 23 4.00045 22.3284 4.00045 21.5C4.00045 20.6715 4.67203 20 5.50045 20ZM18.5005 20C19.3289 20 20.0005 20.6715 20.0005 21.5C20.0005 22.3284 19.3289 23 18.5005 23C17.672 23 17.0005 22.3284 17.0005 21.5C17.0005 20.6715 17.672 20 18.5005 20ZM2.17203 1.75732L5.99981 5.58532V16.9993L20.0005 17V19H5.00045C4.44817 19 4.00045 18.5522 4.00045 18L3.99981 6.41332L0.757812 3.17154L2.17203 1.75732ZM16.0005 2.99996C16.5527 2.99996 17.0005 3.44768 17.0005 3.99996L16.9998 5.99932L19.9936 5.99996C20.5497 5.99996 21.0005 6.45563 21.0005 6.99536V15.0046C21.0005 15.5543 20.5505 16 19.9936 16H8.0073C7.45123 16 7.00045 15.5443 7.00045 15.0046V6.99536C7.00045 6.44562 7.4504 5.99996 8.0073 5.99996L10.9998 5.99932L11.0005 3.99996C11.0005 3.44768 11.4482 2.99996 12.0005 2.99996H16.0005ZM9.99981 7.99932L9.00045 7.99996V14L9.99981 13.9993V7.99932ZM15.9998 7.99932H11.9998V13.9993H15.9998V7.99932ZM19.0005 7.99996L17.9998 7.99932V13.9993L19.0005 14V7.99996ZM15.0005 4.99996H13.0005V5.99996H15.0005V4.99996Z"
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
      d="M5.50045 20C6.32888 20 7.00045 20.6715 7.00045 21.5C7.00045 22.3284 6.32888 23 5.50045 23C4.67203 23 4.00045 22.3284 4.00045 21.5C4.00045 20.6715 4.67203 20 5.50045 20ZM18.5005 20C19.3289 20 20.0005 20.6715 20.0005 21.5C20.0005 22.3284 19.3289 23 18.5005 23C17.672 23 17.0005 22.3284 17.0005 21.5C17.0005 20.6715 17.672 20 18.5005 20ZM2.17203 1.75732L5.99981 5.58532V16.9993L20.0005 17V19H5.00045C4.44817 19 4.00045 18.5522 4.00045 18L3.99981 6.41332L0.757812 3.17154L2.17203 1.75732ZM16.0005 2.99996C16.5527 2.99996 17.0005 3.44768 17.0005 3.99996L16.9998 5.99932L19.9936 5.99996C20.5497 5.99996 21.0005 6.45563 21.0005 6.99536V15.0046C21.0005 15.5543 20.5505 16 19.9936 16H8.0073C7.45123 16 7.00045 15.5443 7.00045 15.0046V6.99536C7.00045 6.44562 7.4504 5.99996 8.0073 5.99996L10.9998 5.99932L11.0005 3.99996C11.0005 3.44768 11.4482 2.99996 12.0005 2.99996H16.0005ZM9.99981 7.99932L9.00045 7.99996V14L9.99981 13.9993V7.99932ZM15.9998 7.99932H11.9998V13.9993H15.9998V7.99932ZM19.0005 7.99996L17.9998 7.99932V13.9993L19.0005 14V7.99996ZM15.0005 4.99996H13.0005V5.99996H15.0005V4.99996Z"
    />
  </svg>
{/if}

<!--
@component
[Go to docs](https://svelte-remix.codewithshin.com/)
## Props
@props: 
-->
