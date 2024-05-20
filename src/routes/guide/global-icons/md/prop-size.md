<script>
  import { setContext } from 'svelte';
  import { AttachmentLineBusiness } from 'svelte-remix';
  const iconCtx = {
    size: '30'
  };
  setContext('iconCtx', iconCtx);
</script>

<AttachmentLineBusiness color="#ff4488" />