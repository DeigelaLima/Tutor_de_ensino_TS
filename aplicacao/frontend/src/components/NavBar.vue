<template>
  <v-app-bar class="bar-nav">
    <button class="logo-button" @click="$router.push('/')">
      <v-avatar size="90" class="ml-1">
        <v-img src="@/assets/clarity_bug-solidJoanita.svg" alt="Logo" />
      </v-avatar>
      <v-app-bar-title class="text-left-tutor ml-1"
        >TERTS</v-app-bar-title
      >
    </button>

    <!-- Sobre -->
    <button class="about-info" @click="$router.push('/about')">
      <v-avatar size="30" class="mr-1">
        <v-img src="@/assets/ph_info-boldehSobreIsso.svg" alt="Logo-Sobre" />
      </v-avatar>
      <v-card-text class="text-right-sobre mr-1">Sobre</v-card-text>
    </button>
  </v-app-bar>
</template>

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
