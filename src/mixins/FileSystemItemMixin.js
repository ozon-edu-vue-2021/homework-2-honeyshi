export default {
  name: "FileSystemItemMixin",
  props: {
    fileSystemItemName: {
      type: String,
      default: "",
    },
    level: {
      type: Number,
      default: 0,
    },
    marginLeft: {
      type: Number,
      default: 20,
    },
  },
  computed: {
    calculatedMarginLeft() {
      return { marginLeft: this.level * this.marginLeft + "px" };
    },
  },
};
