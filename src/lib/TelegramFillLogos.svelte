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
    ariaLabel = 'telegram fill Logos',
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
      d="M12.001 22C6.47813 22 2.00098 17.5228 2.00098 12C2.00098 6.47715 6.47813 2 12.001 2C17.5238 2 22.001 6.47715 22.001 12C22.001 17.5228 17.5238 22 12.001 22ZM8.89113 13.1708L8.90378 13.1628C9.48351 15.0767 9.77337 16.0337 9.77337 16.0337C9.88564 16.3442 10.04 16.3996 10.2273 16.3743C10.4145 16.3489 10.5139 16.2476 10.6361 16.1297C10.6361 16.1297 11.0324 15.7472 11.825 14.9823L14.3759 16.8698C14.8407 17.1266 15.1763 16.9941 15.2917 16.4377L16.9495 8.61641C17.1325 7.88842 16.8115 7.59644 16.247 7.82754L6.51397 11.5871C5.84996 11.854 5.85317 12.2255 6.39308 12.3911L8.89113 13.1708Z"
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
      d="M12.001 22C6.47813 22 2.00098 17.5228 2.00098 12C2.00098 6.47715 6.47813 2 12.001 2C17.5238 2 22.001 6.47715 22.001 12C22.001 17.5228 17.5238 22 12.001 22ZM8.89113 13.1708L8.90378 13.1628C9.48351 15.0767 9.77337 16.0337 9.77337 16.0337C9.88564 16.3442 10.04 16.3996 10.2273 16.3743C10.4145 16.3489 10.5139 16.2476 10.6361 16.1297C10.6361 16.1297 11.0324 15.7472 11.825 14.9823L14.3759 16.8698C14.8407 17.1266 15.1763 16.9941 15.2917 16.4377L16.9495 8.61641C17.1325 7.88842 16.8115 7.59644 16.247 7.82754L6.51397 11.5871C5.84996 11.854 5.85317 12.2255 6.39308 12.3911L8.89113 13.1708Z"
    />
  </svg>
{/if}

<!--
@component
[Go to docs](https://svelte-remix.codewithshin.com/)
## Props
@props: 
-->
