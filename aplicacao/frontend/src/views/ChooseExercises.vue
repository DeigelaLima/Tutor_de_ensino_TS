<template>
  <container>
    <v-row class="context-of-description-and-exercises">
      <v-col cols="8" sm="4">
        <TestSmellCard
          :description="testSmellChoose?.description"
          :name="testSmellChoose?.name"
        ></TestSmellCard>
      </v-col>
      <v-col cols="4" sm="4">
        <div>
          <router-link
            v-for="id in testSmellChoose?.exercise?.idSmell"
            :key="id"
            :to="`/chooseexercise/${testSmellChoose?.id}/${id}`"
            class="text-decoration-none text-reset"
          >
            <ButtonGrl
              :number-exercise="++numberExercise"
              class="button"
            ></ButtonGrl>
          </router-link>
        </div>
      </v-col>
    </v-row>

    <v-col cols="6" sm="6" class="img-container">
      <v-img
        src="@/assets/Bug_solving.svg"
        alt="Resolver bugs"
        class="image-size"
      />
    </v-col>
  </container>
</template>

<script setup lang="ts">
import ButtonGrl from "@/components/ButtonGrl.vue";
import { onBeforeRouteUpdate, useRoute } from "vue-router";
import { ref, watch } from "vue";
import TestSmellCard from "@/components/TestSmellCard.vue";
import { TestSmell } from "@/models/TestSmellModel";
import { getTestSmellById } from "@/services/TestSmellService";
import { useI18n } from 'vue-i18n'; 

const { locale } = useI18n(); // Acessando o locale (idioma atual)

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
container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2.5vh;
}
.context-of-description-and-exercises {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin-top: 5vh;
}

.button:not(:first-child()) {
  margin-top: 15px;
}

.image-size {
  max-width: 60vh;
  width: 60vh;
  padding: 280px;
}
.img-container {
  display: flex;
  justify-content: center;
}
</style>
