<template>
  <v-container fluid class="container">
    <v-row>
      <v-row class="back-button">
        <BackButton :onclick="() => router.push(`/chooseexercise/${idSmell}`)" />
      </v-row>
      <v-row class="header">
        <h1 class="title">{{ exerciseStore.title }}</h1>
        <p class="description">{{ exerciseStore.description }}</p>
      </v-row>
      <v-col cols="12" md="6">
        <Codemirror :model-value="exerciseStore.exerciseChoose" class="code-editor"
          @change="(value) => handleChange(value)" :extensions="language" />
      </v-col>
      <v-col cols="12" md="6">
        <v-card-text align="center">
          <h2 class="intro-step">
            {{ t('exercisePage.introStep') }}
          </h2>
          <div class="card-step">
            <h1 class="steps-title">{{ t('exercisePage.stepsTitle') }}</h1>
            <ul class="step-by-step">
              <p 
              :key="step" 
              :class="checkIfNeedsPasso(step) ? 'step' : ''" 
              v-for="step in exerciseStore.formatedSteps">
                {{ checkIfNeedsPasso(step) + step }}
              </p>
            </ul>
            <ul class="step-by-step">
              <p class="step-assert" :key="assert" v-for="assert in exerciseStore.formatedAsserts">
                {{ exerciseStore.assertionKeyword + assert }}
              </p>
            </ul>
          </div>
        </v-card-text>
        <h2 class="text-button-refactor">
          {{ t('exercisePage.refactorText') }}
        </h2>
        <v-row class="foot-buttons" justify="space-around">
          <ButtonPopup :text="t('exercisePage.refactor')" :disable="exerciseStore.refactorState"
            :onclick="handleRefactor" :refactor="exerciseStore.feedback" />
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import BackButton from "@/components/BackButton.vue";
import { Codemirror } from "vue-codemirror";
import ButtonPopup from "../components/ButtonPopup.vue";
import { onBeforeRouteUpdate, useRoute, useRouter } from "vue-router";
import { java } from "@codemirror/lang-java";
import { useExerciseStore } from "@/stores/exerciseStore";
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const language = [java()];
const router = useRouter();
const route = useRoute();
let id = Number(route.params.idSmell);
let idSmell = Number(route.params.id);

const exerciseStore = useExerciseStore();

exerciseStore.fetchExercise(id);

onBeforeRouteUpdate(async (to, from) => {
  if (to.params.id !== from.params.id) {
    id = Number(to.params.id);
    await exerciseStore.fetchExercise(id);
  }
});

function handleChange(value: string) {
  exerciseStore.refactorState = false;
  exerciseStore.userExercise = value;
}

function checkIfNeedsPasso(passo: string) {
  const trimmedPasso = passo.trim();
  if (/^\d+/.test(trimmedPasso)) {
    return exerciseStore.stepKeyword;
  }
  return "";
}

function handleRefactor() {
  if (exerciseStore.checkRefactor()) {
    exerciseStore.feedback = true;
  } else {
    exerciseStore.feedback = false;
  }
}
</script>

<style scoped>
.step-by-step p {
  white-space: pre-wrap;
}

.title {
  color: #378f37;
}

.card-step {
  background-color: #ffffff;
  border-radius: 30px;
  padding-bottom: 2rem;
  min-height: 100px;
  border: 4px solid #378f37;
}

.step-assert {
  padding-bottom: 1rem;
  padding-left: 3rem;
  padding-right: 3rem;
  font-size: 19px;
  width: 100%;
  box-sizing: border-box;
  text-align: justify;
}

.step {
  padding-bottom: 1rem;
  padding-top: 1rem;
  padding-left: 2rem;
  padding-right: 2rem;
}

.intro-step {
  text-align: justify;
  padding-bottom: 2rem;
  width: 100%;
  box-sizing: border-box;
  text-align: justify;
}

.foot-buttons {
  margin-top: 0rem;
  margin-bottom: 2rem;
}

.text-button-refactor {
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 30px;
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
  background-color: #ffffff;
  font-size: 20px;
  min-width: 100%;
  min-height: 150px;
  width: 100%;
  box-sizing: border-box;
  text-align: justify;
  overflow-wrap: break-word;
}

.step-by-step {
  text-align: start;
  width: 100%;
  font-size: 20px;
  width: 100%;
  box-sizing: border-box;
  text-align: justify;
  overflow-wrap: break-word;
}

.steps-title {
  padding: 1rem 0rem;
  color: #378f37;
}

@media (min-width: 601px) and (max-width: 960px) {
  .description {
    font-size: 18px;
    margin: 1rem 0 1rem 0;
    padding: 1rem;
  }

  .step-by-step {
    font-size: 20px;
  }

  .title {
    font-size: 28px;
  }

  .code-editor {
    height: 55vh !important;
    width: 90% !important;
    margin: 1.5rem 0 0 0 !important;
  }
}

@media only screen and (max-width: 600px) {
  .back-button {
    padding: 1rem 0 0 0.5rem;
  }

  .step-by-step {
    font-size: 18px;
    width: 100%;
  }

  .title {
    font-size: 24px;
  }

  .card-step {
    padding-bottom: 1rem;
    font-size: 16px;
  }

  .description {
    font-size: 1.1rem;
    margin: 1rem 0 1rem 0;
    padding: 1rem;
  }

  .code-editor {
    height: 65vh !important;
    width: 100% !important;
    margin: 2rem 0 0 2rem !important;
  }
}

@media (min-width: 961px) {
  .description {
    font-size: 20px;
  }

  .step-by-step {
    font-size: 20px;
  }

  .title {
    font-size: 32px;
  }

  .code-editor {
    height: 65vh !important;
    width: 100% !important;
    margin: 2rem 0 0 2rem !important;
  }
}
</style>
