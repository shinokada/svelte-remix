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
    ariaLabel = 'funds fill Finance',
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
      d="M3.90145 17.8636L7.81249 13.9526L10.6409 16.781L15.212 12.2099L17.0049 14.0028V9.00281H12.0049L13.7978 10.7957L10.6409 13.9526L7.81249 11.1241L2.86662 16.07C2.31276 14.8274 2.00488 13.4511 2.00488 12.0028C2.00488 6.47996 6.48204 2.00281 12.0049 2.00281C17.5277 2.00281 22.0049 6.47996 22.0049 12.0028C22.0049 17.5257 17.5277 22.0028 12.0049 22.0028C8.67116 22.0028 5.71844 20.3715 3.90145 17.8636Z"
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
      d="M3.90145 17.8636L7.81249 13.9526L10.6409 16.781L15.212 12.2099L17.0049 14.0028V9.00281H12.0049L13.7978 10.7957L10.6409 13.9526L7.81249 11.1241L2.86662 16.07C2.31276 14.8274 2.00488 13.4511 2.00488 12.0028C2.00488 6.47996 6.48204 2.00281 12.0049 2.00281C17.5277 2.00281 22.0049 6.47996 22.0049 12.0028C22.0049 17.5257 17.5277 22.0028 12.0049 22.0028C8.67116 22.0028 5.71844 20.3715 3.90145 17.8636Z"
    />
  </svg>
{/if}

<!--
@component
[Go to docs](https://svelte-remix.codewithshin.com/)
## Props
@props: 
-->
