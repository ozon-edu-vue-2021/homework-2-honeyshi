<template>
  <div>
    <h2>File System</h2>
    <directory-component
      :fileSystemItemName="directoryName"
      :content="directoryContent"
    />
  </div>
</template>

<script>
import DirectoryComponent from "@/components/rows/DirectoryComponent";
let json = require("../../public/static/node_modules.json");

export default {
  components: { DirectoryComponent },
  name: "FileSystem",
  computed: {
    directoryName() {
      return json.name;
    },
    directoryContent() {
      return json.contents;
    },
  },
};
</script>

<style>
:root {
  --indentation-size: 1rem;
  --border-radius-size: 20px;
  --selected-text-color: whitesmoke;
}
.item-wrapper {
  display: inline-flex;
  align-items: center;
  padding: var(--indentation-size);
  margin-bottom: var(--indentation-size);
  margin-left: var(--indentation-size);
  width: 100%;
}
.item-wrapper:first-of-type {
  margin-left: 0;
}
.item-wrapper:hover {
  background-color: rgba(32, 33, 36, 0.059);
  color: #2c3e50;
  border-radius: var(--border-radius-size);
  cursor: pointer;
}
.item-wrapper__selected:hover {
  background-color: #07228f;
  color: var(--selected-text-color);
}
.item-wrapper__selected {
  border-radius: var(--border-radius-size);
  background-color: #2762c5;
  color: var(--selected-text-color);
}
.item-wrapper__selected > .icon-wrapper > svg {
  stroke: var(--selected-text-color);
}
.item-wrapper__selected > a {
  color: var(--selected-text-color);
}
</style>