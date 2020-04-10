<template>
  <q-input v-model="searchField" filled type="search" label="Search">
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

export default {
  name: "Search",

  computed: {
    ...mapState("tasks", ["search"]),
    searchField: {
      get() {
        return this.search;
      },
      set(value) {
        console.log(value);
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