<template>
  <v-container fluid class="home-container">            
        <v-app-bar app class="bar-nav">
            <v-avatar size="50" class="ml-1">
              <v-img src="@/assets/clarity_bug-solidJoanita.svg" alt="Logo" />
            </v-avatar>
            <v-app-bar-title class="text-left-tutor ml-1">Tutor de Ensino</v-app-bar-title>
            <v-spacer></v-spacer>
            <!-- Sobre -->
            <v-row align="center" class="flex-row-reverse">
              <v-card-text class="text-right-sobre mr-8">Sobre</v-card-text>
              <v-avatar size="15" class="mr-1">
                <v-img src="@/assets/ph_info-boldehSobreIsso.svg" alt="Logo-Sobre" />
              </v-avatar>
            </v-row>

        </v-app-bar>

        <v-container>
          <v-row align="start" justify="between">
            <!-- Coluna da esquerda para o texto -->
            <v-col cols="12" sm="6">
              <v-card-text class="text-left-bemVindo">
                <p>Bem-vindo ao tutor de ensino!</p>
              </v-card-text>
              <v-card-text class="text-left-refatoracao">
                <p>Aqui você vai encontrar exercícios de teste de unidade<br> 
                    para a refatoração de test smells.</p> 
              </v-card-text>
            </v-col>

            <!-- Coluna da direita para a imagem -->
            <v-col cols="12" sm="6">
                <v-img src="@/assets/Group6homePage.svg" alt="Bem-vindo" class="image-size ml-16" />
            </v-col>
          </v-row>
        </v-container>
        

        <v-col class="choice">
          <p>Escolha um tipo de Test Smell para começar:</p>
        </v-col>
        <!-- Botões -->
        <v-footer app>
        <v-row justify="center">
          <v-col cols="3"> 
            <router-link to="/escolher-exercicios">
              <v-btn block rounded="lg" size="large" class="green-button white--text">
                Assertion Roulette
              </v-btn>
            </router-link>
          </v-col>
          <v-col cols="3">
            <router-link to="/escolher-exercicios">
              <v-btn block rounded="lg" size="large" class="green-button white--text">
                Duplication Assert
              </v-btn>
            </router-link>
          </v-col>
          <v-col cols="3">
            <router-link to="/escolher-exercicios">
              <v-btn block rounded="lg" size="large" class="green-button white--text">
                Eager Test
              </v-btn>
            </router-link>
          </v-col>
          <v-col cols="3">
            <router-link to="/escolher-exercicios">
              <v-btn block rounded="lg" size="large" class="green-button white--text">
                Ignored Test
              </v-btn>
            </router-link>
          </v-col>
        </v-row>
      </v-footer>
    </v-container>
</template>
  
<script setup>
  // Lógica do componente aqui
</script>
  
<style scoped>
  .bar-nav {
    background-color: rgba(86, 175, 119, 1);
  }
  .home-container {
    background-color: white;
  }

  /* imagem homePage */
  .image-size {
      max-width: 180px; 
  }

  /* Botões */
  .green-button {
    background-color: rgba(86, 175, 119, 1);
    color: white;
    font-size: 10px;
    padding: 2px 8px;
  }
  .text-left-bemVindo {
    font-size: 18px;
    text-align: center;
    color:black;
  }

  .text-left-refatoracao {
    font-size: 8px;
    text-align: center;
    color:black;
  }
  .choice{
    font-size: 12px;
    color: black;
    text-align: center;

  }
  .text-left-tutor{
    font-size: 20px;
    color: white;
  }
  .text-right-sobre{
    font-size: 15px;
    color: white;
  }
</style>
  