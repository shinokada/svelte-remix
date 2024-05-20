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
    ariaLabel = 'google play line Logos',
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
      d="M4.00098 1.73438C4.17692 1.73438 4.34975 1.7808 4.50201 1.86895L20.5061 11.1345C20.9841 11.4112 21.1473 12.023 20.8705 12.501C20.783 12.6522 20.6574 12.7778 20.5061 12.8654L4.50201 22.1309C4.02405 22.4076 3.41226 22.2445 3.13555 21.7665C3.0474 21.6143 3.00098 21.4414 3.00098 21.2655V2.73438C3.00098 2.18209 3.44869 1.73438 4.00098 1.73438ZM12.2931 13.4132L7.79498 17.9124L13.494 14.6134L12.2931 13.4132ZM4.99998 6.11938V17.8784L10.8791 11.9992L4.99998 6.11938ZM15.284 10.4214L13.7071 11.9992L15.285 13.5764L18.009 11.9999L15.284 10.4214ZM7.79398 6.08537L12.2931 10.5852L13.493 9.38437L7.79398 6.08537Z"
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
      d="M4.00098 1.73438C4.17692 1.73438 4.34975 1.7808 4.50201 1.86895L20.5061 11.1345C20.9841 11.4112 21.1473 12.023 20.8705 12.501C20.783 12.6522 20.6574 12.7778 20.5061 12.8654L4.50201 22.1309C4.02405 22.4076 3.41226 22.2445 3.13555 21.7665C3.0474 21.6143 3.00098 21.4414 3.00098 21.2655V2.73438C3.00098 2.18209 3.44869 1.73438 4.00098 1.73438ZM12.2931 13.4132L7.79498 17.9124L13.494 14.6134L12.2931 13.4132ZM4.99998 6.11938V17.8784L10.8791 11.9992L4.99998 6.11938ZM15.284 10.4214L13.7071 11.9992L15.285 13.5764L18.009 11.9999L15.284 10.4214ZM7.79398 6.08537L12.2931 10.5852L13.493 9.38437L7.79398 6.08537Z"
    />
  </svg>
{/if}

<!--
@component
[Go to docs](https://svelte-remix.codewithshin.com/)
## Props
@props: 
-->
