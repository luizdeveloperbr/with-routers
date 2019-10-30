<!--folga.vue-->
<template>
<div>
	<fieldset style="width: 55px"  disabled v-if="active">
		<flat-pickr :config="config" v-model="input" :class="{'input':true}"></flat-pickr>
	</fieldset>
	<fieldset style="width: 55px" v-else>
		<flat-pickr :config="config" v-model="input" :class="{'input':true}"></flat-pickr>
	</fieldset>
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
            active: false
        }
    },
        computed: {
        config: function(){
            return {
                dateFormat: "d/M",
                minDate: this.minDate,
                defaultDate: this.getDate,
                maxDate: this.maxDate,
                locale: Portuguese
            }
        },
        minDate: function () {
			return moment(this.getDate, "DD/MMM", "pt-br").subtract(9, 'day').toDate()
		},
        maxDate: function (){
			return moment(this.getDate, "DD/MMM", "pt-br").add(9, 'day').toDate();
        },
	},
    components:{flatPickr},
}
</script>