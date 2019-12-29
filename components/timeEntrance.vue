<!-- timeEntrance -->
<template>
	<div class="dropdown is-hoverable">
  <div class="dropdown-trigger">
    <button class="button" aria-haspopup="true" aria-controls="dropdown-menu3" @click.ctrl.exact="cod=0;hora=''">
      <span class="is-size-7">cod: {{cod}} <br/> {{hora}}</span>
    </button>
  </div>
  <div class="dropdown-menu" id="dropdown-menu3" role="menu">
    <div class="dropdown-content">
      <div class="dropdown-item" v-for="t in list">
       <a href="#" @click="cod = t.cod;hora = t.hora">{{t.hora}}</a>
      </div>
    </div>
  </div>
</div>
</template>
<script>
	export default {
		name: 'time-entrance',
        pouchdb:{
            db:{localDB:"db"}
        },
        props: ["timeList"],
		data: function (){
			return {
				cod: this.timeList.cod,
                hora: this.timeList.hora,
        }
	},
    computed:{
        list:function(){
            return this.db.horario
        },
    }
}
</script>