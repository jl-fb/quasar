<template>
  <q-form ref="form" @submit.prevent="onSubmit" @reset="onReset" class="q-gutter-md">
    <div class="q-mb-md">
      <q-banner>
        <template v-slot:avatar>
          <q-icon name="account_circle" color="primary" />
        </template>
        {{tab == 'login' ? 'Faça o Login' : "Cadastre-se"}} para ter acesso as propostas de seu candidato!
      </q-banner>
    </div>

    <div>
      <q-input
        class="q-mb-md"
        outlined
        lazy-rules
        :rules="[val => isValidEmail(val) || 'Email não válido']"
        v-model="formData.email"
        type="text"
        label="E-mail"
      />
      <q-input
        class="q-mb-md"
        outlined
        lazy-rules
        :rules="[val => val.length > 5 || 'Senha precisa ter no mínimo 6 carácteres']"
        v-model="formData.password"
        type="password"
        label="Senha"
      />
    </div>
    <div class="row justify-end">
      <q-btn :label="tab == 'login' ? 'Login' :'Cadastre-se'" type="submit" color="primary" />
      <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
    </div>
  </q-form>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "LoginAndRegister",
  props: ["tab"],
  data() {
    return {
      formData: {
        email: "",
        password: ""
      }
    };
  },
  methods: {
    ...mapActions("auth", ["registerUser", "loginUser"]),
    isValidEmail(email) {
      let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(email).toLowerCase());
    },
    onSubmit() {
      console.log(this.$refs.form.validate());

      this.$refs.form.validate().then(valid => {
        if (valid) {
          if (this.tab === "login") {
            console.log("login");

            this.loginUser(this.formData);
          } else {
            console.log("Cdastro");

            this.registerUser(this.formData);
          }
        }
      });
    },
    onReset() {
      this.formData = {
        email: "",
        password: ""
      };
    }
  }
};
</script>

<style>
</style>