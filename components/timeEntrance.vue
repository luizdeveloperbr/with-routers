<!-- timeEntrance -->
<template>
	<div class="dropdown is-hoverable">
  <div class="dropdown-trigger field has-addons">
    <button class="button is-primary is-outlined" aria-haspopup="true" aria-controls="dropdown-menu3" >
      <span class="is-size-7 has-text-black">cod: {{cod}} <br/> {{hora}}</span>
    </button>
        <a class="button is-small control is-primary is-outlined" title="clear" @click="cod=0;hora=''">
        <i class="material-icons has-text-primary">clear</i>
    </a>
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
