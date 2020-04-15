<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated>
      <q-toolbar>
        <q-toolbar-title class="absolute-center">Shop List</q-toolbar-title>
        <q-btn
          v-if="!loggedIn"
          label="Login"
          icon-right="account_circle"
          flat
          class="absolute-right"
          to="/auth"
        ></q-btn>
        <q-btn
          v-else
          @click="logoutUser"
          label="Logout"
          icon-right="account_circle"
          flat
          class="absolute-right"
        ></q-btn>
      </q-toolbar>
    </q-header>
    <q-footer>
      <q-tabs class="q-pa-sm">
        <q-route-tab
          dense
          v-for="link in essentialLinks"
          :key="link.title"
          :icon="link.icon"
          :label="link.title"
          :to="link.link"
          exact
        />
      </q-tabs>
    </q-footer>
    <q-drawer
      :width="250"
      v-model="leftDrawerOpen"
      :breakpoint="779"
      show-if-above
      bordered
      content-class="bg-grey-1"
    >
      <q-list>
        <q-item-label header class="text-grey-8">Navigation Menu</q-item-label>
        <EssentialLink v-for="link in essentialLinks" :key="link.title" v-bind="link" />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { mapState, mapActions } from "vuex";
import EssentialLink from "components/EssentialLink";

export default {
  name: "Layout",

  components: {
    EssentialLink
  },

  data() {
    return {
      leftDrawerOpen: false,
      essentialLinks: [
        {
          title: "Todo",
          icon: "list",
          link: "/"
        },
        {
          title: "Settings",
          icon: "settings",
          link: "/settings"
        }
        // {
        //   title: "Github",
        //   caption: "github.com/quasarframework",
        //   icon: "code",
        //   link: "https://github.com/quasarframework"
        // },
        // {
        //   title: "Discord Chat Channel",
        //   caption: "chat.quasar.dev",
        //   icon: "chat",
        //   link: "https://chat.quasar.dev"
        // },
        // {
        //   title: "Forum",
        //   caption: "forum.quasar.dev",
        //   icon: "record_voice_over",
        //   link: "https://forum.quasar.dev"
        // },
        // {
        //   title: "Twitter",
        //   caption: "@quasarframework",
        //   icon: "rss_feed",
        //   link: "https://twitter.quasar.dev"
        // },
        // {
        //   title: "Facebook",
        //   caption: "@QuasarFramework",
        //   icon: "public",
        //   link: "https://facebook.quasar.dev"
        // }
      ]
    };
  },
  computed: {
    ...mapState("auth", ["loggedIn"])
  },
  methods: {
    ...mapActions("auth", ["logoutUser"])
  }
};
</script>
<style>
@media screen and (min-width: 768px) {
  .q-footer {
    display: none;
  }
}
</style>
