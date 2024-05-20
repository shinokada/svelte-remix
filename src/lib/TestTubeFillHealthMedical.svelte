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
    ariaLabel = 'test tube fill Health replace_ariaLabel Medical',
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
      d="M17 2V4H16V18C16 20.2091 14.2091 22 12 22C9.79086 22 8 20.2091 8 18V4H7V2H17ZM13 15C12.4477 15 12 15.4477 12 16C12 16.5523 12.4477 17 13 17C13.5523 17 14 16.5523 14 16C14 15.4477 13.5523 15 13 15ZM11 12C10.4477 12 10 12.4477 10 13C10 13.5523 10.4477 14 11 14C11.5523 14 12 13.5523 12 13C12 12.4477 11.5523 12 11 12ZM14 4H10V8H14V4Z"
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
      d="M17 2V4H16V18C16 20.2091 14.2091 22 12 22C9.79086 22 8 20.2091 8 18V4H7V2H17ZM13 15C12.4477 15 12 15.4477 12 16C12 16.5523 12.4477 17 13 17C13.5523 17 14 16.5523 14 16C14 15.4477 13.5523 15 13 15ZM11 12C10.4477 12 10 12.4477 10 13C10 13.5523 10.4477 14 11 14C11.5523 14 12 13.5523 12 13C12 12.4477 11.5523 12 11 12ZM14 4H10V8H14V4Z"
    />
  </svg>
{/if}

<!--
@component
[Go to docs](https://svelte-remix.codewithshin.com/)
## Props
@props: 
-->
