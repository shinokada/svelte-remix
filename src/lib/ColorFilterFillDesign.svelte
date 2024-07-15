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
    ariaLabel =  "color filter fill Design" ,
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
    <path d="M16.5717 8.02749C16.8469 7.4078 16.9998 6.72176 16.9998 6C16.9998 3.23858 14.7612 1 11.9998 1C9.23839 1 6.99981 3.23858 6.99981 6C6.99981 8.58261 8.95785 10.7079 11.4704 10.9723C12.6858 9.24029 14.576 8.20785 16.5717 8.02749ZM13.1542 17.9462C13.996 16.1276 14.047 13.9741 13.1547 12.0554C14.6399 10.0118 17.4591 9.37883 19.6956 10.6701L19.6957 10.67C22.0871 12.0508 22.9064 15.1086 21.5257 17.5C20.145 19.8915 17.087 20.7109 14.6956 19.3302C14.0707 18.9694 13.5532 18.4942 13.1542 17.9462ZM6.27311 10.0269C7.42726 11.6652 9.26672 12.786 11.3746 12.9726C12.4016 15.2807 11.5401 18.0388 9.30357 19.3301C6.91211 20.7108 3.85415 19.8914 2.47344 17.5C1.09273 15.1085 1.91211 12.0505 4.30357 10.6698C4.92851 10.309 5.59897 10.0984 6.27311 10.0269Z"/>
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
@prop ariaLabel =  "color filter fill Design"
@prop ...restProps
-->
