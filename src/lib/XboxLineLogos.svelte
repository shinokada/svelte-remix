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
    ariaLabel = 'xbox line Logos',
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
      d="M4.79792 15.485C5.9215 12.9646 7.99755 10.0459 9.28514 8.5225C8.03654 7.277 7.12294 6.59163 6.46709 6.22278C4.94728 7.67896 4.00098 9.72897 4.00098 12C4.00098 13.2492 4.28731 14.4316 4.79792 15.485ZM8.84911 4.64483C10.4487 5.05101 12.001 5.95917 12.001 5.95917V5.95417C12.001 5.95417 13.5529 5.04965 15.1523 4.64461C14.1853 4.22973 13.1199 4 12.001 4C10.8818 4 9.81631 4.22982 8.84911 4.64483ZM17.5353 6.22317C16.8799 6.59249 15.9673 7.27806 14.7193 8.5225C16.0056 10.046 18.0809 12.9643 19.2045 15.484C19.7148 14.4309 20.001 13.2488 20.001 12C20.001 9.72917 19.0548 7.67933 17.5353 6.22317ZM17.9431 17.3565C16.5404 15.1202 13.8533 12.4122 12.001 11.0133C10.1504 12.4124 7.46222 15.1211 6.05981 17.3576C7.52394 18.9802 9.64336 20 12.001 20C14.3591 20 16.479 18.9797 17.9431 17.3565ZM12.001 22C6.47813 22 2.00098 17.5228 2.00098 12C2.00098 6.47715 6.47813 2 12.001 2C17.5238 2 22.001 6.47715 22.001 12C22.001 17.5228 17.5238 22 12.001 22Z"
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
      d="M4.79792 15.485C5.9215 12.9646 7.99755 10.0459 9.28514 8.5225C8.03654 7.277 7.12294 6.59163 6.46709 6.22278C4.94728 7.67896 4.00098 9.72897 4.00098 12C4.00098 13.2492 4.28731 14.4316 4.79792 15.485ZM8.84911 4.64483C10.4487 5.05101 12.001 5.95917 12.001 5.95917V5.95417C12.001 5.95417 13.5529 5.04965 15.1523 4.64461C14.1853 4.22973 13.1199 4 12.001 4C10.8818 4 9.81631 4.22982 8.84911 4.64483ZM17.5353 6.22317C16.8799 6.59249 15.9673 7.27806 14.7193 8.5225C16.0056 10.046 18.0809 12.9643 19.2045 15.484C19.7148 14.4309 20.001 13.2488 20.001 12C20.001 9.72917 19.0548 7.67933 17.5353 6.22317ZM17.9431 17.3565C16.5404 15.1202 13.8533 12.4122 12.001 11.0133C10.1504 12.4124 7.46222 15.1211 6.05981 17.3576C7.52394 18.9802 9.64336 20 12.001 20C14.3591 20 16.479 18.9797 17.9431 17.3565ZM12.001 22C6.47813 22 2.00098 17.5228 2.00098 12C2.00098 6.47715 6.47813 2 12.001 2C17.5238 2 22.001 6.47715 22.001 12C22.001 17.5228 17.5238 22 12.001 22Z"
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
@prop ariaLabel = 'xbox line Logos'
@prop onclick
@prop onkeydown
@prop onkeyup
@prop ...restProps
-->
