<template>
  <q-input
    v-if="dueDate"
    :value="dueTime"
    @input="$emit('update:dueTime', $event)"
    outline
    type="text"
    label="Hora"
  >
    <template v-slot:append>
      <q-icon
        v-if="dueTime"
        name="close"
        @click="$emit('update:dueTime', '')"
        class="cursor-pointer"
      />
      <q-icon name="access_time" class="cursor-pointer">
        <q-popup-proxy transition-show="scale" transition-hide="scale">
          <q-time
            :value="dueTime"
            @input="$emit('update:dueTime', $event)"
            mask=" HH:mm"
            format24h
          />
        </q-popup-proxy>
      </q-icon>
    </template>
  </q-input>
</template>

<script>
export default {
  name: "ModalDueTime",
  props: ["dueTime", "dueDate"]
};
</script>

<style>
</style>