<template>
  <!-- <q-page>
    <div class="q-pa-md absolute full-width full-height column">
      <q-scroll-area class="scroll-area">
        <q-list bordered>
          <Politicos v-for="(politico) in politicos" :key="politico.id" :politico.sync="politico" />
        </q-list>
      </q-scroll-area>
    </div>
  </q-page>-->
  <q-page>
    <div v-if="ready">
      <Tabela />
    </div>
    <div v-else>
      <q-spinner-tail color="primary" size="4em" :thickness="5" class="absolute-center" />
    </div>

    <div>
      <Politicos />
    </div>
  </q-page>
</template>


<script>
import { mapActions, mapState, mapGetters } from "vuex";

export default {
  name: "HomePage",
  data() {
    return {
      data: [{}]
    };
  },
  computed: {
    ...mapState("user", ["ready"])
  },
  methods: {
    ...mapActions("user", ["setPoliticos"])
    // setData() {
    //   let dataFilter = this.politicos.map(value => {
    //     let filter = {
    //       name: value.nome,
    //       id: value.id
    //     };
    //     return filter;
    //   });

    //   this.data.push(...dataFilter);
    // }
  },
  components: {
    Politicos: require("src/components/Politicos/Politicos").default,
    Tabela: require("src/components/Politicos/TabelaPoliticos").default
  }
};
</script>
<style lang="scss">
.scroll-area {
  display: flex;
  flex-grow: 1;
}
</style>
