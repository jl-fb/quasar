<template>
  <q-card-section class="row justify-between">
    <div class="text-h6">
      <slot />
    </div>
    <q-btn v-close-popup flat round dense icon="close"></q-btn>
  </q-card-section>
</template>

<script>
export default {
  name: "ModalHeader"
};
</script>

<style>
</style>