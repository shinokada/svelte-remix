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
    ariaLabel = 'fingerprint 2 fill Device',
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
      d="M12 1C16.9706 1 21 5.02944 21 10V14C21 17.0383 19.4945 19.7249 17.1887 21.3546C17.7164 19.6635 18 17.8649 18 16L17.9996 13.999H15.9996L16 16L15.997 16.3149C15.9535 18.5643 15.4459 20.7 14.5657 22.6304C13.7516 22.8705 12.8909 23 12 23C11.6587 23 11.3218 22.981 10.9903 22.944C12.2637 20.9354 13 18.5537 13 16V9H11V16L10.9963 16.2884C10.9371 18.5891 10.1714 20.7142 8.90785 22.4547C7.9456 22.1028 7.05988 21.5909 6.28319 20.9515C7.35876 19.5892 8 17.8695 8 16V10L8.0049 9.80036C8.03767 9.1335 8.23376 8.50957 8.554 7.96773L7.10935 6.52332C6.41083 7.50417 6 8.70411 6 10V16L5.99586 16.2249C5.95095 17.4436 5.54259 18.5694 4.87532 19.4973C3.69863 17.9762 3 16.0697 3 14V10C3 5.02944 7.02944 1 12 1ZM12 4C10.7042 4 9.50434 4.41077 8.52353 5.10921L9.96848 6.55356C10.5639 6.20183 11.2584 6 12 6C14.2091 6 16 7.79086 16 10V12H18V10C18 6.68629 15.3137 4 12 4Z"
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
      d="M12 1C16.9706 1 21 5.02944 21 10V14C21 17.0383 19.4945 19.7249 17.1887 21.3546C17.7164 19.6635 18 17.8649 18 16L17.9996 13.999H15.9996L16 16L15.997 16.3149C15.9535 18.5643 15.4459 20.7 14.5657 22.6304C13.7516 22.8705 12.8909 23 12 23C11.6587 23 11.3218 22.981 10.9903 22.944C12.2637 20.9354 13 18.5537 13 16V9H11V16L10.9963 16.2884C10.9371 18.5891 10.1714 20.7142 8.90785 22.4547C7.9456 22.1028 7.05988 21.5909 6.28319 20.9515C7.35876 19.5892 8 17.8695 8 16V10L8.0049 9.80036C8.03767 9.1335 8.23376 8.50957 8.554 7.96773L7.10935 6.52332C6.41083 7.50417 6 8.70411 6 10V16L5.99586 16.2249C5.95095 17.4436 5.54259 18.5694 4.87532 19.4973C3.69863 17.9762 3 16.0697 3 14V10C3 5.02944 7.02944 1 12 1ZM12 4C10.7042 4 9.50434 4.41077 8.52353 5.10921L9.96848 6.55356C10.5639 6.20183 11.2584 6 12 6C14.2091 6 16 7.79086 16 10V12H18V10C18 6.68629 15.3137 4 12 4Z"
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
@prop ariaLabel = 'fingerprint 2 fill Device'
@prop onclick
@prop onkeydown
@prop onkeyup
@prop ...restProps
-->
