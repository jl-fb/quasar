<template>
  <q-input
    v-select-all
    v-model="searchField"
    @keyup.esc="searchField =''"
    filled
    type="search"
    label="Search"
  >
    <template v-slot:append v-if="searchField">
      <q-icon name="close" @click="searchField = ''" />
    </template>
    <template v-slot:append v-else>
      <q-icon name="search" />
    </template>
  </q-input>
</template>

<script>
import { mapState, mapActions } from "vuex";
import { selectAll } from "src/directives/directive-select-all";
export default {
  name: "Search",
  directives: {
    selectAll
  },
  computed: {
    ...mapState("tasks", ["search"]),
    searchField: {
      get() {
        return this.search;
      },
      set(value) {
        this.setSearch(value);
      }
    }
  },
  methods: {
    ...mapActions("tasks", ["setSearch"])
  }
};
</script>

<style>
</style>