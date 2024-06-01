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
    ariaLabel = 'blaze fill Weather',
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
      d="M18.5 9C19.5 10.0606 20 11.3939 20 13C20 16.4664 16.3 17.276 14.5 22C13.8333 21.4254 13.5 20.5921 13.5 19.5C13.5 16.0181 18.5 14.2101 18.5 9ZM14.5 5C15.7 6.23841 16.3 7.57175 16.3 9C16.3 13.9513 10.2552 14.6918 11.5 22C9.83333 20.8392 9 19.1726 9 17C9 13.675 14.5 11 14.5 5ZM10 1C11.3333 2.66667 12 4.16667 12 5.5C12 11.75 3.5 13.7218 8 22C5.38352 21.4203 3.5 19 3.5 16C3.5 9.5 10 8.5 10 1Z"
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
      d="M18.5 9C19.5 10.0606 20 11.3939 20 13C20 16.4664 16.3 17.276 14.5 22C13.8333 21.4254 13.5 20.5921 13.5 19.5C13.5 16.0181 18.5 14.2101 18.5 9ZM14.5 5C15.7 6.23841 16.3 7.57175 16.3 9C16.3 13.9513 10.2552 14.6918 11.5 22C9.83333 20.8392 9 19.1726 9 17C9 13.675 14.5 11 14.5 5ZM10 1C11.3333 2.66667 12 4.16667 12 5.5C12 11.75 3.5 13.7218 8 22C5.38352 21.4203 3.5 19 3.5 16C3.5 9.5 10 8.5 10 1Z"
    />
  </svg>
{/if}

<!--
@component
[Go to docs](https://svelte-remix.codewithshin.com/)
## Props
@prop size = ctx.size || '24'
@prop role = ctx.role || 'img'
@prop color = ctx.color || 'currentColor'
@prop withEvents = ctx.withEvents || false
@prop title
@prop desc
@prop class: classname
@prop ariaLabel = 'blaze fill Weather'
@prop onclick
@prop onkeydown
@prop onkeyup
@prop ...restProps
-->
