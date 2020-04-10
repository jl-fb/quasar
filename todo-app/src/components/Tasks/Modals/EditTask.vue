<template>
  <q-card>
    <ModalHeader>Editar Produto</ModalHeader>
    <form @submit.prevent="onSubmit">
      <q-card-section>
        <ModalTaskName :name.sync="taskToSubmit.name" ref="modalTaskName" />
        <ModalDueDate :dueDate.sync="taskToSubmit.dueDate" />
        <ModalDueTime :dueTime.sync="taskToSubmit.dueTime" :dueDate="taskToSubmit.dueDate" />
      </q-card-section>
      <ModalButtons>Edit</ModalButtons>
    </form>
  </q-card>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "EditTask",
  props: ["task", "id"],
  data() {
    return {
      taskToSubmit: {}
    };
  },
  methods: {
    ...mapActions("tasks", ["updateTask"]),

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
      this.updateTask({
        id: this.id,
        updates: this.taskToSubmit
      });
      this.$emit("close");
    }
  },
  components: {
    ModalHeader: require("./Shared/ModalHeader").default,
    ModalTaskName: require("./Shared/ModalTaskName").default,
    ModalDueDate: require("./Shared/ModalDueDate").default,
    ModalDueTime: require("./Shared/ModalDueTime").default,
    ModalButtons: require("./Shared/ModalButtons").default
  },
  created() {
    this.taskToSubmit = Object.assign({}, this.task);
  }
};
</script>

<style>
</style>