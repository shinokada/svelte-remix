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
    ariaLabel =  "travesti line User replace_ariaLabel Faces" ,
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
    <path d="M8.95126 8.53668C10.2131 7.57265 11.7898 7.00002 13.5004 7.00002C17.6425 7.00002 21.0004 10.3579 21.0004 14.5C21.0004 18.6422 17.6425 22 13.5004 22C9.35825 22 6.00038 18.6422 6.00038 14.5C6.00038 12.7895 6.57302 11.2127 7.53705 9.95089L4.66155 7.0754L2.18667 9.55027L0.772461 8.13606L7.13642 1.77209L8.55064 3.18631L6.07576 5.66118L8.95126 8.53668ZM13.5004 20C16.5379 20 19.0004 17.5376 19.0004 14.5C19.0004 11.4625 16.5379 9.00002 13.5004 9.00002C10.4628 9.00002 8.00038 11.4625 8.00038 14.5C8.00038 17.5376 10.4628 20 13.5004 20Z"/>
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
@prop ariaLabel =  "travesti line User replace_ariaLabel Faces"
@prop ...restProps
-->
