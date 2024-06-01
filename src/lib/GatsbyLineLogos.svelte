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
    ariaLabel = 'gatsby line Logos',
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
      d="M11.7519 21.997C6.53059 21.8694 2.3017 17.7397 2.01626 12.559L2.00391 12.246L11.7519 21.997ZM12.0009 2C15.39 2 18.3854 3.68597 20.194 6.26495L18.556 7.41293C17.1092 5.3492 14.7126 4 12.0009 4C8.59784 4 5.69105 6.12484 4.53491 9.12017L14.8807 19.466C17.2681 18.5445 19.1025 16.5109 19.7488 14.0004L15.5009 14V12H22.0009C22.0009 16.7261 18.7223 20.6865 14.3155 21.7308L2.27013 9.68538C3.31443 5.27856 7.27479 2 12.0009 2Z"
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
      d="M11.7519 21.997C6.53059 21.8694 2.3017 17.7397 2.01626 12.559L2.00391 12.246L11.7519 21.997ZM12.0009 2C15.39 2 18.3854 3.68597 20.194 6.26495L18.556 7.41293C17.1092 5.3492 14.7126 4 12.0009 4C8.59784 4 5.69105 6.12484 4.53491 9.12017L14.8807 19.466C17.2681 18.5445 19.1025 16.5109 19.7488 14.0004L15.5009 14V12H22.0009C22.0009 16.7261 18.7223 20.6865 14.3155 21.7308L2.27013 9.68538C3.31443 5.27856 7.27479 2 12.0009 2Z"
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
@prop ariaLabel = 'gatsby line Logos'
@prop onclick
@prop onkeydown
@prop onkeyup
@prop ...restProps
-->
