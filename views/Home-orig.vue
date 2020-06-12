<template>
  <div class="home">
    <li v-for="c in banco">
        <ul>{{c.mat}} || {{c.name}}</ul>
    </li>
  </div>
</template>

<script>
import { db } from "../db.js";
const setor = db.ref("organico");
export default {
  name: "home",
  data: function() {
    return {
      banco: [],
      id: this.$route.query.setor
    };
  },
  mounted(){
    /*
    função usada para carregar o organico inicia, caso o mÊs esteja Vazio, 
    */
      if (Boolean(this.$route.query.setor) == false) {
        return this.id = 'cpd';
      } else {
        this.id = this.$route.query.setor;
      } 
  },
  watch: {
    id: {
      immediate: true,
      handler(id) {
        this.$rtdbBind("banco", setor.child(id));
      }
    }
  }
};
</script>
