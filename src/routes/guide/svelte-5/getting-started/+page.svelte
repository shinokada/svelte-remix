<script lang="ts">
  import { HighlightCompo, Code, H2 } from 'runes-webkit';
  import { GitHubSponsor, type GitHubSponsorPropsType,  NpmVersion, type NpmVersionPropsType, License, type LicensePropsType, NpmDownload, type NpmDownloadPropsType } from 'svelte-shields';

  const sponsor: GitHubSponsorPropsType = {
    user: 'shinokada',
    logo:'github',
    color: 'red',
    link: ['https://github.com/sponsors/shinokada', 'https://github.com/sponsors/shinokada']
  };
  const npmversion: NpmVersionPropsType = {
    packageName: 'svelte-remix',
    color: 'red',
    logo:'svelte',
    link: [
      'https://www.npmjs.com/package/svelte-remix',
      'https://www.npmjs.com/package/svelte-remix?activeTab=versions'
    ]
  };
  const license: LicensePropsType = {
    source: 'github',
    github_user: 'shinokada',
    github_repo: 'svelte-remix',
    link: [
      'https://github.com/shinokada/svelte-remix/blob/master/LICENSE',
      'https://github.com/shinokada/svelte-remix/blob/master/LICENSE'
    ]
  };
  const downloads: NpmDownloadPropsType = {
    packageName: 'svelte-remix',
    link: ['https://www.npmjs.com/package/svelte-remix']
  };
  
  const modules = import.meta.glob('./md/*.md', {
    query: '?raw',
    import: 'default',
    eager: true
  });
</script>

<h1>Getting Started - Svelte Remix v2</h1>

<div class="my-8 flex gap-2">
  <GitHubSponsor {...sponsor} />
  <NpmVersion {...npmversion} />
  <License {...license} />
  <NpmDownload {...downloads} />
</div>

<H2>Requirements</H2>

<HighlightCompo codeLang="ts" code={modules['./md/requirement.md'] as string} />

<H2>Installation</H2>
<p>Install Svelte:</p>

<HighlightCompo codeLang="ts" code={modules['./md/installation.md'] as string} />

<H2>Basic Usage</H2>

<p>In a svelte file:</p>

<HighlightCompo codeLang="ts" code={modules['./md/basic-usage.md'] as string} />

<H2>IDE support</H2>

<p>
  If you are using an LSP-compatible editor, such as VSCode, Atom, Sublime Text, or Neovim, hovering
  over a component name will display a documentation link, features, props, events, etc.
</p>

<H2>Faster compiling</H2>

<p>
  If you need only a few icons from this library in your Svelte app, import them directly. This can
  optimize compilation speed and improve performance by reducing the amount of code processed during
  compilation.
</p>

<HighlightCompo codeLang="ts" code={modules['./md/faster-compiling.md'] as string} />

<H2>Passing down other attributes</H2>

<p>Since all icons have <Code>...restProps</Code>, you can pass other attibutes as well.</p>

<HighlightCompo codeLang="ts" code={modules['./md/passing-down-other-attributes.md'] as string} />

<H2>Import all</H2>

<p>Use `import * as Icon from 'svelte-remix`.</p>

<HighlightCompo codeLang="ts" code={modules['./md/import-all.md'] as string} />
