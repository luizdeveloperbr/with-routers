<!-- timeEntrance -->
<template>
<div class="select is-small" :class="{'is-hidden': disable}">
  <select v-bind:value="value" v-on:input="$emit('input', $event.target.value)">
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
