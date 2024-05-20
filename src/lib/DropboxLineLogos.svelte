<script lang='ts'>
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
  interface Props extends BaseProps{
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
    ariaLabel =  "dropbox line Logos" , 
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
    onclick={onclick}
    onkeydown={onkeydown}
    onkeyup={onkeyup}
  >
    {#if title?.id && title.title}
      <title id="{title.id}">{title.title}</title>
    {/if}
    {#if desc?.id && desc.desc}
      <desc id="{desc.id}">{desc.desc}</desc>
    {/if}
      <path d="M8.65039 17.2607L12.0422 19.4216L15.434 17.2607L17.2942 18.4457L12.0422 21.7916L6.79021 18.4457L8.65039 17.2607ZM7.77356 8.98007L10.1669 7.42738L7.74124 5.85351L5.28562 7.36988L7.77356 8.98007ZM9.61315 10.1706L12.0045 11.7183L14.3953 10.1709L12.0042 8.61946L9.61315 10.1706ZM13.845 12.9095L16.2689 14.4782L18.7187 12.9761L16.2335 11.3636L13.845 12.9095ZM12.0042 6.2354L16.2413 3.48657L22.4656 7.3302L18.073 10.1731L22.4669 13.024L16.2401 16.8419L12.0045 14.1006L7.76898 16.8419L1.54004 13.0241L5.93528 10.1727L1.54332 7.3302L7.7677 3.48657L12.0042 6.2354ZM13.8415 7.42749L16.2349 8.9804L18.7233 7.36988L16.2677 5.85349L13.8415 7.42749ZM10.164 12.9095L7.77487 11.3632L5.2889 12.976L7.73997 14.4783L10.164 12.9095Z"/>
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
      <title id="{title.id}">{title.title}</title>
    {/if}
    {#if desc?.id && desc.desc}
      <desc id="{desc.id}">{desc.desc}</desc>
    {/if}
      <path d="M8.65039 17.2607L12.0422 19.4216L15.434 17.2607L17.2942 18.4457L12.0422 21.7916L6.79021 18.4457L8.65039 17.2607ZM7.77356 8.98007L10.1669 7.42738L7.74124 5.85351L5.28562 7.36988L7.77356 8.98007ZM9.61315 10.1706L12.0045 11.7183L14.3953 10.1709L12.0042 8.61946L9.61315 10.1706ZM13.845 12.9095L16.2689 14.4782L18.7187 12.9761L16.2335 11.3636L13.845 12.9095ZM12.0042 6.2354L16.2413 3.48657L22.4656 7.3302L18.073 10.1731L22.4669 13.024L16.2401 16.8419L12.0045 14.1006L7.76898 16.8419L1.54004 13.0241L5.93528 10.1727L1.54332 7.3302L7.7677 3.48657L12.0042 6.2354ZM13.8415 7.42749L16.2349 8.9804L18.7233 7.36988L16.2677 5.85349L13.8415 7.42749ZM10.164 12.9095L7.77487 11.3632L5.2889 12.976L7.73997 14.4783L10.164 12.9095Z"/>
  </svg>
{/if}
