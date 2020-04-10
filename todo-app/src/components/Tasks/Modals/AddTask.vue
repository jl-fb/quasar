<template>
  <q-card>
    <ModalHeader>Adicionar produtos</ModalHeader>
    <form @submit.prevent="onSubmit">
      <q-card-section>
        <ModalTaskName :name.sync="taskToSubmit.name" ref="modalTaskName" />
        <ModalDueDate :dueDate.sync="taskToSubmit.dueDate" />
        <ModalDueTime :dueTime.sync="taskToSubmit.dueTime" :dueDate="taskToSubmit.dueDate" />
      </q-card-section>
      <ModalButtons>Add</ModalButtons>
    </form>
  </q-card>
</template>

<script>
import { mapActions } from "vuex";
import ModalTaskNameVue from "./Shared/ModalTaskName.vue";

export default {
  data() {
    return {
      taskToSubmit: {
        name: "",
        dueDate: "",
        dueTime: "",
        completed: false
      }
    };
  },
  methods: {
    ...mapActions("tasks", ["addTask"]),

    onSubmit() {
      this.$refs.modalTaskName.$refs.name.validate();
      // if (this.$refs.name.hasError || this.$refs.name.isDirty == null) {
      //   return;
      // } else {
      //   this.submitTask();
      // }
      if (!this.$refs.modalTaskName.$refs.name.hasError) {
        this.submitTask();
      }
    },
    submitTask() {
      this.addTask(this.taskToSubmit);
      this.$emit("close");
    }
  },
  components: {
    ModalHeader: require("./Shared/ModalHeader").default,
    ModalTaskName: require("./Shared/ModalTaskName").default,
    ModalDueDate: require("./Shared/ModalDueDate").default,
    ModalDueTime: require("./Shared/ModalDueTime").default,
    ModalButtons: require("./Shared/ModalButtons").default
  }
};
</script>

<style>
</style>