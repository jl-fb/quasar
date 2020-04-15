<template>
  <q-banner :class="bgcolor" class="list-header text-white text-center">
    <span class="text-bold text-subtitle1">
      <slot />
    </span>
  </q-banner>
</template>

<script>
export default {
  name: "ListHeader",
  props: ["bgcolor"]
};
</script>

<style>
.list-header {
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
}
</style>