<template>
  <v-container fluid class="home-container">
    <v-container style="min-width: 100vw; margin: 0;">
      <v-row>
        <!-- Coluna da esquerda para o texto -->
        <v-col cols="12" sm="6">
          <v-card-text class="text-left-bemVindo">
            <h2>{{ t('homePage.title') }}</h2>
          </v-card-text>
          <v-card-text class="text-left-refatoracao">
            <p>
              {{ t('homePage.subtitle') }}
            </p>
          </v-card-text>
        </v-col>

        <!-- Coluna da direita para a imagem -->
        <v-col cols="12" sm="5">
          <v-img src="@/assets/Group6homePage.svg" alt="Bem-vindo" class="image-size ml-16" />
        </v-col>
      </v-row>
    </v-container>
    <!-- Botões -->
    <v-footer app>
      <v-col>
        <v-col class="choice">
          <p>{{ t('homePage.chooseSmell') }}</p>
        </v-col>
        <v-row justify="center">
          <v-col class="smell-type" cols="3" v-for="(testSmell, index) in testSmells" :key="index">
            <router-link :to="`/chooseexercise/${testSmell.id}`" class="text-decoration-none text-reset">
              <v-btn block rounded="lg" size="large" class="green-button">
                <p>
                  {{ testSmell.name }}
                </p>
              </v-btn>
            </router-link>
          </v-col>
        </v-row>
      </v-col>
    </v-footer>
  </v-container>
</template>

<script setup lang="ts">
import { TestSmell } from "./../models/TestSmellModel";
import { onMounted, ref } from "vue";
import { getTestSmells } from "@/services/TestSmellService";
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const testSmells = ref<TestSmell[]>([]);

onMounted(async () => {
  testSmells.value = getTestSmells();
});
</script>

<style scoped>
.bar-nav {
  background-color: rgba(86, 175, 119, 1);
}

.home-container {
  background-color: white;
}

/* imagem homePage */
.image-size {
  size: 20em;
  margin-top: 80px
}


/* Botões */
.green-button {
  background-color: rgba(86, 175, 119, 1);
  color: white;
  font-size: 20px;
  padding: 40px 8px;
  margin-bottom: 15px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
}

.text-left-bemVindo {
  font-size: 35px;
  text-align: left;
  text-align: center;
  color: black;
  padding: 80px;
}

.text-left-refatoracao {
  font-size: 25px;
  text-align: left;
  text-align: center;
  color: black;
}

.choice {
  font-size: 30px;
  color: black;
  text-align: center;
  margin-bottom: 20px;
}
</style>
