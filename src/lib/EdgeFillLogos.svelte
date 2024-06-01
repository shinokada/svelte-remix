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
    ariaLabel = 'edge fill Logos',
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
      d="M20.645 8.586C20.475 7.875 20.204 7.138 19.871 6.565C19.1 5.236 18.407 4.328 16.694 3.245C14.981 2.162 13.077 2 12.171 2C9.75598 2 7.95998 2.86 6.64598 3.887C3.34498 6.47 3.00098 11 3.00098 11C3.00098 11 4.22198 8.955 6.54098 7.474C7.94398 6.579 9.94198 6 11.569 6C15.886 6 16.001 10 16.001 10H9.00098C9.00098 8 10.001 7 10.001 7C10.001 7 5.00098 9 5.00098 14.044C5.00098 14.531 4.99798 15.416 5.24898 16.327C5.48098 17.17 5.94898 18.032 6.38098 18.68C7.60198 20.512 9.42598 21.294 10.297 21.584C11.293 21.916 12.326 22 13.307 22C16.027 22 18.184 21.114 19.001 20.725V16.553C18.243 17.007 16.322 18 14.001 18C9.00098 18 9.00098 14 9.00098 14H21.001V11.51C21.001 11.51 20.962 9.917 20.645 8.586Z"
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
      d="M20.645 8.586C20.475 7.875 20.204 7.138 19.871 6.565C19.1 5.236 18.407 4.328 16.694 3.245C14.981 2.162 13.077 2 12.171 2C9.75598 2 7.95998 2.86 6.64598 3.887C3.34498 6.47 3.00098 11 3.00098 11C3.00098 11 4.22198 8.955 6.54098 7.474C7.94398 6.579 9.94198 6 11.569 6C15.886 6 16.001 10 16.001 10H9.00098C9.00098 8 10.001 7 10.001 7C10.001 7 5.00098 9 5.00098 14.044C5.00098 14.531 4.99798 15.416 5.24898 16.327C5.48098 17.17 5.94898 18.032 6.38098 18.68C7.60198 20.512 9.42598 21.294 10.297 21.584C11.293 21.916 12.326 22 13.307 22C16.027 22 18.184 21.114 19.001 20.725V16.553C18.243 17.007 16.322 18 14.001 18C9.00098 18 9.00098 14 9.00098 14H21.001V11.51C21.001 11.51 20.962 9.917 20.645 8.586Z"
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
@prop ariaLabel = 'edge fill Logos'
@prop onclick
@prop onkeydown
@prop onkeyup
@prop ...restProps
-->
