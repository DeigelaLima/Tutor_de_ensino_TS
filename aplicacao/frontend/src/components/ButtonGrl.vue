<template>
  <v-btn block rounded="xs" class="green-button">
    {{t('chooseExercises.exercise')}} {{ numberExercise }}
  </v-btn>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

defineProps<{
  numberExercise: number;
}>();
</script>

<style scoped>
.green-button {
  background-color: #047857;
  color: white;
  font-size: 18px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
}

.v-btn.v-btn--density-default {
  width: 100%;
  height: 64px;
}
</style>
