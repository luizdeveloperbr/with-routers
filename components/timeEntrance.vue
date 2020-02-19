<!-- timeEntrance -->
<template>
  <div class="dropdown is-hoverable">
    <div class="dropdown-trigger has-addons">
      <button
        class="button"
        aria-haspopup="true"
        aria-controls="dropdown-menu3"
      >
        <span class="is-size-7">{{ hora }}</span>
      </button>
    </div>
    <div class="dropdown-menu" id="dropdown-menu3" role="menu">
      <div class="dropdown-content">
        <div class="dropdown-item" v-for="t in list">
          <a
            href="#"
            @click="
              cod = t.cod;
              hora = t.hora;
            "
            >{{ t.hora }}</a
          >
        </div>
      </div>
    </div>
    <a
      class="button is-paddingless is-small control"
      v-bind:class="{ 'is-hidden': clear }"
      style="height: 36px"
      title="clear"
      @click="hora = ''"
      ><i class="material-icons has-text-primary">clear</i></a
    >
  </div>
</template>
<script>
import { db } from "../db.js";
export default {
  name: "time-entrance",
  props: ["timeList", "clear"],
  firebase: {
    list: db.ref("horarios")
  },
  data: function() {
    return {
      cod: null,
      hora: null,
      list: []
    };
  }
};
</script>
