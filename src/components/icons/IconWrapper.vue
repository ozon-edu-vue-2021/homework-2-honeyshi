<template>
  <div :class="wrapperClassName">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "IconWrapper",
  props: {
    wrapperType: {
      type: String,
      validator: (prop) => ["Icon", "Toggle"].includes(prop),
      default: "Icon",
    },
  },
  computed: {
    wrapperClassName() {
      switch (this.wrapperType) {
        case "Icon":
          return "icon-wrapper";
        case "Toggle":
          return "toggle-icon-wrapper";
        default:
          return "";
      }
    },
  },
};
</script>

<style scoped>
.icon-wrapper {
  margin-right: 1rem;
}

.toggle-icon-wrapper {
  margin-left: 0.5rem;
  display: flex;
}
</style>