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
    ariaLabel = 'snowflake line Weather',
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
      d="M11.9998 3.29814L14.4451 1.66794L15.5545 3.33204L12.9998 5.03517V10.2678L17.5313 7.65149L17.7289 4.58748L19.7247 4.7162L19.5356 7.64899L22.17 8.95159L21.2836 10.7444L18.5313 9.38354L14.0001 11.9996L18.5317 14.616L21.284 13.2551L22.1704 15.0479L19.536 16.3505L19.7251 19.2833L17.7293 19.412L17.5317 16.348L12.9998 13.7315V18.9648L15.5545 20.6679L14.4451 22.332L11.9998 20.7018L9.55446 22.332L8.44506 20.6679L10.9998 18.9648V13.7319L6.46786 16.3484L6.27026 19.4124L4.2744 19.2836L4.46355 16.3508L1.8291 15.0483L2.71555 13.2554L5.46786 14.6163L10.0001 11.9996L5.46824 9.38319L2.71594 10.7441L1.82948 8.95124L4.46393 7.64864L4.27478 4.71585L6.27064 4.58713L6.46824 7.65113L10.9998 10.2674V5.03517L8.44506 3.33204L9.55446 1.66794L11.9998 3.29814Z"
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
      d="M11.9998 3.29814L14.4451 1.66794L15.5545 3.33204L12.9998 5.03517V10.2678L17.5313 7.65149L17.7289 4.58748L19.7247 4.7162L19.5356 7.64899L22.17 8.95159L21.2836 10.7444L18.5313 9.38354L14.0001 11.9996L18.5317 14.616L21.284 13.2551L22.1704 15.0479L19.536 16.3505L19.7251 19.2833L17.7293 19.412L17.5317 16.348L12.9998 13.7315V18.9648L15.5545 20.6679L14.4451 22.332L11.9998 20.7018L9.55446 22.332L8.44506 20.6679L10.9998 18.9648V13.7319L6.46786 16.3484L6.27026 19.4124L4.2744 19.2836L4.46355 16.3508L1.8291 15.0483L2.71555 13.2554L5.46786 14.6163L10.0001 11.9996L5.46824 9.38319L2.71594 10.7441L1.82948 8.95124L4.46393 7.64864L4.27478 4.71585L6.27064 4.58713L6.46824 7.65113L10.9998 10.2674V5.03517L8.44506 3.33204L9.55446 1.66794L11.9998 3.29814Z"
    />
  </svg>
{/if}

<!--
@component
[Go to docs](https://svelte-remix.codewithshin.com/)
## Props
@props: 
-->
