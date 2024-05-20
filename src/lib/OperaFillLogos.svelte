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
    ariaLabel =  "opera fill Logos" , 
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
      <path d="M8.71014 6.365C7.60348 7.67 6.88848 9.60083 6.83848 11.765V12.235C6.88931 14.4 7.60348 16.3283 8.71014 17.6342C10.1443 19.4975 12.276 20.6792 14.6593 20.6792C16.1226 20.6792 17.4926 20.2317 18.6651 19.4533C16.9001 21.0383 14.5626 22 12.001 22C11.841 22 11.6818 21.9967 11.526 21.9883C6.22098 21.7408 2.00098 17.3633 2.00098 12C2.00098 6.47583 6.47848 2 12.001 2H12.0385C14.5843 2.01 16.9051 2.97167 18.666 4.54583C17.4926 3.77083 16.1235 3.32 14.6576 3.32C12.276 3.32 10.1435 4.50333 8.70764 6.365H8.71014ZM22.001 12C22.001 14.9633 20.7135 17.6233 18.666 19.4542C16.101 20.7042 13.711 19.83 12.9193 19.2833C15.4385 18.73 17.3418 15.6833 17.3418 12C17.3418 8.315 15.4393 5.27083 12.9193 4.71667C13.7101 4.17167 16.101 3.2975 18.666 4.54583C20.7135 6.375 22.001 9.0375 22.001 12Z"/>
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
      <path d="M8.71014 6.365C7.60348 7.67 6.88848 9.60083 6.83848 11.765V12.235C6.88931 14.4 7.60348 16.3283 8.71014 17.6342C10.1443 19.4975 12.276 20.6792 14.6593 20.6792C16.1226 20.6792 17.4926 20.2317 18.6651 19.4533C16.9001 21.0383 14.5626 22 12.001 22C11.841 22 11.6818 21.9967 11.526 21.9883C6.22098 21.7408 2.00098 17.3633 2.00098 12C2.00098 6.47583 6.47848 2 12.001 2H12.0385C14.5843 2.01 16.9051 2.97167 18.666 4.54583C17.4926 3.77083 16.1235 3.32 14.6576 3.32C12.276 3.32 10.1435 4.50333 8.70764 6.365H8.71014ZM22.001 12C22.001 14.9633 20.7135 17.6233 18.666 19.4542C16.101 20.7042 13.711 19.83 12.9193 19.2833C15.4385 18.73 17.3418 15.6833 17.3418 12C17.3418 8.315 15.4393 5.27083 12.9193 4.71667C13.7101 4.17167 16.101 3.2975 18.666 4.54583C20.7135 6.375 22.001 9.0375 22.001 12Z"/>
  </svg>
{/if}
