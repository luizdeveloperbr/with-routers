<!--folga.vue-->
<template>
	<div style="width: 55px">
		<flat-pickr :config="config" v-model="input" :class="{'input':true}"></flat-pickr>
	</div>
</template>
<script>
	import flatPickr from 'vue-flatpickr-component'
    import { Portuguese } from 'flatpickr/dist/l10n/pt.js'
	export default {
    name: 'folga',
	props: ['getDate'],
    data: function(){
        return {
            input: "",
        }
    },
        computed: {
        config: function(){
            return {
                dateFormat: "d/M",
                minDate: this.minDate,//usar data anterior no Array
                maxDate: this.maxDate,
                locale: Portuguese
            }
        },
        minDate: function () {
			return moment(this.getDate, "DD/MM/YYYY", "pt-br").subtract(9, 'day').toDate()
		},
        maxDate: function (){
			return moment(this.getDate, "DD/MM/YYYY", "pt-br").add(9, 'day').toDate();
        },
	},
    components:{flatPickr},
}
</script>