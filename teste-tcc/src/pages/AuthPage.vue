<template>
  <q-page padding>
    <q-card class="auth-page">
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
        <q-tab name="cadastro" label="Cadastre-se" />
      </q-tabs>

      <q-separator />

      <q-tab-panels v-model="tab" animated>
        <q-tab-panel name="login">
          <div class="text-h6">Login</div>
          <Login :tab="tab" />
        </q-tab-panel>
        <q-tab-panel name="cadastro">
          <div class="text-h6">Cadastro</div>
          <Login :tab="tab" />
        </q-tab-panel>
      </q-tab-panels>
    </q-card>
  </q-page>
</template>

<script>
export default {
  name: "AuthPage",
  data() {
    return {
      tab: "login"
    };
  },

  components: {
    Login: require("src/components/Auth/LoginAndRegister").default
  }
};
</script>

<style>
.auth-page {
  max-width: 600px;
  margin: auto;
}
</style>