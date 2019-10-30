<!--<app />-->
<template>
  <div class="panel container" >
  <div class="panel-header">
  <div class="level has-background-grey" style="padding: 8px 20px">
  	<div class="level-left"><flat-pickr :config="mconfig" v-model="monthpick" class="input level-item" /></div>
  	<div class="level-item">
  		<router-link class="button is-small" to="/mensal" active-class="is-primary">Mensal</router-link>
  		<router-link class="button is-small" to="/interjornada" active-class="is-primary">Interjornada</router-link>
  		</div>
      <div class="level-rigth">
  		<div class="buttons level-item are-small">
  		<router-link class="button" :to="{query: {setor: 'horti'}}" exact-active-class="is-primary">Horti</router-link>
  		<router-link class="button" :to="{query: {setor: 'mercearia'}}" exact-active-class="is-primary">Mercearia</router-link>
  		</div>
  	</div>
  </div>
  </div>
  <div class="panel-block">
<router-view></router-view>
  </div>
</div>
</template>
<script>
    import 'bulma/css/bulma.css'
    // import {monthSelectPlugin} from 'flatpickr/dist/plugins/monthSelect/index.js'
    import 'flatpickr/dist/plugins/monthSelect/style.css'
	import flatPickr from 'vue-flatpickr-component'
	import 'flatpickr/dist/flatpickr.css';
	import { Portuguese } from 'flatpickr/dist/l10n/pt.js'
	export default {
		name: 'App',
		data: () => ({
			monthpick: new Date([2019,1,1]),
			mconfig:{
            locale: Portuguese,
            plugins:[new monthSelectPlugin({
            dateFormat: "F Y",
        })
    ]}
		}),
		components:{
			flatPickr
		}
	}
</script>