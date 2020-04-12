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
import mixin from "src/mixins/mixin-add-edit-task";

export default {
  name: "EditTask",
  props: ["task", "id"],
  mixins: [mixin],
  data() {
    return {
      taskToSubmit: {}
    };
  },
  methods: {
    ...mapActions("tasks", ["updateTask"]),

    submitTask() {
      this.updateTask({
        id: this.id,
        updates: this.taskToSubmit
      });
      this.$emit("close");
    }
  },

  created() {
    this.taskToSubmit = Object.assign({}, this.task);
  }
};
</script>

<style>
</style>