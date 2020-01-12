<!--folga.vue-->
<template>
<div>
	<fieldset   disabled v-if="active">
		<flat-pickr :config="config" v-model="input" :class="{'input':true, 'is-small':true}"></flat-pickr>
	</fieldset>
	<fieldset  v-else>
		<!--<flat-pickr :config="config" v-model="input" :class="{'input':true,'is-small':true}"></flat-pickr>-->
        <div class="flatpickr" style="width: 92px">
    <input class="input is-small" type="text" placeholder="Select Date.." data-input> <!-- input is mandatory -->

    <a class="button is-small" title="toggle" data-toggle>
        <i class="material-icons has-text-primary">event_note</i>
    </a>

    <a class="button is-small" title="clear" data-clear>
        <i class="material-icons has-text-primary">cancel</i>
    </a>
</div>
	</fieldset>
    </div>
</template>
<script>
    import moment from 'moment'
    import 'moment/locale/pt-br'
	import flatPickr from 'vue-flatpickr-component'
    import flatpickr from 'flatpickr'
    // import bulmaCalendar from '../node_modules/bulma-calendar/dist/js/bulma-calendar.min.js'
    import { Portuguese } from 'flatpickr/dist/l10n/pt.js'
    moment.locale('pt-br')
	export default {
    name: 'folga',
	props: ['getDate','getPrevFolg'],
    data: function(){
        return {
            input: "",
            active: false
        }
    },
    mounted() {
                 let fp = document.getElementsByClassName('flatpickr');
         return flatpickr(fp,{
             wrap:true,
             dateFormat: 'D,d/M',
            // minDate: moment(this.getDate, "DD/MMM").subtract(9, 'day').toDate(),
            // maxDate: moment(this.getDate, "DD/MMM").add(9, 'day').toDate(),
            locale: Portuguese
             })
    },
        computed: {
        config: function(){
            return {
                dateFormat: "d/M",

            }
        },
	},
    components:{flatPickr}
}
</script>