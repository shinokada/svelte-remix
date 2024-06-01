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
    ariaLabel = 'disqus fill Logos',
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
      d="M12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C9.47017 22 7.15975 21.0606 5.39856 19.5116L1.5 20L2.92355 16.2031C2.33082 14.9253 2 13.5013 2 12C2 6.47715 6.47715 2 12 2ZM8 7.0003V17.0003H11.7335L11.9959 16.9963C15.3714 16.8928 17.3333 14.7848 17.3333 11.9714V11.9436L17.3295 11.7287C17.2307 8.95633 15.2107 7.0003 11.7896 7.0003H8ZM11.8314 9.45793C13.4594 9.45793 14.54 10.3861 14.54 11.9868V12.0147L14.5352 12.1978C14.4561 13.6979 13.3968 14.5434 11.8314 14.5434H10.723V9.45793H11.8314Z"
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
      d="M12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C9.47017 22 7.15975 21.0606 5.39856 19.5116L1.5 20L2.92355 16.2031C2.33082 14.9253 2 13.5013 2 12C2 6.47715 6.47715 2 12 2ZM8 7.0003V17.0003H11.7335L11.9959 16.9963C15.3714 16.8928 17.3333 14.7848 17.3333 11.9714V11.9436L17.3295 11.7287C17.2307 8.95633 15.2107 7.0003 11.7896 7.0003H8ZM11.8314 9.45793C13.4594 9.45793 14.54 10.3861 14.54 11.9868V12.0147L14.5352 12.1978C14.4561 13.6979 13.3968 14.5434 11.8314 14.5434H10.723V9.45793H11.8314Z"
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
@prop ariaLabel = 'disqus fill Logos'
@prop onclick
@prop onkeydown
@prop onkeyup
@prop ...restProps
-->
