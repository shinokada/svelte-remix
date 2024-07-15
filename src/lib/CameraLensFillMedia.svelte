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
    ariaLabel =  "camera lens fill Media" ,
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
    <path d="M9.82726 21.7633L14.3094 14L17.8413 20.1175C16.198 21.3021 14.1805 22 12 22C11.2538 22 10.5268 21.9183 9.82726 21.7633ZM7.88985 21.119C5.3115 19.955 3.31516 17.7297 2.4578 15H11.4226L7.88985 21.119ZM2.04938 13C2.01672 12.6711 2 12.3375 2 12C2 9.39284 2.99773 7.0187 4.6322 5.23859L9.11325 13H2.04938ZM6.15866 3.88251C7.80198 2.6979 9.81949 2 12 2C12.7462 2 13.4732 2.08172 14.1727 2.2367L9.6906 10L6.15866 3.88251ZM16.1101 2.88101C18.6885 4.04495 20.6848 6.27028 21.5422 9H12.5774L16.1101 2.88101ZM21.9506 11C21.9833 11.3289 22 11.6625 22 12C22 14.6072 21.0023 16.9813 19.3678 18.7614L14.8868 11H21.9506Z"/>
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
@prop ariaLabel =  "camera lens fill Media"
@prop ...restProps
-->
