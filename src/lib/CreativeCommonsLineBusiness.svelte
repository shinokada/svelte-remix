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
    ariaLabel = 'creative commons line Business',
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
      d="M9 8C10.1045 8 11.1049 8.44836 11.829 9.17297L10.4153 10.5865C10.0533 10.2241 9.55298 10 9 10 7.89502 10 7 10.895 7 12 7 13.105 7.89502 14 9 14 9.55249 14 10.0525 13.7762 10.4144 13.4144L11.828 14.828C11.104 15.552 10.104 16 9 16 6.79199 16 5 14.208 5 12 5 9.79199 6.79199 8 9 8ZM18.829 9.17297C18.1049 8.44836 17.1045 8 16 8 13.792 8 12 9.79199 12 12 12 14.208 13.792 16 16 16 17.104 16 18.104 15.552 18.828 14.828L17.4144 13.4144C17.0525 13.7762 16.5525 14 16 14 14.895 14 14 13.105 14 12 14 10.895 14.895 10 16 10 16.553 10 17.0533 10.2241 17.4153 10.5865L18.829 9.17297ZM2 12C2 6.47717 6.47717 2 12 2 17.5228 2 22 6.47717 22 12 22 17.5228 17.5228 22 12 22 6.47717 22 2 17.5228 2 12ZM12 4C7.58167 4 4 7.58167 4 12 4 16.4183 7.58167 20 12 20 16.4183 20 20 16.4183 20 12 20 7.58167 16.4183 4 12 4Z"
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
      d="M9 8C10.1045 8 11.1049 8.44836 11.829 9.17297L10.4153 10.5865C10.0533 10.2241 9.55298 10 9 10 7.89502 10 7 10.895 7 12 7 13.105 7.89502 14 9 14 9.55249 14 10.0525 13.7762 10.4144 13.4144L11.828 14.828C11.104 15.552 10.104 16 9 16 6.79199 16 5 14.208 5 12 5 9.79199 6.79199 8 9 8ZM18.829 9.17297C18.1049 8.44836 17.1045 8 16 8 13.792 8 12 9.79199 12 12 12 14.208 13.792 16 16 16 17.104 16 18.104 15.552 18.828 14.828L17.4144 13.4144C17.0525 13.7762 16.5525 14 16 14 14.895 14 14 13.105 14 12 14 10.895 14.895 10 16 10 16.553 10 17.0533 10.2241 17.4153 10.5865L18.829 9.17297ZM2 12C2 6.47717 6.47717 2 12 2 17.5228 2 22 6.47717 22 12 22 17.5228 17.5228 22 12 22 6.47717 22 2 17.5228 2 12ZM12 4C7.58167 4 4 7.58167 4 12 4 16.4183 7.58167 20 12 20 16.4183 20 20 16.4183 20 12 20 7.58167 16.4183 4 12 4Z"
    />
  </svg>
{/if}

<!--
@component
[Go to docs](https://svelte-remix.codewithshin.com/)
## Props
@props: 
-->
