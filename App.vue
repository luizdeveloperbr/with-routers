<!--<app />-->
<template>
  <div class="panel container" >
  <div class="panel-header">
  <div class="message" id="mpickr">
  <div class="message-header">
  	<div class="columns" style="width: 100%">
  	<div class="column is-5"><flat-pickr :config="mconfig" v-model="monthpick" class="input" /></div>
  	<div class="column">
  		<div class="buttons is-pulled-right">
  		<router-link class="button" to="/" exact-active-class="is-primary">Inicio</router-link>	
  		<router-link class="button" to="/about" active-class="is-primary">About</router-link>
  		</div>
  	</div>
  </div>
    </div>
  </div>
  </div>
  <div class="panel-block">
<!--incio da linha com os titulos-->
<table>
<tr>
<div class="columns">
  <div class="column"></div>
  <div class="column"></div>
  <div class="column">Domingo</div>
  <div class="column"></div>
  <div class="column">Domingo</div>
  <div class="column"></div>
  <div class="column">Domingo</div>
  <div class="column"></div>
  <div class="column">Domingo</div>
  <div class="column"></div>
  <div class="column" v-if="condFivDom">Domingo</div>
  <div class="column" v-if="condFivDom"></div>
</div>
</tr>
<tr>
<div class="columns">
	<div class="column">Mat</div>
	<div class="column">Colaborador</div>
  	<div class="column">{{domOne}}</div>
	<div class="column">folga</div>
	<div class="column">{{domTwo}}</div>
	<div class="column">folga</div>
	<div class="column">{{domThree}}</div>
	<div class="column">folga</div>
	<div class="column">{{domFour}}</div>
	<div class="column">folga</div>
  <div class="column" v-if="condFivDom">{{domFive}}</div>
<div class="column" v-if="condFivDom">folga</div>
</div>
</tr>
<!--fim da linha com os titulos-->
<tr>
<router-view></router-view>
</tr>
</table>
  </div>
</template>
<script>
	
	// import domingo from './components/domingo.vue'
	import flatPickr from 'vue-flatpickr-component'
	import 'flatpickr/dist/flatpickr.css';
	import { Portuguese } from 'flatpickr/dist/l10n/pt.js'
	export default {
		name: 'App',
		data: () => ({
			monthpick: new Date(),
			mconfig:{
            locale: Portuguese,
            plugins:[new monthSelectPlugin({
            dateFormat: "F Y", 
        })
    ]}
		}),
		computed:{
			domOne:function () {
			return moment(this.validateDate).add(0, 'week').format('L')
		},
			domTwo:function () {
			return moment(this.validateDate).add(1, 'week').format('L')
		},
			domThree:function () {
			return moment(this.validateDate).add(2, 'week').format('L')
		},
			domFour:function () {
			return moment(this.validateDate).add(3, 'week').format('L')
		},
			domFive:function () {
			return moment(this.validateDate).add(4, 'week').format('L')
		},
		condFivDom: function () {
			if (moment(this.monthpick, "MMMM YYYY", "pt-br").startOf('month').weekday() == 0) {
				return true
			} else {
				return false
			}
		},
		validateDate: function () {
			var initDate = moment(this.monthpick, "MMMM YYYY", "pt-br").startOf('month').toDate();
			if (moment(initDate).weekday() == 0) {
				return moment(initDate).toDate()
			} else {
				return moment(initDate).startOf('week').add(1, 'week').toDate()
			}
		}
		},
		components:{
			/*domingo,*/flatPickr
		}
	}
</script>