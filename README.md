<h1 align="center">Svelte Remix</h1>

<p align="center">
<a href="https://svelte-remix.codewithshin.com/">Svelte-Remix</a>
</p>

<p align="center">
<a href="https://github.com/sponsors/shinokada" target="_blank"><img src="https://img.shields.io/static/v1?label=Sponsor&message=%E2%9D%A4&logo=GitHub&color=%23fe8e86" height="25"></a>
<a href="https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps" target="_blank"><img src="https://img.shields.io/badge/PWA-enabled-brightgreen" alt="PWA Shield" height="25">
</a>
<a href="https://www.npmjs.com/package/svelte-remix" rel="nofollow" target="_blank"><img src="https://img.shields.io/npm/v/svelte-remix" alt="npm" height="25"></a>
<a href="https://twitter.com/shinokada" rel="nofollow" target="_blank"><img src="https://img.shields.io/badge/created%20by-@shinokada-4BBAAB.svg" alt="Created by Shin Okada" height="25"></a>
<a href="https://opensource.org/licenses/MIT" rel="nofollow" target="_blank"><img src="https://img.shields.io/github/license/shinokada/svelte-remix" alt="License" height="25"></a>
<a href="https://www.npmjs.com/package/svelte-remix" rel="nofollow" target="_blank"><img src="https://img.shields.io/npm/dw/svelte-remix.svg" alt="npm" height="25"></a>
</p>

2270+ SVG [RemixIcon](https://github.com/Remix-Design/RemixIcon) components for Svelte. Svelte-Remix support major CSS frameworks using the `class` props.

<p align="center">
<img src="/static/images/remix-650-1050-optimized.png" width="650" />
</p>

## Installation

```sh
npm i -D svelte-remix
```

## Icon images

[Icon images](/icon-images.md)

## Icon name list

[Icon list](/icon-list.md)

## REPL

[Demo](https://svelte.dev/repl/60e7000b54004872aa4006535fcef7fd)

## Usages

In a svelte file:

```html
<script>
  import {
    BankFillBUILDINGS,
    MailDownloadFillBUSINESS,
    InboxUnarchiveLineBUSINESS
  } from 'svelte-remix';
</script>

<BankFillBUILDINGS />
<MailDownloadFillBUSINESS />
<InboxUnarchiveLineBUSINESS />
```

## Size

Use the `size` prop to change the size of icons.

```html
<BankFillBUILDINGS size="40" />
<MailDownloadFillBUSINESS size="40" />
<InboxUnarchiveLineBUSINESS size="40" />
```

## CSS HEX Colors

Use the `color` prop to change colors with HEX color code.

```html
<BankFillBUILDINGS color="#c61515" />
<MailDownloadFillBUSINESS color="#3759e5" />
<InboxUnarchiveLineBUSINESS color="#3fe537" />
```

## CSS framworks suport

Use the `class` prop to change size, colors and add additional css.

Tailwind CSS example:

```html
<BankFillBUILDINGS class="h-24 w-24 text-blue-700 mr-4" />
```

Bootstrap examples:

```html
<BankFillBUILDINGS class="position-absolute top-0 px-1" />
```

## Dark mode

If you are using the dark mode on your website with Tailwind CSS, add your dark mode class to the `class` prop.

Let's use `dark` for the dark mode class as an example.

```html
<BankFillBUILDINGS class="text-blue-700 dark:text-red-500" />
```

## aria-label

All icons have aria-label. For example `BankFillBUILDINGS` has `aria-label="bank fill buildings"`.
Use `ariaLabel` prop to modify the `aria-label` value.

```html
<BankFillBUILDINGS ariaLabel="bank buildings svg icon" />
```

## Unfocusable icon

If you want to make an icon unfocusable, add `tabindex="-1"`.

```html
<BankFillBUILDINGS tabindex="-1" />
```

## Passing down other attributes

You can pass other attibutes as well.

```html
<BankFillBUILDINGS tabindex="0" />
```

## Using svelte:component

```html
<script>
  import { BankFillBUILDINGS } from 'svelte-remix';
</script>

<svelte:component this="{BankFillBUILDINGS}" />
```

## Using onMount

```html
<script>
  import { BankFillBUILDINGS } from 'svelte-remix';
  import { onMount } from 'svelte';
  const props = {
    size: '50',
    color: '#ff0000'
  };
  onMount(() => {
    const icon = new BankFillBUILDINGS({ target: document.body, props });
  });
</script>
```

## Import all

Use `import * as Icon from 'svelte-remix`.

```html
<script>
  import * as Icon from 'svelte-remix';
</script>

<Icon.BankFillBUILDINGS />
<Icon.MailDownloadFillBUSINESS />

<h1>Size</h1>
<Icon.BankFillBUILDINGS size="30" />
<Icon.MailDownloadFillBUSINESS size="40" />

<h1>CSS HEX color</h1>
<Icon.BankFillBUILDINGS color="#c61515" size="40" />

<h1>Tailwind CSS</h1>
<Icon.BankFillBUILDINGS class="text-blue-500" />
<Icon.MailDownloadFillBUSINESS class="text-pink-700" />
```

## Other icons

- [Svelte-Icon-Sets](https://svelte-svg-icons.vercel.app/)

## Experience lightning-fast browsing and offline access with Our PWA

This website can be downloaded and installed on your device for offline access as a Progressive Web App.

To install a PWA, look for the "Add to Home Screen" option in the browser's menu or settings. On most mobile devices, this option can be found by visiting the website, then selecting the "Options" or "Menu" button in the browser, and looking for the "Add to Home Screen" option. On some desktop browsers, right-click on the page and select "Install".
