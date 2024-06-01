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
    ariaLabel = 'door open fill Others',
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
      d="M1.99805 21.0001V19.0001L3.99805 18.9999V4.83465C3.99805 4.35136 4.34367 3.93723 4.81916 3.85078L14.2907 2.12868C14.6167 2.0694 14.9291 2.28564 14.9884 2.61167C14.9948 2.64708 14.998 2.68301 14.998 2.719V3.9999L18.998 4.00007C19.5503 4.00007 19.998 4.44779 19.998 5.00007V18.9999L21.998 19.0001V21.0001H17.998V6.00007L14.998 5.9999V21.0001H1.99805ZM11.998 11.0001H9.99805V13.0001H11.998V11.0001Z"
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
      d="M1.99805 21.0001V19.0001L3.99805 18.9999V4.83465C3.99805 4.35136 4.34367 3.93723 4.81916 3.85078L14.2907 2.12868C14.6167 2.0694 14.9291 2.28564 14.9884 2.61167C14.9948 2.64708 14.998 2.68301 14.998 2.719V3.9999L18.998 4.00007C19.5503 4.00007 19.998 4.44779 19.998 5.00007V18.9999L21.998 19.0001V21.0001H17.998V6.00007L14.998 5.9999V21.0001H1.99805ZM11.998 11.0001H9.99805V13.0001H11.998V11.0001Z"
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
@prop ariaLabel = 'door open fill Others'
@prop onclick
@prop onkeydown
@prop onkeyup
@prop ...restProps
-->
