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
    ariaLabel = 'bear smile fill User replace_ariaLabel Faces',
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
      d="M17.5 2C19.9853 2 22 4.01472 22 6.5C22 7.85621 21.4001 9.07229 20.4511 9.89732C20.8061 10.8644 21 11.9096 21 13C21 17.9706 16.9706 22 12 22C7.02944 22 3 17.9706 3 13C3 11.9096 3.19392 10.8644 3.54916 9.8972C2.59995 9.07229 2 7.85621 2 6.5C2 4.01472 4.01472 2 6.5 2C8.12553 2 9.54976 2.86189 10.3406 4.15362C10.8774 4.05251 11.4326 4 12 4C12.5674 4 13.1226 4.05251 13.6609 4.15294C14.4502 2.86189 15.8745 2 17.5 2ZM10 13H8C8 15.2091 9.79086 17 12 17C14.2091 17 16 15.2091 16 13H14C14 14.1046 13.1046 15 12 15C10.8954 15 10 14.1046 10 13Z"
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
      d="M17.5 2C19.9853 2 22 4.01472 22 6.5C22 7.85621 21.4001 9.07229 20.4511 9.89732C20.8061 10.8644 21 11.9096 21 13C21 17.9706 16.9706 22 12 22C7.02944 22 3 17.9706 3 13C3 11.9096 3.19392 10.8644 3.54916 9.8972C2.59995 9.07229 2 7.85621 2 6.5C2 4.01472 4.01472 2 6.5 2C8.12553 2 9.54976 2.86189 10.3406 4.15362C10.8774 4.05251 11.4326 4 12 4C12.5674 4 13.1226 4.05251 13.6609 4.15294C14.4502 2.86189 15.8745 2 17.5 2ZM10 13H8C8 15.2091 9.79086 17 12 17C14.2091 17 16 15.2091 16 13H14C14 14.1046 13.1046 15 12 15C10.8954 15 10 14.1046 10 13Z"
    />
  </svg>
{/if}

<!--
@component
[Go to docs](https://svelte-remix.codewithshin.com/)
## Props
@props: 
-->
