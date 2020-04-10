<template>
  <q-card-actions align="right">
    <q-btn dense color="primary" type="submit">
      <slot />
    </q-btn>
  </q-card-actions>
</template>

<script>
export default {
  name: "ModalButtons",
  props: ["label"]
};
</script>

<style>
</style>