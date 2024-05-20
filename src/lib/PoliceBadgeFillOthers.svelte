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
    ariaLabel = 'police badge fill Others',
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
      d="M2.91312 11.6739C3.23584 10.1953 3.53865 8.80805 2 6.5L5.5 2.5C5.5 2.5 9 4 12 1.5C15 4 18.5 2.5 18.5 2.5L22 6.5C20.4612 8.8081 20.7641 10.1954 21.0868 11.674C21.3933 13.0781 21.7177 14.5645 20.5 17C19.3425 19.315 17.3478 20.1227 15.4849 20.877C14.1289 21.4261 12.8428 21.9469 12.0003 23C11.1577 21.9469 9.8715 21.4261 8.51549 20.8771C6.65245 20.1227 4.65758 19.315 3.50001 17C2.28218 14.5645 2.60663 13.078 2.91312 11.6739ZM14.3776 12.7725L16.7552 10.4549L13.4694 9.97746L11.9999 7L10.5304 9.97746L7.24463 10.4549L9.62227 12.7725L9.06098 16.0451L11.9999 14.5L14.9388 16.0451L14.3776 12.7725Z"
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
      d="M2.91312 11.6739C3.23584 10.1953 3.53865 8.80805 2 6.5L5.5 2.5C5.5 2.5 9 4 12 1.5C15 4 18.5 2.5 18.5 2.5L22 6.5C20.4612 8.8081 20.7641 10.1954 21.0868 11.674C21.3933 13.0781 21.7177 14.5645 20.5 17C19.3425 19.315 17.3478 20.1227 15.4849 20.877C14.1289 21.4261 12.8428 21.9469 12.0003 23C11.1577 21.9469 9.8715 21.4261 8.51549 20.8771C6.65245 20.1227 4.65758 19.315 3.50001 17C2.28218 14.5645 2.60663 13.078 2.91312 11.6739ZM14.3776 12.7725L16.7552 10.4549L13.4694 9.97746L11.9999 7L10.5304 9.97746L7.24463 10.4549L9.62227 12.7725L9.06098 16.0451L11.9999 14.5L14.9388 16.0451L14.3776 12.7725Z"
    />
  </svg>
{/if}

<!--
@component
[Go to docs](https://svelte-remix.codewithshin.com/)
## Props
@props: 
-->
