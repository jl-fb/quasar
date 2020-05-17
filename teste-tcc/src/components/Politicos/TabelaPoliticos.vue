<template>
  <div class="q-pa-md">
    <q-table
      title="Deptados Federais"
      :data="data"
      :columns="columns"
      row-key="name"
      :selection="maxLenghtSelected"
      :selected.sync="selected"
      :filter="filter"
      grid
      hide-header
      :pagination.sync="pagination"
    >
      <template v-slot:top-right>
        <q-input borderless dense debounce="300" v-model="filter" placeholder="Search">
          <template v-slot:append>
            <q-icon name="search" />
          </template>
        </q-input>
      </template>

      <template v-slot:item="props">
        <div
          class="q-pa-xs col-xs-12 col-sm-6 col-md-4 col-lg-3 grid-style-transition"
          :style="props.selected ? 'transform: scale(0.95);' : ''"
        >
          <q-card :class="props.selected ? 'bg-grey-3' : ''">
            <q-card-section class="row justify-between">
              <q-checkbox dense v-model="props.selected" :label="props.row.name" />
              <q-avatar size="70px">
                <img :src="props.row.urlFoto" alt srcset />
              </q-avatar>
            </q-card-section>

            <q-separator />
            <q-list dense>
              <q-item v-for="col in props.cols.filter(col => col.name !== 'desc')" :key="col.name">
                <q-item-section>
                  <q-item-label>{{ col.label }}</q-item-label>
                </q-item-section>
                <q-item-section side>
                  <q-item-label caption>{{ col.value }}</q-item-label>
                </q-item-section>
              </q-item>
            </q-list>
          </q-card>
        </div>
      </template>
    </q-table>
    <div class="q-mt-lg">
      <q-btn
        color="primary"
        outlined
        icon="check"
        label="Selecionar"
        @click="onClick"
        class="absolute-bottom-right q-ma-xs"
      />
    </div>
  </div>
</template>

<script>
import { axiosInstance } from "src/boot/axios";
import {
  showErrorMessage,
  showConfirmDialog
} from "src/functions/show-error-messages";
import { mapActions } from "vuex";
export default {
  name: "TabelaPoliticos",

  data() {
    return {
      selectedRows: "multiple",
      pagination: {
        rowsPerPage: "6"
      },
      selected: [],
      filter: "",
      data: [],
      columns: [
        {
          name: "nome",
          required: true,
          label: "Nome",
          align: "left",
          field: row => row.name,
          format: val => `${val}`,
          sortable: true
        },
        {
          name: "id",
          label: "ID",
          aligin: "center",
          field: "id",
          sortable: true
        },
        {
          name: "siglaPartido",
          label: "Sigla",
          aligin: "center",
          field: "siglaPartido",
          sortable: true
        },
        {
          name: "siglaUf",
          label: "Estado",
          aligin: "center",
          field: "siglaUf",
          sortable: true
        }
      ]
    };
  },
  computed: {
    maxLenghtSelected() {
      if (this.selected.length > 3) {
        return "none";
      } else {
        return "multiple";
      }
    }
  },
  methods: {
    ...mapActions("user", ["setSelectedPolitcos"]),
    async fetchData() {
      await axiosInstance
        .get("/deputados")
        .then(resp => {
          const politicos = resp.data.dados;
          let temp = politicos.map(element => {
            let temp = {
              id: element.id,
              uri: element.uri,
              name: element.nome,
              siglaPartido: element.siglaPartido,
              uriPartido: element.uriPartido,
              siglaUf: element.siglaUf,
              idLegislatura: element.idLegislatura,
              urlFoto: element.urlFoto,
              email: element.email
            };
            return temp;
          });
          this.data.push(...temp);
        })
        .catch(e => {
          showErrorMessage(e.message);
        });
    },

    onClick() {
      console.log(this.selected);
      let temp = this.selected.map(value => {
        let temp = { ...value };
        return temp;
      });
      if (temp.length > 3) {
        return showErrorMessage("Você só pode escolher 3 Deputados");
      } else {
        this.setSelectedPolitcos(temp);
        this.selected = [];
        //TODO rota para componente meostrando politicos selecionados
      }
    }
  },
  computed: {
    maxLenghtSelected() {
      console.log(this.selected.length);
      if (this.selected.length > 3) {
        this.selectedRows = "none";
        showConfirmDialog("Apenas 3 candidatos", this.selected);
        console.log(this.selected.length);
      } else {
        return "multiple";
      }
    }
  },
  created() {
    this.fetchData();
  }
};
</script>

<style>
.grid-style-transition {
  transition: transform 0.28s, background-color 0.28s;
}
</style>