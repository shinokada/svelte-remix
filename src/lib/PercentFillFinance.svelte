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
    ariaLabel = 'percent fill Finance',
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
      d="M17.5049 21.0027C15.5719 21.0027 14.0049 19.4357 14.0049 17.5027C14.0049 15.5697 15.5719 14.0027 17.5049 14.0027C19.4379 14.0027 21.0049 15.5697 21.0049 17.5027C21.0049 19.4357 19.4379 21.0027 17.5049 21.0027ZM6.50488 10.0027C4.57189 10.0027 3.00488 8.43574 3.00488 6.50275C3.00488 4.56975 4.57189 3.00275 6.50488 3.00275C8.43788 3.00275 10.0049 4.56975 10.0049 6.50275C10.0049 8.43574 8.43788 10.0027 6.50488 10.0027ZM19.076 3.51747L20.4902 4.93168L4.93382 20.488L3.5196 19.0738L19.076 3.51747Z"
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
      d="M17.5049 21.0027C15.5719 21.0027 14.0049 19.4357 14.0049 17.5027C14.0049 15.5697 15.5719 14.0027 17.5049 14.0027C19.4379 14.0027 21.0049 15.5697 21.0049 17.5027C21.0049 19.4357 19.4379 21.0027 17.5049 21.0027ZM6.50488 10.0027C4.57189 10.0027 3.00488 8.43574 3.00488 6.50275C3.00488 4.56975 4.57189 3.00275 6.50488 3.00275C8.43788 3.00275 10.0049 4.56975 10.0049 6.50275C10.0049 8.43574 8.43788 10.0027 6.50488 10.0027ZM19.076 3.51747L20.4902 4.93168L4.93382 20.488L3.5196 19.0738L19.076 3.51747Z"
    />
  </svg>
{/if}

<!--
@component
[Go to docs](https://svelte-remix.codewithshin.com/)
## Props
@props: 
-->
