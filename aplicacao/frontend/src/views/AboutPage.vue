<template>
  <v-container class="container">
    <div class="content">
      <div class="description">
        <h1 class="h1-text">{{ t('aboutPage.about') }}</h1>
        <v-row class="about-tutor">{{ t('aboutPage.aboutTutor') }}</v-row>
      </div>

      <div class="requisites-section">
        <h1 class="h1-text">{{ t('aboutPage.requirements') }}</h1>
        <div class="about-tutor">
          {{ t('aboutPage.requirementsInfo') }}
          <a href="  https://tutor-de-ensino-ts.vercel.app/" target="_blank">
            https://tutor-de-ensino-ts.vercel.app/
          </a>
        </div>
      </div>

      <div class="test-smells-available">
        <h1 class="h1-text">{{ t('aboutPage.datasets') }}</h1>
        <div class="about-tutor">
          {{ t('aboutPage.datasetsInfo') }}
          <div class="links">
            <ul class="links">
              <li><a href="https://github.com/apache/commons-codec" target="_blank">
                  https://github.com/apache/commons-codec</a></li>
              <li><a href="https://github.com/apache/commons-math.git" target="_blank">
                  https://github.com/apache/commons-math.git</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div class="development-team-div">
        <h1 class="h1-text">{{ t('aboutPage.developmentTeam') }}</h1>
        <div class="development-team">
          <DeveloperCard nick="DeigelaLima" :foto="require('@/assets/team/Foto-Deigela.jpeg')"
            :descricao="t('aboutPage.developmentTeamInfo.deigela')" nome="Deigela Lima" email="deigelalima@hotmail.com">
          </DeveloperCard>
          <DeveloperCard nick="Joaopfq" :foto="require('@/assets/team/Foto-Joao.jpeg')"
            :descricao="t('aboutPage.developmentTeamInfo.joao')" nome="João Paulo" email="joaop3595@gmail.com">
          </DeveloperCard>
          <DeveloperCard nick="larasouzabr" :foto="require('@/assets/team/Foto-Lara.jpeg')"
            :descricao="t('aboutPage.developmentTeamInfo.lara')" nome="Lara Souza" email="laragabrielly@alu.ufc.br">
          </DeveloperCard>
          <DeveloperCard nick="ovictorpa" :foto="require('@/assets/team/Foto-Victor.png')"
            :descricao="t('aboutPage.developmentTeamInfo.victor')" nome="Victor Anthony" email="victorpa@alu.ufc.br">
          </DeveloperCard>
          <DeveloperCard :foto="require('@/assets/team/Foto-Carla.jpg')"
            :descricao="t('aboutPage.developmentTeamInfo.carla')" nome="Carla Bezerra" email="carlailane@ufc.br">
          </DeveloperCard>
        </div>
      </div>
    </div>
  </v-container>
</template>

<script setup lang="ts">
import DeveloperCard from "@/components/DeveloperCard.vue";
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
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
.test-smells-available,
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

.links {
  text-align: left;
  margin-left: 40px;
}
</style>
