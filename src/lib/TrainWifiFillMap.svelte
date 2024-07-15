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
    ariaLabel =  "train wifi fill Map" ,
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
    <path d="M12.4981 3C12.1772 3.76965 12 4.61413 12 5.5C12 6.01621 12.0602 6.51837 12.1739 6.99984L5 7V11L15.035 11.0004C16.038 11.6336 17.2262 12 18.5 12C19.3861 12 20.2308 11.8227 21.0006 11.5016L21 18C21 19.1046 20.1046 20 19 20H17.2L19 21.5V22H5V21.5L6.8 20H5C3.89543 20 3 19.1046 3 18V7C3 4.79086 4.79086 3 7 3H12.4981ZM12 14C10.8954 14 10 14.8954 10 16C10 17.1046 10.8954 18 12 18C13.1046 18 14 17.1046 14 16C14 14.8954 13.1046 14 12 14ZM18.5 1C20.9853 1 23 3.01472 23 5.5C23 7.98528 20.9853 10 18.5 10C16.0147 10 14 7.98528 14 5.5C14 3.01472 16.0147 1 18.5 1ZM18.4998 6.16667C18.0089 6.16667 17.5593 6.34354 17.2113 6.63704L17.0856 6.75245L18.4998 8.16667L19.9131 6.7515C19.5512 6.39013 19.0516 6.16667 18.4998 6.16667ZM18.4998 3.5C17.2966 3.5 16.1998 3.95536 15.3722 4.70316L15.199 4.86781L16.1428 5.80964C16.746 5.20643 17.5794 4.83333 18.4998 4.83333C19.3436 4.83333 20.1141 5.14684 20.7013 5.66372L20.8569 5.80964L21.7997 4.86684C20.9552 4.02233 19.7885 3.5 18.4998 3.5Z"/>
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
@prop ariaLabel =  "train wifi fill Map"
@prop ...restProps
-->
