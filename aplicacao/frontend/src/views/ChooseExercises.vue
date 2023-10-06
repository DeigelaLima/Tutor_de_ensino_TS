<template>
  <container>
    <h2 class="mb-2">{{ route.params }}</h2>
    <ButtonGrl :number-exercise="1"></ButtonGrl>
    <ButtonGrl :number-exercise="2"></ButtonGrl>
    <ButtonGrl :number-exercise="3"></ButtonGrl>
    <v-col cols="6" sm="6" class="img-container">
      <v-img
        src="@/assets/Bug_solving.svg"
        alt="Resolver bugs"
        class="image-size"
      />
    </v-col>
  </container>
</template>

<script setup lang="ts">
import ButtonGrl from "@/components/ButtonGrl.vue";
import { useRoute } from "vue-router";
const route = useRoute();
</script>

<style>
container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 8vh;
}
.image-size {
  max-width: 60vh;
  width: 60vh;
}
.img-container {
  display: flex;
  justify-content: center;
}
</style>
