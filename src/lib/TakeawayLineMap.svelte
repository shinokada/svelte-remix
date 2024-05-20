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
    ariaLabel = 'takeaway line Map',
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
      d="M16 1C16.5523 1 17 1.44772 17 2V2.999L22 3V9L19.98 8.999L22.7467 16.5953C22.9105 17.032 23 17.5051 23 17.999C23 20.2082 21.2091 21.999 19 21.999C17.1368 21.999 15.5711 20.7251 15.1265 19.0008L10.8738 19.0008C10.4295 20.7256 8.86357 22 7 22C5.05513 22 3.43445 20.612 3.07453 18.7725C2.43558 18.439 2 17.7704 2 17V4C2 3.44772 2.44772 3 3 3H10C10.5523 3 11 3.44772 11 4V12C11 12.5128 11.386 12.9355 11.8834 12.9933L12 13H14C14.5128 13 14.9355 12.614 14.9933 12.1166L15 12V3H12V1H16ZM7 16C5.89543 16 5 16.8954 5 18C5 19.1046 5.89543 20 7 20C8.10457 20 9 19.1046 9 18C9 16.8954 8.10457 16 7 16ZM19 15.999C17.8954 15.999 17 16.8944 17 17.999C17 19.1036 17.8954 19.999 19 19.999C20.1046 19.999 21 19.1036 21 17.999C21 16.8944 20.1046 15.999 19 15.999ZM17.852 8.999H17V12C17 13.6569 15.6569 15 14 15H12C10.6941 15 9.58312 14.1656 9.17102 13.0009L3.99994 13V15.3542C4.73289 14.5238 5.80528 14 7 14C8.86393 14 10.4301 15.2749 10.874 17.0003H15.1257C15.5693 15.2744 17.1357 13.999 19 13.999C19.2373 13.999 19.4697 14.0197 19.6957 14.0593L17.852 8.999ZM9 8H4V11H9V8ZM20 5H17V7H20V5ZM9 5H4V6H9V5Z"
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
      d="M16 1C16.5523 1 17 1.44772 17 2V2.999L22 3V9L19.98 8.999L22.7467 16.5953C22.9105 17.032 23 17.5051 23 17.999C23 20.2082 21.2091 21.999 19 21.999C17.1368 21.999 15.5711 20.7251 15.1265 19.0008L10.8738 19.0008C10.4295 20.7256 8.86357 22 7 22C5.05513 22 3.43445 20.612 3.07453 18.7725C2.43558 18.439 2 17.7704 2 17V4C2 3.44772 2.44772 3 3 3H10C10.5523 3 11 3.44772 11 4V12C11 12.5128 11.386 12.9355 11.8834 12.9933L12 13H14C14.5128 13 14.9355 12.614 14.9933 12.1166L15 12V3H12V1H16ZM7 16C5.89543 16 5 16.8954 5 18C5 19.1046 5.89543 20 7 20C8.10457 20 9 19.1046 9 18C9 16.8954 8.10457 16 7 16ZM19 15.999C17.8954 15.999 17 16.8944 17 17.999C17 19.1036 17.8954 19.999 19 19.999C20.1046 19.999 21 19.1036 21 17.999C21 16.8944 20.1046 15.999 19 15.999ZM17.852 8.999H17V12C17 13.6569 15.6569 15 14 15H12C10.6941 15 9.58312 14.1656 9.17102 13.0009L3.99994 13V15.3542C4.73289 14.5238 5.80528 14 7 14C8.86393 14 10.4301 15.2749 10.874 17.0003H15.1257C15.5693 15.2744 17.1357 13.999 19 13.999C19.2373 13.999 19.4697 14.0197 19.6957 14.0593L17.852 8.999ZM9 8H4V11H9V8ZM20 5H17V7H20V5ZM9 5H4V6H9V5Z"
    />
  </svg>
{/if}

<!--
@component
[Go to docs](https://svelte-remix.codewithshin.com/)
## Props
@props: 
-->
