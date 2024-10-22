<template>
  <v-container fluid class="container">
    <v-row>
      <v-row class="back-button">
        <BackButton :onclick="() => router.push(`/chooseexercise/${idSmell}`)" />
      </v-row>
      <v-row class="header">
        <h1 class="title">{{ title }}</h1>
        <p class="description">{{ description }}</p>
      </v-row>
      <v-col>
        <Codemirror :model-value="exerciseChoose" style="height: 65vh; width: 50vw; margin: 2rem 0 0 2rem"
          @change="(value) => handleChange(value)" :extensions="language" />
      </v-col>
      <v-col>
        <v-card-text align="center">
          <h2 class="intro-step">
            {{ t('exercisePage.introStep') }}
          </h2>
          <div class="card-step">
            <h1 class="steps-title">{{ t('exercisePage.stepsTitle') }}</h1>
            <ul class="step-by-step">
              <p :key="step" :class="checkIfNeedsPasso(step) ? 'step' : ''" v-for="step in formatedSteps">
                {{ checkIfNeedsPasso(step) + step }}
              </p>
            </ul>
            <ul class="step-by-step">
              <p class="step-assert" :key="assert" v-for="assert in formatedAsserts">
                {{ "Assertion" + assert }}
              </p>
            </ul>
          </div>
        </v-card-text>
        <h2 class="text-button-refactor">
          {{ t('exercisePage.refactorText') }}
        </h2>
        <v-row class="foot-buttons" justify="space-around">
          <ButtonPopup :text="t('exercisePage.refactor')" :disable="refactorState" :onclick="handleRefactor"
            :refactor="feedback" />
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import BackButton from "@/components/BackButton.vue";
import { ref, computed, watch } from "vue";
import { Codemirror } from "vue-codemirror";
import ButtonPopup from "../components/ButtonPopup.vue";
import { getExercisesbyTheirId } from "@/services/ExerciseService";
import { onBeforeRouteUpdate, useRoute, useRouter } from "vue-router";
import { java } from '@codemirror/lang-java';
import { useI18n } from 'vue-i18n';

const { t, locale } = useI18n();

const language = [java()];
const router = useRouter();
const route = useRoute();
let id = Number(route.params.idSmell);
let idSmell = Number(route.params.id);
let exerciseChoose = ref<string>();
const refactorState = ref(true);
const refactoredExercise = ref<string>("");
const userExercise = ref<string>("");
const title = ref<string>();
const feedback = ref(false);
const result = ref<any>(null);

const description = computed(() => result.value?.description[locale.value]);
const steps = computed(() => result.value?.refactoration[locale.value]);

const formatedSteps = ref<string[]>([]);
const formatedAsserts = ref<string[]>([]);

const stepKeyword = computed(() => locale.value === 'pt' ? 'Passo' : 'Step');
const assertionKeyword = 'Assertion';

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
  let subArrays = text.split(assertionKeyword);
  subArrays.shift();
  formatedAsserts.value = subArrays;
}

function formatStepString(text: string | undefined) {
  if (text === undefined) {
    return;
  }
  let subArrays;
  if (text.indexOf(assertionKeyword) === -1) {
    subArrays = text.split(stepKeyword.value);
    subArrays.shift();
    formatedSteps.value = subArrays.map((step) => step.split("\n")).flat();
  } else {
    let newText: string = text.substring(0, text.indexOf(assertionKeyword));
    subArrays = newText.split(stepKeyword.value);
    subArrays.shift();
    formatedSteps.value = subArrays.map((step) => step.split("\n")).flat();
  }
}

function checkIfNeedsPasso(passo: string) {
  const trimmedPasso = passo.trim();
  if (/^\d+/.test(trimmedPasso)) {
    return stepKeyword.value;
  }
  return "";
}

async function fetchExercise(id: number) {
  result.value = await getExercisesbyTheirId(id);
  exerciseChoose.value = result.value.text;
  refactoredExercise.value = result.value.textRefactored;
  title.value = result.value.categoryName;
}

fetchExercise(id);

watch(steps, (newSteps) => {
  formatStepString(newSteps);
  formatAssertString(newSteps);
});

watch(locale, (newLocale) => {
  formatStepString(steps.value);
  formatAssertString(steps.value);
});

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