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
    ariaLabel = 'supabase line Logos',
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
      d="M10.9997 2.59833V13.9694H3.90013C3.23055 13.9694 2.83063 13.1846 3.25654 12.6326L10.9997 2.59833ZM12.9997 8.03061V2.33296C12.9997 0.521514 10.7034 -0.291434 9.58194 1.16185L1.67316 11.4108C0.246185 13.26 1.54768 15.9694 3.90013 15.9694H10.9997V21.6671C10.9997 23.4785 13.296 24.2915 14.4175 22.8382L22.3262 12.5892C23.7532 10.74 22.4517 8.03061 20.0993 8.03061H12.9997ZM12.9997 10.0306H20.0993C20.7688 10.0306 21.1688 10.8155 20.7429 11.3674L12.9997 21.4017V10.0306Z"
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
      d="M10.9997 2.59833V13.9694H3.90013C3.23055 13.9694 2.83063 13.1846 3.25654 12.6326L10.9997 2.59833ZM12.9997 8.03061V2.33296C12.9997 0.521514 10.7034 -0.291434 9.58194 1.16185L1.67316 11.4108C0.246185 13.26 1.54768 15.9694 3.90013 15.9694H10.9997V21.6671C10.9997 23.4785 13.296 24.2915 14.4175 22.8382L22.3262 12.5892C23.7532 10.74 22.4517 8.03061 20.0993 8.03061H12.9997ZM12.9997 10.0306H20.0993C20.7688 10.0306 21.1688 10.8155 20.7429 11.3674L12.9997 21.4017V10.0306Z"
    />
  </svg>
{/if}

<!--
@component
[Go to docs](https://svelte-remix.codewithshin.com/)
## Props
@props: 
-->
