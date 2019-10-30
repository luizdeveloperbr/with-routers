<template>
  <div class="about">
    <h1>This is an about page</h1>
    <input type="text" v-model="name" placeholder="texto" v-on:keyup.enter="addDriver">
  <ul v-for="drive in drivers">
  	<li>{{drive.name}}</li>
  </ul>
  </div>
</template>
<script>
export default {
	name: 'about',
          pouchdb: {
          uber: {
            localDB: "uber",
          }
        },
        data: function(){
          return {name: ""}
        },
        methods: {
          addDriver () {
            this.$pouchdbRefs.uber.put('about', {_id: 0,name: this.name,});
            this.name = ''
          },
      },
      computed: {
        drivers () {
          return this.uber.about;
      },
    }
  }
</script>