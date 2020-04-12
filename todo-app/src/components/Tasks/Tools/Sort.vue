<template>
  <q-select
    filled
    v-model="sortBy"
    emit-value
    map-options
    :options="options"
    label="sort by"
    stack-label
    :dense="dense"
    :options-dense="denseOpts"
  />
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  name: "Sort",
  data() {
    return {
      options: [
        {
          label: "Name",
          value: "name"
        },
        {
          label: "Date",
          value: "dueDate"
        }
      ],

      dense: false,
      denseOpts: false
    };
  },
  computed: {
    ...mapState("tasks", ["sort"]),
    sortBy: {
      get() {
        return this.sort;
      },
      set(value) {
        this.setSort(value);
      }
    }
  },
  methods: {
    ...mapActions("tasks", ["setSort"])
  }
};
</script>

<style>
</style>