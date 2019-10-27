<!--Home.vue-->
<template>
<div>
<div class="columns is-multiline" v-for="colab in colabList">
  <div class="column" id="cmat">{{colab.mat}}</div>
  <div class="column" id="cnome">{{colab.nome}}</div>
  <div class="column"> <!--dropdown para seleção dos horarios-->
<!-- <time-entrance></time-entrance> -->
</div>
<div class="column"><!-- data da folga-->
  <folga :get-date="$parent.domOne"></folga>
</div>
<div class="column"> <!--dropdown para seleção dos horarios-->
<!-- <time-entrance></time-entrance> -->
</div>
<div class="column"><folga :get-date="$parent.domTwo"></folga></div>
<div class="column"> <!--dropdown para seleção dos horarios-->
 	<!-- <time-entrance ></time-entrance> -->
</div>
<div class="column"><folga :get-date="$parent.domThree"></folga></div>
<div class="column"> <!--dropdown para seleção dos horarios-->
	<!-- <time-entrance></time-entrance> -->
</div>
<div class="column"><folga :get-date="$parent.domFour"></folga></div>
<div class="column" v-if="condFivDom">
  <!-- <time-entrance ></time-entrance> -->
</div>
<div class="column" v-if="condFivDom"><folga :get-date="$parent.domFive"></folga></div>
</div>
<!-- teste -->
</div>
</div>
</template>
<script>
	import folga from '../components/folga.vue'
	export default {
		name: 'home',
		pouchdb:{
			db:{
				localDB: "db"
			}
		},
		data: () => ({
			add: false,
			mat: null,
			nome: ""
		}),
		methods:{
			addColab:function(){
            return this.$pouchdbRefs.db.put('organico', {mat: this.mat, nome: this.nome, month:[{domingo:"2019-12-25",folga: 2,horario:{cod:123,hora:"testehora"}}]});
            	}
        },
		computed:{
			colabList:function() {
				return this.db.organico
			},
			condFivDom: function () {
			if (moment(this.monthpick, "MMMM YYYY", "pt-br").startOf('month').weekday() == 0) {
				return true
			} else {
				return false
			}
		},
		},
		components: {
			folga/*timeEntrance*/
		}
	}
</script>