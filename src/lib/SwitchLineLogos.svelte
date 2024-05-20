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
    ariaLabel =  "switch line Logos" , 
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
      <path d="M12.001 3V21H7.60098C5.06047 21 3.00098 18.9405 3.00098 16.4V7.6C3.00098 5.05949 5.06047 3 7.60098 3H12.001ZM10.001 5H7.60098C6.16504 5 5.00098 6.16406 5.00098 7.6V16.4C5.00098 17.8359 6.16504 19 7.60098 19H10.001V5ZM7.50098 10C6.67255 10 6.00098 9.32843 6.00098 8.5C6.00098 7.67157 6.67255 7 7.50098 7C8.3294 7 9.00098 7.67157 9.00098 8.5C9.00098 9.32843 8.3294 10 7.50098 10ZM14.001 3H16.401C18.9415 3 21.001 5.05949 21.001 7.6V16.4C21.001 18.9405 18.9415 21 16.401 21H14.001V3ZM17.001 14.7C17.9951 14.7 18.801 13.8941 18.801 12.9C18.801 11.9059 17.9951 11.1 17.001 11.1C16.0069 11.1 15.201 11.9059 15.201 12.9C15.201 13.8941 16.0069 14.7 17.001 14.7Z"/>
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
      <path d="M12.001 3V21H7.60098C5.06047 21 3.00098 18.9405 3.00098 16.4V7.6C3.00098 5.05949 5.06047 3 7.60098 3H12.001ZM10.001 5H7.60098C6.16504 5 5.00098 6.16406 5.00098 7.6V16.4C5.00098 17.8359 6.16504 19 7.60098 19H10.001V5ZM7.50098 10C6.67255 10 6.00098 9.32843 6.00098 8.5C6.00098 7.67157 6.67255 7 7.50098 7C8.3294 7 9.00098 7.67157 9.00098 8.5C9.00098 9.32843 8.3294 10 7.50098 10ZM14.001 3H16.401C18.9415 3 21.001 5.05949 21.001 7.6V16.4C21.001 18.9405 18.9415 21 16.401 21H14.001V3ZM17.001 14.7C17.9951 14.7 18.801 13.8941 18.801 12.9C18.801 11.9059 17.9951 11.1 17.001 11.1C16.0069 11.1 15.201 11.9059 15.201 12.9C15.201 13.8941 16.0069 14.7 17.001 14.7Z"/>
  </svg>
{/if}
