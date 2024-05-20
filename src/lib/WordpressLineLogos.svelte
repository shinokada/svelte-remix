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
    ariaLabel = 'wordpress line Logos',
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
      d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM14.6059 19.566L12.4512 13.5807L10.27 19.8125C10.8271 19.9353 11.406 20 12 20C12.9124 20 13.789 19.8473 14.6059 19.566ZM17.0741 18.1853C18.8605 16.7181 20 14.4921 20 12C20 10.9742 19.8069 9.99354 19.4552 9.09231C19.2048 10.5459 18.7629 12.4415 18.4794 13.4073L17.0741 18.1853ZM16.8726 5.65461C15.5233 4.61695 13.8337 4 12 4C9.47362 4 7.22075 5.17108 5.75463 7H7.14502V9H6.39547L9.15016 16.958L11.3768 10.5962L10.8021 9H8.64502L8.64505 7H13.6451L13.645 9H12.9278L15.5492 16.2817L16.5606 12.8429C17.0844 11.0096 16.653 10.2107 16.2222 9.41327C15.9334 8.87865 15.645 8.34466 15.645 7.5C15.645 6.66923 16.1515 5.95677 16.8726 5.65461ZM4.42479 9.42105C4.14939 10.2302 4 11.0977 4 12C4 14.8098 5.44856 17.2813 7.63963 18.7084L4.42479 9.42105Z"
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
      d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM14.6059 19.566L12.4512 13.5807L10.27 19.8125C10.8271 19.9353 11.406 20 12 20C12.9124 20 13.789 19.8473 14.6059 19.566ZM17.0741 18.1853C18.8605 16.7181 20 14.4921 20 12C20 10.9742 19.8069 9.99354 19.4552 9.09231C19.2048 10.5459 18.7629 12.4415 18.4794 13.4073L17.0741 18.1853ZM16.8726 5.65461C15.5233 4.61695 13.8337 4 12 4C9.47362 4 7.22075 5.17108 5.75463 7H7.14502V9H6.39547L9.15016 16.958L11.3768 10.5962L10.8021 9H8.64502L8.64505 7H13.6451L13.645 9H12.9278L15.5492 16.2817L16.5606 12.8429C17.0844 11.0096 16.653 10.2107 16.2222 9.41327C15.9334 8.87865 15.645 8.34466 15.645 7.5C15.645 6.66923 16.1515 5.95677 16.8726 5.65461ZM4.42479 9.42105C4.14939 10.2302 4 11.0977 4 12C4 14.8098 5.44856 17.2813 7.63963 18.7084L4.42479 9.42105Z"
    />
  </svg>
{/if}

<!--
@component
[Go to docs](https://svelte-remix.codewithshin.com/)
## Props
@props: 
-->
