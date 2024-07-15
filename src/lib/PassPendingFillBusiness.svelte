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
    ariaLabel =  "pass pending fill Business" ,
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
    <path d="M2 4C1.44772 4 1 4.44772 1 5V19C1 19.5523 1.44772 20 2 20H22C22.5523 20 23 19.5523 23 19V5C23 4.44772 22.5523 4 22 4H2ZM9.00008 10C9.00008 9.44772 8.55236 9 8.00008 9C7.44779 9 7.00008 9.44772 7.00008 10C7.00008 10.5523 7.44779 11 8.00008 11C8.55236 11 9.00008 10.5523 9.00008 10ZM11.0001 10C11.0001 11.6569 9.65693 13 8.00008 13C6.34322 13 5.00008 11.6569 5.00008 10C5.00008 8.34315 6.34322 7 8.00008 7C9.65693 7 11.0001 8.34315 11.0001 10ZM5.52725 17.0251L4.11304 15.6109C5.10725 14.6167 6.48362 14 8.00212 14C9.52063 14 10.897 14.6167 11.8912 15.6109L10.477 17.0251C9.84253 16.3907 8.9689 16 8.00212 16C7.03535 16 6.16172 16.3907 5.52725 17.0251ZM13 15V9H15V15H13ZM17 15V9H19V15H17Z"/>
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
@prop ariaLabel =  "pass pending fill Business"
@prop ...restProps
-->
