<template>
  <q-page class="q-pa-md">
    <Search class="q-mb-lg" />
    <p
      v-if="search && !Object.keys(tasksTodo).length && !Object.keys(tasksCompleted).length"
    >Não encontramos o item pesquisado</p>
    <NoTasks v-if="!Object.keys(tasksTodo).length && !search" />

    <TasksTodo v-if="Object.keys(tasksTodo).length" :tasksTodo="tasksTodo" />

    <TasksCompleted v-if="Object.keys(tasksCompleted).length" :tasksCompleted="tasksCompleted" />
    <div class="absolute-bottom text-center q-ma-lg">
      <q-btn
        class="bg-primary"
        round
        flat
        size="15px"
        color="white"
        icon="add"
        @click="showAddTask = true"
      ></q-btn>
    </div>
    <q-dialog v-model="showAddTask" persistent>
      <AddTask @close="showAddTask = false" />
    </q-dialog>
  </q-page>
</template>

<script>
import { mapGetters, mapState } from "vuex";
export default {
  name: "PageIndex",
  computed: {
    ...mapGetters("tasks", ["tasksTodo", "tasksCompleted"]),
    ...mapState("tasks", ["search"])
  },
  data() {
    return {
      showAddTask: false
    };
  },
  components: {
    AddTask: require("../components/Tasks/Modals/AddTask").default,
    TasksTodo: require("../components/Tasks/TasksTodo").default,
    TasksCompleted: require("../components/Tasks/TasksCompleted").default,
    NoTasks: require("../components/Tasks/NoTasks").default,
    Search: require("../components/Tasks/Tools/Search").default
  },
  mounted() {
    this.$root.$on("showAddTask", () => {
      this.showAddTask = true;
    });
  }
};
</script>
