<!-- doming.vue -->
<template>
	<p>{{display}}</p>
</template>
<script>
	export default {
	name: 'domingo',
	props: ['addWeeks'],
	computed: {
		display: function () {
			return moment(this.iniDate).add(this.addWeeks, 'week').format('L')
		},
		iniDate: function () {
			var initDate = moment(this.$parent.validateDate).startOf('month').toDate();
			if (moment(initDate).weekday() == 0) {
				return moment(initDate).toObject()
			} else {
				return moment(initDate).startOf('week').add(1, 'week').toDate()
			}
		},
	}
}
</script>