<!--<app />-->
<template>
<div>
  <nav class="navbar is-dark" role="navigation" aria-label="main navigation">
  <div class="navbar-menu">
    <div class="navbar-start">
    <div class="navbar-item">Tipo:</div><!--escolher tipo ./views-->
    <div class="navbar-item has-border">
    <input class="is-checkradio is-white" type="radio" value="mensal" name="rota" id="mensal" v-model="rota">
    <label class="is-marginless" for="mensal">Mensal</label>
    <input class="is-checkradio is-white" type="radio" value="interjornada" name="rota" id="interjornada" v-model="rota">
    <label class="is-marginless" for="interjornada">interjornada</label>
  </div>
  <div class="navbar-item">Setor: </div>
   <div class="navbar-item has-dropdown is-hoverable has-border">
  <a class="navbar-link is-arrowless">
    {{setor}}
  </a>
  <div class="navbar-dropdown">
    <a class="navbar-item" v-for="set in setores" @click="setor = set">
      {{set}}
    </a>
  </div>
</div>
    </div><!--end navbar-start-->
    <div class="navbar-end">
<div class="navbar-item">Mês:</div>
        <div class="navbar-item"><flat-pickr class="input" :config="mconfig" v-model="monthpick"/></div><!--data: {monthpick: ""}-->
      <!--<div class="navbar-item">
      <div class="field is-grouped">
          <p class="control"><router-link class="button is-rounded" exact-active-class="is-primary" tag="button" :to="{query: {setor:'fastfood'}}">Fast-Food</router-link></p>
        </div>
       </div>-->
    <div class="navbar-item">
        <div class="field">
            <router-link class="button is-primary" :to="{name: rota, params:{setor: setor}}"><i class="material-icons">
send
</i></a>
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
<div class="level-item has-text-weight-bold has-text-centered">Escala<br> {{monthpick}}<br>Setor: </div>
<div class="level-right"><p class="content is-small">______ COMERCIO E IND. LTDA<br>ROD          KM    -          -         <br>CNPJ:  .   .   /    /-   </p></div>
</div>
</div>
  <div class="panel-block">
    <div>
<router-view></router-view>
    </div>
  </div>
  </div><!--panel-->
  <div class="modal" :class="{'is-active': modalActive}">
  <div class="modal-background"></div>
  <div class="modal-card">
    <header class="modal-card-head">
      <p class="modal-card-title">Novo Colaborador</p>
      <button class="delete" aria-label="close" @click="reload"></button>
    </header>
    <section class="modal-card-body">
      <div class="field">
  <label class="label">Nome</label>
  <div class="control">
    <input class="input" v-model="nome" type="text" placeholder="e.g Alex Smith">
  </div>
</div>

<div class="field">
  <label class="label">Matricula</label>
  <div class="control">
    <input class="input" v-model="mat" type="text" placeholder="e.g. 545559">
  </div>
</div>
    </section>
    <footer class="modal-card-foot">
      <button class="button is-success" >Salvar</button>
      <button class="button" @click="mat = '';nome = ''">Limpar</button>
    </footer>
  </div>
</div>
<!--pane 2-->
  <div class="modal" :class="{'is-active': hmodalActive}">
  <div class="modal-background"></div>
  <div class="modal-card">
    <header class="modal-card-head">
      <p class="modal-card-title">Novo Colaborador</p>
      <button class="delete" aria-label="close" @click="reload"></button>
    </header>
    <section class="modal-card-body">
      <div class="field">
  <label class="label">Codigo</label>
  <div class="control">
    <input class="input" v-model="cod" type="text" placeholder="56986">
  </div>
</div>

<div class="field">
  <label class="label">Horario</label>
  <div class="control">
    <input class="input" v-model="hora" type="text" placeholder="10:00-13:00/14:00-18:00">
  </div>
</div>
    </section>
    <footer class="modal-card-foot">
      <button class="button is-success" >Salvar</button>
      <button class="button" @click="cod = '';hora = ''">Limpar</button>
    </footer>
  </div>
</div>
</div>
</template>
<script>

    import 'flatpickr/dist/plugins/monthSelect/style.css'
	import flatPickr from 'vue-flatpickr-component'
	import 'flatpickr/dist/flatpickr.css'
	import { Portuguese } from 'flatpickr/dist/l10n/pt.js'
  import moment from 'moment'
  import 'moment/locale/pt-br'
  moment.locale('pt-br')

	export default {
		name: 'App',
         methods: {
          reload:function(){
            return setTimeout(document.location.reload(),2000)
          },
           /* addColab: function() {
                return this.$pouchdbRefs.db.put( this.$route.query.setor, {mat: this.mat, nome: this.nome, weeks:this.wadd});
            },*/
           /* addTime: function() {
                return this.$pouchdbRefs.db.put("horario", {cod: this.cod, hora: this.hora});
            }*/
        },
    computed:{
       // retorna um Array com todos os domingos do ano, que é usado para adiçao no BD atraves de addColab/addTime
      wadd:function(){
                var weeks = [];
                var i = weeks.length
                while (i < 52){
                  
                   weeks.push({dia:moment(this.validateDate).add(i++,'w').format('DD/MMM'),horario:{cod:99,hora:"12:00"}})
                    
                };
                return weeks
            },
            		validateDate: function () {
			var initDate = moment("Janeiro", "MMMM").startOf('month').toObject();
			if (moment(initDate).weekday() == 0) {
				return moment(initDate).toObject()
			} else {
				return moment(initDate).startOf('week').add(1, 'week').toObject()
			}
		}},
        //
		data: function(){
			return {
            monthpick: moment(new Date()).format('MMMM YYYY'),
            modalActive: false,
            hmodalActive: false,
            mat: "",
            rota: "",
            nome: "",
            setor: "Selecionar...",
            setores: ["horti-fruti","peixaria","fast-food"],      
			mconfig:{
            locale: Portuguese,
            plugins:[new monthSelectPlugin({
            dateFormat: "F Y",
        })
    ]}}
		},
		components:{
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