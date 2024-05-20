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
    ariaLabel = 'speed mini line Media',
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
      d="M9.03189 11.9999L6 9.85977V14.1401L9.03189 11.9999ZM4.78834 17.4434C4.70398 17.503 4.60326 17.535 4.5 17.535C4.22386 17.535 4 17.3111 4 17.035V6.96488C4 6.86163 4.03197 6.7609 4.09152 6.67654C4.25076 6.45094 4.56274 6.39715 4.78834 6.5564L11.9213 11.5914C11.9679 11.6243 12.0086 11.665 12.0415 11.7116C12.2007 11.9372 12.1469 12.2492 11.9213 12.4084L4.78834 17.4434ZM15 14.1401L18.0319 11.9999L15 9.85977V14.1401ZM13 6.96488C13 6.86163 13.032 6.7609 13.0915 6.67654C13.2508 6.45094 13.5627 6.39715 13.7883 6.5564L20.9213 11.5914C20.9679 11.6243 21.0086 11.665 21.0415 11.7116C21.2007 11.9372 21.1469 12.2492 20.9213 12.4084L13.7883 17.4434C13.704 17.503 13.6033 17.535 13.5 17.535C13.2239 17.535 13 17.3111 13 17.035V6.96488Z"
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
      d="M9.03189 11.9999L6 9.85977V14.1401L9.03189 11.9999ZM4.78834 17.4434C4.70398 17.503 4.60326 17.535 4.5 17.535C4.22386 17.535 4 17.3111 4 17.035V6.96488C4 6.86163 4.03197 6.7609 4.09152 6.67654C4.25076 6.45094 4.56274 6.39715 4.78834 6.5564L11.9213 11.5914C11.9679 11.6243 12.0086 11.665 12.0415 11.7116C12.2007 11.9372 12.1469 12.2492 11.9213 12.4084L4.78834 17.4434ZM15 14.1401L18.0319 11.9999L15 9.85977V14.1401ZM13 6.96488C13 6.86163 13.032 6.7609 13.0915 6.67654C13.2508 6.45094 13.5627 6.39715 13.7883 6.5564L20.9213 11.5914C20.9679 11.6243 21.0086 11.665 21.0415 11.7116C21.2007 11.9372 21.1469 12.2492 20.9213 12.4084L13.7883 17.4434C13.704 17.503 13.6033 17.535 13.5 17.535C13.2239 17.535 13 17.3111 13 17.035V6.96488Z"
    />
  </svg>
{/if}

<!--
@component
[Go to docs](https://svelte-remix.codewithshin.com/)
## Props
@props: 
-->
