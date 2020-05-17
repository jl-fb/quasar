<template>
  <div id="q-app">
    <!-- <div v-if="!ready" class="absolute-center">
      <q-spinner-tail color="primary" size="4em" :thickness="5" />
    </div>-->
    <div>
      <router-view />
    </div>
  </div>
</template>

<script >
import { mapActions, mapState } from "vuex";
export default {
  name: "App",
  computed: {
    ...mapState("user", ["ready"])
  },
  methods: {
    ...mapActions("auth", ["onAuthStateChange", "checkUser"]),
    ...mapActions("user", ["setPoliticos"])
  },

  mounted() {
    this.onAuthStateChange();
  }
};
</script>
