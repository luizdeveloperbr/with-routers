<template>
<div>
  <mensal :id="rota" :get-date="$parent.monthpick"></mensal>
    <div class="modal" :class="{'is-active': modalActive}">
  <div class="modal-background"></div>
  <div class="modal-card">
    <header class="modal-card-head">
      <p class="modal-card-title">Novo Colaborador</p>
      <button class="delete" aria-label="close" @click="modalActive = false"></button>
    </header>
    <section class="modal-card-body">
      <div class="field">
  <label class="label">Nome</label>
  <div class="control">
    <input class="input"type="text" placeholder="e.g Alex Smith" v-model="nome">
  </div>
</div>

<div class="field">
  <label class="label">Matricula</label>
  <div class="control">
    <input class="input"type="text" placeholder="e.g. 545559" v-model="mat">
  </div>
</div>
    </section>
    <footer class="modal-card-foot">
      <button class="button is-success" @click="addColab">Salvar</button>
      <button class="button">Limpar</button>
    </footer>
  </div>
</div>
</div>
</template>
<script>
import {db} from '../db'
import mensal from './Mensalcomp.vue'
import moment from 'moment'
export default {
    data: () => ({
        modalActive: false,
        nome:"",
        mat:""}),
        methods: {
            addColab(){
                return db.ref("setores" + this.rota).push({mat: this.mat,nome: this.nome, weeks: this.wadd})
            }
        },
    computed:{
                wadd: function () {
            var weeks = [];
            var i = weeks.length
            while (i < 52) {

                weeks.push({
                    dia: moment(this.$parent.validateDate).add(i++, 'w').format('DD/MMM'),
                    horario: {
                        cod: 99,
                        hora: "12:00"
                    }
                })

            };
            return weeks
        },
        rota(){
            var url = this.$parent.setor + "/" + this.$parent.inmes
            return url.toLowerCase()}
    },
    components:{
        mensal
    }
}
</script>