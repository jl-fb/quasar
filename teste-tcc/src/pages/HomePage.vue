<template>
  <q-page class="flex flex-center">
    <q-list bordered>
      <q-item clickable v-ripple>
        <q-item-section avatar>
          <q-icon color="primary" name="bluetooth" />
        </q-item-section>
        <q-item-section>Icon as avatar</q-item-section>
      </q-item>
    </q-list>
  </q-page>
</template>

<script>
export default {
  name: "HomePage"
};
</script>
