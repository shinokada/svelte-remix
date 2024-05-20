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
    ariaLabel = 'surround sound fill Media',
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
      d="M3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3ZM7.05025 7.12132C5.7835 8.38807 5 10.1381 5 12.0711C5 14.0041 5.7835 15.7541 7.05025 17.0208L8.46447 15.6066C7.55964 14.7018 7 13.4518 7 12.0711C7 10.6904 7.55964 9.44036 8.46447 8.53553L7.05025 7.12132ZM16.9497 7.12132L15.5355 8.53553C16.4404 9.44036 17 10.6904 17 12.0711C17 13.4518 16.4404 14.7018 15.5355 15.6066L16.9497 17.0208C18.2165 15.7541 19 14.0041 19 12.0711C19 10.1381 18.2165 8.38807 16.9497 7.12132ZM12 15.0711C13.6569 15.0711 15 13.7279 15 12.0711C15 10.4142 13.6569 9.07107 12 9.07107C10.3431 9.07107 9 10.4142 9 12.0711C9 13.7279 10.3431 15.0711 12 15.0711ZM12 13.0711C11.4477 13.0711 11 12.6234 11 12.0711C11 11.5188 11.4477 11.0711 12 11.0711C12.5523 11.0711 13 11.5188 13 12.0711C13 12.6234 12.5523 13.0711 12 13.0711Z"
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
      d="M3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3ZM7.05025 7.12132C5.7835 8.38807 5 10.1381 5 12.0711C5 14.0041 5.7835 15.7541 7.05025 17.0208L8.46447 15.6066C7.55964 14.7018 7 13.4518 7 12.0711C7 10.6904 7.55964 9.44036 8.46447 8.53553L7.05025 7.12132ZM16.9497 7.12132L15.5355 8.53553C16.4404 9.44036 17 10.6904 17 12.0711C17 13.4518 16.4404 14.7018 15.5355 15.6066L16.9497 17.0208C18.2165 15.7541 19 14.0041 19 12.0711C19 10.1381 18.2165 8.38807 16.9497 7.12132ZM12 15.0711C13.6569 15.0711 15 13.7279 15 12.0711C15 10.4142 13.6569 9.07107 12 9.07107C10.3431 9.07107 9 10.4142 9 12.0711C9 13.7279 10.3431 15.0711 12 15.0711ZM12 13.0711C11.4477 13.0711 11 12.6234 11 12.0711C11 11.5188 11.4477 11.0711 12 11.0711C12.5523 11.0711 13 11.5188 13 12.0711C13 12.6234 12.5523 13.0711 12 13.0711Z"
    />
  </svg>
{/if}

<!--
@component
[Go to docs](https://svelte-remix.codewithshin.com/)
## Props
@props: 
-->
