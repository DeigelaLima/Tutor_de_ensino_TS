<template>
  <v-container class="container">
    <div class="content">
      <div class="description">
        <h1 class="h1-text">Sobre</h1>
        <v-row class="about-tutor"
          >O Tutor de Ensino é uma aplicação educacional dedicada ao ensino de
          técnicas de refatoração de testes de unidades, focalizando na
          eliminação de "smells" para capacitar alunos de graduação nas áreas de
          tecnologia. A ferramenta oferece aprendizado efetivo sobre quatro
          categorias de "test smells" - Assertion Roulette, Duplicate Assert,
          Ignored Test e EagerTest - por meio de 12 exercícios específicos. Os
          alunos têm autonomia para escolher a categoria de exercícios desejada.
          O feedback da ferramenta reflete a refatoração realizada pelo aluno no
          código de teste. Cada exercício fornece uma descrição detalhada do
          código de produção associado ao teste e uma explicação sobre o próprio
          teste, buscando uma compreensão abrangente do contexto de refatoração.
          Além disso, a ferramenta oferece um guia passo a passo para a
          refatoração de cada "smell" identificado no teste, essencial para
          proporcionar clareza e facilitar o processo de aprendizagem nas
          práticas de refatoração.
        </v-row>
      </div>
      <div class="requisites-section">
        <h1 class="h1-text">Requisitos do sistema</h1>
        <div class="about-tutor">
          Para utilizar a ferramenta Tutor de Ensino você deve ter instalado o
          navegador Chrome ou Firefox em seu computador e em seguida clicar no
          link para ter acesso ao Tutor de Ensino:
          <a href="  https://tutor-de-ensino-ts.vercel.app/">
            https://tutor-de-ensino-ts.vercel.app/
          </a>
        </div>
      </div>
      <div class="development-team-div">
        <h1 class="h1-text">Equipe de Desenvolvimento</h1>
        <div class="development-team">
          <DeveloperCard
            nick="DeigelaLima"
            foto="@/assets/team/16566520.jpeg"
            descricao="Graduanda em Ciência da Computação, bolsista PIBIC e desenvolvedora front-end.

"
            nome="Deigela Lima"
            email="deigelalima@hotmail.com"
          ></DeveloperCard>
          <DeveloperCard
            nick="Joaopfq"
            foto="86858044.jpeg"
            descricao="Graduando em Engenharia de Software, bolsista PIBITI e desenvolvedor front-end.


"
            nome="João Paulo"
            email="joaop3595@gmail.com"
          ></DeveloperCard>
          <DeveloperCard
            nick="larasouzabr"
            foto="80922589.jpeg"
            descricao="Graduanda em Engenharia de Software, bolsista PIBIC e desenvolvedora front-end.
"
            nome="Lara Souza"
            email="laragabrielly@alu.ufc.br"
          ></DeveloperCard>
          <DeveloperCard
            nick="ovictorpa"
            foto="84782737.jpeg"
            descricao="Graduando em Engenharia de Software, bolsista PIBITI e desenvolvedor back-end.



"
            nome="Victor Anthony"
            email="victorpa@alu.ufc.br"
          ></DeveloperCard>
          <DeveloperCard
            foto="Foto-Carla-240x265.jpg"
            descricao="Orientadora, professora na Universidade Federal do Ceará - Campus Quixadá."
            nome="Carla Bezerra"
            email="carlailane@ufc.br"
          ></DeveloperCard>
        </div>
      </div>
    </div>
  </v-container>
</template>

<script setup lang="ts">
import DeveloperCard from "@/components/DeveloperCard.vue";
</script>

<style scoped>
.about-tutor {
  margin-left: inherit;
  font-size: 25px;
  margin-top: 2vh;
  text-align: justify;
}

.description,
.requisites-section,
.development-team-div {
  margin-top: 3vh;
  display: flex;
  justify-content: center;
  text-align: center;
  display: block;
}
.development-team {
  display: flex;
  margin-top: 6vh;
}
.h1-text {
  background-color: #d9f3ed;
}

.container {
  margin-top: 5vh;
}
</style>