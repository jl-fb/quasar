<template>
  <div class="q-mt-lg">
    <ListHeader bgcolor="bg-green-7">Items bought</ListHeader>
    <q-list bordered separator>
      <Task v-for="(task, key) in tasksCompleted" :key="key" :task="task" :id="key"></Task>
    </q-list>
  </div>
</template>

<script>
export default {
  name: "TasksCompleted",
  props: ["tasksCompleted"],
  components: {
    Task: require("../../components/Tasks/Task").default,
    ListHeader: require("../../components/Tasks/Modals/Shared/ListHeader")
      .default
  }
};
</script>

<style>
</style>