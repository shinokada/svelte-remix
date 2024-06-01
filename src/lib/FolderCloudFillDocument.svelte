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
    ariaLabel = 'folder cloud fill Document',
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
      d="M2 4C2 3.44772 2.44772 3 3 3H10.4142L12.4142 5H21C21.5523 5 22 5.44772 22 6V12.3604C21.0023 10.9408 19.3542 10 17.5 10C14.8979 10 12.7015 11.853 12.1394 14.2817C10.8512 15.1306 10 16.5894 10 18.25C10 19.2749 10.3246 20.2239 10.8766 21H3C2.44772 21 2 20.5523 2 20V4ZM14.0015 15.6031C12.8465 15.9291 12 16.9907 12 18.25C12 19.7688 13.2312 21 14.75 21H20.25C21.7688 21 23 19.7688 23 18.25C23 16.9907 22.1535 15.9291 20.9985 15.6031C21.0548 13.6578 19.4477 12 17.5 12C15.5523 12 13.9452 13.6578 14.0015 15.6031Z"
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
      d="M2 4C2 3.44772 2.44772 3 3 3H10.4142L12.4142 5H21C21.5523 5 22 5.44772 22 6V12.3604C21.0023 10.9408 19.3542 10 17.5 10C14.8979 10 12.7015 11.853 12.1394 14.2817C10.8512 15.1306 10 16.5894 10 18.25C10 19.2749 10.3246 20.2239 10.8766 21H3C2.44772 21 2 20.5523 2 20V4ZM14.0015 15.6031C12.8465 15.9291 12 16.9907 12 18.25C12 19.7688 13.2312 21 14.75 21H20.25C21.7688 21 23 19.7688 23 18.25C23 16.9907 22.1535 15.9291 20.9985 15.6031C21.0548 13.6578 19.4477 12 17.5 12C15.5523 12 13.9452 13.6578 14.0015 15.6031Z"
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
@prop ariaLabel = 'folder cloud fill Document'
@prop onclick
@prop onkeydown
@prop onkeyup
@prop ...restProps
-->
