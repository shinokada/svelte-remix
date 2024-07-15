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
    ariaLabel =  "base station fill Device" ,
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
    <path d="M12 13L18 22H6L12 13ZM10.9393 10.5606C10.3536 9.97486 10.3536 9.02511 10.9393 8.43933C11.5251 7.85354 12.4749 7.85354 13.0607 8.43933C13.6464 9.02511 13.6464 9.97486 13.0607 10.5606C12.4749 11.1464 11.5251 11.1464 10.9393 10.5606ZM5.28249 2.78247L6.6967 4.19668C3.76777 7.12562 3.76777 11.8744 6.6967 14.8033L5.28249 16.2175C1.5725 12.5075 1.5725 6.49245 5.28249 2.78247ZM18.7175 2.78247C22.4275 6.49245 22.4275 12.5075 18.7175 16.2175L17.3033 14.8033C20.2322 11.8744 20.2322 7.12562 17.3033 4.19668L18.7175 2.78247ZM8.11091 5.6109L9.52513 7.02511C8.15829 8.39195 8.15829 10.608 9.52513 11.9749L8.11091 13.3891C5.96303 11.2412 5.96303 7.75878 8.11091 5.6109H8.11091ZM15.8891 5.6109C18.037 7.75878 18.037 11.2412 15.8891 13.3891L14.4749 11.9749C15.8417 10.608 15.8417 8.39195 14.4749 7.02511L15.8891 5.6109Z"/>
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
@prop ariaLabel =  "base station fill Device"
@prop ...restProps
-->
