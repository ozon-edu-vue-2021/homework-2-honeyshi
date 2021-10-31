<template>
  <div @click="$emit('click')">
    <LinkIcon />
    <a :href="link">{{ fileSystemItemName }}</a>
  </div>
</template>

<script>
import { FileSystemItemMixin } from "@/mixins";
import { LinkIcon } from "@/components/icons";

export default {
  name: "LinkComponent",
  components: { LinkIcon },
  mixins: [FileSystemItemMixin],
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