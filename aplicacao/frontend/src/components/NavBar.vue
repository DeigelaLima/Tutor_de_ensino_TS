<template>
  <v-app-bar class="bar-nav">
    <button class="logo-button" @click="() => $router.push('/')">
      <v-avatar size="160px">
        <v-img src="@/assets/logo-terts.svg" alt="Logo" />
      </v-avatar>
    </button>

    <!-- PT-BR -->
    <button @click="changeLanguage('pt')">PT-BR</button>

    <!-- EN-GB -->
    <button @click="changeLanguage('en')">ES</button>

    <!-- Sobre -->
    <button class="about-info" @click="$router.push('/about')">
      <v-avatar size="24">
        <v-img src="@/assets/info-icon.svg" alt="Logo-Sobre" />
      </v-avatar>
      <v-card-text class="text-right-sobre">Sobre</v-card-text>
    </button>
  </v-app-bar>
</template>

<script setup lang="ts">
import { useI18n } from "vue-i18n";

const { locale } = useI18n();

// Função para alterar o idioma
function changeLanguage(lang: string) {
  locale.value = lang;
  localStorage.setItem("selectedLanguage", lang); // Salvando o idioma no localStorage
}

// Verificar se existe um idioma salvo no localStorage e aplicá-lo
const savedLanguage = localStorage.getItem("selectedLanguage");
if (savedLanguage) {
  locale.value = savedLanguage;
}
</script>

<style scoped>
.bar-nav :deep(.v-toolbar__content) {
  justify-content: space-between;
}

.bar-nav {
  background-color: white;
  height: 80px;
  padding: 8px 120px;
  display: flex;
}

.logo-button {
  display: flex;
  justify-content: center;
  align-items: center;
}

.text-right-sobre {
  font-size: 24px;
  color: #047857;
}

.about-info {
  display: flex;
  align-items: center;
}

.text-left-tutor {
  font-size: 35px;
  color: white;
  font-weight: bold;
}
</style>
