<template>
  <div class="directory-wrapper">
    <div class="item-wrapper" @click="expandDirectory">
      <directory-icon />
      <span>{{ fileSystemItemName }}</span>
      <expand-icon v-show="!isDirectoryExpanded" />
      <close-icon v-show="isDirectoryExpanded" />
    </div>
    <template v-if="isDirectoryExpanded">
      <div
        class="directory-items-container"
        v-for="(item, i) in content"
        :key="`${item.name}-${i}`"
      >
        <file-component
          v-if="item.type === 'file'"
          :fileSystemItemName="item.name"
        />
        <directory-component
          v-else-if="item.type === 'directory'"
          :fileSystemItemName="item.name"
          :content="item.contents"
        />
        <link-component
          v-else-if="item.type === 'link'"
          :fileSystemItemName="item.name"
          :link="item.target"
        />
      </div>
    </template>
  </div>
</template>

<script>
import { CloseIcon, DirectoryIcon, ExpandIcon } from "@/components/icons";
import { FileSystemItemMixin } from "@/mixins";
import FileComponent from "./FileComponent";
import LinkComponent from "./LinkComponent";

export default {
  name: "DirectoryComponent",
  components: {
    DirectoryIcon,
    ExpandIcon,
    CloseIcon,
    FileComponent,
    LinkComponent,
  },
  mixins: [FileSystemItemMixin],
  props: {
    content: {
      type: Array,
      default: () => [],
    },
  },
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
  margin-left: 1rem;
}
</style>