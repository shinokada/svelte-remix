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
    ariaLabel = 'coupon 3 fill Finance',
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
      d="M11.0049 20.9997C11.0049 20.1712 10.3333 19.4997 9.50488 19.4997C8.67646 19.4997 8.00488 20.1712 8.00488 20.9997H3.00488C2.4526 20.9997 2.00488 20.5519 2.00488 19.9997V3.99966C2.00488 3.44738 2.4526 2.99966 3.00488 2.99966H8.00488C8.00488 3.82809 8.67646 4.49966 9.50488 4.49966C10.3333 4.49966 11.0049 3.82809 11.0049 2.99966H21.0049C21.5572 2.99966 22.0049 3.44738 22.0049 3.99966V9.49966C20.6242 9.49966 19.5049 10.619 19.5049 11.9997C19.5049 13.3804 20.6242 14.4997 22.0049 14.4997V19.9997C22.0049 20.5519 21.5572 20.9997 21.0049 20.9997H11.0049ZM9.50488 10.4997C10.3333 10.4997 11.0049 9.82809 11.0049 8.99966C11.0049 8.17124 10.3333 7.49966 9.50488 7.49966C8.67646 7.49966 8.00488 8.17124 8.00488 8.99966C8.00488 9.82809 8.67646 10.4997 9.50488 10.4997ZM9.50488 16.4997C10.3333 16.4997 11.0049 15.8281 11.0049 14.9997C11.0049 14.1712 10.3333 13.4997 9.50488 13.4997C8.67646 13.4997 8.00488 14.1712 8.00488 14.9997C8.00488 15.8281 8.67646 16.4997 9.50488 16.4997Z"
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
      d="M11.0049 20.9997C11.0049 20.1712 10.3333 19.4997 9.50488 19.4997C8.67646 19.4997 8.00488 20.1712 8.00488 20.9997H3.00488C2.4526 20.9997 2.00488 20.5519 2.00488 19.9997V3.99966C2.00488 3.44738 2.4526 2.99966 3.00488 2.99966H8.00488C8.00488 3.82809 8.67646 4.49966 9.50488 4.49966C10.3333 4.49966 11.0049 3.82809 11.0049 2.99966H21.0049C21.5572 2.99966 22.0049 3.44738 22.0049 3.99966V9.49966C20.6242 9.49966 19.5049 10.619 19.5049 11.9997C19.5049 13.3804 20.6242 14.4997 22.0049 14.4997V19.9997C22.0049 20.5519 21.5572 20.9997 21.0049 20.9997H11.0049ZM9.50488 10.4997C10.3333 10.4997 11.0049 9.82809 11.0049 8.99966C11.0049 8.17124 10.3333 7.49966 9.50488 7.49966C8.67646 7.49966 8.00488 8.17124 8.00488 8.99966C8.00488 9.82809 8.67646 10.4997 9.50488 10.4997ZM9.50488 16.4997C10.3333 16.4997 11.0049 15.8281 11.0049 14.9997C11.0049 14.1712 10.3333 13.4997 9.50488 13.4997C8.67646 13.4997 8.00488 14.1712 8.00488 14.9997C8.00488 15.8281 8.67646 16.4997 9.50488 16.4997Z"
    />
  </svg>
{/if}

<!--
@component
[Go to docs](https://svelte-remix.codewithshin.com/)
## Props
@props: 
-->
