<template>
  <v-container fluid class="home-container">
    <v-row class="row-home" align="center" justify="space-between">
      <!-- Coluna da Esquerda: Texto de Apresentação -->
      <v-col cols="12" md="6" class="left-column">
        <h2 class="text-welcome">
          {{ t("homePage.title") }}
        </h2>
        <p class="text-description">
          {{ t("homePage.subtitle") }}
        </p>
        <div style="display: flex; justify-content: center">
          <v-img
            src="@/assets/image-home.svg"
            alt="Bem-vindo"
            class="image-home"
          />
        </div>
      </v-col>

      <!-- Coluna da Direita: Botões de Seleção de Test Smell -->
      <v-col cols="12" md="5" class="right-column">
        <p class="text-choice">{{ t("homePage.chooseSmell") }}</p>
        <v-col
          v-for="(testSmell, index) in testSmells"
          :key="index"
          cols="12"
          class="smell-type"
        >
          <router-link
            :to="`/chooseexercise/${testSmell.id}`"
            class="link-reset"
          >
            <v-btn block rounded="lg" size="large" class="green-button">
              {{ testSmell.name }}
            </v-btn>
          </router-link>
        </v-col>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { getTestSmells } from "@/services/TestSmellService";
import { TestSmell } from "@/models/TestSmellModel";
import { useI18n } from "vue-i18n";

const { t } = useI18n();
const testSmells = ref<TestSmell[]>([]);

onMounted(async () => {
  testSmells.value = getTestSmells().value;
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
  gap: 12px;
  justify-content: center;
  text-align: left;
}

.right-column {
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: center;
}

.text-welcome {
  font-size: 36px;
  color: black;
}

.name-terts {
  color: #047857;
}

.text-description {
  font-size: 20px;
  color: black;
}

.image-home {
  max-width: 80%;
  height: auto;
}

.text-choice {
  font-size: 20px;
  font-weight: bold;
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

.link-reset {
  text-decoration: none;
  color: inherit;
}

@media only screen and (max-width: 600px) {
  .row-home {
    margin: 0;
  }
  .right-column {
    justify-items: center;
    .text-choice {
      text-align: center;
    }
  }
  .left-column {
    text-align: center;
  }
  .text-welcome {
    font-size: 2rem;
  }
  .home-container {
    padding: 2rem;
  }
}
</style>
