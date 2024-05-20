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
    ariaLabel = 'mickey fill User replace_ariaLabel Faces',
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
      d="M18.5 2C20.9853 2 23 4.01472 23 6.5C23 8.68314 21.4454 10.5032 19.3828 10.9134C19.7802 11.8623 20 12.9055 20 14C20 18.4183 16.4183 22 12 22C7.58172 22 4 18.4183 4 14C4 12.9055 4.21981 11.8623 4.61769 10.9121C2.55463 10.5032 1 8.68314 1 6.5C1 4.01472 3.01472 2 5.5 2C7.90278 2 9.86572 3.88317 9.9934 6.2541C10.6348 6.08809 11.3071 6 12 6C12.6929 6 13.3652 6.08809 14.0064 6.25368C14.1343 3.88317 16.0972 2 18.5 2Z"
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
      d="M18.5 2C20.9853 2 23 4.01472 23 6.5C23 8.68314 21.4454 10.5032 19.3828 10.9134C19.7802 11.8623 20 12.9055 20 14C20 18.4183 16.4183 22 12 22C7.58172 22 4 18.4183 4 14C4 12.9055 4.21981 11.8623 4.61769 10.9121C2.55463 10.5032 1 8.68314 1 6.5C1 4.01472 3.01472 2 5.5 2C7.90278 2 9.86572 3.88317 9.9934 6.2541C10.6348 6.08809 11.3071 6 12 6C12.6929 6 13.3652 6.08809 14.0064 6.25368C14.1343 3.88317 16.0972 2 18.5 2Z"
    />
  </svg>
{/if}

<!--
@component
[Go to docs](https://svelte-remix.codewithshin.com/)
## Props
@props: 
-->
