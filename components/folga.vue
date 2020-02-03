<!--folga.vue-->
<template>
<div>
	<fieldset   disabled v-if="active">
		        <div class="flatpickr field has-addons">
    <input class="input is-small" style="width: 60px;height: 36px" type="text" data-input> <!-- input is mandatory -->
    <a class="button is-small control is-paddingless" title="clear" data-clear>
        <i class="material-icons has-text-primary">clear</i>
    </a>
</div>
	</fieldset>
	<fieldset  v-else>
        <div class="flatpickr field has-addons">
    <input class="input is-small" style="width: 60px;height: 36px" type="text" data-input> <!-- input is mandatory -->
    <a class="button is-small control is-paddingless" title="clear" data-clear>
        <i class="material-icons has-text-primary">clear</i>
    </a>
</div>
	</fieldset>
    </div>
</template>
<script>
    import moment from 'moment'
    import 'moment/locale/pt-br'
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
             dateFormat: 'd/M',
                // minDate: moment(this.getDate, "DD/MMM").subtract(9, 'day').toDate(),
                //defaultDate: this.getDate,
                // maxDate: moment(this.getDate, "DD/MMM").add(9, 'day').toDate(),
            locale: Portuguese
             })
    },
}
</script>