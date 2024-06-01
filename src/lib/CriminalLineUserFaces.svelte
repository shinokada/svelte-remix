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
    ariaLabel = 'criminal line User replace_ariaLabel Faces',
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
      d="M12 2C16.9706 2 21 6.02944 21 11C21 13.2031 20.2084 15.2213 18.8941 16.7858C20.1491 17.6156 20.9275 18.6754 20.9952 19.835L21 20L12 22L3 20L3.00481 19.835C3.0725 18.6755 3.85076 17.6158 5.10554 16.7859C3.79194 15.2222 3 13.2036 3 11C3 6.02944 7.02944 2 12 2ZM12 4C8.13401 4 5 7.13401 5 11C5 12.5669 5.5143 14.0501 6.44521 15.261L6.63691 15.4995L8.07955 17.2168L6.11776 18.5156L5.981 18.613L12 19.951L18.018 18.613L17.9693 18.577L17.791 18.454L15.9199 17.2168L17.3628 15.4993C18.415 14.2468 19 12.6712 19 11C19 7.13401 15.866 4 12 4ZM12 13C13.3807 13 14.5 13.6716 14.5 14.5C14.5 15.3284 13.3807 16 12 16C10.6193 16 9.5 15.3284 9.5 14.5C9.5 13.6716 10.6193 13 12 13ZM9 8C10.1046 8 11 8.67157 11 9.5C11 10.3284 10.1046 11 9 11C7.89543 11 7 10.3284 7 9.5C7 8.67157 7.89543 8 9 8ZM15 8C16.1046 8 17 8.67157 17 9.5C17 10.3284 16.1046 11 15 11C13.8954 11 13 10.3284 13 9.5C13 8.67157 13.8954 8 15 8Z"
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
      d="M12 2C16.9706 2 21 6.02944 21 11C21 13.2031 20.2084 15.2213 18.8941 16.7858C20.1491 17.6156 20.9275 18.6754 20.9952 19.835L21 20L12 22L3 20L3.00481 19.835C3.0725 18.6755 3.85076 17.6158 5.10554 16.7859C3.79194 15.2222 3 13.2036 3 11C3 6.02944 7.02944 2 12 2ZM12 4C8.13401 4 5 7.13401 5 11C5 12.5669 5.5143 14.0501 6.44521 15.261L6.63691 15.4995L8.07955 17.2168L6.11776 18.5156L5.981 18.613L12 19.951L18.018 18.613L17.9693 18.577L17.791 18.454L15.9199 17.2168L17.3628 15.4993C18.415 14.2468 19 12.6712 19 11C19 7.13401 15.866 4 12 4ZM12 13C13.3807 13 14.5 13.6716 14.5 14.5C14.5 15.3284 13.3807 16 12 16C10.6193 16 9.5 15.3284 9.5 14.5C9.5 13.6716 10.6193 13 12 13ZM9 8C10.1046 8 11 8.67157 11 9.5C11 10.3284 10.1046 11 9 11C7.89543 11 7 10.3284 7 9.5C7 8.67157 7.89543 8 9 8ZM15 8C16.1046 8 17 8.67157 17 9.5C17 10.3284 16.1046 11 15 11C13.8954 11 13 10.3284 13 9.5C13 8.67157 13.8954 8 15 8Z"
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
@prop ariaLabel = 'criminal line User replace_ariaLabel Faces'
@prop onclick
@prop onkeydown
@prop onkeyup
@prop ...restProps
-->
