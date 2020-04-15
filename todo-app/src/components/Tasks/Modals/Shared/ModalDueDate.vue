<template>
  <q-input label="Data" outlined :value="dueDate" @input="$emit('update:dueDate', $event)">
    <template v-slot:append>
      <q-icon
        v-if="dueDate"
        name="close"
        @click="$emit('update:dueDate', '')"
        class="cursor-pointer"
      />
      <q-icon name="event" class="cursor-pointer">
        <q-popup-proxy ref="qDateProxy" transition-show="scale" transition-hide="scale">
          <q-date :value="dueDate" @input="$emit('update:dueDate', $event)" mask="DD/MM/YYYY" />
        </q-popup-proxy>
      </q-icon>
    </template>
  </q-input>
</template>

<script>
export default {
  name: "ModalDueDate",
  props: ["dueDate"]
};
</script>

<style>
</style>