<!--folga.vue-->
<template>
<div class="main">
    <flat-pickr class="input is-size-7" style="width: 70px;height: 36px" :config="config" v-model="input" :disabled="active"></flat-pickr>
    <button type="button" class="button is-small is-paddingless" title="clear"  style="height: 36px" data-clear>
        <i class="material-icons has-text-primary">clear</i>
    </button>
</div>
</template>
<script>
    //import flatPickr from 'vue-flatpickr-component'
    import moment from 'moment'
    import 'moment/locale/pt-br'
    import { Portuguese } from 'flatpickr/dist/l10n/pt.js'
    moment.locale('pt-br')
	export default {
    name: 'folga',
	props: ['getDate','getDom'],
    data: function(){
        return {
            input: "",
            active: false,
            config: {
            wrap:true,
            dateFormat: 'D,d/m',
            minDate: moment(this.getDom, "DD/MM/YYYY").subtract(9, 'day').toDate(),
            defaultDate: this.getDate,
            maxDate: moment(this.getDom, "DD/MM/YYYY").add(9, 'day').toDate(),
            locale: Portuguese
            }
        }
    },
  //  components:{
   //     flatPickr
   // }
   /*created() {
                 let fp = document.getElementsByClassName('flatpickr');
         return flatpickr(fp,{
             wrap:true,
             dateFormat: 'D,d/m',
                // minDate: moment(this.getDate, "DD/MMM").subtract(9, 'day').toDate(),
                //defaultDate: this.getDate,
                // maxDate: moment(this.getDate, "DD/MMM").add(9, 'day').toDate(),
            locale: Portuguese
             })
    },*/
}
</script>
<style lang="scss">
    .main {display: inline-flex};
</style>