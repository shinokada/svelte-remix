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
    ariaLabel = 'git pr draft line Development',
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
      d="M5 6C5 5.44772 5.44772 5 6 5C6.55228 5 7 5.44772 7 6C7 6.55228 6.55228 7 6 7C5.44772 7 5 6.55228 5 6ZM6 3C4.34315 3 3 4.34315 3 6C3 7.30622 3.83481 8.41746 5 8.82929V15.1707C3.83481 15.5825 3 16.6938 3 18C3 19.6569 4.34315 21 6 21C7.65685 21 9 19.6569 9 18C9 16.6938 8.16519 15.5825 7 15.1707V8.82929C8.16519 8.41746 9 7.30622 9 6C9 4.34315 7.65685 3 6 3ZM5 18C5 17.4477 5.44772 17 6 17C6.55228 17 7 17.4477 7 18C7 18.5523 6.55228 19 6 19C5.44772 19 5 18.5523 5 18ZM18 17C17.4477 17 17 17.4477 17 18C17 18.5523 17.4477 19 18 19C18.5523 19 19 18.5523 19 18C19 17.4477 18.5523 17 18 17ZM15 18C15 16.3431 16.3431 15 18 15C19.6569 15 21 16.3431 21 18C21 19.6569 19.6569 21 18 21C16.3431 21 15 19.6569 15 18ZM18 7.5C18.8284 7.5 19.5 6.82843 19.5 6C19.5 5.17157 18.8284 4.5 18 4.5C17.1716 4.5 16.5 5.17157 16.5 6C16.5 6.82843 17.1716 7.5 18 7.5ZM19.5 11.5C19.5 12.3284 18.8284 13 18 13C17.1716 13 16.5 12.3284 16.5 11.5C16.5 10.6716 17.1716 10 18 10C18.8284 10 19.5 10.6716 19.5 11.5Z"
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
      d="M5 6C5 5.44772 5.44772 5 6 5C6.55228 5 7 5.44772 7 6C7 6.55228 6.55228 7 6 7C5.44772 7 5 6.55228 5 6ZM6 3C4.34315 3 3 4.34315 3 6C3 7.30622 3.83481 8.41746 5 8.82929V15.1707C3.83481 15.5825 3 16.6938 3 18C3 19.6569 4.34315 21 6 21C7.65685 21 9 19.6569 9 18C9 16.6938 8.16519 15.5825 7 15.1707V8.82929C8.16519 8.41746 9 7.30622 9 6C9 4.34315 7.65685 3 6 3ZM5 18C5 17.4477 5.44772 17 6 17C6.55228 17 7 17.4477 7 18C7 18.5523 6.55228 19 6 19C5.44772 19 5 18.5523 5 18ZM18 17C17.4477 17 17 17.4477 17 18C17 18.5523 17.4477 19 18 19C18.5523 19 19 18.5523 19 18C19 17.4477 18.5523 17 18 17ZM15 18C15 16.3431 16.3431 15 18 15C19.6569 15 21 16.3431 21 18C21 19.6569 19.6569 21 18 21C16.3431 21 15 19.6569 15 18ZM18 7.5C18.8284 7.5 19.5 6.82843 19.5 6C19.5 5.17157 18.8284 4.5 18 4.5C17.1716 4.5 16.5 5.17157 16.5 6C16.5 6.82843 17.1716 7.5 18 7.5ZM19.5 11.5C19.5 12.3284 18.8284 13 18 13C17.1716 13 16.5 12.3284 16.5 11.5C16.5 10.6716 17.1716 10 18 10C18.8284 10 19.5 10.6716 19.5 11.5Z"
    />
  </svg>
{/if}

<!--
@component
[Go to docs](https://svelte-remix.codewithshin.com/)
## Props
@props: 
-->
