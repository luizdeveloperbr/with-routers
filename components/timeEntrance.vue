<!-- timeEntrance -->
<template>
<div class="select is-small" :class="{'is-hidden': disable}">
  <select v-bind:value="value" class="is-focused" v-on:input="$emit('input', $event.target.value)">
    <option v-for="h in list" :value="h.hora">{{h.hora}}</option>
  </select>
</div>
</template>
<script>
import { db } from "../db.js";
export default {
  name: "time-entrance",
  props: ["value", "disable"],
  firebase: {
    list: db.ref("horarios")
  },
  data: function() {
    return {
      list: [],
    };
  }
};
</script>
<style>
 .select > select {padding-right: 6.5px !important}
 .select:after {border: 0px !important}    
</style>
