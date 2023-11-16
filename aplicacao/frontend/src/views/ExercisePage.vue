<template>
    <v-container fluid class="container">
        <v-row>
            <v-col>
                <h1 align="center">{{ exerciseTitle }}</h1>
                <Codemirror style="height: 60vh; width: 50vw;" />
                <h5>{{ exerciseLink }}</h5>
            </v-col>
            <v-col>
                <v-card-text align="center">
                    <h1>{{ smellName }}</h1>
                    <p class="description">{{ smellDescription }}</p>
                    <h3>No código ao lado existe este tipo de test smell, você pode refatorá-lo?</h3>
                    <ButtonComponent text="Técnicas" :disable="false"/>
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

const smellDescription = ref("Esse tipo de Test Smell ocorre quando um método de teste é suprimido de execução "+
                             "usando recursos fornecidos pelo JUnit 4. No entanto, essa abordagem de Ignored "+
                             "Test pode resultar em sobrecarga durante o tempo de compilação, além de aumentar "+
                             "a complexidade e dificultar a compreensão do código.");   
const smellName = ref("Ignored Test")
const exerciseTitle = ref("Teste")
const exerciseLink = ref("Exercise repo link")

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
.container {
    margin-top: 30px;
    height: 100vh;
}
.foot-buttons{
    padding-top: 2rem;
}
.description {
  padding: 2rem 0;
}
</style>
