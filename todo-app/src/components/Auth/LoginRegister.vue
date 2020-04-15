<template>
  <q-form ref="form" @submit.prevent="onSubmit" class="q-gutter-md">
    <div class="q-mb-md">
      <q-banner>
        <template v-slot:avatar>
          <q-icon name="account_circle" color="primary" />
        </template>
        {{tab == 'login' ? 'Faça o Login' : "Cadastre-se"}} para acessar sua lista em qualquer lugar!
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
    </div>
  </q-form>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "Register",
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
      this.$refs.form.validate().then(valid => {
        if (valid) {
          if (this.tab == "login") {
            this.loginUser(this.formData);
          } else {
            this.registerUser(this.formData);
          }
        }
      });
    }
  }
};
</script>

<style>
</style>