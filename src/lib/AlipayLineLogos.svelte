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
    ariaLabel = 'alipay line Logos',
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
      d="M18.4079 16.7903C16.2353 15.8398 14.6887 15.1443 13.768 14.704C12.368 16.4 10.896 17.424 8.688 17.424C6.48 17.424 5 16.064 5.176 14.392C5.296 13.296 6.048 11.504 9.304 11.816C11.024 11.976 11.808 12.296 13.216 12.76C13.576 12.096 13.88 11.36 14.104 10.584H7.88V9.968H10.952V8.864H7.2V8.184H10.952V6.592C10.952 6.592 10.984 6.344 11.264 6.344H12.8V8.192H16.8V8.872H12.8V9.976H16.064C15.768 11.2 15.312 12.32 14.744 13.296C15.2543 13.4776 16.841 13.9718 19.5043 14.7785C19.8249 13.913 20 12.977 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20C14.6217 20 16.9488 18.7389 18.4079 16.7903ZM12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM8.432 16.368C9.872 16.368 11.256 15.496 12.392 14.016C10.784 13.24 9.448 12.856 7.952 12.856C6.648 12.856 5.968 13.656 5.848 14.272C5.728 14.888 6.096 16.368 8.432 16.368Z"
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
      d="M18.4079 16.7903C16.2353 15.8398 14.6887 15.1443 13.768 14.704C12.368 16.4 10.896 17.424 8.688 17.424C6.48 17.424 5 16.064 5.176 14.392C5.296 13.296 6.048 11.504 9.304 11.816C11.024 11.976 11.808 12.296 13.216 12.76C13.576 12.096 13.88 11.36 14.104 10.584H7.88V9.968H10.952V8.864H7.2V8.184H10.952V6.592C10.952 6.592 10.984 6.344 11.264 6.344H12.8V8.192H16.8V8.872H12.8V9.976H16.064C15.768 11.2 15.312 12.32 14.744 13.296C15.2543 13.4776 16.841 13.9718 19.5043 14.7785C19.8249 13.913 20 12.977 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20C14.6217 20 16.9488 18.7389 18.4079 16.7903ZM12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM8.432 16.368C9.872 16.368 11.256 15.496 12.392 14.016C10.784 13.24 9.448 12.856 7.952 12.856C6.648 12.856 5.968 13.656 5.848 14.272C5.728 14.888 6.096 16.368 8.432 16.368Z"
    />
  </svg>
{/if}

<!--
@component
[Go to docs](https://svelte-remix.codewithshin.com/)
## Props
@props: 
-->
