<!-- doming.vue -->
<template>
	<p>{{display}}</p>
</template>
<script>
import moment from 'moment'
import 'moment/locale/pt-br'
moment.locale('pt-br')
	export default {
	name: 'domingo',
	props: ['addWeeks'],
	computed: {
		display: function () {
			return moment(this.iniDate).add(this.addWeeks, 'week').format('L')
		},
		iniDate: function () {
			var initDate = moment(this.$parent.validateDate).startOf('month').toObject();
			if (moment(initDate).weekday() == 0) {
				return moment(initDate).toObject()
			} else {
				return moment(initDate).startOf('week').add(1, 'week').toObject()
			}
		},
		W: function()
		{
			return Number(moment(this.display,"DD/MM/YYYY").format('w'))
		}
	}
}
</script>