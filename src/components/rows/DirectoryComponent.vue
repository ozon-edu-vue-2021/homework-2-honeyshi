<template>
  <div class="directory-wrapper">
    <div class="item-wrapper" @click="expandDirectory">
      <directory-icon />
      <span>{{ fileSystemItemName }}</span>
      <expand-icon v-show="!isDirectoryExpanded" />
      <close-icon v-show="isDirectoryExpanded" />
    </div>
    <div class="directory-items-container" v-show="isDirectoryExpanded">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import { CloseIcon, DirectoryIcon, ExpandIcon } from "@/components/icons";
import { FileSystemItemMixin } from "@/mixins";

export default {
  name: "DirectoryComponent",
  components: { DirectoryIcon, ExpandIcon, CloseIcon },
  mixins: [FileSystemItemMixin],
  data() {
    return {
      expanded: false,
    };
  },
  computed: {
    isDirectoryExpanded() {
      return this.expanded;
    },
  },
  methods: {
    expandDirectory() {
      this.expanded = !this.expanded;
    },
  },
};
</script>

<style scoped>
.directory-items-container {
  display: flex;
  flex-direction: column;
}
</style>