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
    ariaLabel =  "rocket 2 line Map" , 
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
      <path d="M15.5018 20.0048C14.8432 21.5841 13.5794 22.848 12 23.5066C10.4206 22.848 9.15679 21.5841 8.49816 20.0048H10.7575C11.0838 20.4934 11.5051 20.9171 12 21.248C12.4949 20.9171 12.9162 20.4934 13.2425 20.0048H15.5018ZM18 14.8095L20 17.0777V19.0048H4V17.0777L6 14.8095V9.00478C6 5.52153 8.50442 2.55822 12 1.45999C15.4956 2.55822 18 5.52153 18 9.00478V14.8095ZM17.2692 17.0048L16 15.5653V9.00478C16 6.68694 14.4292 4.57431 12 3.58384C9.57078 4.57431 8 6.68694 8 9.00478V15.5653L6.73076 17.0048H17.2692ZM12 11.0048C10.8954 11.0048 10 10.1093 10 9.00478C10 7.90021 10.8954 7.00478 12 7.00478C13.1046 7.00478 14 7.90021 14 9.00478C14 10.1093 13.1046 11.0048 12 11.0048Z"/>
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
      <path d="M15.5018 20.0048C14.8432 21.5841 13.5794 22.848 12 23.5066C10.4206 22.848 9.15679 21.5841 8.49816 20.0048H10.7575C11.0838 20.4934 11.5051 20.9171 12 21.248C12.4949 20.9171 12.9162 20.4934 13.2425 20.0048H15.5018ZM18 14.8095L20 17.0777V19.0048H4V17.0777L6 14.8095V9.00478C6 5.52153 8.50442 2.55822 12 1.45999C15.4956 2.55822 18 5.52153 18 9.00478V14.8095ZM17.2692 17.0048L16 15.5653V9.00478C16 6.68694 14.4292 4.57431 12 3.58384C9.57078 4.57431 8 6.68694 8 9.00478V15.5653L6.73076 17.0048H17.2692ZM12 11.0048C10.8954 11.0048 10 10.1093 10 9.00478C10 7.90021 10.8954 7.00478 12 7.00478C13.1046 7.00478 14 7.90021 14 9.00478C14 10.1093 13.1046 11.0048 12 11.0048Z"/>
  </svg>
{/if}
