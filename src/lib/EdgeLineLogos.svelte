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
    ariaLabel = 'edge line Logos',
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
      d="M8.00776 14.0012C8.00326 14.0837 8.00098 14.1666 8.00098 14.25C8.00098 16.6319 9.75362 19 13.001 19C15.3739 19 17.5285 18.345 19.001 17.4465V20.7972C17.2123 21.5636 15.1135 22 13.001 22C7.49897 22 5.00098 18.5302 5.00098 14.25C5.00098 11.0187 7.04227 8.24935 9.94376 7.08603C8.53997 8.66307 8.00098 10.3413 8.00098 10.9952L18.001 11C18.001 7.59382 15.4528 5 12.001 5C7.00098 5 3.99969 8.9877 3.00098 10.9989C3.29063 6.23741 7.01012 2 12.001 2C17.201 2 21.001 6.02944 21.001 11V14H8.00098L8.00776 14.0012Z"
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
      d="M8.00776 14.0012C8.00326 14.0837 8.00098 14.1666 8.00098 14.25C8.00098 16.6319 9.75362 19 13.001 19C15.3739 19 17.5285 18.345 19.001 17.4465V20.7972C17.2123 21.5636 15.1135 22 13.001 22C7.49897 22 5.00098 18.5302 5.00098 14.25C5.00098 11.0187 7.04227 8.24935 9.94376 7.08603C8.53997 8.66307 8.00098 10.3413 8.00098 10.9952L18.001 11C18.001 7.59382 15.4528 5 12.001 5C7.00098 5 3.99969 8.9877 3.00098 10.9989C3.29063 6.23741 7.01012 2 12.001 2C17.201 2 21.001 6.02944 21.001 11V14H8.00098L8.00776 14.0012Z"
    />
  </svg>
{/if}

<!--
@component
[Go to docs](https://svelte-remix.codewithshin.com/)
## Props
@props: 
-->
