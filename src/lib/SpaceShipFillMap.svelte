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
    ariaLabel =  "space ship fill Map" ,
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
    <path d="M2.87988 18.049C4.23015 12.0557 7.07526 6.6285 11.003 2.17958C11.1105 2.05778 11.2465 1.90742 11.411 1.72851L11.411 1.72849C11.7101 1.40325 12.2162 1.38203 12.5414 1.68109C12.5579 1.69623 12.5737 1.71205 12.5888 1.72851C12.7553 1.90958 12.8929 2.06164 13.0015 2.1847C16.9268 6.63267 19.7703 12.058 21.12 18.049C18.9786 18.5004 16.7797 18.796 14.5359 18.9235L12.4472 23.101C12.3237 23.348 12.0233 23.4481 11.7763 23.3246C11.6796 23.2762 11.6011 23.1977 11.5527 23.101L9.46401 18.9235C7.22018 18.796 5.02133 18.5004 2.87988 18.049ZM11.9999 14.9954C13.6568 14.9954 14.9999 13.6523 14.9999 11.9954C14.9999 10.3386 13.6568 8.99541 11.9999 8.99541C10.3431 8.99541 8.99994 10.3386 8.99994 11.9954C8.99994 13.6523 10.3431 14.9954 11.9999 14.9954Z"/>
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
@prop ariaLabel =  "space ship fill Map"
@prop ...restProps
-->
