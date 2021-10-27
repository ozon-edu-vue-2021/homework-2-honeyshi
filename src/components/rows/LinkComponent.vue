<template>
  <div
    :class="itemSelectionClasses"
    v-bind:style="calculatedMarginLeft"
    @click="toggleSelectItem"
  >
    <link-icon />
    <a :href="link">{{ fileSystemItemName }}</a>
  </div>
</template>

<script>
import { FileSystemItemMixin, SelectionMixin } from "@/mixins";
import { LinkIcon } from "@/components/icons";
export default {
  name: "LinkComponent",
  components: { LinkIcon },
  mixins: [FileSystemItemMixin, SelectionMixin],
  props: {
    link: {
      type: String,
      default: "",
    },
  },
};
</script>

<style scoped>
a {
  text-decoration: none;
  color: #2c3e50;
}
a:hover {
  color: #6e8fd0;
}
</style>