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
    ariaLabel = 'slow down fill Media',
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
      d="M4 13C4 15.2091 4.89543 17.2091 6.34315 18.6569L4.92893 20.0711C3.11929 18.2614 2 15.7614 2 13 2 7.47715 6.47715 3 12 3 17.5228 3 22 7.47715 22 13 22 15.7614 20.8807 18.2614 19.0711 20.0711L17.6569 18.6569C19.1046 17.2091 20 15.2091 20 13 20 8.58172 16.4183 5 12 5 7.58172 5 4 8.58172 4 13ZM8.70703 8.29297 13.5 12.5 11.5 14.5 7.29282 9.70718 8.70703 8.29297Z"
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
      d="M4 13C4 15.2091 4.89543 17.2091 6.34315 18.6569L4.92893 20.0711C3.11929 18.2614 2 15.7614 2 13 2 7.47715 6.47715 3 12 3 17.5228 3 22 7.47715 22 13 22 15.7614 20.8807 18.2614 19.0711 20.0711L17.6569 18.6569C19.1046 17.2091 20 15.2091 20 13 20 8.58172 16.4183 5 12 5 7.58172 5 4 8.58172 4 13ZM8.70703 8.29297 13.5 12.5 11.5 14.5 7.29282 9.70718 8.70703 8.29297Z"
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
@prop ariaLabel = 'slow down fill Media'
@prop onclick
@prop onkeydown
@prop onkeyup
@prop ...restProps
-->
