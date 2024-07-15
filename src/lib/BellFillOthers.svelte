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
    ariaLabel =  "bell fill Others" ,
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
    <path d="M13.4142 10.5859L13.8936 11.0719L14.3585 11.5567L14.8177 12.0492C18.2758 15.8132 20.2896 19.2668 19.4246 20.1318C19.0242 20.5322 18.069 20.3157 16.7851 19.6246C13.5839 21.6383 9.38982 21.441 6.38249 19.0327L9.36197 16.0538C10.0289 16.2315 10.7697 16.0587 11.2929 15.5356C12.0739 14.7546 12.0739 13.4882 11.2929 12.7072C10.5118 11.9261 9.24551 11.9261 8.46447 12.7072C7.98129 13.1904 7.79702 13.8592 7.91165 14.4841L7.94653 14.6392L4.968 17.6184C2.55913 14.611 2.36164 10.4164 4.37553 7.21435C3.68433 5.93106 3.46783 4.97589 3.86827 4.57545C4.84458 3.59914 9.11845 6.29009 13.4142 10.5859ZM19.7782 4.2219C20.5592 5.00294 20.5592 6.26927 19.7782 7.05032C19.7254 7.10309 19.6704 7.15229 19.6135 7.19793C21.2304 9.75414 21.4333 12.9498 20.2214 15.6677C19.0324 13.7136 17.1513 11.4945 14.8284 9.17164L14.2905 8.63984C12.1634 6.56151 10.1352 4.87572 8.3327 3.77928C11.0504 2.56691 14.2459 2.76965 16.804 4.38713C16.8478 4.32964 16.897 4.27466 16.9497 4.2219C17.7308 3.44085 18.9971 3.44085 19.7782 4.2219Z"/>
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
@prop ariaLabel =  "bell fill Others"
@prop ...restProps
-->
