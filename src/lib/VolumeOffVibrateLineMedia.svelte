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
    ariaLabel = 'volume off vibrate line Media',
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
      d="M19.3891 3.16117L20.8033 4.57538L18.3277 7.04955L20.8033 9.52513L18.3277 11.9993L20.8033 14.4749L18.3284 16.9498L20.8033 19.4246L19.3891 20.8388L15.5 16.9498L17.9749 14.4749L15.5 12L17.9749 9.52513L15.5 7.05026L19.3891 3.16117ZM13 19.9449C13 20.221 12.7761 20.4449 12.5 20.4449C12.3846 20.4449 12.2727 20.405 12.1834 20.3319L6.88901 15.9991L3.00001 16C2.44772 16 2.00001 15.5523 2.00001 15V9.00001C2.00001 8.44772 2.44772 8.00001 3.00001 8.00001L5.58362 7.99762L1.80762 4.22183L3.22183 2.80762L12.9996 12.5856L13 19.9449ZM7.58401 9.99811L4.00001 9.999V14L7.60286 13.9989L11 16.779V13.4141L7.58401 9.99811ZM12.887 3.73851C12.9601 3.82784 13 3.93971 13 4.05513V9.75711L11 7.75711V7.22001L10.704 7.46111L9.28301 6.04011L12.1834 3.66815C12.3971 3.49328 12.7121 3.52479 12.887 3.73851Z"
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
      d="M19.3891 3.16117L20.8033 4.57538L18.3277 7.04955L20.8033 9.52513L18.3277 11.9993L20.8033 14.4749L18.3284 16.9498L20.8033 19.4246L19.3891 20.8388L15.5 16.9498L17.9749 14.4749L15.5 12L17.9749 9.52513L15.5 7.05026L19.3891 3.16117ZM13 19.9449C13 20.221 12.7761 20.4449 12.5 20.4449C12.3846 20.4449 12.2727 20.405 12.1834 20.3319L6.88901 15.9991L3.00001 16C2.44772 16 2.00001 15.5523 2.00001 15V9.00001C2.00001 8.44772 2.44772 8.00001 3.00001 8.00001L5.58362 7.99762L1.80762 4.22183L3.22183 2.80762L12.9996 12.5856L13 19.9449ZM7.58401 9.99811L4.00001 9.999V14L7.60286 13.9989L11 16.779V13.4141L7.58401 9.99811ZM12.887 3.73851C12.9601 3.82784 13 3.93971 13 4.05513V9.75711L11 7.75711V7.22001L10.704 7.46111L9.28301 6.04011L12.1834 3.66815C12.3971 3.49328 12.7121 3.52479 12.887 3.73851Z"
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
@prop ariaLabel = 'volume off vibrate line Media'
@prop onclick
@prop onkeydown
@prop onkeyup
@prop ...restProps
-->
