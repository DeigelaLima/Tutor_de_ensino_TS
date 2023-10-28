<template>
  <v-app>
    <v-main>
      <nav-bar></nav-bar>
      <router-view />
    </v-main>
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
