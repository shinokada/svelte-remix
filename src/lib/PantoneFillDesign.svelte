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
    ariaLabel = 'pantone fill Design',
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
      d="M4.00021 18.9223L2.65056 18.377C2.13849 18.1701 1.89109 17.5873 2.09798 17.0752L4.00021 12.3671V18.9223ZM8.85987 21H7.00021C6.44792 21 6.00021 20.5523 6.00021 20V13.9221L8.85987 21ZM6.02202 5.96771L15.2939 2.22164C15.8059 2.01475 16.3888 2.26215 16.5956 2.77422L22.2147 16.682C22.4216 17.194 22.1742 17.7769 21.6622 17.9838L12.3903 21.7298C11.8783 21.9367 11.2954 21.6893 11.0885 21.1773L5.46944 7.2695C5.26255 6.75743 5.50995 6.1746 6.02202 5.96771ZM9.00021 9.00004C9.55249 9.00004 10.0002 8.55233 10.0002 8.00004C10.0002 7.44776 9.55249 7.00004 9.00021 7.00004C8.44792 7.00004 8.00021 7.44776 8.00021 8.00004C8.00021 8.55233 8.44792 9.00004 9.00021 9.00004Z"
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
      d="M4.00021 18.9223L2.65056 18.377C2.13849 18.1701 1.89109 17.5873 2.09798 17.0752L4.00021 12.3671V18.9223ZM8.85987 21H7.00021C6.44792 21 6.00021 20.5523 6.00021 20V13.9221L8.85987 21ZM6.02202 5.96771L15.2939 2.22164C15.8059 2.01475 16.3888 2.26215 16.5956 2.77422L22.2147 16.682C22.4216 17.194 22.1742 17.7769 21.6622 17.9838L12.3903 21.7298C11.8783 21.9367 11.2954 21.6893 11.0885 21.1773L5.46944 7.2695C5.26255 6.75743 5.50995 6.1746 6.02202 5.96771ZM9.00021 9.00004C9.55249 9.00004 10.0002 8.55233 10.0002 8.00004C10.0002 7.44776 9.55249 7.00004 9.00021 7.00004C8.44792 7.00004 8.00021 7.44776 8.00021 8.00004C8.00021 8.55233 8.44792 9.00004 9.00021 9.00004Z"
    />
  </svg>
{/if}

<!--
@component
[Go to docs](https://svelte-remix.codewithshin.com/)
## Props
@props: 
-->
