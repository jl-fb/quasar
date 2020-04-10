<template>
  <div>
    <ListHeader bgcolor="bg-blue-6">Shop Items</ListHeader>
    <q-list bordered separator v-if="Object.keys(tasksTodo).length">
      <Task v-for="(task, key) in tasksTodo" :key="key" :task="task" :id="key"></Task>
    </q-list>
  </div>
</template>

<script>
export default {
  name: "TasksTodo",
  props: ["tasksTodo"],
  components: {
    Task: require("../../components/Tasks/Task").default,
    ListHeader: require("../../components/Tasks/Modals/Shared/ListHeader")
      .default
  }
};
</script>

<style>
</style>