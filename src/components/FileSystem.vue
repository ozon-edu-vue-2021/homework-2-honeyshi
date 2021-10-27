<template>
  <div>
    <h2>File System</h2>
    <directory-component fileSystemItemName="My Directory">
      <file-component fileSystemItemName="My file" />
      <file-component fileSystemItemName="My file 2" />
      <link-component
        fileSystemItemName="Link"
        v-bind:level="2"
      />
    </directory-component>
  </div>
</template>

<script>
import DirectoryComponent from "@/components/rows/DirectoryComponent.vue";
import FileComponent from "@/components/rows/FileComponent.vue";
import LinkComponent from "@/components/rows/LinkComponent.vue";

export default {
  components: { DirectoryComponent, FileComponent, LinkComponent },
  name: "FileSystem",
};
</script>

<style>
.item-wrapper {
  display: inline-flex;
  align-items: center;
  padding: 1rem;
  width: 100%;
}
.item-wrapper:hover {
  background-color: rgba(32, 33, 36, 0.059);
  color: #2c3e50;
  border-radius: 20px;
  cursor: pointer;
}
.item-wrapper__selected:hover {
  background-color: #07228f;
  color: whitesmoke;
}
.item-wrapper__selected {
  border-radius: 20px;
  background-color: #2762c5;
  color: whitesmoke;
}
.item-wrapper__selected > .icon-wrapper > svg {
  stroke: whitesmoke;
}
.item-wrapper__selected > a {
  color: whitesmoke;
}
</style>