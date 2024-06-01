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
    ariaLabel = 'wechat pay fill Logos',
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
      d="M9.27099 14.6689C8.9532 14.8312 8.56403 14.7122 8.39132 14.4L8.3477 14.3054L6.53019 10.3069C6.52269 10.2588 6.52269 10.2097 6.53019 10.1615C6.53017 10.0735 6.56564 9.98916 6.62857 9.9276C6.6915 9.86603 6.7766 9.83243 6.86462 9.83438C6.93567 9.83269 7.00508 9.85582 7.06091 9.89981L9.24191 11.4265C9.40329 11.5346 9.59293 11.5928 9.78716 11.5937C9.90424 11.5945 10.0203 11.5723 10.1289 11.5283L20.176 7.02816C18.091 4.72544 15.1103 3.43931 12.0045 3.5022C6.4793 3.5022 2.00098 7.23172 2.00098 11.87C2.06681 14.4052 3.35646 16.7515 5.4615 18.1658C5.6878 18.3326 5.78402 18.6241 5.70141 18.8928L5.25067 20.594C5.22336 20.6714 5.20625 20.7521 5.19978 20.8339C5.19777 20.9232 5.23236 21.0094 5.29552 21.0726C5.35868 21.1358 5.44491 21.1703 5.5342 21.1684C5.60098 21.1645 5.66583 21.1445 5.72322 21.1102L7.90423 19.8452C8.06383 19.7467 8.2474 19.6939 8.43494 19.6925C8.53352 19.6923 8.63157 19.707 8.72574 19.7361C9.78781 20.0363 10.8863 20.188 11.99 20.1869C17.5152 20.1869 22.001 16.4574 22.001 11.8554C22.0108 10.4834 21.6301 9.13687 20.903 7.97326L9.35096 14.6253L9.27099 14.6689Z"
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
      d="M9.27099 14.6689C8.9532 14.8312 8.56403 14.7122 8.39132 14.4L8.3477 14.3054L6.53019 10.3069C6.52269 10.2588 6.52269 10.2097 6.53019 10.1615C6.53017 10.0735 6.56564 9.98916 6.62857 9.9276C6.6915 9.86603 6.7766 9.83243 6.86462 9.83438C6.93567 9.83269 7.00508 9.85582 7.06091 9.89981L9.24191 11.4265C9.40329 11.5346 9.59293 11.5928 9.78716 11.5937C9.90424 11.5945 10.0203 11.5723 10.1289 11.5283L20.176 7.02816C18.091 4.72544 15.1103 3.43931 12.0045 3.5022C6.4793 3.5022 2.00098 7.23172 2.00098 11.87C2.06681 14.4052 3.35646 16.7515 5.4615 18.1658C5.6878 18.3326 5.78402 18.6241 5.70141 18.8928L5.25067 20.594C5.22336 20.6714 5.20625 20.7521 5.19978 20.8339C5.19777 20.9232 5.23236 21.0094 5.29552 21.0726C5.35868 21.1358 5.44491 21.1703 5.5342 21.1684C5.60098 21.1645 5.66583 21.1445 5.72322 21.1102L7.90423 19.8452C8.06383 19.7467 8.2474 19.6939 8.43494 19.6925C8.53352 19.6923 8.63157 19.707 8.72574 19.7361C9.78781 20.0363 10.8863 20.188 11.99 20.1869C17.5152 20.1869 22.001 16.4574 22.001 11.8554C22.0108 10.4834 21.6301 9.13687 20.903 7.97326L9.35096 14.6253L9.27099 14.6689Z"
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
@prop ariaLabel = 'wechat pay fill Logos'
@prop onclick
@prop onkeydown
@prop onkeyup
@prop ...restProps
-->
