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
    ariaLabel =  "chat settings line Communication" , 
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
      <path d="M22 12H20V5H4V18.3851L5.76282 17H12V19H6.45455L2 22.5V4C2 3.44772 2.44772 3 3 3H21C21.5523 3 22 3.44772 22 4V12ZM14.145 19.071C14.0505 18.7301 14 18.371 14 18C14 17.629 14.0505 17.2699 14.145 16.929L13.1699 16.366L14.1699 14.634L15.1459 15.1975C15.6475 14.6867 16.2851 14.31 17 14.126V13H19V14.126C19.7149 14.31 20.3525 14.6867 20.8541 15.1975L21.8301 14.634L22.8301 16.366L21.855 16.929C21.9495 17.2699 22 17.629 22 18C22 18.371 21.9495 18.7301 21.855 19.071L22.8301 19.634L21.8301 21.366L20.8541 20.8025C20.3525 21.3133 19.7149 21.69 19 21.874V23H17V21.874C16.2851 21.69 15.6475 21.3133 15.1459 20.8025L14.1699 21.366L13.1699 19.634L14.145 19.071ZM18 20C19.1046 20 20 19.1046 20 18C20 16.8954 19.1046 16 18 16C16.8954 16 16 16.8954 16 18C16 19.1046 16.8954 20 18 20Z"/>
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
      <path d="M22 12H20V5H4V18.3851L5.76282 17H12V19H6.45455L2 22.5V4C2 3.44772 2.44772 3 3 3H21C21.5523 3 22 3.44772 22 4V12ZM14.145 19.071C14.0505 18.7301 14 18.371 14 18C14 17.629 14.0505 17.2699 14.145 16.929L13.1699 16.366L14.1699 14.634L15.1459 15.1975C15.6475 14.6867 16.2851 14.31 17 14.126V13H19V14.126C19.7149 14.31 20.3525 14.6867 20.8541 15.1975L21.8301 14.634L22.8301 16.366L21.855 16.929C21.9495 17.2699 22 17.629 22 18C22 18.371 21.9495 18.7301 21.855 19.071L22.8301 19.634L21.8301 21.366L20.8541 20.8025C20.3525 21.3133 19.7149 21.69 19 21.874V23H17V21.874C16.2851 21.69 15.6475 21.3133 15.1459 20.8025L14.1699 21.366L13.1699 19.634L14.145 19.071ZM18 20C19.1046 20 20 19.1046 20 18C20 16.8954 19.1046 16 18 16C16.8954 16 16 16.8954 16 18C16 19.1046 16.8954 20 18 20Z"/>
  </svg>
{/if}
