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
    ariaLabel = 'volume vibrate line Media',
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
      d="M19.3891 3.16113L20.8033 4.57535L18.3277 7.04951L20.8033 9.52509L18.3277 11.9993L20.8033 14.4748L18.3284 16.9497L20.8033 19.4246L19.3891 20.8388L15.5 16.9497L17.9749 14.4748L15.5 12L17.9749 9.52509L15.5 7.05022L19.3891 3.16113ZM12.887 3.73847C12.9601 3.8278 13 3.93967 13 4.05509V19.9448C13 20.221 12.7761 20.4448 12.5 20.4448C12.3846 20.4448 12.2727 20.4049 12.1834 20.3318L6.889 15.9991L3 16C2.44772 16 2 15.5523 2 15V8.99997C2 8.44768 2.44772 7.99997 3 7.99997L6.889 7.99907L12.1834 3.66811C12.3971 3.49325 12.7121 3.52475 12.887 3.73847ZM11 7.21997L7.60302 9.99891L4 9.99897V14L7.60285 13.9989L11 16.779V7.21997Z"
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
      d="M19.3891 3.16113L20.8033 4.57535L18.3277 7.04951L20.8033 9.52509L18.3277 11.9993L20.8033 14.4748L18.3284 16.9497L20.8033 19.4246L19.3891 20.8388L15.5 16.9497L17.9749 14.4748L15.5 12L17.9749 9.52509L15.5 7.05022L19.3891 3.16113ZM12.887 3.73847C12.9601 3.8278 13 3.93967 13 4.05509V19.9448C13 20.221 12.7761 20.4448 12.5 20.4448C12.3846 20.4448 12.2727 20.4049 12.1834 20.3318L6.889 15.9991L3 16C2.44772 16 2 15.5523 2 15V8.99997C2 8.44768 2.44772 7.99997 3 7.99997L6.889 7.99907L12.1834 3.66811C12.3971 3.49325 12.7121 3.52475 12.887 3.73847ZM11 7.21997L7.60302 9.99891L4 9.99897V14L7.60285 13.9989L11 16.779V7.21997Z"
    />
  </svg>
{/if}

<!--
@component
[Go to docs](https://svelte-remix.codewithshin.com/)
## Props
@props: 
-->
