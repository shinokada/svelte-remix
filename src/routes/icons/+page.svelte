<script lang="ts">
  import type { ComponentType } from 'svelte';
  import { IconPage, filterIconsByKeyword, filterStringKeys  } from 'runes-webkit';
  import * as icons from '$lib';
  const keyIcons = filterStringKeys(icons);
  const filteredIcons = Object.fromEntries(
    Object.entries(keyIcons).filter(([key]) => key !== 'Icon')
  );
</script>

<IconPage icons={filteredIcons as ComponentType} 
i_p_tabitem_div_1="md:grid-cols-2 lg:grid-cols-3"
title="Icons: Svelte Remix" />