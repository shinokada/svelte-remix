<script lang="ts">
  import type { Component } from 'svelte';
  import { IconPage, filterStringKeys } from 'runes-webkit';
  import * as icons from '$lib';
  const keyIcons = filterStringKeys(icons);

</script>

<IconPage
  icons={keyIcons as Component}
  i_p_tabitem_div_1="md:grid-cols-2 lg:grid-cols-3"
  title="Icons - Svelte Remix"
/>
