# svelte-remix

## 3.0.0

### Major Changes

- BREAKING: Removed default aria-label from all icons. Icons are now decorative by default. Add ariaLabel prop explicitly for standalone icons that need accessible labels.
  - Added focusable prop (defaults to "false", accepts "true" | "false" | "auto")
  - Added automatic aria-labelledby support when title prop is provided
  - Fixed ariaDescribedby whitespace trimming
  - Fixed accessibility precedence: title now correctly takes precedence over ariaLabel

## 2.0.2

### Patch Changes

- fix: change svelte-5-ui-lib with flowbite-svelte

## 2.0.1

### Patch Changes

- docs: README update

## 2.0.0

### Patch Changes

- fix: remove svelte:component from Icon.svelte ([`91d65dc`](https://github.com/shinokada/svelte-remix/commit/91d65dccb230e658d3f50ba8156301383cf02a8a))

- feat: extends SVGAttributes<SVGElement> ([`c0ff727`](https://github.com/shinokada/svelte-remix/commit/c0ff727b94bccb04ca2a6ad00c0c8c6c8f41dfeb))

- types: update ([`2329a90`](https://github.com/shinokada/svelte-remix/commit/2329a90598b7f7f4c794cddc768ae54052d3dac7))

- feat: 2.0.0

- feat: next version icons and use runes-webkit-starter for website ([`001efea`](https://github.com/shinokada/svelte-remix/commit/001efeadc44b8eab05d88cd6bd6c5cb4acd76e39))

- feat: remove withEvents ([`3b2e980`](https://github.com/shinokada/svelte-remix/commit/3b2e980bf0669753e3f92f37505570b1c4c5d86f))

- fix: peerDependencies ([`851c03b`](https://github.com/shinokada/svelte-remix/commit/851c03b35892b0e229ef7a7d81e185a99cbe7e26))

## 2.0.0-next.7

### Patch Changes

- feat: 2.0.0

## 2.0.0-next.6

### Patch Changes

- types: update ([`2329a90598b7f7f4c794cddc768ae54052d3dac7`](https://github.com/shinokada/svelte-remix/commit/2329a90598b7f7f4c794cddc768ae54052d3dac7))

## 2.0.0-next.5

### Patch Changes

- fix: remove svelte:component from Icon.svelte ([`91d65dccb230e658d3f50ba8156301383cf02a8a`](https://github.com/shinokada/svelte-remix/commit/91d65dccb230e658d3f50ba8156301383cf02a8a))

## 2.0.0-next.4

### Patch Changes

- fix: peerDependencies ([`851c03b35892b0e229ef7a7d81e185a99cbe7e26`](https://github.com/shinokada/svelte-remix/commit/851c03b35892b0e229ef7a7d81e185a99cbe7e26))

## 2.0.0-next.3

### Patch Changes

- feat: extends SVGAttributes<SVGElement> ([`c0ff727b94bccb04ca2a6ad00c0c8c6c8f41dfeb`](https://github.com/shinokada/svelte-remix/commit/c0ff727b94bccb04ca2a6ad00c0c8c6c8f41dfeb))

## 2.0.0-next.2

### Patch Changes

- feat: remove withEvents ([`3b2e980bf0669753e3f92f37505570b1c4c5d86f`](https://github.com/shinokada/svelte-remix/commit/3b2e980bf0669753e3f92f37505570b1c4c5d86f))
