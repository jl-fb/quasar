<template>
  <q-page padding>
    <q-list bordered padding>
      <q-item-label header>Configurções</q-item-label>
      <q-item tag="label">
        <q-item-section>
          <q-item-label>Mostrar hora em fortamto AM/PM (12h)</q-item-label>
        </q-item-section>
        <q-item-section side>
          <q-toggle color="primary" v-model="changeHourFormat"></q-toggle>
        </q-item-section>
      </q-item>
      <q-item tag="label">
        <q-item-section>
          <q-item-label>Mostrar item em uma única lista</q-item-label>
        </q-item-section>
        <q-item-section side>
          <q-toggle color="primary" v-model="showTaksOneList"></q-toggle>
        </q-item-section>
      </q-item>
    </q-list>
    <q-list bordered padding class="q-mt-lg">
      <q-item-label header>Mais</q-item-label>

      <q-item to="/settings/help" tag="label">
        <q-item-section>
          <q-item-label>Ajuda</q-item-label>
        </q-item-section>
        <q-item-section side>
          <q-icon name="chevron_right" />
        </q-item-section>
      </q-item>
      <q-item @click="visitSite" tag="label">
        <q-item-section>
          <q-item-label>Ir para Website</q-item-label>
        </q-item-section>
        <q-item-section side>
          <q-icon name="chevron_right" />
        </q-item-section>
      </q-item>
      <q-item @click="email" tag="label">
        <q-item-section>
          <q-item-label>Mande um email</q-item-label>
        </q-item-section>
        <q-item-section side>
          <q-icon name="chevron_right" />
        </q-item-section>
      </q-item>
    </q-list>
  </q-page>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import { openURL } from "quasar";
export default {
  name: "PageSettings",
  computed: {
    ...mapGetters("settings", ["settings"]),
    changeHourFormat: {
      get() {
        return this.settings.changeHourFormat;
      },
      set(value) {
        this.setHourFormat(value);
      }
    },
    showTaksOneList: {
      get() {
        return this.settings.showTaksOneList;
      },
      set(value) {
        this.setShowTaksOneList(value);
      }
    }
  },
  methods: {
    ...mapActions("settings", ["setHourFormat", "setShowTaksOneList"]),
    visitSite() {
      openURL("https://github.com");
    },
    email() {
      window.location.href = "mailto:hellow@gmail.com?subject=App Feedback";
    }
  }
};
</script>

<style></style>
