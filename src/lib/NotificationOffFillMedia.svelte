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
    ariaLabel = 'notification off fill Media',
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
      d="M18.5859 20H4.00016C3.72401 20 3.50016 19.7762 3.50016 19.5C3.50016 19.3918 3.53525 19.2866 3.60016 19.2L4.00016 18.6667V10C4.00016 8.67022 4.32462 7.41619 4.8987 6.31279L1.39355 2.80765L2.80777 1.39343L22.6068 21.1924L21.1925 22.6066L18.5859 20ZM20.0002 15.7858L7.55919 3.34486C8.8297 2.49537 10.3571 2.00003 12.0002 2.00003C16.4184 2.00003 20.0002 5.58176 20.0002 10V15.7858ZM9.50016 21H14.5002C14.5002 22.3807 13.3809 23.5 12.0002 23.5C10.6194 23.5 9.50016 22.3807 9.50016 21Z"
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
      d="M18.5859 20H4.00016C3.72401 20 3.50016 19.7762 3.50016 19.5C3.50016 19.3918 3.53525 19.2866 3.60016 19.2L4.00016 18.6667V10C4.00016 8.67022 4.32462 7.41619 4.8987 6.31279L1.39355 2.80765L2.80777 1.39343L22.6068 21.1924L21.1925 22.6066L18.5859 20ZM20.0002 15.7858L7.55919 3.34486C8.8297 2.49537 10.3571 2.00003 12.0002 2.00003C16.4184 2.00003 20.0002 5.58176 20.0002 10V15.7858ZM9.50016 21H14.5002C14.5002 22.3807 13.3809 23.5 12.0002 23.5C10.6194 23.5 9.50016 22.3807 9.50016 21Z"
    />
  </svg>
{/if}

<!--
@component
[Go to docs](https://svelte-remix.codewithshin.com/)
## Props
@props: 
-->
