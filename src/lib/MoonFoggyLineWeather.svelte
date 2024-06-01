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
    ariaLabel = 'moon foggy line Weather',
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
      d="M16 20.3345V18.135C17.6993 17.2367 19.012 15.7047 19.6233 13.8537C19.0927 13.9504 18.5498 14 18 14C13.0294 14 9 9.97059 9 5.00003C9 4.95443 9.00034 4.90887 9.00102 4.86337C7.04146 5.89875 5.60285 7.77581 5.15045 10H3.11775C3.79375 5.73826 7.30375 2.42006 11.6562 2.03699C11.2352 2.93681 11 3.94095 11 5.00003C11 8.86602 14.134 12 18 12C19.475 12 20.8435 11.5438 21.972 10.7648C21.9905 11.0074 22 11.2526 22 11.5C22 15.5107 19.5146 18.9409 16 20.3345ZM7 20H14V22H7V20ZM4 12H10V14H4V12ZM2 16H12V18H2V16Z"
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
      d="M16 20.3345V18.135C17.6993 17.2367 19.012 15.7047 19.6233 13.8537C19.0927 13.9504 18.5498 14 18 14C13.0294 14 9 9.97059 9 5.00003C9 4.95443 9.00034 4.90887 9.00102 4.86337C7.04146 5.89875 5.60285 7.77581 5.15045 10H3.11775C3.79375 5.73826 7.30375 2.42006 11.6562 2.03699C11.2352 2.93681 11 3.94095 11 5.00003C11 8.86602 14.134 12 18 12C19.475 12 20.8435 11.5438 21.972 10.7648C21.9905 11.0074 22 11.2526 22 11.5C22 15.5107 19.5146 18.9409 16 20.3345ZM7 20H14V22H7V20ZM4 12H10V14H4V12ZM2 16H12V18H2V16Z"
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
@prop ariaLabel = 'moon foggy line Weather'
@prop onclick
@prop onkeydown
@prop onkeyup
@prop ...restProps
-->
