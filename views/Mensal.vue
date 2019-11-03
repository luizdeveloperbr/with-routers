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
<!--</div>-->
</tr>
<tr v-for="colab in colabList">
  <td>{{colab.mat}}</td>
  <td>{{colab.nome}}</td>
  <td> <!--dropdown para seleção dos horarios-->
<!-- <time-entrance></time-entrance> -->
</td>
<td><!-- data da folga-->
  <folga :get-date="colab.weeks[W_1].dia"></folga>
</td>
<td> <!--dropdown para seleção dos horarios-->
<!-- <time-entrance></time-entrance> -->
</td>
<td><!--<folga :get-date="colab.weeks[W_2].dia"></folga>--></td>
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
  2
</td>
<td v-if="condFivDom">2<!--<folga :get-date="domFive" ref="ffive"></folga>--></td>
</tr>
</table>
</template>
<script>
    import moment from 'moment'
    import folga from '../components/folga.vue'
    import domingo from '../components/domingo.vue'
    moment.locale('pt-br')
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
        W_1: function(){
            var day = moment(this.$refs.D_1.display,"DD/MM/YYYY").format('WW');
            return Number(day-1)
        },
         W_2: function(){
            var day = moment(this.$refs.D_2.display,"DD/MM/YYYY").format('WW');
            return Number(day-1)
        },
         W_3: function(){
            var day = moment(this.$refs.D_3.display,"DD/MM/YYYY").format('WW');
            return Number(day-1)
        },
         W_4: function(){
            var day = moment(this.$refs.D_4.display,"DD/MM/YYYY").format('WW');
            return Number(day-1)
        },
         W_5: function(){
            var day = moment(this.$refs.D_5.display,"DD/MM/YYYY").format('WW');
            return Number(day-1)
        },
        condFivDom:function () {
           let VW_4 = moment(this.validateDate).add(3,"w").month();
           let VW_5 = moment(this.validateDate).add(4,"w").month();
			if ( VW_4 == VW_5) {
				return true
			} else {
				return false
            }
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
			folga,domingo
		}
	}
</script>