export default {
  name: "SelectionMixin",
  data() {
    return {
      selected: false,
    };
  },
  computed: {
    itemSelectionClasses() {
      return [
        "item-wrapper",
        {
          "item-wrapper__selected": this.selected,
        },
      ];
    },
  },
  methods: {
    toggleSelectItem() {
      this.selected = !this.selected;
    },
  },
};
