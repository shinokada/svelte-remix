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
    ariaLabel = 't shirt air fill Others',
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
      d="M12.7052 17.7929C13.5319 18.6197 14.2926 19 14.998 19C15.3763 19 15.6782 18.9326 16.2349 18.724L16.6267 18.5715C17.6779 18.151 18.2065 18 18.998 18C20.2117 18 21.3768 18.5446 22.4844 19.5794L22.7052 19.7929L21.2909 21.2071C20.4642 20.3803 19.7035 20 18.998 20C18.6198 20 18.3179 20.0674 17.7612 20.276L17.3694 20.4285C16.3182 20.849 15.7896 21 14.998 21C13.7844 21 12.6193 20.4554 11.5117 19.4206L11.2909 19.2071L12.7052 17.7929ZM8.99805 3C8.99805 4.65685 10.3412 6 11.998 6C13.6549 6 14.998 4.65685 14.998 3H20.998C21.5503 3 21.998 3.44772 21.998 4V11C21.998 11.5523 21.5503 12 20.998 12H11.998C10.9437 12 10.0799 12.8159 10.0035 13.8507L9.99805 14V21H5.99805C5.44576 21 4.99805 20.5523 4.99805 20L4.99705 11.999L2.99805 12C2.44576 12 1.99805 11.5523 1.99805 11V4C1.99805 3.44772 2.44576 3 2.99805 3H8.99805ZM12.7052 13.7929C13.5319 14.6197 14.2926 15 14.998 15C15.3763 15 15.6782 14.9326 16.2349 14.724L16.6267 14.5715C17.6779 14.151 18.2065 14 18.998 14C20.2117 14 21.3768 14.5446 22.4844 15.5794L22.7052 15.7929L21.2909 17.2071C20.4642 16.3803 19.7035 16 18.998 16C18.6198 16 18.3179 16.0674 17.7612 16.276L17.3694 16.4285C16.3182 16.849 15.7896 17 14.998 17C13.7844 17 12.6193 16.4554 11.5117 15.4206L11.2909 15.2071L12.7052 13.7929Z"
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
      d="M12.7052 17.7929C13.5319 18.6197 14.2926 19 14.998 19C15.3763 19 15.6782 18.9326 16.2349 18.724L16.6267 18.5715C17.6779 18.151 18.2065 18 18.998 18C20.2117 18 21.3768 18.5446 22.4844 19.5794L22.7052 19.7929L21.2909 21.2071C20.4642 20.3803 19.7035 20 18.998 20C18.6198 20 18.3179 20.0674 17.7612 20.276L17.3694 20.4285C16.3182 20.849 15.7896 21 14.998 21C13.7844 21 12.6193 20.4554 11.5117 19.4206L11.2909 19.2071L12.7052 17.7929ZM8.99805 3C8.99805 4.65685 10.3412 6 11.998 6C13.6549 6 14.998 4.65685 14.998 3H20.998C21.5503 3 21.998 3.44772 21.998 4V11C21.998 11.5523 21.5503 12 20.998 12H11.998C10.9437 12 10.0799 12.8159 10.0035 13.8507L9.99805 14V21H5.99805C5.44576 21 4.99805 20.5523 4.99805 20L4.99705 11.999L2.99805 12C2.44576 12 1.99805 11.5523 1.99805 11V4C1.99805 3.44772 2.44576 3 2.99805 3H8.99805ZM12.7052 13.7929C13.5319 14.6197 14.2926 15 14.998 15C15.3763 15 15.6782 14.9326 16.2349 14.724L16.6267 14.5715C17.6779 14.151 18.2065 14 18.998 14C20.2117 14 21.3768 14.5446 22.4844 15.5794L22.7052 15.7929L21.2909 17.2071C20.4642 16.3803 19.7035 16 18.998 16C18.6198 16 18.3179 16.0674 17.7612 16.276L17.3694 16.4285C16.3182 16.849 15.7896 17 14.998 17C13.7844 17 12.6193 16.4554 11.5117 15.4206L11.2909 15.2071L12.7052 13.7929Z"
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
@prop ariaLabel = 't shirt air fill Others'
@prop onclick
@prop onkeydown
@prop onkeyup
@prop ...restProps
-->
