<template>
  <div class="container-text">
    <h1 class="margin-description-smell">
      {{ name }}
    </h1>
    <p class="test-description">{{ description }}</p>
  </div>
</template>

<script lang="ts" setup>
import { TestSmell } from "@/models/TestSmellModel";

defineProps<Omit<TestSmell, "id">>();
</script>

<style>
.container-text {
  text-align: left;
}

.container-text > h4 {
  text-align: justify;
  text-justify: inter-word;
}

.margin-description-smell {
  color: #047857;
}
</style>
