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
    ariaLabel = 'rewind start fill Media',
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
      d="M2 4C1.44772 4 1 4.44772 1 5V19C1 19.5523 1.44772 20 2 20C2.55228 20 3 19.5523 3 19V13.3332L12.2227 19.4816C12.3048 19.5364 12.4013 19.5656 12.5 19.5656C12.7762 19.5656 13 19.3418 13 19.0656V13.3332L22.2227 19.4816C22.3048 19.5364 22.4013 19.5656 22.5 19.5656C22.7762 19.5656 23 19.3418 23 19.0656V4.93413C23 4.83542 22.9708 4.73892 22.9161 4.65679C22.7629 4.42702 22.4524 4.36493 22.2227 4.51811L13 10.6665V4.93413C13 4.83542 12.9708 4.73892 12.9161 4.65679C12.7629 4.42702 12.4524 4.36493 12.2227 4.51811L3 10.6666V5C3 4.44772 2.55228 4 2 4Z"
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
      d="M2 4C1.44772 4 1 4.44772 1 5V19C1 19.5523 1.44772 20 2 20C2.55228 20 3 19.5523 3 19V13.3332L12.2227 19.4816C12.3048 19.5364 12.4013 19.5656 12.5 19.5656C12.7762 19.5656 13 19.3418 13 19.0656V13.3332L22.2227 19.4816C22.3048 19.5364 22.4013 19.5656 22.5 19.5656C22.7762 19.5656 23 19.3418 23 19.0656V4.93413C23 4.83542 22.9708 4.73892 22.9161 4.65679C22.7629 4.42702 22.4524 4.36493 22.2227 4.51811L13 10.6665V4.93413C13 4.83542 12.9708 4.73892 12.9161 4.65679C12.7629 4.42702 12.4524 4.36493 12.2227 4.51811L3 10.6666V5C3 4.44772 2.55228 4 2 4Z"
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
@prop ariaLabel = 'rewind start fill Media'
@prop onclick
@prop onkeydown
@prop onkeyup
@prop ...restProps
-->
