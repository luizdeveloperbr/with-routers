<!--Home.vue-->
<template>
  <div class="table-container">
    <table class="table is-bordered">
      <tr id="head-list" class="has-text-centered">
        <td :class="{ 'is-hidden': $parent.edit }">
          Excluir
        </td>
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
        <td :class="{ 'is-hidden': $parent.edit }">
          <input type="checkbox" name="remove" v-model="rem" />
        </td>
        <td class="mat-ret">Matricula</td>
        <td>Colaborador</td>
        <td class="mat-ret">Retorno</td>
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
      <tr v-for="(colab, index) in banco" :class="{ 'is-selected': rem }">
        <td :class="{ 'is-hidden': $parent.edit }">
          <a
            class="button is-primary is-small"
            @click="remColab(colab['.key'])"
            v-show="rem"
            ><i class="material-icons">clear</i></a
          >
        </td>
        <td>{{ colab.mat }}</td>
        <td>{{ colab.nome }}</td>
        <td>
          <!-- <input
            type="text"
            v-model="updat"
            @change="fupdate(colab['.key'], index)"
          />-->
        </td>
        <td class="has-text-centered hora">
          <time-entrance
            v-model="d0_hora"
            @input="update_d0_hora(colab['.key'], 0)"
            v-if="rem"
          ></time-entrance>
          <span v-else>{{ colab.domingos[0].hora }}</span>
        </td>
        <td class="is-size-7 has-text-centered">
          <flat-pickr
            class="input is-size-7 is-focused"
            :config="config"
            v-model="d0_folga"
            style="width: 70px"
            @on-change="update_d0_dia(colab['.key'], 0)"
            v-if="rem"
          ></flat-pickr>
          <span v-else>{{ colab.domingos[0].dia }}</span>
        </td>
        <td class="has-text-centered hora">
          <time-entrance
            v-model="d1_hora"
            @input="update_d1_hora(colab['.key'], 1)"
            v-if="rem"
          ></time-entrance>
          <span v-else>{{ colab.domingos[1].hora }}</span>
        </td>
        <td class="is-size-7 has-text-centered">
          <flat-pickr
            class="input is-size-7 is-focused"
            :config="config"
            v-model="d1_folga"
            style="width: 70px"
            @on-change="update_d1_dia(colab['.key'], 1)"
            v-if="rem"
          ></flat-pickr>
          <span v-else>{{ colab.domingos[1].dia }}</span>
        </td>
        <td class="has-text-centered hora">
          <time-entrance
            v-model="d2_hora"
            @input="update_d2_hora(colab['.key'], 2)"
            v-if="rem"
          ></time-entrance>
          <span v-else>{{ colab.domingos[2].hora }}</span>
        </td>
        <td class="is-size-7 has-text-centered">
          <flat-pickr
            class="input is-size-7 is-focused"
            :config="config"
            v-model="d2_folga"
            style="width: 70px"
            @on-change="update_d2_dia(colab['.key'], 2)"
            v-if="rem"
          ></flat-pickr>
          <span v-else>{{ colab.domingos[2].dia }}</span>
        </td>
        <td class="has-text-centered hora">
          <time-entrance
            v-model="d3_hora"
            @input="update_d3_hora(colab['.key'], 3)"
            v-if="rem"
          ></time-entrance>
          <span v-else>{{ colab.domingos[3].hora }}</span>
        </td>
        <td class="is-size-7 has-text-centered">
          <flat-pickr
            class="input is-size-7 is-focused"
            :config="config"
            v-model="d3_folga"
            style="width: 70px"
            @on-change="update_d3_dia(colab['.key'], 3)"
            v-if="rem"
          ></flat-pickr>
          <span v-else>{{ colab.domingos[3].dia }}</span>
        </td>
        <td class="has-text-centered hora" v-if="condFivDom">
          <time-entrance
            v-model="d4_hora"
            @input="update_d4_hora(colab['.key'], 4)"
            v-if="rem"
          ></time-entrance>
          <span v-else>{{ colab.domingos[4].hora }}</span>
        </td>
        <td v-if="condFivDom" class="is-size-7 has-text-centered">
          <flat-pickr
            class="input is-size-7 is-focused"
            :config="config"
            v-model="d0_folga"
            style="width: 70px"
            @on-change="update_d4_dia(colab['.key'], 4)"
            v-if="rem"
          ></flat-pickr>
          <span v-else>{{ colab.domingos[4].dia }}</span>
        </td>
      </tr>
      <tr class="list" :class="{ 'is-hidden': $parent.edit }">
        <td></td>
        <!-- inicio input de entrada -->
        <td>
          <input
            class="input is-small is-focused"
            type="text"
            placeholder="Matricula"
            v-model="mat"
          />
        </td>
        <td>
          <input
            class="input is-small is-focused"
            type="text"
            placeholder="Nome do Colaborador"
            v-model="nome"
          />
        </td>
        <td></td>
        <td>
          <time-entrance v-model="d0_hora"></time-entrance>
        </td>
        <td>
          <flat-pickr
            class="input is-size-7 is-focused"
            :config="config"
            v-model="d0_folga"
            style="width: 70px"
          ></flat-pickr>
        </td>
        <td>
          <time-entrance v-model="d1_hora"></time-entrance>
        </td>
        <td>
          <flat-pickr
            class="input is-size-7 is-focused"
            :config="config"
            v-model="d1_folga"
            style="width: 70px"
          ></flat-pickr>
        </td>
        <td>
          <time-entrance v-model="d2_hora"></time-entrance>
        </td>
        <td>
          <flat-pickr
            class="input is-size-7 is-focused"
            :config="config"
            v-model="d2_folga"
            style="width: 70px"
          ></flat-pickr>
        </td>
        <td>
          <time-entrance v-model="d3_hora"></time-entrance>
        </td>
        <td>
          <flat-pickr
            class="input is-size-7 is-focused"
            :config="config"
            v-model="d3_folga"
            style="width: 70px"
          ></flat-pickr>
        </td>
        <td v-if="condFivDom">
          <time-entrance v-model="d4_hora"></time-entrance>
        </td>
        <td v-if="condFivDom">
          <flat-pickr
            class="input is-size-7 is-focused"
            :config="config"
            v-model="d4_folga"
            style="width: 70px"
          ></flat-pickr>
        </td>
      </tr>
      <tr :class="{ 'is-hidden': $parent.edit }">
        <td class="mat-ret">
          <button class="button is-success" @click="addColab">Salvar</button>
        </td>
        <td class="mat-ret">
          <button class="button is-primary" @click="clearAdd">Limpar</button>
        </td>
      </tr>
    </table>
  </div>
</template>
<script>
import { db } from "../db";
import moment from "moment";
import "moment/locale/pt-br";
moment.locale("pt-br");
import { Portuguese } from "flatpickr/dist/l10n/pt.js";
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
      updat: "",
      rem: false,
      d0_hora: "",
      d0_folga: "",
      d1_hora: "",
      d1_folga: "",
      d2_hora: "",
      d2_folga: "",
      d3_hora: "",
      d3_folga: "",
      d4_hora: "",
      d4_folga: "",
      config: {
        dateFormat: "D,d/m",
        locale: Portuguese
      }
    };
  },
  methods: {
    addColab() {
      this.modalActive = false;
      return db
        .ref("setores/" + this.id)
        .push({
          mat: this.mat,
          nome: this.nome,
          edit: false,
          domingos: [
            { dia: this.d0_folga, hora: this.d0_hora },
            { dia: this.d1_folga, hora: this.d1_hora },
            { dia: this.d2_folga, hora: this.d2_hora },
            { dia: this.d3_folga, hora: this.d3_hora },
            { dia: this.d4_folga, hora: this.d4_hora }
          ]
        })
        .then(this.clearAdd());
    },
    remColab(idColab) {
      this.$firebaseRefs.banco.child(idColab).remove();
    },
    // funçoes de update hora
    update_d0_hora(k, i) {
      var url = k + "/domingos/" + i;
      this.$firebaseRefs.banco.child(url).update({ hora: this.d0_hora });
    },
    update_d1_hora(k, i) {
      var url = k + "/domingos/" + i;
      this.$firebaseRefs.banco.child(url).update({ hora: this.d1_hora });
    },
    update_d2_hora(k, i) {
      var url = k + "/domingos/" + i;
      this.$firebaseRefs.banco.child(url).update({ hora: this.d2_hora });
    },
    update_d3_hora(k, i) {
      var url = k + "/domingos/" + i;
      this.$firebaseRefs.banco.child(url).update({ hora: this.d3_hora });
    },
    update_d4_hora(k, i) {
      var url = k + "/domingos/" + i;
      this.$firebaseRefs.banco.child(url).update({ hora: this.d4_hora });
    },
    // fim função e update
    // funçoes de update dia
    update_d0_dia(k, i) {
      var url = k + "/domingos/" + i;
      this.$firebaseRefs.banco.child(url).update({ dia: this.d0_folga });
    },
    update_d1_dia(k, i) {
      var url = k + "/domingos/" + i;
      this.$firebaseRefs.banco.child(url).update({ dia: this.d1_folga });
    },
    update_d2_dia(k, i) {
      var url = k + "/domingos/" + i;
      this.$firebaseRefs.banco.child(url).update({ dia: this.d2_folga });
    },
    update_d3_dia(k, i) {
      var url = k + "/domingos/" + i;
      this.$firebaseRefs.banco.child(url).update({ dia: this.d3_folga });
    },
    update_d4_dia(k, i) {
      var url = k + "/domingos/" + i;
      this.$firebaseRefs.banco.child(url).update({ dia: this.d4_folga });
    },
    clearAdd() {
      this.mat = "";
      this.nome = "";
      this.d0_folga = "";
      this.d0_hora = "";
      this.d1_folga = "";
      this.d1_hora = "";
      this.d2_folga = "";
      this.d2_hora = "";
      this.d3_folga = "";
      this.d3_hora = "";
      this.d4_folga = "";
      this.d4_hora = "";
      return console.log("Dados Apagados");
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
.hora {
  padding-left: 0px !important;
  padding-right: 0px !important;
  max-width: 150px;
}
.list > td {
  padding: 5px !important;
}
#head-list > td {
  text-align: center;
}
.mat-ret {
  padding-left: 4px !important;
  padding-right: 4px !important;
}
</style>
