<!--Home.vue-->
<template>
<table class="table is-striped">
<tr>
<!--<div class="columns">-->
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
<!--</div>-->
</tr>
<tr>
<!--<div class="columns">-->
	<td>Mat</td>
	<td>Colaborador</td>
  	<td><domingo add-weeks="0" ref="DU"></domingo></td>
	<td>folga</td>
	<td><domingo add-weeks="1"></domingo></td>
	<td>folga</td>
	<td><domingo add-weeks="2"></domingo></td>
	<td>folga</td>
	<td><domingo add-weeks="3"></domingo></td>
	<td>folga</td>
  <td v-if="condFivDom"><domingo add-weeks="4"></domingo></td>
<td v-if="condFivDom">folga</td>
<!--</div>-->
</tr>
<tr v-for="colab in colabList" id="list">
  <td>{{colab.mat}}</td>
  <td>{{colab.nome}}</td>
  <td> <!--dropdown para seleção dos horarios-->
<!-- <time-entrance></time-entrance> -->
</td>
<td><!-- data da folga-->
  <folga :get-date="colab.weeks[countweek].dia" ref="_F-U"></folga>
</td>
<td> <!--dropdown para seleção dos horarios-->
<!-- <time-entrance></time-entrance> -->
</td>
<td><!--<folga :get-date="domTwo" ref="ftwo"></folga>--></td>
<td> <!--dropdown para seleção dos horarios-->
  <!-- <time-entrance ></time-entrance> -->
</td>
<td><!--<folga :get-date="domThree" ref="fthree"></folga>--></td>
<td> <!--dropdown para seleção dos horarios-->
  <!-- <time-entrance></time-entrance> -->
</td>
<td><!--<folga :get-date="domFour" ref="ffour"></folga>--></td>
<td v-if="condFivDom">
  <!-- <time-entrance ></time-entrance> -->
</td>
<td v-if="condFivDom"><!--<folga :get-date="domFive" ref="ffive"></folga>--></td>
</tr>
</table>
</template>
<script>
    import folga from '../components/folga.vue'
    import domingo from '../components/domingo.vue'
	export default {
		name: 'mensal',
        pouchdb:{
			db:{
				localDB: "db"
			}
		},
		data: () => ({mat: "", nome: ""}),
        methods: {
            addColab: function() {
                return this.$pouchdbRefs.db.put( this.$route.query.setor, {mat: this.mat, nome: this.nome, weeks:[{dia:"21/Out",horario:{cod:123,hora:"testehora"}}]})
                }
        },
		computed:{
        	colabList:function() {
                 switch (this.$route.query.setor) {
                    case "mercearia": return this.db.mercearia;
                    case "horti": return this.db.horti
                } return console.log("selecione um setor")
			},
		condFivDom: function () {
			if (moment(this.validateDate).startOf('month').weekday() == 0) {
				return true
			} else {
				return false
			}
		},
        countweek: function(){
            var day = moment(this.$refs.DU.display,"DD/MM/YYYY","pt-br").format('WW');
            return Number(day-1)
        },
		validateDate: function () {
			var initDate = moment(this.$parent.monthpick, "MMMM YYYY", "pt-br").startOf('month').toDate();
			if (moment(initDate).weekday() == 0) {
				return moment(initDate).toDate()
			} else {
				return moment(initDate).startOf('week').add(1, 'week').toDate()
			}
		}
		},
		components:{
			folga,domingo
		}
	}
</script>