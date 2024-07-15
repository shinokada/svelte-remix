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
    ariaLabel =  "rewind start mini line Media" ,
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
    <path d="M3 6C2.44772 6 2 6.44771 2 7V17C2 17.5523 2.44772 18 3 18C3.55228 18 4 17.5523 4 17V7C4 6.44772 3.55228 6 3 6ZM7.96831 11.9999L11.0002 9.85972V14.14L7.96831 11.9999ZM12.2119 17.4434C12.4375 17.6027 12.7494 17.5489 12.9087 17.3233C12.9682 17.2389 13.0002 17.1382 13.0002 17.0349V6.96484C13.0002 6.6887 12.7763 6.46484 12.5002 6.46484C12.3969 6.46484 12.2962 6.49681 12.2119 6.55636L5.07889 11.5914C4.85329 11.7506 4.7995 12.0626 4.95874 12.2882C4.99164 12.3348 5.03228 12.3755 5.07889 12.4084L12.2119 17.4434ZM16.9683 11.9999L20.0002 9.85972V14.14L16.9683 11.9999ZM13.9587 12.2882C13.9916 12.3348 14.0323 12.3755 14.0789 12.4084L21.2119 17.4434C21.4375 17.6027 21.7494 17.5489 21.9087 17.3233C21.9682 17.2389 22.0002 17.1382 22.0002 17.0349V6.96484C22.0002 6.6887 21.7763 6.46484 21.5002 6.46484C21.3969 6.46484 21.2962 6.49681 21.2119 6.55636L14.0789 11.5914C13.8533 11.7506 13.7995 12.0626 13.9587 12.2882Z"/>
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
@prop ariaLabel =  "rewind start mini line Media"
@prop ...restProps
-->
