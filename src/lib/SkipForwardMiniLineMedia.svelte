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
    ariaLabel = 'skip forward mini line Media',
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
      d="M12.0319 12L9 9.85984V14.1402L12.0319 12ZM7.5 17.535C7.22386 17.535 7 17.3112 7 17.035V6.96496C7 6.8617 7.03197 6.76098 7.09152 6.67662C7.25076 6.45102 7.56274 6.39723 7.78834 6.55648L14.9213 11.5915C14.9679 11.6244 15.0086 11.665 15.0415 11.7117C15.2007 11.9373 15.1469 12.2492 14.9213 12.4085L7.78834 17.4435C7.70398 17.5031 7.60326 17.535 7.5 17.535ZM16 7C16 6.44772 16.4477 6 17 6C17.5523 6 18 6.44772 18 7V17C18 17.5523 17.5523 18 17 18C16.4477 18 16 17.5523 16 17V7Z"
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
      d="M12.0319 12L9 9.85984V14.1402L12.0319 12ZM7.5 17.535C7.22386 17.535 7 17.3112 7 17.035V6.96496C7 6.8617 7.03197 6.76098 7.09152 6.67662C7.25076 6.45102 7.56274 6.39723 7.78834 6.55648L14.9213 11.5915C14.9679 11.6244 15.0086 11.665 15.0415 11.7117C15.2007 11.9373 15.1469 12.2492 14.9213 12.4085L7.78834 17.4435C7.70398 17.5031 7.60326 17.535 7.5 17.535ZM16 7C16 6.44772 16.4477 6 17 6C17.5523 6 18 6.44772 18 7V17C18 17.5523 17.5523 18 17 18C16.4477 18 16 17.5523 16 17V7Z"
    />
  </svg>
{/if}

<!--
@component
[Go to docs](https://svelte-remix.codewithshin.com/)
## Props
@props: 
-->
