<template>
  <q-card>
    <ModalHeader>Adicionar produtos</ModalHeader>
    <form @submit.prevent="onSubmit">
      <q-card-section>
        <ModalTaskName :name.sync="taskToSubmit.name" ref="modalTaskName" />
        <ModalDueDate :dueDate.sync="taskToSubmit.dueDate" />
        <ModalDueTime
          :dueTime.sync="taskToSubmit.dueTime"
          :dueDate="taskToSubmit.dueDate"
          class="q-mt-md"
        />
      </q-card-section>
      <ModalButtons>Add</ModalButtons>
    </form>
  </q-card>
</template>

<script>
import { mapActions } from "vuex";
import mixin from "src/mixins/mixin-add-edit-task";

export default {
  mixins: [mixin],
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
    submitTask() {
      this.addTask(this.taskToSubmit);
      this.$emit("close");
    }
  }
};
</script>

<style>
</style>