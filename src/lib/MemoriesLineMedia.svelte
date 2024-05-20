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
    ariaLabel = 'memories line Media',
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
      d="M22 12C22 6.47715 17.5228 2 12 2 8.72873 2 5.82434 3.57075 3.99989 5.99918L4 3.5H2V9.5H8V7.5L5.38451 7.50024C6.82447 5.38734 9.25022 4 12 4 16.4183 4 20 7.58172 20 12 20 16.4183 16.4183 20 12 20 7.58172 20 4 16.4183 4 12H2C2 17.5228 6.47715 22 12 22 17.5228 22 22 17.5228 22 12ZM10.7774 8.51823 15.376 11.584C15.6728 11.7819 15.6728 12.2181 15.376 12.416L10.7773 15.4818C10.4451 15.7033 10 15.4651 10 15.0657V8.93426C10 8.53491 10.4451 8.29672 10.7774 8.51823Z"
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
      d="M22 12C22 6.47715 17.5228 2 12 2 8.72873 2 5.82434 3.57075 3.99989 5.99918L4 3.5H2V9.5H8V7.5L5.38451 7.50024C6.82447 5.38734 9.25022 4 12 4 16.4183 4 20 7.58172 20 12 20 16.4183 16.4183 20 12 20 7.58172 20 4 16.4183 4 12H2C2 17.5228 6.47715 22 12 22 17.5228 22 22 17.5228 22 12ZM10.7774 8.51823 15.376 11.584C15.6728 11.7819 15.6728 12.2181 15.376 12.416L10.7773 15.4818C10.4451 15.7033 10 15.4651 10 15.0657V8.93426C10 8.53491 10.4451 8.29672 10.7774 8.51823Z"
    />
  </svg>
{/if}

<!--
@component
[Go to docs](https://svelte-remix.codewithshin.com/)
## Props
@props: 
-->
