<template>
  <div :class="{'q-mt-lg' : !this.settings.showTaksOneList}">
    <ListHeader v-if="!this.settings.showTaksOneList" bgcolor="bg-green-7">Items bought</ListHeader>
    <q-list bordered separator>
      <Task v-for="(task, key) in tasksCompleted" :key="key" :task="task" :id="key"></Task>
    </q-list>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "TasksCompleted",
  props: ["tasksCompleted"],
  computed: {
    ...mapGetters("settings", ["settings"])
  },
  components: {
    Task: require("../../components/Tasks/Task").default,
    ListHeader: require("../../components/Tasks/Modals/Shared/ListHeader")
      .default
  }
};
</script>

<style>
</style>