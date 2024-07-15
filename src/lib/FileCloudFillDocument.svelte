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
    ariaLabel =  "file cloud fill Document" ,
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
    <path d="M14.9968 2L21 8L21.0012 12.2606C20.0501 11.4722 18.8302 11 17.5 11L17.2788 11.0044C14.784 11.103 12.7164 12.8635 12.1523 15.2093L12.136 15.283L12.1068 15.3024C10.8223 16.1634 10 17.6255 10 19.25C10 20.273 10.3242 21.2231 10.8771 22.0006L3.9934 22C3.48412 22 3.06409 21.6171 3.00669 21.1239L3 21.0082V2.9918C3 2.49363 3.38689 2.06546 3.88533 2.00683L4.00221 2H14.9968ZM17.5 13C19.433 13 21 14.567 21 16.5L20.9985 16.6033C22.1531 16.9285 23 17.9903 23 19.25C23 20.7125 21.8583 21.9084 20.4175 21.995L20.25 22H14.75L14.5825 21.995C13.1417 21.9084 12 20.7125 12 19.25C12 17.99 12.8474 16.9279 14.0034 16.6025L14 16.5C14 14.567 15.567 13 17.5 13Z"/>
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
@prop ariaLabel =  "file cloud fill Document"
@prop ...restProps
-->
