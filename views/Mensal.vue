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
  <label class="label">Matricula</label>
  <div class="control">
    <input class="input"type="text" placeholder="e.g. 545559" v-model="mat">
  </div>
</div>
      <div class="field">
  <label class="label">Nome</label>
  <div class="control">
    <input class="input"type="text" placeholder="e.g Alex Smith" v-model="nome">
  </div>
</div>
    </section>
    <footer class="modal-card-foot">
      <button class="button is-success" @click="addColab">Salvar</button>
      <button class="button">Limpar</button>
    </footer>
  </div>
</div>
<button class="button is-success is-small" @click="modalActive = true"><i class="material-icons">control_point</i></button>
<a class="button is-small is-danger" @click="print"><i class="material-icons">print</i></a>
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
        mat:"",
        d0_hora:"",
        d0_folga:"",
        d1_hora:"",
        d1_folga:"",
        d2_hora:"",
        d2_folga:"",
        d3_hora:"",
        d3_folga:"",
        d4_hora:"",
        d4_folga:""
    }),
        methods: {
            addColab(){
                this.modalActive = false
                return db.ref("setores/" + this.rota).push({mat: this.mat,nome: this.nome,domingos: [
                    {dia: this.d0_folga,hora: this.d0_hora},
                    {dia: this.d1_folga,hora: this.d1_hora},
                    {dia: this.d2_folga,hora: this.d2_hora},
                    {dia: this.d3_folga,hora: this.d3_hora},
                    {dia: this.d4_folga,hora: this.d4_hora}
                    ]})
            },
            print(){
                this.edit = true
                return setTimeout(function(){window.print()}, 2000)
            }
        },

    computed:{
                /*wadd: function () {
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
                },*/
        rota(){
            var url = this.$parent.setor + "/" + this.$parent.inmes
            return url.toLowerCase()}
    },
    components:{
        mensal
    }
}
</script>