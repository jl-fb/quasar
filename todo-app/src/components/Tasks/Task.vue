<template>
  <q-item
    @click="updateTask({ id: id, updates: { completed: !task.completed } })"
    clickable
    v-ripple
    :class="!task.completed ? 'bg-cyan-4' :'bg-green-3 '"
  >
    <q-item-section side>
      <q-checkbox v-model="task.completed" />
    </q-item-section>

    <q-item-section>
      <q-item-label :class="{ 'text-strike': task.completed }">
        {{
        task.name
        }}
      </q-item-label>
      <!-- <q-item-label caption>
            Notify me about updates to apps or games that I downloaded
      </q-item-label>-->
    </q-item-section>
    <q-item-section v-if="task.dueDate" side>
      <div class="row">
        <div class="column">
          <q-icon name="events" size="18px" class="q-mr-xs"></q-icon>
        </div>
        <div class="column">
          <q-item-label caption>{{ task.dueDate }}</q-item-label>
          <q-item-label caption class="row justify-end">
            <small>{{ task.dueTime }}</small>
          </q-item-label>
        </div>
      </div>
    </q-item-section>
    <q-item-section side>
      <div class="row">
        <q-btn
          v-if="!task.completed"
          @click.stop="showEditTask = true"
          flat
          round
          dense
          icon="edit"
          color="teal"
        ></q-btn>
        <q-btn @click.stop="deletes(id, task.name)" flat round dense icon="delete" color="red"></q-btn>
      </div>
    </q-item-section>
    <q-dialog v-model="showEditTask">
      <EditTask @close="showEditTask = false" :task="task" :id="id" />
    </q-dialog>
  </q-item>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "Task",
  props: ["task", "id"],
  data() {
    return {
      showEditTask: false
    };
  },
  methods: {
    ...mapActions("tasks", ["updateTask", "deleteTask"]),
    deleteTask(id, name) {
      this.$q
        .dialog({
          dark: false,
          title: "Confirmar",
          message: `Deseja deletar: "${name}?"`,
          cancel: true,
          persistent: true
        })
        .onOk(() => {
          this.deleteTask(id);
        });
    }
  },
  components: {
    EditTask: require("./Modals/EditTask").default
  }
};
</script>

<style></style>
