<template>
  <v-container fluid class="home-container">
        <v-app-bar app color="green" dark>
            <v-avatar size="50">
              <v-img src="@/assets/clarity_bug-solidJoanita.svg" alt="Logo" />
            </v-avatar>
            <v-app-bar-title class="text-left-tutor">Tutor de Ensino</v-app-bar-title>
            <v-spacer></v-spacer>
            <v-avatar size="15">
              <v-img src="@/assets/ph_info-boldehSobreIsso.svg" alt="Logo-Sobre" />
            </v-avatar>
            <v-app-bar-title class="text-right-sobre">Sobre</v-app-bar-title>
        </v-app-bar>

          <v-container>
            <v-row justify="end">
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
                  <v-img src="@/assets/Group6homePage.svg" alt="Bem-vindo" class="image-size" />
              </v-col>
            </v-row>
          </v-container>
        

          <v-col class="choice">
            <p>Escolha um tipo de Test Smell para começar:</p>
          </v-col>
          <!-- Botões -->
          <v-footer app>
            <v-row justify="center">
              <v-col>
                <v-btn block rounded="lg" size="large" class="green-button white--text">
                  Assertion Roulette
                </v-btn>
              </v-col>
              <v-col>
                <v-btn block rounded="lg" size="large" class="green-button white--text">
                  Duplication Assert
                </v-btn>
              </v-col>
              <v-col>
                <v-btn block rounded="lg" size="large" class="green-button white--text">
                  Eager Test
                </v-btn>
              </v-col>
              <v-col>
                <v-btn block rounded="lg" size="large" class="green-button white--text">
                  Ignored Test
                </v-btn>
              </v-col>
            </v-row>
          </v-footer>
  </v-container>
</template>
  
<script setup>
  // Lógica do componente aqui
</script>
  
<style scoped>
  .home-container {
    background-color: white;
    width: 100vw;
    /* height: 100px; */
  }

  .green-background {
    background-color: rgb(94, 179, 94);
  }

  /* imagem homePage */
  .image-size {
      max-width: 180px; 
  }

  /* Botões */
  .green-button {
    background-color: rgb(94, 179, 94);
    color: white;
    font-size: 10px;
    padding: 2px 8px;
  }
  .text-left-bemVindo {
    font-size: 12px;
    color:black;
  }

  .text-left-refatoracao {
    font-size: 8px;
    /* text-align: left; */
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
  }
  .text-right-sobre{
    font-size: 15px;
  }
</style>
  