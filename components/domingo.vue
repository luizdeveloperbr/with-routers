<!-- doming.vue -->
<template>
	<p>{{display}}</p>
</template>
<script>
	export default {
	name: 'domingo',
	props: ['addWeeks', 'getDate'],
	computed: {
		display: function () {
			return moment(this.validateDate).add(this.addWeeks, 'week').format('L')
		},
		validateDate: function () {
			var initDate = moment(this.getDate, "MMMM YYYY", "pt-br").startOf('month').toObject();
			if (moment(initDate).weekday() == 0) {
				return moment(initDate).toObject()
			} else {
				return moment(initDate).startOf('week').add(1, 'week').toObject()
			}
		},
	}
}
</script>