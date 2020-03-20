<!--Home.vue-->
<template>
  <table class="table is-striped">
    <tr id="head-list" class="has-text-centered">
      <td></td>
      <td></td>
      <td></td>
      <td>Domingo</td>
      <td></td>
      <td>Domingo</td>
      <td></td>
      <td>Domingo</td>
      <td></td>
      <td>Domingo</td>
      <td></td>
      <td v-if="condFivDom">Domingo</td>
      <td v-if="condFivDom"></td>
    </tr>
    <tr id="head-list" class="has-text-centered">
      <td>Matricula</td>
      <td>Colaborador</td>
      <td>Retorno</td>
      <td><domingo add-weeks="0" ref="D_1"></domingo></td>
      <td>folga</td>
      <td><domingo add-weeks="1" ref="D_2"></domingo></td>
      <td>folga</td>
      <td><domingo add-weeks="2" ref="D_3"></domingo></td>
      <td>folga</td>
      <td><domingo add-weeks="3" ref="D_4"></domingo></td>
      <td>folga</td>
      <td v-show="condFivDom"><domingo add-weeks="4" ref="D_5"></domingo></td>
      <td v-if="condFivDom">folga</td>
    </tr>
    <tr v-for="colab in banco" id="list">
      <td style="padding-left: 5px!important">{{ colab.mat }}</td>
      <td style="padding-left: 5px!important">{{ colab.nome }}</td>
      <td></td>
      <td class="is-size-7" style="min-width: 160px">
        {{ colab.domingos[0].hora }}
      </td>
      <td>
        <!-- data da folga -->
        <folga
          :get-date="colab.domingos[0].dia"
          :get-dom="$refs.D_1.display"
          :clear="disabled"
        ></folga>
      </td>
      <td class="is-size-7" style="min-width: 160px">
        <!--dropdown para seleção dos horarios -->
        <!--<time-entrance :clear="disabled"></time-entrance>-->
        {{ colab.domingos[1].hora }}
      </td>
      <td>
        <folga
          :get-date="colab.domingos[1].dia"
          :get-dom="$refs.D_2.display"
          :clear="disabled"
        ></folga>
      </td>
      <td class="is-size-7" style="min-width: 160px">
        <!--dropdown para seleção dos horarios -->
        {{ colab.domingos[2].hora }}
      </td>
      <td>
        <folga
          :get-date="colab.domingos[2].dia"
          :get-dom="$refs.D_3.display"
          :clear="disabled"
        ></folga>
      </td>
      <td class="is-size-7" style="min-width: 160px">
        <!--dropdown para seleção dos horarios -->
        {{ colab.domingos[3].hora }}
      </td>
      <td>
        <folga
          :get-date="colab.domingos[3].dia"
          :get-dom="$refs.D_4.display"
          :clear="disabled"
        ></folga>
      </td>
      <td class="is-size-7" style="min-width: 160px" v-if="condFivDom">
        {{ colab.domingos[4].hora }}
      </td>
      <td v-if="condFivDom">
        <folga
          :get-date="colab.domingos[4].dia"
          :get-dom="$refs.D_5.display"
          :clear="disabled"
        ></folga>
      </td>
    </tr>
    <tr>
      <!-- inicio input de entrada -->
      <td>
        <input
          class="input is-small"
          type="text"
          placeholder="Matricula"
          v-model="mat"
        />
      </td>
      <td>
        <input
          class="input is-small"
          type="text"
          placeholder="Nome do Colaborador"
          v-model="nome"
        />
      </td>
      <td></td>
      <td><time-entrance v-model="d0_hora" :disable="$parent.edit"></time-entrance></td>
      <td>folga</td>
      <td><time-entrance v-model="d1_hora" :disable="$parent.edit"></time-entrance></td>
      <td>folga</td>
      <td><time-entrance v-model="d2_hora" :disable="$parent.edit"></time-entrance></td>
      <td>folga</td>
      <td><time-entrance v-model="d3_hora" :disable="$parent.edit"></time-entrance></td>
      <td>folga</td>
      <td><time-entrance v-model="d4_hora" :disable="$parent.edit"></time-entrance></td>
      <td>folga</td>
      <td>
        <button class="button is-success" @click="addColab">Salvar</button>
      </td>
    </tr>
  </table>
</template>
<script>
import { db } from "../db";
import moment from "moment";
import "moment/locale/pt-br";
moment.locale("pt-br");
import folga from "../components/folga.vue";
import domingo from "../components/domingo.vue";
import timeEntrance from "../components/timeEntrance.vue";
const setores = db.ref("setores");
export default {
  name: "mensal",
  props: ["id", "getDate", "disabled"],
  data: function() {
    return {
      banco: [],
      nome: "",
      mat: "",
      edit: false,
      d0_hora: "",
      d0_folga: "",
      d1_hora: "",
      d1_folga: "",
      d2_hora: "",
      d2_folga: "",
      d3_hora: "",
      d3_folga: "",
      d4_hora: "",
      d4_folga: ""
    };
  },
  methods: {
    addColab() {
      this.modalActive = false;
      return db.ref("setores/" + this.id).push({
        mat: this.mat,
        nome: this.nome,
        domingos: [
          { dia: this.d0_folga, hora: this.d0_hora },
          { dia: this.d1_folga, hora: this.d1_hora },
          { dia: this.d2_folga, hora: this.d2_hora },
          { dia: this.d3_folga, hora: this.d3_hora },
          { dia: this.d4_folga, hora: this.d4_hora }
        ]
      });
    }
  },
  computed: {
    condFivDom: function() {
      return (
        moment(this.validateDate)
          .add(3, "w")
          .month() ==
        moment(this.validateDate)
          .add(4, "w")
          .month()
      );
    },
    validateDate: function() {
      var initDate = moment(this.getDate, "MMMM YYYY")
        .startOf("month")
        .toDate();
      if (moment(initDate).weekday() == 0) {
        return moment(initDate).toObject();
      } else {
        return moment(initDate)
          .startOf("week")
          .add(1, "week")
          .toObject();
      }
    }
  },
  components: {
    folga,
    domingo,
    timeEntrance
  },
  watch: {
    id: {
      immediate: true,
      handler(id) {
        this.$rtdbBind("banco", setores.child(id));
      }
    }
  }
};
</script>
<style>
#list > td {
  padding: 0px;
}
#head-list > td {
  text-align: center;
}
</style>
