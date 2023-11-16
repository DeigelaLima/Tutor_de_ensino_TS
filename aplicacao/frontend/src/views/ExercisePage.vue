<template>
  <v-container fluid class="container">
    <v-row>
      <v-col>
        <v-row class="header">
          <BackButton :onclick="() => router.push('/')"/>
          <h2>{{ title }}</h2>
        </v-row>
        <Codemirror
          :model-value="exerciseChoose"
          style="height: 70vh; width: 50vw; margin: 2rem 0 0 2rem"
          @change=" (value) => handleChange(value)"
        />
      </v-col>
      <v-col>
        <v-card-text align="center">
          <p class="description"></p>
          <h3>
            No código ao lado existe este tipo de test smell, você pode
            refatorá-lo?
          </h3>
          <ButtonComponent text="Técnicas" :disable="false" />
        </v-card-text>
      </v-col>
    </v-row>
    <v-row class="foot-buttons" justify="space-around">
      <ButtonComponent text="Refatorar" :disable="refactorState" :onclick="handleRefactor" />
      <ButtonComponent text="Próximo" :disable="nextState" :onclick="() => router.push('/')" />
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import BackButton from "@/components/BackButton.vue";
import { ref } from "vue";
import { Codemirror } from "vue-codemirror";
import ButtonComponent from "../components/ButtonComponent.vue";
import { getExercisesbyTheirId } from "@/services/ExerciseService";
import { onBeforeRouteUpdate, useRoute, useRouter } from "vue-router";


const router = useRouter();
const route = useRoute();
let id = Number(route.params.idSmell);
let exerciseChoose = ref<string>();
const nextState = ref(true);
const refactorState = ref(true);
const refactoredExercise = ref<string>();
const userExercise = ref<string>();
const title = ref<string>();

function handleRefactor() {
  checkRefactor() ? nextState.value = false : nextState.value = true;
}

function checkRefactor() {
  return refactoredExercise.value === userExercise.value;
}

function handleChange(value: string) {
  refactorState.value = false;
  userExercise.value = value
}


async function fetchExercise(id: number) {
  const result = await getExercisesbyTheirId(id);
  exerciseChoose.value = result.text;
  refactoredExercise.value = result.textRefactored;
  title.value = result.categoryName;

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
  margin-top: 0rem;
}

.header {
  display: flex;
  width: 60%;
  justify-content: space-between;
  align-items: center;
  padding: 3em 0em 0em 3em;
}

.description {
  padding: 2rem 0;
}
</style>
