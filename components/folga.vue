<!--folga.vue-->
<template>
  <div class="flatpickr">
    <input
      type="text"
      v-bind:value="value"
      :placeholder="getValue"
      class="input is-size-7"
      @input="$emit('input', $event.target.value)"
      data-input
    />
  </div>
</template>
<script>
import flatpickr from "flatpickr";
import moment from "moment";
import "moment/locale/pt-br";
import { Portuguese } from "flatpickr/dist/l10n/pt.js";
moment.locale("pt-br");
export default {
  name: "folga",
  props: ["value", "getValue"],
  beforeMount() {
    this.defaultDate = this.getValue
},
mounted() {
    flatpickr(document.getElementsByClassName("flatpickr"), this.$data);
  },
  data() {
    return {
        wrap: true,
        dateFormat: "D,d/m",
        minDate: moment(this.defaultDate)
          .subtract(9, "day")
          .toDate(),
        defaultDate: "",
        maxDate: moment(this.defaultDate)
          .add(9, "day")
          .toDate(),
        locale: Portuguese
    };
  },
/* watch: {
      getValue(){
          this.defaultDate = moment(this.getValue, 'ddd,DD/MM').toDate()
          this.maxDate = moment(this.defaultDate)
          .add(9, "day")
          .toDate()
          this.minDate = moment(this.defaultDate)
          .subtract(9, "day")
          .toDate()
      }
  },*/
};
</script>
<style>
.input::placeholder {
  color: black !important;
}
.input {
  min-width: 75px !important;
}
</style>
