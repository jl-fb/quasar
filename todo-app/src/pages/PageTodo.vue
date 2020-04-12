<template>
  <q-page class="q-pa-md">
    <div class="q-pa-md absolute full-width full-height column">
      <div class="row q-mb-lg">
        <Search class="col" />
        <Sort class="col-3 q-ml-sm" />
      </div>
      <p
        v-if="search && !Object.keys(tasksTodo).length && !Object.keys(tasksCompleted).length"
      >Não encontramos o item pesquisado</p>

      <q-scroll-area class="scroll-area">
        <transition
          appear
          enter-active-class="animated zoomIn"
          leave-active-class="animated zoomOut absolute-top"
        >
          <NoTasks v-if="!Object.keys(tasksTodo).length && !search" />
        </transition>

        <transition
          appear
          enter-active-class="animated zoomIn"
          leave-active-class="animated zoomOut absolute-top"
        >
          <TasksTodo v-if="Object.keys(tasksTodo).length" :tasksTodo="tasksTodo" />
        </transition>

        <transition
          appear
          enter-active-class="animated zoomIn "
          leave-active-class="animated zoomOut"
        >
          <TasksCompleted
            v-if="Object.keys(tasksCompleted).length"
            :tasksCompleted="tasksCompleted"
            class="q-mb-xl"
          />
        </transition>
      </q-scroll-area>
      <div class="absolute-bottom text-center q-ma-lg no-pointer-events">
        <q-btn
          class="bg-primary q-mb-sm all-pointer-events"
          round
          flat
          size="15px"
          color="white"
          icon="add"
          @click="showAddTask = true"
        ></q-btn>
      </div>
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
    Search: require("../components/Tasks/Tools/Search").default,
    Sort: require("../components/Tasks/Tools/Sort").default
  },
  mounted() {
    this.$root.$on("showAddTask", () => {
      this.showAddTask = true;
    });
  }
};
</script>

<style>
.scroll-area {
  display: flex;
  flex-grow: 1;
}
</style>
