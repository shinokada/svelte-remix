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
    ariaLabel = 'align item bottom line Design',
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
      d="M9 5L9 15H6L6 5L9 5ZM5 3C4.44772 3 4 3.44772 4 4L4 16C4 16.5523 4.44772 17 5 17H10C10.5523 17 11 16.5523 11 16L11 4C11 3.44772 10.5523 3 10 3H5ZM15 9V15H18V9H15ZM13 8C13 7.44772 13.4477 7 14 7L19 7C19.5523 7 20 7.44772 20 8V16C20 16.5523 19.5523 17 19 17H14C13.4477 17 13 16.5523 13 16V8ZM21 19L3 19V21H21V19Z"
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
      d="M9 5L9 15H6L6 5L9 5ZM5 3C4.44772 3 4 3.44772 4 4L4 16C4 16.5523 4.44772 17 5 17H10C10.5523 17 11 16.5523 11 16L11 4C11 3.44772 10.5523 3 10 3H5ZM15 9V15H18V9H15ZM13 8C13 7.44772 13.4477 7 14 7L19 7C19.5523 7 20 7.44772 20 8V16C20 16.5523 19.5523 17 19 17H14C13.4477 17 13 16.5523 13 16V8ZM21 19L3 19V21H21V19Z"
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
@prop ariaLabel = 'align item bottom line Design'
@prop onclick
@prop onkeydown
@prop onkeyup
@prop ...restProps
-->
