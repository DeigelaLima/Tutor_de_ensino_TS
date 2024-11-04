<template>
  <v-container fluid class="home-container">
    <v-row class="row-home" align="center" justify="space-between">
      <!-- Coluna da Esquerda: Texto e Imagem -->
      <v-col cols="12" md="6" class="left-column">
        <div class="img-container">
          <button :onclick="() => $router.push('/')">
            <v-avatar size="32px">
              <v-img src="@/assets/back-button.svg" alt="Voltar" />
            </v-avatar>
          </button>
        </div>

        <TestSmellCard
          :description="testSmellChoose?.description"
          :name="testSmellChoose?.name"
          class="card-spacing"
        />

        <div style="display: flex; justify-content: center">
          <v-img
            src="@/assets/image-choose-test.svg"
            alt="Resolver bugs"
            class="image-size"
          />
        </div>
      </v-col>

      <!-- Coluna da Direita: Botões de Exercícios -->
      <v-col cols="12" md="5" class="right-column">
        <v-col
          v-for="id in testSmellChoose?.exercise?.idSmell"
          :key="id"
          cols="12"
          class="smell-type"
        >
          <router-link
            :to="`/chooseexercise/${testSmellChoose?.id}/${id}`"
            class="link-reset"
          >
            <v-btn block rounded="lg" size="large" class="green-button">
              {{t('chooseExercises.exercise')}} {{ ++numberExercise }}
            </v-btn>
          </router-link>
        </v-col>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { onBeforeRouteUpdate, useRoute } from "vue-router";
import { ref, watch } from "vue";
import TestSmellCard from "@/components/TestSmellCard.vue";
import { TestSmell } from "@/models/TestSmellModel";
import { getTestSmellById } from "@/services/TestSmellService";
import { useI18n } from 'vue-i18n'; 

const { locale, t } = useI18n(); // Acessando o locale (idioma atual)
const route = useRoute();
let id = Number(route.params.id);
const testSmellChoose = ref<TestSmell>();

let numberExercise = 0;

async function getTestSmell(id: number) {
  const result = getTestSmellById(id);
  testSmellChoose.value = result;
  numberExercise = 0;
}

getTestSmell(id);

onBeforeRouteUpdate(async (to, from) => {
  if (to.params.id !== from.params.id) {
    id = Number(to.params.id);
    getTestSmell(id);
  }
});

watch(locale, () => { // Verificar a mudança da linguagem e buscar o texto traduzido
  getTestSmell(id);
});
</script>

<style scoped>
.home-container {
  background-color: white;
  min-height: 100vh;
  padding: 40px;
}

.row-home {
  margin: 40px 80px;
}

.left-column {
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: center;
  text-align: left;
}

.green-button {
  width: 100%;
  height: 48px;
  background-color: #047857;
  color: white;
  font-size: 18px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
}

.right-column {
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: center;
}

.img-container {
  display: flex;
  justify-content: flex-start;
}

.image-size {
  max-width: 60%;
  height: auto;
}

.link-reset {
  text-decoration: none;
  color: inherit;
}
@media only screen and (max-width: 600px) {
  .row-home {
    margin: 0;
  }

  .home-container {
    padding: 2rem;
  }
}
</style>
