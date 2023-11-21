<template>
  <div class="container-text">
    <h1 class="margin-description-smell">
      {{ name }}
    </h1>
    <h4>{{ description }}</h4>
  </div>
</template>

<script lang="ts" setup>
import { TestSmell } from "@/models/TestSmellModel";

defineProps<Omit<TestSmell, "id">>();
</script>

<style>
.container-text {
  background-color: #d9f3ed;
  text-align: center;
  padding: 50px;
  border-radius: 10px;
}
.container-text > h4 {
  text-align: justify;
  text-justify: inter-word;
}

.margin-description-smell {
  margin-bottom: 20px;
}
</style>
