<!--<app />-->
<template>
  <div>
    <nav class="navbar is-dark" role="navigation" aria-label="main navigation">
      <div class="navbar-menu">
        <div class="navbar-start">
          <!-- begin navbar start -->
          <div class="navbar-item">Tipo:</div>
          <div class="navbar-item has-border">
            <input class="is-checkradio is-white" type="radio" value="mensal" name="rota" id="mensal" v-model="rota">
            <label class="is-marginless" for="mensal">Mensal</label>
            <input class="is-checkradio is-white" type="radio" value="interjornada" name="rota" id="interjornada" v-model="rota">
            <label class="is-marginless" for="interjornada">interjornada</label>
          </div>
          <div class="navbar-item">Setor: </div>
          <div class="navbar-item has-dropdown is-hoverable has-border">
            <a class="navbar-link is-arrowless is-uppercase">
    {{setor}}
  </a>
            <div class="navbar-dropdown">
              <a class="navbar-item is-uppercase" v-for="set in setores" @click="setor = set">
      {{set}}
    </a>
            </div>
          </div>
        </div>
        <!--end navbar-start-->
        <div class="navbar-end">
          <div class="navbar-item">Mês:</div>
          <div class="navbar-item">
            <flat-pickr class="input" :config="mconfig" v-model="monthpick">
          </div>
          <!--data: {monthpick: ""}-->
          <div class="navbar-item">
            <div class="field">
              <router-link class="button is-primary" :to="{name: rota, params:{setor: setor, mes: inmes}}"><i class="material-icons">send</i></router-link>
            </div>
          </div>
        </div>
      </div>
    </nav>
    <div class="panel" style="margin:20px">
      <div class="panel-heading">
        <div class="level">
          <div class="level-left">
            <img class="level-item" src="" />
          </div>
          <div class="level-item has-text-weight-bold has-text-centered">Escala
            <br> {{monthpick}}
            <br>Setor: {{setor}}</div>
          <div class="level-right">
            <p class="content is-small">______ COMERCIO E IND. LTDA
              <br>ROD KM - -
              <br>CNPJ: . . / /- </p>
          </div>
        </div>
      </div>
      <div class="panel-block">
        <div>
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import 'flatpickr/dist/plugins/monthSelect/style.css'
import flatPickr from 'vue-flatpickr-component'
import 'flatpickr/dist/flatpickr.css'
import {
    Portuguese
} from 'flatpickr/dist/l10n/pt.js'
import moment from 'moment'
import 'moment/locale/pt-br'
moment.locale('pt-br')

export default {
    name: 'App',
    methods: {
        reload: function () {
            return setTimeout(document.location.reload(), 2000)
        },
        /* addColab: function() {
             return this.$pouchdbRefs.db.put( this.$route.query.setor, {mat: this.mat, nome: this.nome, weeks:this.wadd});
         },*/
        /* addTime: function() {
             return this.$pouchdbRefs.db.put("horario", {cod: this.cod, hora: this.hora});
         }*/
    },
    computed: {
        inmes() {
            return moment(this.monthpick, "MMMM YYYY").format('MMMM')
        },
        // retorna um Array com todos os domingos do ano, que é usado para adiçao no BD atraves de addColab/addTime
        validateDate: function () {
            var initDate = moment("Janeiro", "MMMM").startOf('month').toObject();
            if (moment(initDate).weekday() == 0) {
                return moment(initDate).toObject()
            } else {
                return moment(initDate).startOf('week').add(1, 'week').toObject()
            }
        }
    },
    //
    data: function () {
        return {
            monthpick: moment(new Date()).format('MMMM YYYY'),
            cod: 0,
            hora: "",
            rota: "",
            setor: "Selecionar...",
            setores: ["horti-fruti", "peixaria", "fastfood"],
            mconfig: {
                locale: Portuguese,
                plugins: [new monthSelectPlugin({
                    dateFormat: "F Y",
                })]
            }
        }
    },
    components: {
        flatPickr
    }
}
</script>
<style lang="scss">
@charset 'utf-8';
$primary: hsl(1.5, 100%, 47.8%);
@import './node_modules/bulma/bulma.sass';
@import './node_modules/bulma-checkradio/dist/css/bulma-checkradio.sass';
.has-border {
    border-style: solid;
    border-radius: 10px;
    border-width: 1px;
    };
</style>