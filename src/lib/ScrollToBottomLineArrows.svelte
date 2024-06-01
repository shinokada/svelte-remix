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
    ariaLabel = 'scroll to bottom line Arrows',
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
      d="M8.01266 4.56502C8.75361 4.16876 9.5587 4 11.1411 4H12.8589C14.4413 4 15.2464 4.16876 15.9873 4.56502C16.6166 4.90155 17.0985 5.38342 17.435 6.01266C17.8312 6.75361 18 7.5587 18 9.14111V14.8589C18 16.4413 17.8312 17.2464 17.435 17.9873C17.0985 18.6166 16.6166 19.0985 15.9873 19.435C15.2464 19.8312 14.4413 20 12.8589 20H11.1411C9.5587 20 8.75361 19.8312 8.01266 19.435C7.38342 19.0985 6.90155 18.6166 6.56502 17.9873C6.16876 17.2464 6 16.4413 6 14.8589V9.14111C6 7.5587 6.16876 6.75361 6.56502 6.01266C6.90155 5.38342 7.38342 4.90155 8.01266 4.56502ZM12.8589 2H11.1411C9.12721 2 8.04724 2.27848 7.06946 2.8014C6.09168 3.32432 5.32432 4.09168 4.8014 5.06946C4.27848 6.04724 4 7.12721 4 9.14111V14.8589C4 16.8728 4.27848 17.9528 4.8014 18.9305C5.32432 19.9083 6.09168 20.6757 7.06946 21.1986C8.04724 21.7215 9.12721 22 11.1411 22H12.8589C14.8728 22 15.9528 21.7215 16.9305 21.1986C17.9083 20.6757 18.6757 19.9083 19.1986 18.9305C19.7215 17.9528 20 16.8728 20 14.8589V9.14111C20 7.12721 19.7215 6.04724 19.1986 5.06946C18.6757 4.09168 17.9083 3.32432 16.9305 2.8014C15.9528 2.27848 14.8728 2 12.8589 2ZM13 6H11V11H13V6ZM7.75781 13.758L12.0005 18.0006L16.2431 13.758L14.8289 12.3438L12.0005 15.1722L9.17203 12.3438L7.75781 13.758Z"
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
      d="M8.01266 4.56502C8.75361 4.16876 9.5587 4 11.1411 4H12.8589C14.4413 4 15.2464 4.16876 15.9873 4.56502C16.6166 4.90155 17.0985 5.38342 17.435 6.01266C17.8312 6.75361 18 7.5587 18 9.14111V14.8589C18 16.4413 17.8312 17.2464 17.435 17.9873C17.0985 18.6166 16.6166 19.0985 15.9873 19.435C15.2464 19.8312 14.4413 20 12.8589 20H11.1411C9.5587 20 8.75361 19.8312 8.01266 19.435C7.38342 19.0985 6.90155 18.6166 6.56502 17.9873C6.16876 17.2464 6 16.4413 6 14.8589V9.14111C6 7.5587 6.16876 6.75361 6.56502 6.01266C6.90155 5.38342 7.38342 4.90155 8.01266 4.56502ZM12.8589 2H11.1411C9.12721 2 8.04724 2.27848 7.06946 2.8014C6.09168 3.32432 5.32432 4.09168 4.8014 5.06946C4.27848 6.04724 4 7.12721 4 9.14111V14.8589C4 16.8728 4.27848 17.9528 4.8014 18.9305C5.32432 19.9083 6.09168 20.6757 7.06946 21.1986C8.04724 21.7215 9.12721 22 11.1411 22H12.8589C14.8728 22 15.9528 21.7215 16.9305 21.1986C17.9083 20.6757 18.6757 19.9083 19.1986 18.9305C19.7215 17.9528 20 16.8728 20 14.8589V9.14111C20 7.12721 19.7215 6.04724 19.1986 5.06946C18.6757 4.09168 17.9083 3.32432 16.9305 2.8014C15.9528 2.27848 14.8728 2 12.8589 2ZM13 6H11V11H13V6ZM7.75781 13.758L12.0005 18.0006L16.2431 13.758L14.8289 12.3438L12.0005 15.1722L9.17203 12.3438L7.75781 13.758Z"
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
@prop ariaLabel = 'scroll to bottom line Arrows'
@prop onclick
@prop onkeydown
@prop onkeyup
@prop ...restProps
-->
