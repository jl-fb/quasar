<template>
  <q-item>
    <q-item-section side>
      <q-avatar size="70px">
        <img :src="politico.urlFoto" alt="Foto do candidato" />
      </q-avatar>
    </q-item-section>
    <q-item-section>
      <q-item-label>{{politico.nome}}</q-item-label>
      <q-item-label>{{politico.email}}</q-item-label>
    </q-item-section>
    <q-item-section side top>
      <q-item-label caption>{{politico.siglaPartido}}</q-item-label>
    </q-item-section>
  </q-item>
</template>

<script>
import { openURL } from "quasar";
export default {
  name: "Politicos",
  props: ["politico"],
  methods: {
    visiteSite(url) {
      openURL(url);
    }
  },
  mounted() {
    //console.log(this.politicos);
  }
};
</script>

<style>
</style>