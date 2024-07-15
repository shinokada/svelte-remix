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
    ariaLabel =  "goggles fill Others" ,
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
    <path d="M4.95151 6.94243C7.08082 6.11818 9.75096 6 12 6C14.249 6 16.9192 6.11818 19.0485 6.94243C20.1296 7.36094 21.1294 7.98254 21.8583 8.91561C22.5975 9.86175 23 11.0541 23 12.5C23 13.9701 22.4751 15.4334 21.6205 16.5424C20.7689 17.6475 19.5033 18.5 18 18.5C16.5751 18.5 15.3437 17.7094 14.4251 17.1196C13.7195 16.6666 12.8833 16 12 16C11.1167 16 10.2804 16.6666 9.5749 17.1196C8.65627 17.7094 7.42486 18.5 6 18.5C4.49667 18.5 3.23108 17.6475 2.37947 16.5424C1.52489 15.4334 1 13.9701 1 12.5C1 11.0541 1.40249 9.86175 2.14166 8.91561C2.87062 7.98254 3.87036 7.36094 4.95151 6.94243Z"/>
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
@prop ariaLabel =  "goggles fill Others"
@prop ...restProps
-->
