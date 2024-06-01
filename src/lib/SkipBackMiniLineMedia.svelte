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
    ariaLabel = 'skip back mini line Media',
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
      d="M7 6C7.55228 6 8 6.44772 8 7V17C8 17.5523 7.55228 18 7 18C6.44772 18 6 17.5523 6 17V7C6 6.44772 6.44772 6 7 6ZM15 14.1402V9.85984L11.9681 12L15 14.1402ZM9.07869 12.4085C9.03208 12.3756 8.99144 12.3349 8.95854 12.2883C8.7993 12.0627 8.85309 11.7508 9.07869 11.5915L16.2117 6.55648C16.296 6.49693 16.3967 6.46496 16.5 6.46496C16.7761 6.46496 17 6.68882 17 6.96496V17.035C17 17.1383 16.968 17.239 16.9085 17.3234C16.7492 17.549 16.4373 17.6028 16.2117 17.4435L9.07869 12.4085Z"
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
      d="M7 6C7.55228 6 8 6.44772 8 7V17C8 17.5523 7.55228 18 7 18C6.44772 18 6 17.5523 6 17V7C6 6.44772 6.44772 6 7 6ZM15 14.1402V9.85984L11.9681 12L15 14.1402ZM9.07869 12.4085C9.03208 12.3756 8.99144 12.3349 8.95854 12.2883C8.7993 12.0627 8.85309 11.7508 9.07869 11.5915L16.2117 6.55648C16.296 6.49693 16.3967 6.46496 16.5 6.46496C16.7761 6.46496 17 6.68882 17 6.96496V17.035C17 17.1383 16.968 17.239 16.9085 17.3234C16.7492 17.549 16.4373 17.6028 16.2117 17.4435L9.07869 12.4085Z"
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
@prop ariaLabel = 'skip back mini line Media'
@prop onclick
@prop onkeydown
@prop onkeyup
@prop ...restProps
-->
