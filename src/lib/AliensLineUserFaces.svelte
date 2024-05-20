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
    ariaLabel =  "aliens line User replace_ariaLabel Faces" , 
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
      <path d="M12 2C16.6944 2 20.5 5.80558 20.5 10.5C20.5 17 15 22.5 12 22.5C9 22.5 3.5 17 3.5 10.5C3.5 5.80558 7.30558 2 12 2ZM12 4C8.41015 4 5.5 6.91015 5.5 10.5C5.5 15.2938 9.665 20.5 12 20.5C14.335 20.5 18.5 15.2938 18.5 10.5C18.5 6.91015 15.5899 4 12 4ZM17.5 11C17.6603 11 17.8186 11.0084 17.9746 11.0247C17.9916 11.1812 18 11.3396 18 11.5C18 13.9853 15.9853 16 13.5 16C13.3396 16 13.1812 15.9916 13.0252 15.9752C13.0084 15.8186 13 15.6603 13 15.5C13 13.0147 15.0147 11 17.5 11ZM6.5 11C8.98528 11 11 13.0147 11 15.5C11 15.6603 10.9916 15.8186 10.9753 15.9746C10.8186 15.9916 10.6603 16 10.5 16C8.01472 16 6 13.9853 6 11.5C6 11.3396 6.00839 11.1812 6.02475 11.0252C6.18121 11.0084 6.33963 11 6.5 11Z"/>
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
      <path d="M12 2C16.6944 2 20.5 5.80558 20.5 10.5C20.5 17 15 22.5 12 22.5C9 22.5 3.5 17 3.5 10.5C3.5 5.80558 7.30558 2 12 2ZM12 4C8.41015 4 5.5 6.91015 5.5 10.5C5.5 15.2938 9.665 20.5 12 20.5C14.335 20.5 18.5 15.2938 18.5 10.5C18.5 6.91015 15.5899 4 12 4ZM17.5 11C17.6603 11 17.8186 11.0084 17.9746 11.0247C17.9916 11.1812 18 11.3396 18 11.5C18 13.9853 15.9853 16 13.5 16C13.3396 16 13.1812 15.9916 13.0252 15.9752C13.0084 15.8186 13 15.6603 13 15.5C13 13.0147 15.0147 11 17.5 11ZM6.5 11C8.98528 11 11 13.0147 11 15.5C11 15.6603 10.9916 15.8186 10.9753 15.9746C10.8186 15.9916 10.6603 16 10.5 16C8.01472 16 6 13.9853 6 11.5C6 11.3396 6.00839 11.1812 6.02475 11.0252C6.18121 11.0084 6.33963 11 6.5 11Z"/>
  </svg>
{/if}
