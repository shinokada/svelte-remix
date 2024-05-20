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
    ariaLabel = 'wireless charging line Device',
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
      d="M3.92887 4.92896L5.34315 6.34323C3.89543 7.79094 3 9.79094 3 12.0001C3 14.2092 3.89543 16.2092 5.34315 17.6569L3.92887 19.0712C2.11925 17.2616 1 14.7616 1 12.0001C1 9.23858 2.11925 6.73858 3.92887 4.92896ZM20.0711 4.92896C21.8808 6.73858 23 9.23858 23 12.0001C23 14.7616 21.8808 17.2616 20.0711 19.0712L18.6569 17.6569C20.1046 16.2092 21 14.2092 21 12.0001C21 9.79145 20.105 7.79186 18.6579 6.34423L20.0711 4.92896ZM13 5.00008V11.0001H16L11 19.0001V13.0001H8L13 5.00008ZM6.75736 7.75744L8.17157 9.17165C7.44771 9.89551 7 10.8955 7 12.0001C7 13.1046 7.44771 14.1046 8.17157 14.8285L6.75736 16.2427C5.67157 15.1569 5 13.6569 5 12.0001C5 10.3432 5.67157 8.84323 6.75736 7.75744ZM17.2436 7.75842C18.3288 8.84413 19 10.3437 19 12.0001C19 13.6569 18.3284 15.1569 17.2426 16.2427L15.8284 14.8285C16.5523 14.1046 17 13.1046 17 12.0001C17 10.896 16.5527 9.89643 15.8294 9.17265L17.2436 7.75842Z"
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
      d="M3.92887 4.92896L5.34315 6.34323C3.89543 7.79094 3 9.79094 3 12.0001C3 14.2092 3.89543 16.2092 5.34315 17.6569L3.92887 19.0712C2.11925 17.2616 1 14.7616 1 12.0001C1 9.23858 2.11925 6.73858 3.92887 4.92896ZM20.0711 4.92896C21.8808 6.73858 23 9.23858 23 12.0001C23 14.7616 21.8808 17.2616 20.0711 19.0712L18.6569 17.6569C20.1046 16.2092 21 14.2092 21 12.0001C21 9.79145 20.105 7.79186 18.6579 6.34423L20.0711 4.92896ZM13 5.00008V11.0001H16L11 19.0001V13.0001H8L13 5.00008ZM6.75736 7.75744L8.17157 9.17165C7.44771 9.89551 7 10.8955 7 12.0001C7 13.1046 7.44771 14.1046 8.17157 14.8285L6.75736 16.2427C5.67157 15.1569 5 13.6569 5 12.0001C5 10.3432 5.67157 8.84323 6.75736 7.75744ZM17.2436 7.75842C18.3288 8.84413 19 10.3437 19 12.0001C19 13.6569 18.3284 15.1569 17.2426 16.2427L15.8284 14.8285C16.5523 14.1046 17 13.1046 17 12.0001C17 10.896 16.5527 9.89643 15.8294 9.17265L17.2436 7.75842Z"
    />
  </svg>
{/if}

<!--
@component
[Go to docs](https://svelte-remix.codewithshin.com/)
## Props
@props: 
-->
