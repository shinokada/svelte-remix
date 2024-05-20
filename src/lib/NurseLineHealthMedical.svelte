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
    ariaLabel = 'nurse line Health replace_ariaLabel Medical',
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
      d="M12.0006 15C16.0802 15 19.4466 18.0537 19.9387 22H4.0625C4.55458 18.0537 7.92098 15 12.0006 15ZM10.1875 17.2795C8.75387 17.734 7.54637 18.7133 6.80201 20L12.0006 20L10.1875 17.2795ZM13.8141 17.2797L12.0006 20L17.1992 20C16.4549 18.7135 15.2476 17.7342 13.8141 17.2797ZM18.0006 2V8C18.0006 11.3137 15.3143 14 12.0006 14C8.6869 14 6.00061 11.3137 6.00061 8V2H18.0006ZM8.00061 8C8.00061 10.2091 9.79147 12 12.0006 12C14.2098 12 16.0006 10.2091 16.0006 8H8.00061ZM16.0006 4H8.00061L8.0005 6H16.0005L16.0006 4Z"
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
      d="M12.0006 15C16.0802 15 19.4466 18.0537 19.9387 22H4.0625C4.55458 18.0537 7.92098 15 12.0006 15ZM10.1875 17.2795C8.75387 17.734 7.54637 18.7133 6.80201 20L12.0006 20L10.1875 17.2795ZM13.8141 17.2797L12.0006 20L17.1992 20C16.4549 18.7135 15.2476 17.7342 13.8141 17.2797ZM18.0006 2V8C18.0006 11.3137 15.3143 14 12.0006 14C8.6869 14 6.00061 11.3137 6.00061 8V2H18.0006ZM8.00061 8C8.00061 10.2091 9.79147 12 12.0006 12C14.2098 12 16.0006 10.2091 16.0006 8H8.00061ZM16.0006 4H8.00061L8.0005 6H16.0005L16.0006 4Z"
    />
  </svg>
{/if}

<!--
@component
[Go to docs](https://svelte-remix.codewithshin.com/)
## Props
@props: 
-->
