<template>
  <q-page padding>
    <q-card class="auth-card">
      <q-tabs
        v-model="tab"
        dense
        class="text-grey"
        active-color="primary"
        indicator-color="primary"
        align="justify"
        narrow-indicator
      >
        <q-tab name="login" label="Login" />
        <q-tab name="register" label="Register" />
      </q-tabs>

      <q-separator />

      <q-tab-panels v-model="tab" animated>
        <q-tab-panel name="login">
          <div class="text-h6">Login</div>
          <Register :tab="tab" />
        </q-tab-panel>

        <q-tab-panel name="register">
          <div class="text-h6">Register</div>
          <Register :tab="tab" />
        </q-tab-panel>
      </q-tab-panels>
    </q-card>
  </q-page>
</template>

<script>
export default {
  name: "PageAuth",
  data() {
    return {
      tab: "login"
    };
  },
  components: {
    Register: require("src/components/Auth/LoginRegister").default
  }
};
</script>

<style>
.auth-card {
  max-width: 600px;
  margin: auto;
}
</style>