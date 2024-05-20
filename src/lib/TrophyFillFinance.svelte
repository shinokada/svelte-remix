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
    ariaLabel = 'trophy fill Finance',
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
      d="M13.0049 16.9409V19.0027H18.0049V21.0027H6.00488V19.0027H11.0049V16.9409C7.05857 16.4488 4.00488 13.0824 4.00488 9.00275V3.00275H20.0049V9.00275C20.0049 13.0824 16.9512 16.4488 13.0049 16.9409ZM1.00488 5.00275H3.00488V9.00275H1.00488V5.00275ZM21.0049 5.00275H23.0049V9.00275H21.0049V5.00275Z"
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
      d="M13.0049 16.9409V19.0027H18.0049V21.0027H6.00488V19.0027H11.0049V16.9409C7.05857 16.4488 4.00488 13.0824 4.00488 9.00275V3.00275H20.0049V9.00275C20.0049 13.0824 16.9512 16.4488 13.0049 16.9409ZM1.00488 5.00275H3.00488V9.00275H1.00488V5.00275ZM21.0049 5.00275H23.0049V9.00275H21.0049V5.00275Z"
    />
  </svg>
{/if}

<!--
@component
[Go to docs](https://svelte-remix.codewithshin.com/)
## Props
@props: 
-->
