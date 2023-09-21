# Svelte Remix

<div class="flex gap-2 my-8">
<a href="https://github.com/sponsors/shinokada" target="_blank"><img src="https://img.shields.io/static/v1?label=Sponsor&message=%E2%9D%A4&logo=GitHub&color=%23fe8e86" alt="sponsor" height="25" style="height: 25px !important;"></a>
<a href="https://www.npmjs.com/package/svelte-remix" rel="nofollow" target="_blank"><img src="https://img.shields.io/npm/v/svelte-remix" alt="npm" height="25" style="height: 25px !important;"></a>
<a href="https://twitter.com/shinokada" rel="nofollow" target="_blank"><img src="https://img.shields.io/badge/created%20by-@shinokada-4BBAAB.svg" alt="Created by Shin Okada" height="25" style="height: 25px !important;"></a>
<a href="https://opensource.org/licenses/MIT" rel="nofollow" target="_blank"><img src="https://img.shields.io/github/license/shinokada/svelte-remix" alt="License" height="25" style="height: 25px !important;"></a>
<a href="https://www.npmjs.com/package/svelte-remix" rel="nofollow" target="_blank"><img src="https://img.shields.io/npm/dw/svelte-remix.svg" alt="npm" height="25" style="height: 25px !important;"></a>
</div>

2270+ SVG [RemixIcon](https://github.com/Remix-Design/RemixIcon) components for Svelte.

Thank you for considering my open-source package. If you use it in a commercial project, please support me by sponsoring me on [the GitHub suport](https://github.com/sponsors/shinokada). Your support helps me maintain and improve this package for the benefit of the community.

## Repo

[GitHub Repo](https://github.com/shinokada/svelte-remix)

## Original source

[Remix-Design/RemixIcon](https://github.com/Remix-Design/RemixIcon)

## License

[Svelte-Remix License](https://github.com/shinokada/svelte-remix/blob/main/LICENSE)

[Remix-Design/RemixIcon LICENSE](https://github.com/Remix-Design/RemixIcon/blob/master/License)

## Installation

```sh
pnpm i -D svelte-remix
```

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

## Faster compiling

If you need only a few icons from this library in your Svelte app, import them directly. This can optimize compilation speed and improve performance by reducing the amount of code processed during compilation.

```html
<script>
  import BankFillBUILDINGS from 'svelte-remix/BankFillBUILDINGS.svelte';
</script>

<BankFillBUILDINGS />
```

## Props

- size = '16';
- role = 'img';
- color = 'currentColor';
- ariaLabel = 'accessibility 16';

## IDE support

If you are using an LSP-compatible editor, such as VSCode, Atom, Sublime Text, or Neovim, hovering over a component name will display a documentation link, features, props, events, and an example.

## Size

Use the `size` prop to change the size of icons.

```html
<BankFillBUILDINGS size="40" />
<MailDownloadFillBUSINESS size="40" />
<InboxUnarchiveLineBUSINESS size="40" />
```

If you are using Tailwind CSS, you can add a custom size using Tailwind CSS by including the desired classes in the class prop. For example:

```html
<BankFillBUILDINGS class="shrink-0 h-20 w-20" />
```

## Creating a Default Global Icon Setting in Svelte

You can create a config file, `/src/lib/icon.config.json`.

The `Icon` component serves as a wrapper for svelte:component, allowing you to establish a global default setting or expand the capabilities of a component.

To create a default global icon setting, follow these steps:

### Configuration File

Start by creating a configuration file named `/src/lib/icon.config.json` with the following structure:

```json
{
  "config1": {
    "size": 40,
    "color": "#FF5733"
  },
  "config2": {
    "size": 50,
    "color": "#445533"
  }
}
```

In this JSON file, you can define different configurations (config1 and config2 in this case) for your icons, specifying attributes like size, variation, and color.

### Implementation

In your Svelte page file, make use of the configurations from the JSON file:

```html
<script lang="ts">
  type IconConfig = {
    config1: {
      size: number;
      color: string;
    };
    config2: {
      size: number;
      color: string;
    };
  };
  import config from '$lib/icon.config.json';
  import { Icon, BankFillBUILDINGS, MailDownloadFillBUSINESS } from 'svelte-remix';

  const iconConfig: IconConfig = config;
  const config1 = iconConfig.config1;
  const config2 = iconConfig.config2;
</script>

<Icon {...config1} icon="{BankFillBUILDINGS}" />
<Icon {...config2} icon="{MailDownloadFillBUSINESS}" />
```

We import the configurations from the JSON file and assign them to config1 and config2. We then utilize the Icon component with the spread attributes `{...config1}` and `{...config2}` to apply the respective configurations to each icon.

### Custom Default Icon

If you wish to create a custom default icon, you can follow these steps:

Create a Svelte component named `src/lib/MyIcon.svelte`:

```html
<script lang="ts">
  import type { ComponentType } from 'svelte';
  const config = {
    size: 30,
    color: '#FF5733'
  };
  import { Icon } from 'svelte-remix';
  export let icon: ComponentType;
</script>

<Icon {...config} {icon} />
```

This component, `MyIcon.svelte`, accepts an `icon` prop which you can use to pass in the specific icon component you want to display. The default configuration is also applied to the icon.

### Implementation in a Page

To use your custom default icon in a Svelte page, do the following:

```html
<script>
  import MyIcon from '$lib/MyIcon.svelte';
  import { BankFillBUILDINGS } from 'svelte-remix';
</script>

<MyIcon icon="{BankFillBUILDINGS}" />
```

Here, we import the `MyIcon` component and the `BankFillBUILDINGS` icon. By passing the `BankFillBUILDINGS` icon to the `icon` prop of MyIcon, you apply the default configuration to the icon.

## CSS HEX Colors

Use the `color` prop to change colors with HEX color code.

```html
<BankFillBUILDINGS color="#c61515" />
<MailDownloadFillBUSINESS color="#3759e5" />
<InboxUnarchiveLineBUSINESS color="#3fe537" />
```

## CSS framworks suport

You can apply CSS framework color and other attributes directly to the icon component or its parent tag using the `class` prop.

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

## Events

All icons have the following events:

- on:click
- on:keydown
- on:keyup
- on:focus
- on:blur
- on:mouseenter
- on:mouseleave
- on:mouseover
- on:mouseout

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

[Svelte-Icon-Sets](https://svelte-svg-icons.vercel.app/)
