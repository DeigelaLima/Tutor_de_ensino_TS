<template>
  <v-container fluid class="container">
    <v-row>
      <Codemirror style="height: 70vh; width: 50vw; padding: 2rem 0 0 2rem" />
      <v-col>
        <v-card-text align="center">
          <p class="description">{{ exerciseChoose?.exercise }}</p>
          <h3>
            No código ao lado existe este tipo de test smell, você pode
            refatorá-lo?
          </h3>
          <ButtonComponent text="Técnicas" :disable="false" />
        </v-card-text>
      </v-col>
    </v-row>
    <v-row class="foot-buttons" justify="space-around">
      <ButtonComponent text="Refatorar" :disable="true" />
      <ButtonComponent text="Próximo" :disable="true" />
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { Codemirror } from "vue-codemirror";
import ButtonComponent from "../components/ButtonComponent.vue";

import { Exercise } from "@/models/TestSmellModel";
import { getExercisesbyTheirId } from "@/services/ExerciseService";
import { onBeforeRouteUpdate, useRoute } from "vue-router";

const route = useRoute();
let id = Number(route.params.idSmell);
const exerciseChoose = ref<Exercise>();

async function fetchExercise(id: number): Promise<Exercise | null> {
  const result = await getExercisesbyTheirId(id);
  return result as Exercise;
}

fetchExercise(id);

onBeforeRouteUpdate(async (to, from) => {
  if (to.params.id !== from.params.id) {
    id = Number(to.params.id);
    fetchExercise(id);
  }
});
</script>

<style scoped>

.foot-buttons {
  padding-top: 2rem;
}

.description {
  padding: 2rem 0;
}
</style>
