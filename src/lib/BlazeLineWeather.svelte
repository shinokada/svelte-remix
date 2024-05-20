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
    ariaLabel = 'blaze line Weather',
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
      d="M19 9C19.6667 10.0606 20 11.3939 20 13C20 16 16.5 17 15 22C14.3333 21.4254 14 20.5921 14 19.5C14 16.0181 19 14.2101 19 9ZM14.5 5C15.1667 6.23841 15.5 7.57175 15.5 9C15.5 14 9.5 15 11.5 22C9.83333 20.8392 9 19.1726 9 17C9 13.675 14.5 11 14.5 5ZM10 1C10.6667 2.33333 11 3.83333 11 5.5C11 11.5 2 13 8 22C5.5 21.5 3.5 19 3.5 16C3.5 9.5 10 8.5 10 1Z"
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
      d="M19 9C19.6667 10.0606 20 11.3939 20 13C20 16 16.5 17 15 22C14.3333 21.4254 14 20.5921 14 19.5C14 16.0181 19 14.2101 19 9ZM14.5 5C15.1667 6.23841 15.5 7.57175 15.5 9C15.5 14 9.5 15 11.5 22C9.83333 20.8392 9 19.1726 9 17C9 13.675 14.5 11 14.5 5ZM10 1C10.6667 2.33333 11 3.83333 11 5.5C11 11.5 2 13 8 22C5.5 21.5 3.5 19 3.5 16C3.5 9.5 10 8.5 10 1Z"
    />
  </svg>
{/if}

<!--
@component
[Go to docs](https://svelte-remix.codewithshin.com/)
## Props
@props: 
-->
