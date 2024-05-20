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
    ariaLabel = 'mouse fill Device',
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
      d="M11.1411 2H12.8589C14.8728 2 15.9528 2.27848 16.9305 2.8014C17.9083 3.32432 18.6757 4.09169 19.1986 5.06946C19.7215 6.04724 20 7.12721 20 9.14111V14.8589C20 16.8728 19.7215 17.9528 19.1986 18.9305C18.6757 19.9083 17.9083 20.6757 16.9305 21.1986C15.9528 21.7215 14.8728 22 12.8589 22H11.1411C9.12721 22 8.04724 21.7215 7.06946 21.1986C6.09169 20.6757 5.32432 19.9083 4.8014 18.9305C4.27848 17.9528 4 16.8728 4 14.8589V9.14111C4 7.12721 4.27848 6.04724 4.8014 5.06946C5.32432 4.09169 6.09169 3.32432 7.06946 2.8014C8.04724 2.27848 9.12721 2 11.1411 2ZM11 6V11H13V6H11Z"
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
      d="M11.1411 2H12.8589C14.8728 2 15.9528 2.27848 16.9305 2.8014C17.9083 3.32432 18.6757 4.09169 19.1986 5.06946C19.7215 6.04724 20 7.12721 20 9.14111V14.8589C20 16.8728 19.7215 17.9528 19.1986 18.9305C18.6757 19.9083 17.9083 20.6757 16.9305 21.1986C15.9528 21.7215 14.8728 22 12.8589 22H11.1411C9.12721 22 8.04724 21.7215 7.06946 21.1986C6.09169 20.6757 5.32432 19.9083 4.8014 18.9305C4.27848 17.9528 4 16.8728 4 14.8589V9.14111C4 7.12721 4.27848 6.04724 4.8014 5.06946C5.32432 4.09169 6.09169 3.32432 7.06946 2.8014C8.04724 2.27848 9.12721 2 11.1411 2ZM11 6V11H13V6H11Z"
    />
  </svg>
{/if}

<!--
@component
[Go to docs](https://svelte-remix.codewithshin.com/)
## Props
@props: 
-->
