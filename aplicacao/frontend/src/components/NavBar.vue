<template>
  <v-app-bar app class="bar-nav">
    <v-avatar size="50" class="ml-1">
      <v-img src="@/assets/clarity_bug-solidJoanita.svg" alt="Logo" />
    </v-avatar>
    <v-app-bar-title class="text-left-tutor ml-1"
      >Tutor de Ensino</v-app-bar-title
    >
    <v-spacer></v-spacer>
    <!-- Sobre -->
    <v-row align="center" class="flex-row-reverse">
      <v-card-text class="text-right-sobre mr-8">Sobre</v-card-text>
      <v-avatar size="15" class="mr-1">
        <v-img src="@/assets/ph_info-boldehSobreIsso.svg" alt="Logo-Sobre" />
      </v-avatar>
    </v-row>
  </v-app-bar>
</template>

<script>
export default {};
</script>

<style scoped>
.bar-nav {
  background-color: rgba(86, 175, 119, 1);
}

.text-right-sobre {
  font-size: 15px;
  color: white;
}

.text-left-tutor {
  font-size: 20px;
  color: white;
}
</style>
