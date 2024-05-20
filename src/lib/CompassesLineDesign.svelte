<script lang='ts'>
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
  interface Props extends BaseProps{
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
    ariaLabel =  "compasses line Design" , 
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
    onclick={onclick}
    onkeydown={onkeydown}
    onkeyup={onkeyup}
  >
    {#if title?.id && title.title}
      <title id="{title.id}">{title.title}</title>
    {/if}
    {#if desc?.id && desc.desc}
      <desc id="{desc.id}">{desc.desc}</desc>
    {/if}
      <path d="M10.9998 4.12272V1.9967H12.9998V4.12272C14.725 4.56676 15.9998 6.13286 15.9998 7.9967C15.9998 9.11439 15.5414 10.125 14.8023 10.8508L20.8658 21.3531L19.1338 22.3531L13.0708 11.8517C12.7299 11.9462 12.3708 11.9967 11.9998 11.9967C11.6289 11.9967 11.2697 11.9462 10.9288 11.8517L4.86584 22.3531L3.13379 21.3531L9.1973 10.8508C8.45823 10.125 7.99981 9.11439 7.99981 7.9967C7.99981 6.13286 9.27459 4.56676 10.9998 4.12272ZM11.9998 9.9967C13.1044 9.9967 13.9998 9.10127 13.9998 7.9967C13.9998 6.89213 13.1044 5.9967 11.9998 5.9967C10.8952 5.9967 9.99981 6.89213 9.99981 7.9967C9.99981 9.10127 10.8952 9.9967 11.9998 9.9967Z"/>
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
      <title id="{title.id}">{title.title}</title>
    {/if}
    {#if desc?.id && desc.desc}
      <desc id="{desc.id}">{desc.desc}</desc>
    {/if}
      <path d="M10.9998 4.12272V1.9967H12.9998V4.12272C14.725 4.56676 15.9998 6.13286 15.9998 7.9967C15.9998 9.11439 15.5414 10.125 14.8023 10.8508L20.8658 21.3531L19.1338 22.3531L13.0708 11.8517C12.7299 11.9462 12.3708 11.9967 11.9998 11.9967C11.6289 11.9967 11.2697 11.9462 10.9288 11.8517L4.86584 22.3531L3.13379 21.3531L9.1973 10.8508C8.45823 10.125 7.99981 9.11439 7.99981 7.9967C7.99981 6.13286 9.27459 4.56676 10.9998 4.12272ZM11.9998 9.9967C13.1044 9.9967 13.9998 9.10127 13.9998 7.9967C13.9998 6.89213 13.1044 5.9967 11.9998 5.9967C10.8952 5.9967 9.99981 6.89213 9.99981 7.9967C9.99981 9.10127 10.8952 9.9967 11.9998 9.9967Z"/>
  </svg>
{/if}
