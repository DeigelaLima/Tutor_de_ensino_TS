<template>
  <v-container fluid class="container">
    <v-row>
      <v-row class="back-button">
        <BackButton
          :onclick="() => router.push(`/chooseexercise/${idSmell}`)"
        />
      </v-row>
      <v-row class="header">
        <h1 class="title">{{ title }}</h1>
        <p class="description">{{ description }}</p>
      </v-row>
      <v-col>
        <Codemirror
          :model-value="exerciseChoose"
          style="height: 65vh; width: 50vw; margin: 2rem 0 0 2rem"
          @change="(value) => handleChange(value)"
        />
      </v-col>
      <v-col>
        <v-card-text align="center">
          <h2 class="intro-step">
            Para iniciar a refatoração do teste de unidade que contém o "test
            smell", você deve seguir os seguintes passos:
          </h2>
          <div class="card-step">
            <h1 class="steps-title">Passo a passo</h1>
            <ul class="step-by-step">
              <p
                :key="step"
                :class="checkIfNeedsPasso(step) ? 'step' : ''"
                v-for="step in formatedSteps"
              >
                {{ checkIfNeedsPasso(step) + step }}
              </p>
            </ul>
            <ul class="step-by-step">
              <p
                class="step-assert"
                :key="assert"
                v-for="assert in formatedAsserts"
              >
                {{ "Assertion" + assert }}
              </p>
            </ul>
          </div>
        </v-card-text>
        <h2 class="text-button-refactor">
          Após finalizar o passo a passo, confirme aqui se você acertou!
        </h2>
        <v-row class="foot-buttons" justify="space-around">
          <ButtonPopup
            text="Refatorar"
            :disable="refactorState"
            :onclick="handleRefactor"
            :refactor="feedback"
          />
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import BackButton from "@/components/BackButton.vue";
import { ref } from "vue";
import { Codemirror } from "vue-codemirror";
import ButtonPopup from "../components/ButtonPopup.vue";
import { getExercisesbyTheirId } from "@/services/ExerciseService";
import { onBeforeRouteUpdate, useRoute, useRouter } from "vue-router";

const router = useRouter();
const route = useRoute();
let id = Number(route.params.idSmell);
let idSmell = Number(route.params.id);
let exerciseChoose = ref<string>();
const refactorState = ref(true);
const refactoredExercise = ref<string>();
const userExercise = ref<string>();
const title = ref<string>();
const description = ref<string>();
const feedback = ref(false);
const steps = ref<string>();
const formatedSteps = ref<string[]>([]);
const formatedAsserts = ref<string[]>([]);

function handleRefactor() {
  if (checkRefactor()) {
    feedback.value = true;
  } else {
    feedback.value = false;
  }
}

function checkRefactor() {
  const regex = /\s/g;
  return (
    refactoredExercise.value?.replace(regex, "") ===
    userExercise.value?.replace(regex, "")
  );
}

function handleChange(value: string) {
  refactorState.value = false;
  userExercise.value = value;
}

function formatAssertString(text: string | undefined) {
  if (text === undefined) return;
  let subArrays = text.split("Assertion");
  subArrays.shift();
  formatedAsserts.value = subArrays;
}

function formatStepString(text: string | undefined) {
  if (text === undefined) {
    return;
  }
  let subArrays;
  if (text.indexOf("Assertion") === -1) {
    subArrays = text.split("Passo");
    subArrays.shift();
    formatedSteps.value = subArrays.map((step) => step.split("\n")).flat();
  } else {
    let newText: string = text.substring(0, text.indexOf("Assertion"));
    subArrays = newText.split("Passo");
    subArrays.shift();
    formatedSteps.value = subArrays.map((step) => step.split("\n")).flat();
  }
}

function checkIfNeedsPasso(passo: string) {
  const palavras = passo.split("");
  if (palavras.length > 0 && /^\d+$/.test(palavras[1])) {
    return "Passo";
  }
  return "";
}

async function fetchExercise(id: number) {
  const result = await getExercisesbyTheirId(id);
  exerciseChoose.value = result.text;
  refactoredExercise.value = result.textRefactored;
  title.value = result.categoryName;
  description.value = result.description;
  steps.value = result.refactoration;
  formatStepString(steps.value);
  formatAssertString(steps.value);
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
.card-step {
  background-color: #d9f3ed;
  border-radius: 10px;
  padding-bottom: 2rem;
  min-height: 100px;
}

.step-assert {
  padding-bottom: 1rem;
  padding-left: 3rem;
}
.step {
  padding-bottom: 1rem;
  padding-top: 1rem;
}
.intro-step {
  text-align: justify;
  padding-bottom: 2rem;
}
.foot-buttons {
  margin-top: 0rem;
  margin-bottom: 2rem;
}

.text-button-refactor {
  display: flex;
  justify-content: center;
  align-items: center;
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
  padding: 2em 0em 0em 3em;
}

.description {
  padding: 2rem;
  margin: 2rem;
  border-radius: 10px;
  background-color: #d9f3ed;
  font-size: 20px;
  min-width: 95vw;
  min-height: 150px;
}

.step-by-step {
  text-align: start;
  width: 600px;
  font-size: 20px;
}

.steps-title {
  padding: 1rem 0rem;
}
</style>