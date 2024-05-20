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
    ariaLabel = 'map pin 5 line Map',
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
      d="M12 18.4853L16.2426 14.2426C18.5858 11.8995 18.5858 8.10051 16.2426 5.75736C13.8995 3.41421 10.1005 3.41421 7.75736 5.75736C5.41421 8.10051 5.41421 11.8995 7.75736 14.2426L12 18.4853ZM17.6569 15.6569L12 21.3137L6.34315 15.6569C3.21895 12.5327 3.21895 7.46734 6.34315 4.34315C9.46734 1.21895 14.5327 1.21895 17.6569 4.34315C20.781 7.46734 20.781 12.5327 17.6569 15.6569ZM5 22H19V24H5V22Z"
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
      d="M12 18.4853L16.2426 14.2426C18.5858 11.8995 18.5858 8.10051 16.2426 5.75736C13.8995 3.41421 10.1005 3.41421 7.75736 5.75736C5.41421 8.10051 5.41421 11.8995 7.75736 14.2426L12 18.4853ZM17.6569 15.6569L12 21.3137L6.34315 15.6569C3.21895 12.5327 3.21895 7.46734 6.34315 4.34315C9.46734 1.21895 14.5327 1.21895 17.6569 4.34315C20.781 7.46734 20.781 12.5327 17.6569 15.6569ZM5 22H19V24H5V22Z"
    />
  </svg>
{/if}

<!--
@component
[Go to docs](https://svelte-remix.codewithshin.com/)
## Props
@props: 
-->
