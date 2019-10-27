<!-- timeEntrance -->
<template>
	<div class="dropdown is-hoverable">
  <div class="dropdown-trigger">
    <button class="button" aria-haspopup="true" aria-controls="dropdown-menu3">
      <span class="is-size-7">cod: {{cod}} <br/> {{hora}}</span>
    </button>
  </div>
  <div class="dropdown-menu" id="dropdown-menu3" role="menu">
    <div class="dropdown-content">
      <div class="dropdown-item" v-for="t in timelist">
       <a href="#" @click="cod = t.cod;hora = t.hora">{{t.hora}}</a>
      </div>
    </div>
  </div>
</div>
</template>
<script>
	export default {
		name: 'timeEntrance',
		data: function (){
			return {
				cod: "",
        hora: "",
        timeList:[
      {cod: 123, hora: "10:00-13:00/14:00-18:00"}
      ],
			}

		},
	}
</script>