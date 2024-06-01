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
    ariaLabel = 'camera lens line Media',
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
      d="M9.85802 19.71L12 16H5.07026C6.10692 17.7921 7.8188 19.1447 9.85802 19.71ZM4.25204 14H8.5359L5.07103 7.99867C4.38987 9.17566 4 10.5423 4 12C4 12.6906 4.08751 13.3608 4.25204 14ZM6.39496 6.29179L8.5359 10L12 4C9.8171 4 7.8384 4.87429 6.39496 6.29179ZM14.142 4.28998L12 8H18.9297C17.8931 6.20791 16.1812 4.85529 14.142 4.28998ZM19.748 10H15.4641L18.929 16.0013C19.6101 14.8243 20 13.4577 20 12C20 11.3094 19.9125 10.6392 19.748 10ZM17.605 17.7082L15.4641 14L12 20C14.1829 20 16.1616 19.1257 17.605 17.7082ZM12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM13.1547 10H10.8453L9.6906 12L10.8453 14H13.1547L14.3094 12L13.1547 10Z"
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
      d="M9.85802 19.71L12 16H5.07026C6.10692 17.7921 7.8188 19.1447 9.85802 19.71ZM4.25204 14H8.5359L5.07103 7.99867C4.38987 9.17566 4 10.5423 4 12C4 12.6906 4.08751 13.3608 4.25204 14ZM6.39496 6.29179L8.5359 10L12 4C9.8171 4 7.8384 4.87429 6.39496 6.29179ZM14.142 4.28998L12 8H18.9297C17.8931 6.20791 16.1812 4.85529 14.142 4.28998ZM19.748 10H15.4641L18.929 16.0013C19.6101 14.8243 20 13.4577 20 12C20 11.3094 19.9125 10.6392 19.748 10ZM17.605 17.7082L15.4641 14L12 20C14.1829 20 16.1616 19.1257 17.605 17.7082ZM12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM13.1547 10H10.8453L9.6906 12L10.8453 14H13.1547L14.3094 12L13.1547 10Z"
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
@prop ariaLabel = 'camera lens line Media'
@prop onclick
@prop onkeydown
@prop onkeyup
@prop ...restProps
-->
