<template>
  <v-dialog width="500">
    <template v-slot:activator="{ props }">
      <v-btn
        class="exercise-button"
        v-bind="props"
        :disabled="disable"
        :text="text"
        :onclick="onclick"
      >
      </v-btn>
    </template>

    <template v-if="refactor" v-slot:default="{}">
      <v-card class="success" title="Parabéns!">
        <v-card-text class="text">
          Excelente trabalho!<br />O test smell foi refatorado com sucesso,
          deixando o código de teste mais limpo.
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn text="Próximo" @click="() => router.push(`/chooseexercise/${idSmell}`)"></v-btn>
        </v-card-actions>
      </v-card>
    </template>

    <template v-else v-slot:default="{ isActive }">
      <v-card class="fail" title="Que pena :(">
        <v-card-text class="text">
          Tem algo errado...<br />Tente novamente seguindo o passo a passo.
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn class="green-button" @click="isActive.value = false">Fechar</v-btn>
        </v-card-actions>
      </v-card>
    </template>
  </v-dialog>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
import { useRoute } from "vue-router";

const route = useRoute();
const idSmell = route.params.id;
const router = useRouter();

defineProps<{
  text: string;
  disable: boolean;
  refactor: boolean;
  onclick?: () => void;
}>();
</script>

<style scoped>
.success {
  background-color: rgb(255, 255, 255);
  color: #378f37;
  text-align: center;
}

.fail {
  background-color: rgb(255, 255, 255);
  color: #378f37;
  text-align: center;
  padding-top: 2rem;
}

.exercise-button {
  background-color: rgba(86, 175, 119, 1);
  color: white !important;
  height: 40px !important;
  width: 170px;
  margin-top: 2rem;
  text-align: center;

}

.green-button{
  background-color: #4caf50; 
  color: white;
  text-transform: none;  
}

.text{
  color: black;
}

.exercise-button{
  border-radius: 20px;
}
</style>
