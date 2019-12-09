<!--Home.vue-->
<template>
<table class="table is-striped">
<tr id="head-list">
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
<tr id="head-list">
	<td>Mat</td>
	<td>Colaborador</td>
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
<tr v-for="colab in colabList" id="list">
  <td>{{colab.mat}}</td>
  <td>{{colab.nome}}</td>
  <td>
<time-entrance :time-list="colab.weeks[$refs.D_1.W].horario"></time-entrance>
</td>
<td><!-- data da folga-->
  <folga :get-date="colab.weeks[$refs.D_1.W].dia" :ref="colab.mat + 'F_1'"></folga>
</td>
<td> <!--dropdown para seleção dos horarios-->
<time-entrance :time-list="colab.weeks[$refs.D_2.W].horario"></time-entrance>
</td>
<td>  <folga :get-date="colab.weeks[$refs.D_2.W].dia"></folga></td>
<td> <!--dropdown para seleção dos horarios-->
  <time-entrance :time-list="colab.weeks[$refs.D_3.W].horario"></time-entrance>
</td>
<td>  <folga :get-date="colab.weeks[$refs.D_3.W].dia" :get-prev-folg="colab.mat + 'F_1'"></folga></td>
<td> <!--dropdown para seleção dos horarios-->
  <time-entrance :time-list="colab.weeks[$refs.D_4.W].horario"></time-entrance>
</td>
<td>  <folga :get-date="colab.weeks[$refs.D_4.W].dia"></folga></td>
<td v-if="condFivDom">
  <time-entrance :time-list="colab.weeks[$refs.D_5.W].horario"></time-entrance>
</td>
<td v-if="condFivDom">  <folga :get-date="colab.weeks[$refs.D_5.W].dia"></folga></td>
</tr>
</table>
</template>
<script>
    import moment from 'moment'
    import 'moment/locale/pt-br'
    moment.locale('pt-br')
    import folga from '../components/folga.vue'
    import domingo from '../components/domingo.vue'
        import timeEntrance from '../components/timeEntrance.vue'
	export default {
		name: 'mensal',
        pouchdb:{
			db:{
				localDB: "db"
			}
		},
		computed:{
        	colabList:function() {
                 switch (this.$route.query.setor) {
                    case "mercearia": return this.db.mercearia;
                    case "horti": return this.db.horti
                } return console.log("selecione um setor")
			},
        condFivDom:function () {
            return moment(this.validateDate).add(3,"w").month() == moment(this.validateDate).add(4,"w").month();
        },
		validateDate: function () {
			var initDate = moment(this.$parent.monthpick, "MMMM YYYY").startOf('month').toDate();
			if (moment(initDate).weekday() == 0) {
				return moment(initDate).toObject()
			} else {
				return moment(initDate).startOf('week').add(1, 'week').toObject()
			}
		}
		},
		components:{
			folga,domingo,timeEntrance
		}
	}
</script>
<style>
#list > td {padding: 0px!important}
#head-list > td {text-align: center!important}
</style>