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
    ariaLabel = 'safe line Finance',
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
      d="M18.0049 19.9998H6.00488V21.9998H4.00488V19.9998H3.00488C2.4526 19.9998 2.00488 19.5521 2.00488 18.9998V3.99979C2.00488 3.4475 2.4526 2.99979 3.00488 2.99979H21.0049C21.5572 2.99979 22.0049 3.4475 22.0049 3.99979V18.9998C22.0049 19.5521 21.5572 19.9998 21.0049 19.9998H20.0049V21.9998H18.0049V19.9998ZM4.00488 17.9998H20.0049V4.99979H4.00488V17.9998ZM13.0049 13.8738V16.9998H11.0049V13.8738C9.27966 13.4297 8.00488 11.8636 8.00488 9.99979C8.00488 7.79065 9.79574 5.99979 12.0049 5.99979C14.214 5.99979 16.0049 7.79065 16.0049 9.99979C16.0049 11.8636 14.7301 13.4297 13.0049 13.8738ZM12.0049 11.9998C13.1095 11.9998 14.0049 11.1044 14.0049 9.99979C14.0049 8.89522 13.1095 7.99979 12.0049 7.99979C10.9003 7.99979 10.0049 8.89522 10.0049 9.99979C10.0049 11.1044 10.9003 11.9998 12.0049 11.9998Z"
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
      d="M18.0049 19.9998H6.00488V21.9998H4.00488V19.9998H3.00488C2.4526 19.9998 2.00488 19.5521 2.00488 18.9998V3.99979C2.00488 3.4475 2.4526 2.99979 3.00488 2.99979H21.0049C21.5572 2.99979 22.0049 3.4475 22.0049 3.99979V18.9998C22.0049 19.5521 21.5572 19.9998 21.0049 19.9998H20.0049V21.9998H18.0049V19.9998ZM4.00488 17.9998H20.0049V4.99979H4.00488V17.9998ZM13.0049 13.8738V16.9998H11.0049V13.8738C9.27966 13.4297 8.00488 11.8636 8.00488 9.99979C8.00488 7.79065 9.79574 5.99979 12.0049 5.99979C14.214 5.99979 16.0049 7.79065 16.0049 9.99979C16.0049 11.8636 14.7301 13.4297 13.0049 13.8738ZM12.0049 11.9998C13.1095 11.9998 14.0049 11.1044 14.0049 9.99979C14.0049 8.89522 13.1095 7.99979 12.0049 7.99979C10.9003 7.99979 10.0049 8.89522 10.0049 9.99979C10.0049 11.1044 10.9003 11.9998 12.0049 11.9998Z"
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
@prop ariaLabel = 'safe line Finance'
@prop onclick
@prop onkeydown
@prop onkeyup
@prop ...restProps
-->
