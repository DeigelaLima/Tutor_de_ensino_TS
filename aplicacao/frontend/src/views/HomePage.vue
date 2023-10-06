<template>
  <v-container fluid class="home-container">
    <v-container>
      <v-row align="start" justify="space-between">
        <!-- Coluna da esquerda para o texto -->
        <v-col cols="12" sm="6">
          <v-card-text class="text-left-bemVindo">
            <p>Bem-vindo ao tutor de ensino!</p>
          </v-card-text>
          <v-card-text class="text-left-refatoracao">
            <p>
              Aqui você vai encontrar exercícios de teste de unidade<br />
              para a refatoração de test smells.
            </p>
          </v-card-text>
        </v-col>

        <!-- Coluna da direita para a imagem -->
        <v-col cols="12" sm="6">
          <v-img
            src="@/assets/Group6homePage.svg"
            alt="Bem-vindo"
            class="image-size ml-16"
          />
        </v-col>
      </v-row>
    </v-container>

    <v-col class="choice">
      <p>Escolha um tipo de Test Smell para começar:</p>
    </v-col>
    <!-- Botões -->
    <v-footer app>
      <v-row justify="center">
        <v-col
          cols="3"
          v-for="(testSmell, index) in typesOfTestSmells"
          :key="index"
        >
          <router-link
            :to="`/chooseexercise/${testSmell.id}`"
            class="text-decoration-none text-reset"
          >
            <v-btn
              block
              rounded="lg"
              size="large"
              class="green-button white--text"
            >
              {{ testSmell.name }}
            </v-btn>
          </router-link>
        </v-col>
      </v-row>
    </v-footer>
  </v-container>
</template>

<script setup lang="ts">
import { ref } from "vue";

type TestSmell = {
  id: number;
  name: string;
};
const typesOfTestSmells = ref<TestSmell[]>([
  { id: 1, name: "Assertion Roulette" },
  { id: 2, name: "Duplication Assert" },
  { id: 3, name: "Eager Test" },
  { id: 4, name: "Ignored Test" },
]);
</script>

<style scoped>
.home-container {
  background-color: white;
}

/* imagem homePage */
.image-size {
  max-width: 180px;
}

/* Botões */
.green-button {
  background-color: rgba(86, 175, 119, 1);
  color: white;
  font-size: 10px;
  padding: 2px 8px;
}
.text-left-bemVindo {
  font-size: 18px;
  text-align: center;
  color: black;
}

.text-left-refatoracao {
  font-size: 8px;
  text-align: center;
  color: black;
}
.choice {
  font-size: 12px;
  color: black;
  text-align: center;
}
</style>
