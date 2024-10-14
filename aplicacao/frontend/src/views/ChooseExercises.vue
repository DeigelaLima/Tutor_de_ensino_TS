<template>
  <v-container fluid class="home-container">
    <v-row class="row-home" align="center" justify="space-between" no-gutters>
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

        <v-img
          src="@/assets/image-choose-test.svg"
          alt="Resolver bugs"
          class="image-size"
        />
      </v-col>

      <!-- Coluna da Direita: Botões de Exercícios -->
      <v-col cols="12" md="5" class="right-column">
        <v-row class="buttons-row">
          <v-col
            cols="12"
            sm="8"
            v-for="id in testSmellChoose?.exercise?.idSmell"
            :key="id"
            class="button-container"
          >
            <router-link
              :to="`/chooseexercise/${testSmellChoose?.id}/${id}`"
              class="text-decoration-none text-reset"
            >
              <ButtonGrl
                :number-exercise="++numberExercise"
                class="button"
              ></ButtonGrl>
            </router-link>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import ButtonGrl from "@/components/ButtonGrl.vue";
import { onBeforeRouteUpdate, useRoute } from "vue-router";
import { ref } from "vue";
import TestSmellCard from "@/components/TestSmellCard.vue";
import { TestSmell } from "@/models/TestSmellModel";
import { getTestSmellById } from "@/services/TestSmellService";

const route = useRoute();
let id = Number(route.params.id);
const testSmellChoose = ref<TestSmell>();

let numberExercise = 0;

async function getTestSmell(id: number) {
  const result = getTestSmellById(id);
  testSmellChoose.value = result;
}

getTestSmell(id);

onBeforeRouteUpdate(async (to, from) => {
  if (to.params.id !== from.params.id) {
    id = Number(to.params.id);
    getTestSmell(id);
  }
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

.right-column {
  display: flex;
  align-items: center;
  justify-content: center;
}

.buttons-row {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.button-container {
  display: flex;
  justify-content: center;
}

.img-container {
  display: flex;
  justify-content: flex-start;
}

.image-size {
  max-width: 100%;
  height: auto;
}
</style>
