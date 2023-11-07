<template>
  <v-btn block rounded="xs" size="x-large" class="green-button"
    >Exercício {{ numberExercise }}</v-btn
  >
</template>

<script setup lang="ts">
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
  margin: 5px;
}
</style>
