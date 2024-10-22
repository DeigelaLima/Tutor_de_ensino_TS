<template>
  <v-app-bar class="bar-nav">
    <button class="logo-button" @click="$router.push('/')">
      <v-avatar size="90" class="ml-1">
        <v-img src="@/assets/clarity_bug-solidJoanita.svg" alt="Logo" />
      </v-avatar>
      <v-app-bar-title class="text-left-tutor ml-1">TERTS</v-app-bar-title>
    </button>

    <!-- PT-BR -->
    <button @click="changeLanguage('pt')">
      PT-BR
    </button>

    <!-- EN-GB -->
    <button @click="changeLanguage('en')">
      ES
    </button>

    <!-- Sobre -->
    <button class="about-info" @click="$router.push('/about')">
      <v-avatar size="30" class="mr-1">
        <v-img src="@/assets/ph_info-boldehSobreIsso.svg" alt="Logo-Sobre" />
      </v-avatar>
      <v-card-text class="text-right-sobre mr-1">{{ t('aboutPage.about') }}</v-card-text>
    </button>
  </v-app-bar>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'; 

const { t, locale } = useI18n();

// Função para alterar o idioma
function changeLanguage(lang: string) {
  locale.value = lang;
  localStorage.setItem('selectedLanguage', lang); // Salvando o idioma no localStorage
}

// Verificar se existe um idioma salvo no localStorage e aplicá-lo
const savedLanguage = localStorage.getItem('selectedLanguage');
if (savedLanguage) {
  locale.value = savedLanguage;
}
</script>

<style scoped>
.bar-nav :deep(.v-toolbar__content) {
  justify-content: space-between;
}

.bar-nav {
  background-color: rgba(86, 175, 119, 1);
  height: 100px;
  padding: 20px;
  display: flex;
}

.logo-button {
  display: flex;
  justify-content: center;
  align-items: center;
}

.text-right-sobre {
  font-size: 28px;
  color: white;
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
