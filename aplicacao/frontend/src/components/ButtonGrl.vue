<template>
  <v-col cols="12" sm="6" md="5" class="py-1">
    <v-btn block rounded="xs" size="x-large" class="green-button"
      >Exercício {{ numberExercise }}</v-btn
    >
  </v-col>
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
}
</style>
