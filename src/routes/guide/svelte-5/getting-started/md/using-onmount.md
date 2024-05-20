<script>
  import { AttachmentLineBusiness } from 'svelte-remix';
  import { onMount } from 'svelte';
  const props = {
    size: '50',
    color: '#ff0000'
  };
  onMount(() => {
    const icon = new AttachmentLineBusiness({ target: document.body, props });
  });
</script>