<template>
  <v-app>
    <v-col>
      <nav-bar/> 
      <v-main>
        <router-view /> 
      </v-main>
    </v-col>
  </v-app>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import NavBar from "./components/NavBar.vue";

export default defineComponent({
  components: { NavBar },
  name: "App",

  data() {
    return {
      //
    };
  },
});
</script>

<style>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
