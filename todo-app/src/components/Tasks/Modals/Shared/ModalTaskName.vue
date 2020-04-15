<template>
  <q-input
    :value="name"
    @input="$emit('update:name', $event)"
    outlined
    type="text"
    label="Nome"
    v-select-all
    autofocus
    ref="name"
    :rules="[val => val && val.length > 0 || 'Campo Obrigatório']"
  >
    <template v-slot:append>
      <q-icon
        v-if="name.length"
        name="close"
        @click="$emit('update:name', '')"
        class="cursor-pointer"
      />
    </template>
  </q-input>
</template>

<script>
import { selectAll } from "src/directives/directive-select-all";
export default {
  name: "ModalTaskName",
  props: ["name"],
  directives: {
    selectAll
  }
};
</script>

<style>
</style>