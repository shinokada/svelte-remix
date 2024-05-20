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
    ariaLabel = 'printer cloud fill Business',
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
      d="M7 2H17C17.5523 2 18 2.44771 18 3V6H6V3C6 2.44771 6.44772 2 7 2ZM22 9C22 8.44771 21.5523 8 21 8H3C2.44771 8 2 8.44771 2 9V19C2 19.5523 2.44771 20 3 20H5V15H12.1938C12.4371 14.1087 12.9094 13.3124 13.6109 12.6109C14.6848 11.537 15.9812 11 17.5 11C19.0188 11 20.3152 11.537 21.3891 12.6109C21.6169 12.8387 21.8205 13.0765 22 13.3243V9ZM8 10V12H5V10H8ZM21 16.5C21 14.567 19.433 13 17.5 13C15.567 13 14 14.567 14 16.5L14.0034 16.6025C12.8474 16.9279 12 17.99 12 19.25C12 20.7125 13.1417 21.9084 14.5825 21.995L14.75 22H20.25L20.4175 21.995C21.8583 21.9084 23 20.7125 23 19.25C23 17.9903 22.1531 16.9285 20.9985 16.6033L21 16.5ZM7 17H10.562C10.1873 17.6859 10 18.4359 10 19.25C10 20.2823 10.2905 21.199 10.8715 22H7V17Z"
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
      d="M7 2H17C17.5523 2 18 2.44771 18 3V6H6V3C6 2.44771 6.44772 2 7 2ZM22 9C22 8.44771 21.5523 8 21 8H3C2.44771 8 2 8.44771 2 9V19C2 19.5523 2.44771 20 3 20H5V15H12.1938C12.4371 14.1087 12.9094 13.3124 13.6109 12.6109C14.6848 11.537 15.9812 11 17.5 11C19.0188 11 20.3152 11.537 21.3891 12.6109C21.6169 12.8387 21.8205 13.0765 22 13.3243V9ZM8 10V12H5V10H8ZM21 16.5C21 14.567 19.433 13 17.5 13C15.567 13 14 14.567 14 16.5L14.0034 16.6025C12.8474 16.9279 12 17.99 12 19.25C12 20.7125 13.1417 21.9084 14.5825 21.995L14.75 22H20.25L20.4175 21.995C21.8583 21.9084 23 20.7125 23 19.25C23 17.9903 22.1531 16.9285 20.9985 16.6033L21 16.5ZM7 17H10.562C10.1873 17.6859 10 18.4359 10 19.25C10 20.2823 10.2905 21.199 10.8715 22H7V17Z"
    />
  </svg>
{/if}

<!--
@component
[Go to docs](https://svelte-remix.codewithshin.com/)
## Props
@props: 
-->
