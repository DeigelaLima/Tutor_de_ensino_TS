<template>
    <v-container fluid class="home-container">
      <v-row>
        <v-col>
          <v-card class="green-background">
            <v-card-title class="white--text">Tutor de Ensino</v-card-title>
            <v-card-title class="white--text">Sobre</v-card-title>
          </v-card>
          <v-card-text>
            <v-img src="@/assets/homePage.jpg" alt="Bem-vindo" />
            <p>Bem-vindo ao Tutor de Ensino.</p>
          </v-card-text>
          <v-card-actions>
            <v-col cols="12" sm="6" md="4">
              <v-btn block rounded="lg" size="x-large">Rounded lg</v-btn>
            </v-col>
            <v-btn>Assertion Roulette</v-btn>
            <v-btn>Duplication Assert</v-btn>
            <v-btn>Eager Test</v-btn>
            <v-btn>Ignored Test</v-btn>
          </v-card-actions>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script setup>
    // Lógica do componente aqui
  </script>
  
  <style scoped>
    .home-container {
      background-color: green;
    }
  
    .green-background {
      background-color: green;
    }
  </style>
  