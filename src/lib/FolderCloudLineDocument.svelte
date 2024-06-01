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
    ariaLabel = 'folder cloud line Document',
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
      d="M3 3C2.44772 3 2 3.44772 2 4V20C2 20.5523 2.44772 21 3 21H10V19H4V5H9.58579L11.5858 7H20V11H22V6C22 5.44772 21.5523 5 21 5H12.4142L10.4142 3H3ZM12 18.25C12 16.9907 12.8465 15.9291 14.0015 15.6031C13.9452 13.6578 15.5523 12 17.5 12C19.4477 12 21.0548 13.6578 20.9985 15.6031C22.1535 15.9291 23 16.9907 23 18.25C23 19.7688 21.7688 21 20.25 21H14.75C13.2312 21 12 19.7688 12 18.25ZM17.5 14C16.6716 14 16 14.6716 16 15.5C16 15.9637 16.0239 16.4751 16.0569 16.9605C15.0926 17.1654 14 17.5516 14 18.25C14 18.6642 14.3358 19 14.75 19H20.25C20.6642 19 21 18.6642 21 18.25C21 17.5516 19.9074 17.1654 18.9431 16.9605C18.9761 16.4751 19 15.9637 19 15.5C19 14.6716 18.3284 14 17.5 14Z"
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
      d="M3 3C2.44772 3 2 3.44772 2 4V20C2 20.5523 2.44772 21 3 21H10V19H4V5H9.58579L11.5858 7H20V11H22V6C22 5.44772 21.5523 5 21 5H12.4142L10.4142 3H3ZM12 18.25C12 16.9907 12.8465 15.9291 14.0015 15.6031C13.9452 13.6578 15.5523 12 17.5 12C19.4477 12 21.0548 13.6578 20.9985 15.6031C22.1535 15.9291 23 16.9907 23 18.25C23 19.7688 21.7688 21 20.25 21H14.75C13.2312 21 12 19.7688 12 18.25ZM17.5 14C16.6716 14 16 14.6716 16 15.5C16 15.9637 16.0239 16.4751 16.0569 16.9605C15.0926 17.1654 14 17.5516 14 18.25C14 18.6642 14.3358 19 14.75 19H20.25C20.6642 19 21 18.6642 21 18.25C21 17.5516 19.9074 17.1654 18.9431 16.9605C18.9761 16.4751 19 15.9637 19 15.5C19 14.6716 18.3284 14 17.5 14Z"
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
@prop ariaLabel = 'folder cloud line Document'
@prop onclick
@prop onkeydown
@prop onkeyup
@prop ...restProps
-->
