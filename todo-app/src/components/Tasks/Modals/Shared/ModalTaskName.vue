<template>
  <q-input
    :value="name"
    @input="$emit('update:name', $event)"
    outline
    type="text"
    label="Nome"
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
export default {
  name: "ModalTaskName",
  props: ["name"]
};
</script>

<style>
</style>