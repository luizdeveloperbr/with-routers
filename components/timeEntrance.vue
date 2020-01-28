<!-- timeEntrance -->
<template>
	<div class="dropdown is-hoverable">
  <div class="dropdown-trigger has-addons">
    <button class="button" aria-haspopup="true" aria-controls="dropdown-menu3" >
      <span class="is-size-7 has-text-black">{{hora}}</span>
    </button>
        <a class="button is-small control" title="clear" @click="cod=0;hora=''">
        <i class="material-icons has-text-primary">clear</i>
    </a>
  </div>
  <div class="dropdown-menu" id="dropdown-menu3" role="menu">
    <div class="dropdown-content">
      <div class="dropdown-item" v-for="t in list">
       <a href="#" @click="cod = t.cod;hora = t.hora">cod: {{t.cod}} | {{t.hora}}</a>
      </div>
    </div>
  </div>
</div>
</template>
<script>
	export default {
		name: 'time-entrance',
        props: ["timeList"],
		data: function (){
			return {
				cod: this.timeList.cod,
                hora: this.timeList.hora,
                list: [{cod: 1,hora: "13:00"},{cod: 2,hora: "14:00"}]
        }
	},
}
</script>
