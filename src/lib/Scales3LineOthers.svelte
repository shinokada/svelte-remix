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
    ariaLabel = 'scales 3 line Others',
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
      d="M12.9985 2L12.9979 3.278L17.9985 4.94591L21.631 3.73509L22.2634 5.63246L19.2319 6.643L22.3272 15.1549C21.2353 16.2921 19.6996 17 17.9985 17C16.2975 17 14.7618 16.2921 13.6699 15.1549L16.7639 6.643L12.9979 5.387V19H16.9985V21H6.99854V19H10.9979V5.387L7.23192 6.643L10.3272 15.1549C9.23528 16.2921 7.69957 17 5.99854 17C4.2975 17 2.76179 16.2921 1.66992 15.1549L4.76392 6.643L1.73363 5.63246L2.36608 3.73509L5.99854 4.94591L10.9979 3.278L10.9985 2H12.9985ZM17.9985 9.10267L16.04 14.4892C16.628 14.8201 17.2979 15 17.9985 15C18.6992 15 19.3691 14.8201 19.957 14.4892L17.9985 9.10267ZM5.99854 9.10267L4.04004 14.4892C4.62795 14.8201 5.29792 15 5.99854 15C6.69916 15 7.36912 14.8201 7.95703 14.4892L5.99854 9.10267Z"
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
      d="M12.9985 2L12.9979 3.278L17.9985 4.94591L21.631 3.73509L22.2634 5.63246L19.2319 6.643L22.3272 15.1549C21.2353 16.2921 19.6996 17 17.9985 17C16.2975 17 14.7618 16.2921 13.6699 15.1549L16.7639 6.643L12.9979 5.387V19H16.9985V21H6.99854V19H10.9979V5.387L7.23192 6.643L10.3272 15.1549C9.23528 16.2921 7.69957 17 5.99854 17C4.2975 17 2.76179 16.2921 1.66992 15.1549L4.76392 6.643L1.73363 5.63246L2.36608 3.73509L5.99854 4.94591L10.9979 3.278L10.9985 2H12.9985ZM17.9985 9.10267L16.04 14.4892C16.628 14.8201 17.2979 15 17.9985 15C18.6992 15 19.3691 14.8201 19.957 14.4892L17.9985 9.10267ZM5.99854 9.10267L4.04004 14.4892C4.62795 14.8201 5.29792 15 5.99854 15C6.69916 15 7.36912 14.8201 7.95703 14.4892L5.99854 9.10267Z"
    />
  </svg>
{/if}

<!--
@component
[Go to docs](https://svelte-remix.codewithshin.com/)
## Props
@props: 
-->
