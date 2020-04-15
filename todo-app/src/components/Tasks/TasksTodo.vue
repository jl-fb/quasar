<template>
  <div>
    <ListHeader v-if="!this.settings.showTaksOneList" bgcolor="bg-blue-6">Shop Items</ListHeader>
    <q-list bordered separator v-if="Object.keys(tasksTodo).length">
      <Task v-for="(task, key) in tasksTodo" :key="key" :task="task" :id="key"></Task>
    </q-list>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "TasksTodo",
  props: ["tasksTodo"],
  computed: {
    ...mapGetters("settings", ["settings"])
  },
  components: {
    Task: require("../../components/Tasks/Task").default,
    ListHeader: require("../../components/Shared/ListHeader").default
  }
};
</script>

<style>
</style>