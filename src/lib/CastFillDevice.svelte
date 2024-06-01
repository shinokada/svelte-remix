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
    ariaLabel = 'cast fill Device',
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
      d="M3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H15C15 20.3199 14.9478 19.6519 14.8471 19H20V5H4V8.1529C3.34806 8.05223 2.68013 8 2 8V4C2 3.44772 2.44772 3 3 3ZM13 21H11C11 16.0294 6.97056 12 2 12V10C8.07513 10 13 14.9249 13 21ZM9 21H7C7 18.2386 4.76142 16 2 16V14C5.86599 14 9 17.134 9 21ZM5 21H2V18C3.65685 18 5 19.3431 5 21ZM14.373 17C13.093 13.0376 9.9624 9.90704 6 8.627V7H18V17H14.373Z"
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
      d="M3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H15C15 20.3199 14.9478 19.6519 14.8471 19H20V5H4V8.1529C3.34806 8.05223 2.68013 8 2 8V4C2 3.44772 2.44772 3 3 3ZM13 21H11C11 16.0294 6.97056 12 2 12V10C8.07513 10 13 14.9249 13 21ZM9 21H7C7 18.2386 4.76142 16 2 16V14C5.86599 14 9 17.134 9 21ZM5 21H2V18C3.65685 18 5 19.3431 5 21ZM14.373 17C13.093 13.0376 9.9624 9.90704 6 8.627V7H18V17H14.373Z"
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
@prop ariaLabel = 'cast fill Device'
@prop onclick
@prop onkeydown
@prop onkeyup
@prop ...restProps
-->
