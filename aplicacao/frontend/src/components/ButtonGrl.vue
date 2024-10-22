<template>
  <v-btn block rounded="xs" class="green-button"
    >{{t('chooseExercises.exercise')}} {{ numberExercise }}</v-btn
  >
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

defineProps<{
  numberExercise: number;
}>();
</script>

<style>
.green-button {
  background-color: rgba(86, 175, 119, 1);
  color: white;
  font-size: 20px;
  padding: 2px 8px;
  justify-content: flex-start;
  margin-bottom: 20px;
}

.v-btn.v-btn--density-default {
  height: 75px;
}
</style>
