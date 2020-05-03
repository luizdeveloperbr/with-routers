<template>
  <div>
    <mensal
      :id="$parent.grota"
      :get-date="$parent.monthpick"
      :disabled="editshow"
    ></mensal>
    <!--<div class="modal" :class="{ 'is-active': modalActive }">
      <div class="modal-background"></div>
      <div class="modal-card">
        <header class="modal-card-head">
          <p class="modal-card-title">Novo Colaborador</p>
          <button
            class="delete"
            aria-label="close"
            @click="modalActive = false"
          ></button>
        </header>
        <section class="modal-card-body">
          <div class="field">
            <label class="label">Matricula</label>
            <div class="control">
              <input
                class="input"
                type="text"
                placeholder="e.g. 545559"
                v-model="mat"
              />
            </div>
          </div>
          <div class="field">
            <label class="label">Nome</label>
            <div class="control">
              <input
                class="input"
                type="text"
                placeholder="e.g sAlex Smith"
                v-model="nome"
              />
            </div>
          </div>
        </section>
        <footer class="modal-card-foot">
          <button class="button is-success" @click="addColab">Salvar</button>
          <button class="button">Limpar</button>
        </footer>
      </div>
    </div>
    <table>
      <tr>
        <td>
          <input
            class="input"
            type="text"
            placeholder="Matricula"
            v-model="mat"
          />
        </td>
        <td>
          <input
            class="input"
            type="text"
            placeholder="Nome do Colaborador"
            v-model="nome"
          />
        </td>
        <td><time-entrance v-model="d0_hora"></time-entrance></td>
        <td>
          <button class="button is-success" @click="addColab">Salvar</button>
        </td>
      </tr>
    </table>

    table 2
    <div>
      <button class="button is-success is-small" @click="modalActive = true">
        <i class="material-icons">control_point</i>
      </button>
      <a class="button is-small is-danger" @click="print"
        ><i class="material-icons">print</i></a
      >
      <input
        id="switch"
        v-model="edit"
        type="checkbox"
        name="switch"
        class="switch is-rounded is-outlined"
        checked="checked"
      />
      <label for="switch">Limpar</label>
    </div>-->
  </div>
</template>
<script>
import { db } from "../db";
import mensal from "./Mensalcomp.vue";
//import moment from "moment";
//import timeEntrance from "../components/timeEntrance.vue";
export default {
    name: 'mensalTop',
    computed: {
        rota(){
            this.$parent.grota
        }
    },
    components:{
        mensal
    }
};
</script>
<style lang="scss">
@charset 'utf-8';
@import "../node_modules/bulma-switch";
</style>
