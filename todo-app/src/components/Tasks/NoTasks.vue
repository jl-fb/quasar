<template>
  <q-banner v-if="!this.settings.showTaksOneList" class="bg-grey-3">
    <template v-slot:avatar>
      <q-icon name="check" color="primary" />
    </template>
    No shop to do today!
    <template v-slot:action>
      <q-btn flat color="primary" label="Add a product" @click="$root.$emit('showAddTask')" />
    </template>
  </q-banner>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "NoTask",
  computed: {
    ...mapGetters("settings", ["settings"])
  }
};
</script>

<style>
</style>