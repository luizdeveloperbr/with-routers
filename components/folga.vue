<!--folga.vue-->
<template>
<div>
	<fieldset style="width: 55px"  disabled v-if="active">
		<flat-pickr :config="config" v-model="input" :class="{'input':true, 'is-small':true}"></flat-pickr>
	</fieldset>
	<fieldset style="width: 55px" v-else>
		<flat-pickr :config="config" v-model="input" :class="{'input':true,'is-small':true}"></flat-pickr>
	</fieldset>
    </div>
</template>
<script>
    import moment from 'moment'
    import 'moment/locale/pt-br'
	import flatPickr from 'vue-flatpickr-component'
    import { Portuguese } from 'flatpickr/dist/l10n/pt.js'
    moment.locale('pt-br')
	export default {
    name: 'folga',
	props: ['getDate','getPrevFolg'],
    data: function(){
        return {
            input: "",
            active: this.enable
        }
    },
        computed: {
        config: function(){
            return {
                dateFormat: "d/M",
                minDate: moment(this.getDate, "DD/MMM").subtract(9, 'day').toDate(),
                defaultDate: this.getDate,
                maxDate: moment(this.getDate, "DD/MMM").add(9, 'day').toDate(),
                locale: Portuguese
            }
        },
        enable: function(){
            var join = 'parent.refs.' + this.getPrevFolg + '.input';
            return $join
        }
	},
    components:{flatPickr},
}
</script>