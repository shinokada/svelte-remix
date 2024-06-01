<script lang="ts">
  import { getContext } from 'svelte';
  type TitleType = {
    id?: string;
    title?: string;
  };
  type DescType = {
    id?: string;
    desc?: string;
  };
  interface BaseProps {
    size?: string;
    role?: string;
    color?: string;
    withEvents?: boolean;
    onclick?: (event: MouseEvent) => void;
    onkeydown?: (event: KeyboardEvent) => void;
    onkeyup?: (event: KeyboardEvent) => void;
    class?: string;
  }
  interface CtxType extends BaseProps {}
  const ctx: CtxType = getContext('iconCtx') ?? {};
  interface Props extends BaseProps {
    title?: TitleType;
    desc?: DescType;
    ariaLabel?: string;
  }

  let {
    size = ctx.size || '24',
    role = ctx.role || 'img',
    color = ctx.color || 'currentColor',
    withEvents = ctx.withEvents || false,
    title,
    desc,
    class: classname,
    ariaLabel = 'flood line Weather',
    onclick,
    onkeydown,
    onkeyup,
    ...restProps
  }: Props = $props();

  let ariaDescribedby = `${title?.id || ''} ${desc?.id || ''}`;
  const hasDescription = $derived(!!(title?.id || desc?.id));
</script>

{#if withEvents}
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
    {onclick}
    {onkeydown}
    {onkeyup}
  >
    {#if title?.id && title.title}
      <title id={title.id}>{title.title}</title>
    {/if}
    {#if desc?.id && desc.desc}
      <desc id={desc.id}>{desc.desc}</desc>
    {/if}
    <path
      d="M16.0001 17.4723C17.0616 18.4223 18.4634 19 20 19H22V21H20C18.5428 21 17.1766 20.6104 15.9998 19.9296C14.8242 20.6101 13.4576 21 12 21C10.5428 21 9.17657 20.6104 7.99984 19.9296C6.8242 20.6101 5.45763 21 4 21H2V19H4C5.53713 19 6.93925 18.422 8.00013 17.4723C9.06163 18.4223 10.4634 19 12 19C13.5371 19 14.9393 18.422 16.0001 17.4723ZM12.5734 1.53204L12.6727 1.6115L23 11H20V17C19.2988 17 18.6258 16.8797 18.0003 16.6587L18 9.15698L12 3.70198L6 9.15598L6.00125 16.6582C5.4648 16.8479 4.89325 16.9635 4.29898 16.9927L4 17V11H1L11.3273 1.6115C11.677 1.29365 12.1956 1.26716 12.5734 1.53204Z"
    />
  </svg>
{:else}
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
      <title id={title.id}>{title.title}</title>
    {/if}
    {#if desc?.id && desc.desc}
      <desc id={desc.id}>{desc.desc}</desc>
    {/if}
    <path
      d="M16.0001 17.4723C17.0616 18.4223 18.4634 19 20 19H22V21H20C18.5428 21 17.1766 20.6104 15.9998 19.9296C14.8242 20.6101 13.4576 21 12 21C10.5428 21 9.17657 20.6104 7.99984 19.9296C6.8242 20.6101 5.45763 21 4 21H2V19H4C5.53713 19 6.93925 18.422 8.00013 17.4723C9.06163 18.4223 10.4634 19 12 19C13.5371 19 14.9393 18.422 16.0001 17.4723ZM12.5734 1.53204L12.6727 1.6115L23 11H20V17C19.2988 17 18.6258 16.8797 18.0003 16.6587L18 9.15698L12 3.70198L6 9.15598L6.00125 16.6582C5.4648 16.8479 4.89325 16.9635 4.29898 16.9927L4 17V11H1L11.3273 1.6115C11.677 1.29365 12.1956 1.26716 12.5734 1.53204Z"
    />
  </svg>
{/if}

<!--
@component
[Go to docs](https://svelte-remix.codewithshin.com/)
## Props
@prop size = ctx.size || '24'
@prop role = ctx.role || 'img'
@prop color = ctx.color || 'currentColor'
@prop withEvents = ctx.withEvents || false
@prop title
@prop desc
@prop class: classname
@prop ariaLabel = 'flood line Weather'
@prop onclick
@prop onkeydown
@prop onkeyup
@prop ...restProps
-->
