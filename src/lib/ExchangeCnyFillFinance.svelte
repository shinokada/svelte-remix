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
    ariaLabel =  "exchange cny fill Finance" ,
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
    <path d="M5.37833 4.51335C7.14264 2.95113 9.46301 2.00275 12.0049 2.00275C17.5277 2.00275 22.0049 6.4799 22.0049 12.0027C22.0049 14.1277 21.3421 16.0978 20.212 17.7177L17.5049 12.0027H20.0049C20.0049 7.58447 16.4232 4.00275 12.0049 4.00275C9.76058 4.00275 7.73213 4.92691 6.27932 6.41544L5.37833 4.51335ZM18.6314 19.4921C16.8671 21.0544 14.5468 22.0027 12.0049 22.0027C6.48204 22.0027 2.00488 17.5256 2.00488 12.0027C2.00488 9.8778 2.66767 7.90766 3.79778 6.28776L6.50488 12.0027H4.00488C4.00488 16.421 7.5866 20.0027 12.0049 20.0027C14.2492 20.0027 16.2776 19.0786 17.7304 17.59L18.6314 19.4921ZM13.0049 13.5383H16.0049V15.5383H13.0049V17.5383H11.0049V15.5383H8.00488V13.5383H11.0049V12.5383H8.00488V10.5383H10.5907L8.46935 8.41696L9.88356 7.00275L12.0049 9.12407L14.1262 7.00275L15.5404 8.41696L13.4191 10.5383H16.0049V12.5383H13.0049V13.5383Z"/>
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
@prop ariaLabel =  "exchange cny fill Finance"
@prop ...restProps
-->
