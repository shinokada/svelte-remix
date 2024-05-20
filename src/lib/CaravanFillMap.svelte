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
    ariaLabel = 'caravan fill Map',
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
      d="M14.1716 3C14.702 3 15.2107 3.21071 15.5858 3.58579L20.4142 8.41421C20.7893 8.78929 21 9.29799 21 9.82843V17H23V19L14.8738 19.0008C14.4295 20.7256 12.8636 22 11 22C9.13643 22 7.57052 20.7256 7.12621 19.0008L3 19C2.44772 19 2 18.5523 2 18V5C2 3.89543 2.89543 3 4 3H14.1716ZM11 16C9.89543 16 9 16.8954 9 18C9 19.1046 9.89543 20 11 20C12.1046 20 13 19.1046 13 18C13 16.8954 12.1046 16 11 16ZM14 7H6V13H14V7ZM12 9V11H8V9H12Z"
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
      d="M14.1716 3C14.702 3 15.2107 3.21071 15.5858 3.58579L20.4142 8.41421C20.7893 8.78929 21 9.29799 21 9.82843V17H23V19L14.8738 19.0008C14.4295 20.7256 12.8636 22 11 22C9.13643 22 7.57052 20.7256 7.12621 19.0008L3 19C2.44772 19 2 18.5523 2 18V5C2 3.89543 2.89543 3 4 3H14.1716ZM11 16C9.89543 16 9 16.8954 9 18C9 19.1046 9.89543 20 11 20C12.1046 20 13 19.1046 13 18C13 16.8954 12.1046 16 11 16ZM14 7H6V13H14V7ZM12 9V11H8V9H12Z"
    />
  </svg>
{/if}

<!--
@component
[Go to docs](https://svelte-remix.codewithshin.com/)
## Props
@props: 
-->
