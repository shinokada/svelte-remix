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
    ariaLabel =  "zcool fill Logos" ,
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
    <path d="M9.90338 21.8387C5.539 21.8387 2.00098 18.3003 2.00098 13.9355C2.00098 10.2901 4.46846 7.05968 7.82477 6.30851C11.746 5.4309 13.5286 4.74194 14.9016 2C15.9002 3.93518 15.2254 5.70968 14.9029 6.67742C19.5998 5.54839 21.2732 3.39627 21.6763 3.12903C21.6763 7.08065 20.4448 9.58065 19.2572 11.1935C20.733 11.1382 21.2656 10.7097 22.001 10.6071C21.6763 12.0553 20.5 14.0968 17.67 15.4017C16.9827 19.066 13.7668 21.8387 9.90338 21.8387ZM13.6127 15.3871C13.6127 15.7097 13.5595 15.871 13.2095 15.871L10.0592 15.873L13.0203 12.6251C13.8799 11.7653 13.8799 11.3354 13.8799 10.2369C13.8799 9.90252 13.8322 9.52041 13.9277 9.18607C13.9754 9.04278 13.8799 8.99501 13.7367 9.04278C13.4023 9.1383 12.8292 9.1383 11.8741 9.1383H7.57579C7.33699 9.1383 7.24148 8.99501 7.33699 8.80396C7.33699 8.75619 7.33699 8.6129 7.24147 8.6129C6.62061 8.89949 6.47734 10.1891 6.52509 11.0011C6.52509 11.431 6.76389 11.6698 7.0982 11.6698H10.4891L7.00268 15.3953C6.76389 15.6819 6.52509 16.064 6.52509 16.5894V17.6402C6.52509 18.1179 6.81165 18.4045 7.33699 18.5H13.3248C13.8799 18.5 14.2578 18.2665 14.2578 17.6452V16.5161C14.2578 16.3076 14.2578 15.5484 13.6127 15.3871Z"/>
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
@prop ariaLabel =  "zcool fill Logos"
@prop ...restProps
-->
