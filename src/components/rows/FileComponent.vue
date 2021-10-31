<template>
  <div @click="$emit('click')">
    <FileIcon />
    <span>{{ fileSystemItemName }}</span>
  </div>
</template>

<script>
import { FileIcon } from "@/components/icons";
import { FileSystemItemMixin } from "@/mixins";

export default {
  components: { FileIcon },
  name: "FileComponent",
  mixins: [FileSystemItemMixin],
};
</script>