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
    ariaLabel =  "coupon 5 line Finance" , 
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
      <path d="M21.0049 13.9998V20.9998C21.0049 21.5521 20.5572 21.9998 20.0049 21.9998H4.00488C3.4526 21.9998 3.00488 21.5521 3.00488 20.9998V13.9998C4.10945 13.9998 5.00488 13.1044 5.00488 11.9998C5.00488 10.8952 4.10945 9.99979 3.00488 9.99979V2.99979C3.00488 2.4475 3.4526 1.99979 4.00488 1.99979H20.0049C20.5572 1.99979 21.0049 2.4475 21.0049 2.99979V9.99979C19.9003 9.99979 19.0049 10.8952 19.0049 11.9998C19.0049 13.1044 19.9003 13.9998 21.0049 13.9998ZM19.0049 15.4647C17.8093 14.773 17.0049 13.4804 17.0049 11.9998C17.0049 10.5192 17.8093 9.22653 19.0049 8.53491V3.99979H5.00488V8.53491C6.20049 9.22653 7.00488 10.5192 7.00488 11.9998C7.00488 13.4804 6.20049 14.773 5.00488 15.4647V19.9998H19.0049V15.4647ZM9.00488 5.99979H15.0049V7.99979H9.00488V5.99979ZM9.00488 15.9998H15.0049V17.9998H9.00488V15.9998Z"/>
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
      <path d="M21.0049 13.9998V20.9998C21.0049 21.5521 20.5572 21.9998 20.0049 21.9998H4.00488C3.4526 21.9998 3.00488 21.5521 3.00488 20.9998V13.9998C4.10945 13.9998 5.00488 13.1044 5.00488 11.9998C5.00488 10.8952 4.10945 9.99979 3.00488 9.99979V2.99979C3.00488 2.4475 3.4526 1.99979 4.00488 1.99979H20.0049C20.5572 1.99979 21.0049 2.4475 21.0049 2.99979V9.99979C19.9003 9.99979 19.0049 10.8952 19.0049 11.9998C19.0049 13.1044 19.9003 13.9998 21.0049 13.9998ZM19.0049 15.4647C17.8093 14.773 17.0049 13.4804 17.0049 11.9998C17.0049 10.5192 17.8093 9.22653 19.0049 8.53491V3.99979H5.00488V8.53491C6.20049 9.22653 7.00488 10.5192 7.00488 11.9998C7.00488 13.4804 6.20049 14.773 5.00488 15.4647V19.9998H19.0049V15.4647ZM9.00488 5.99979H15.0049V7.99979H9.00488V5.99979ZM9.00488 15.9998H15.0049V17.9998H9.00488V15.9998Z"/>
  </svg>
{/if}
