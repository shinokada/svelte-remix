<script lang='ts'>
  import { getContext } from 'svelte';
  import type { SVGAttributes } from 'svelte/elements';

  type TitleType = {
    id?: string | undefined | null;
    title?: string | undefined | null;
  };
  type DescType = {
    id?: string | undefined | null;
    desc?: string | undefined | null;
  };
  interface BaseProps extends SVGAttributes<SVGElement>{
    size?: string | undefined | null;
    role?: string | undefined | null;
    color?: string | undefined | null;
    class?: string | undefined | null;
  }
  interface CtxType extends BaseProps {}
  const ctx: CtxType = getContext('iconCtx') ?? {};
  interface Props extends BaseProps{
    title?: TitleType;
    desc?: DescType;
    ariaLabel?: string | undefined | null;
  }

  let { 
    size = ctx.size || '24', 
    role = ctx.role || 'img', 
    color = ctx.color || 'currentColor', 
    title, 
    desc, 
    class: classname, 
    ariaLabel =  "record mail line Business" ,
    ...restProps 
  }: Props = $props();

  let ariaDescribedby = `${title?.id || ''} ${desc?.id || ''}`;
  const hasDescription = $derived(!!(title?.id || desc?.id));
</script>

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
    <path d="M14.2572 15C13.4718 14.0491 13 12.8296 13 11.5C13 8.46243 15.4624 6 18.5 6C21.5376 6 24 8.46243 24 11.5C24 14.5376 21.5376 17 18.5 17H5.5C2.46243 17 0 14.5376 0 11.5C0 8.46243 2.46243 6 5.5 6C8.53757 6 11 8.46243 11 11.5C11 12.8296 10.5282 14.0491 9.74284 15H14.2572ZM5.5 15C7.433 15 9 13.433 9 11.5C9 9.567 7.433 8 5.5 8C3.567 8 2 9.567 2 11.5C2 13.433 3.567 15 5.5 15ZM18.5 15C20.433 15 22 13.433 22 11.5C22 9.567 20.433 8 18.5 8C16.567 8 15 9.567 15 11.5C15 13.433 16.567 15 18.5 15Z"/>
</svg>

<!--
@component
[Go to docs](https://svelte-remix.codewithshin.com/)
## Props
@prop size = ctx.size || '24'
@prop role = ctx.role || 'img'
@prop color = ctx.color || 'currentColor'
@prop title
@prop desc
@prop class: classname
@prop ariaLabel =  "record mail line Business"
@prop ...restProps
-->
