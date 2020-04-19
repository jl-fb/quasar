<template>
  <div id="q-app">
    <router-view />
  </div>
</template>

<script >
import { mapActions } from "vuex";
export default {
  name: "App",
  methods: {
    ...mapActions("auth", ["onAuthStateChange", "checkUser"]),
    ...mapActions("user", ["setPoliticos"])
  },

  mounted() {
    this.onAuthStateChange();
  }
};
</script>
