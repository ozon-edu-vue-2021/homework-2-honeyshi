<template>
  <div class="directory-wrapper">
    <div class="item-wrapper" @click="expandDirectory">
      <DirectoryIcon />
      <span>{{ fileSystemItemName }}</span>
      <expand-icon v-show="!isDirectoryExpanded" />
      <close-icon v-show="isDirectoryExpanded" />
    </div>
    <template v-if="isDirectoryExpanded">
      <div
        class="directory-items-container"
        v-for="(item, i) in content"
        :key="`${item.name}-${fileSystemItemName}-${i}`"
      >
        <FileComponent
          v-if="item.type === 'file'"
          :fileSystemItemName="item.name"
          @click="handleItemSelect(`${item.name}-${fileSystemItemName}-${i}`)"
          :class="getItemClasses(`${item.name}-${fileSystemItemName}-${i}`)"
        />
        <DirectoryComponent
          v-else-if="item.type === 'directory'"
          :fileSystemItemName="item.name"
          :content="item.contents"
          :handleItemSelect="handleItemSelect"
          :getItemClasses="getItemClasses"
        />
        <LinkComponent
          v-else-if="item.type === 'link'"
          :fileSystemItemName="item.name"
          :link="item.target"
          @click="handleItemSelect(`${item.name}-${fileSystemItemName}-${i}`)"
          :class="getItemClasses(`${item.name}-${fileSystemItemName}-${i}`)"
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
    handleItemSelect: Function,
    getItemClasses: Function,
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