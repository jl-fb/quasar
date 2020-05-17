<template>
  <div class="q-pa-md div-card">
    <q-toolbar class="bg-primary text-white shadow-2">
      <q-toolbar-title>Deputados</q-toolbar-title>
    </q-toolbar>
    <q-list bordered>
      <q-item v-for="politico  in politicos" :key="politico.id" class="q-my-sm" v-ripple>
        <q-item-section>
          <q-card class="my-card">
            <q-item>
              <q-item-section avatar>
                <q-avatar>
                  <img :src="politico.urlFoto" />
                </q-avatar>
              </q-item-section>

              <q-item-section>
                <q-item-label>{{politico.nome}}</q-item-label>
                <q-item-label
                  caption
                  class="cursor-pointer"
                  @click="openEmail(politico.email)"
                >{{politico.email}}</q-item-label>
              </q-item-section>
              <q-item-section side>
                <q-item-label caption>{{politico.siglaPartido}}</q-item-label>
              </q-item-section>
            </q-item>
          </q-card>
        </q-item-section>
      </q-item>
    </q-list>
  </div>
</template>

<script>
import { openURL } from "quasar";
import { mapState } from "vuex";
export default {
  name: "Politicos",
  computed: {
    ...mapState("user", ["politicos"])
  },
  methods: {
    openEmail(email) {
      window.location.href = `mailto:${email}`;
    }
  },
  mounted() {
    //console.log(this.politicos);
  }
};
</script>

<style lang="scss">
.div-card {
  width: 50%;

  .my-card:hover {
    background-color: rgba(233, 230, 227, 0.904);
  }
}
</style>