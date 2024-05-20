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
    ariaLabel = 'rainbow line Weather',
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
      d="M12 4C18.0751 4 23 8.92487 23 15V20H21V15C21 10.1182 17.1132 6.14421 12.2654 6.00384L12 6C7.1182 6 3.14421 9.88681 3.00384 14.7346L3 15V20H1V15C1 8.92487 5.92487 4 12 4ZM12 8C15.866 8 19 11.134 19 15V20H17V15C17 12.3112 14.8777 10.1182 12.2169 10.0046L12 10C9.31124 10 7.11818 12.1223 7.00462 14.7831L7 15V20H5V15C5 11.134 8.13401 8 12 8ZM12 12C13.6569 12 15 13.3431 15 15V20H13V15C13 14.4872 12.614 14.0645 12.1166 14.0067L12 14C11.4872 14 11.0645 14.386 11.0067 14.8834L11 15V20H9V15C9 13.3431 10.3431 12 12 12Z"
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
      d="M12 4C18.0751 4 23 8.92487 23 15V20H21V15C21 10.1182 17.1132 6.14421 12.2654 6.00384L12 6C7.1182 6 3.14421 9.88681 3.00384 14.7346L3 15V20H1V15C1 8.92487 5.92487 4 12 4ZM12 8C15.866 8 19 11.134 19 15V20H17V15C17 12.3112 14.8777 10.1182 12.2169 10.0046L12 10C9.31124 10 7.11818 12.1223 7.00462 14.7831L7 15V20H5V15C5 11.134 8.13401 8 12 8ZM12 12C13.6569 12 15 13.3431 15 15V20H13V15C13 14.4872 12.614 14.0645 12.1166 14.0067L12 14C11.4872 14 11.0645 14.386 11.0067 14.8834L11 15V20H9V15C9 13.3431 10.3431 12 12 12Z"
    />
  </svg>
{/if}

<!--
@component
[Go to docs](https://svelte-remix.codewithshin.com/)
## Props
@props: 
-->
