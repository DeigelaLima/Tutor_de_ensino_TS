<template>
  <v-container fluid class="container">
    <v-row>
      <v-row class="back-button">
        <BackButton :onclick="() => router.push('/')"/>
      </v-row>
      <v-row class="header">
        <h1>{{ title }}</h1>
        <p class="description"> {{ description }}</p>
      </v-row>
      <v-col>
        <Codemirror
          :model-value="exerciseChoose"
          style="height: 65vh; width: 50vw; margin: 2rem 0 0 2rem"
          @change=" (value) => handleChange(value)"
        />
      </v-col>
      <v-col>
        <v-card-text align="center">
          <h3>
            No código ao lado existe este tipo de test smell, você pode
            refatorá-lo?
          </h3>
          <h3 class="step-by-step">Passo a passo</h3>
          <div v-if="tried">
            <h3 v-if="feedback" class="feedback_true" >Excelente trabalho!
              O test smell foi refatorado com sucesso, deixando o código de teste mais limpo.
            </h3>
            <h3 v-else class="feedback_false" >Tem algo errado...
              
            </h3>
          </div>

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
const description = ref<string>();
const feedback = ref(false);
const tried = ref(false);

function handleRefactor() {
  tried.value = true;
  if(checkRefactor()){
    feedback.value = true;
    nextState.value = false;
  } else{
    feedback.value = false;
  }
}

function checkRefactor() {
  const regex = /\s/g;
  return refactoredExercise.value?.replace(regex, '') === userExercise.value?.replace(regex, '');
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
  description.value = result.description;
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

.feedback_true {
  padding-top: 2rem;
  color: green;
}

.feedback_false {
  padding-top: 2rem;
  color: red;
}
.foot-buttons {
  margin-top: 0rem;
  margin-bottom: 2rem
}

.header {
  display: flex;
  justify-content: center;
  align-items: center;
}

.back-button {
  display: flex;
  justify-content: start;
  align-items: center;
  padding: 3em 0em 0em 3em;
}

.description {
  padding: 2rem;
  margin: 2rem;
  border-radius: 10px;
  background-color: #d9f3ed;

}

.step-by-step {
  padding-top: 1rem;
}
</style>
