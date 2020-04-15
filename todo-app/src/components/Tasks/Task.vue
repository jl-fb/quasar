<template>
  <q-item
    @click="updateTask({ id: id, updates: { completed: !task.completed } })"
    clickable
    v-ripple
    :class="!task.completed ? 'bg-cyan-4' :'bg-green-3 '"
    v-touch-hold.mouse="showAddModal"
  >
    <q-item-section side>
      <q-checkbox v-model="task.completed" />
    </q-item-section>

    <q-item-section>
      <q-item-label
        :class="{ 'text-strike': task.completed }"
        v-html="$options.filters.searchHighlight(task.name, search)"
      ></q-item-label>
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
          @click.stop="showAddModal"
          flat
          round
          dense
          icon="edit"
          color="teal"
        ></q-btn>
        <q-btn @click.stop="taskDelete(id, task.name)" flat round dense icon="delete" color="red"></q-btn>
      </div>
    </q-item-section>
    <q-dialog v-model="showEditTask">
      <EditTask @close="showEditTask = false" :task="task" :id="id" />
    </q-dialog>
  </q-item>
</template>

<script>
import { mapActions, mapState, mapGetters } from "vuex";
import { date } from "quasar";
const { formatDate } = date;

export default {
  name: "Task",
  props: ["task", "id"],
  data() {
    return {
      showEditTask: false
    };
  },
  computed: {
    ...mapState("tasks", ["search"]),
    ...mapGetters("settings", ["settings"]),
    taskDueTime() {
      if (this.settings.changeHourFormat) {
        return formatDate(`${this.task.dueDate} ${this.task.dueTime}`, "h:mA");
      }
      return this.task.dueTime;
    }
  },
  methods: {
    ...mapActions("tasks", ["updateTask", "deleteTask"]),
    taskDelete(id, name) {
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
    },
    showAddModal(evt) {
      this.showEditTask = true;
    }
  },
  filters: {
    niceDate(value) {
      return formatDate(value, "D/MMM");
    },
    searchHighlight(value, search) {
      if (search) {
        let searchRegx = new RegExp(search, "i");
        return value.replace(searchRegx, match => {
          return `<span class='bg-yellow-6'>${match}</span>`;
        });
      }
      return value;
    }
  },
  components: {
    EditTask: require("./Modals/EditTask").default
  }
};
</script>

<style></style>
