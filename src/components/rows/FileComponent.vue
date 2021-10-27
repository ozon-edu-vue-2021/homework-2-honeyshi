<template>
  <div :class="itemSelectionClasses" @click="toggleSelectItem">
    <file-icon />
    <span>{{ fileSystemItemName }}</span>
  </div>
</template>

<script>
import { FileIcon } from "@/components/icons";
import { FileSystemItemMixin, SelectionMixin } from "@/mixins";

export default {
  components: { FileIcon },
  name: "FileComponent",
  mixins: [FileSystemItemMixin, SelectionMixin],
};
</script>