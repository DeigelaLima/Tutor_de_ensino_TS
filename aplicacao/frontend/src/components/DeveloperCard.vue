<template>
  <v-card class="mx-auto" max-width="344">
    <v-img :src="foto" height="300px" cover></v-img>
    <v-card-text>
      <p class="text-h4 text--primary">{{ nome }}</p>
      <div class="text-h6 text--primary">
        {{ descricao }}
      </div>
    </v-card-text>
    <v-card-actions>
      <v-btn variant="text" class="button-contact" @click="reveal = true">
        {{t('aboutPage.formsOfContact')}}
      </v-btn>
    </v-card-actions>

    <v-expand-transition>
      <v-card v-if="reveal" class="v-card--reveal" style="height: 100%">
        <v-card-text class="pb-0">
          <p class="text-h4 text--primary">{{t('aboutPage.meansOfContact')}}</p>
          <div class="contact-div">
            <div class="contact-line">
              <v-img
                src="@/assets/email-svgrepo-com.svg"
                alt="Logo Gmail"
                width="30px"
              />
              <label class="contact-text">{{ email }}</label>
            </div>
            <div class="contact-line" v-if="nick">
              <v-img
                src="@/assets/github-mark.svg"
                alt="Logo github"
                width="30px"
              />
              <label class="contact-text"
                ><a
                  v-if="nick"
                  :href="'https://github.com/' + nick"
                  target="_blank"
                  >{{ nick }}</a
                >
              </label>
            </div>
          </div>
        </v-card-text>
        <v-card-actions class="pb-0">
          <v-btn variant="text" color="teal-accent-4" @click="reveal = false">
            {{t('aboutPage.close')}}
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-expand-transition>
  </v-card>
</template>
<script setup lang="ts">
import { ref } from "vue";
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const reveal = ref(false);

defineProps<{
  nome: string;
  nick?: string;
  email: string;
  foto: string;
  descricao: string;
}>();

</script>
<style>
.v-card--reveal {
  bottom: 0;
  opacity: 1 !important;
  position: absolute;
  width: 100%;
  flex-direction: column;
  display: flex;
  align-items: center;
  justify-content: center;
}
.contact-line {
  display: flex;
  align-items: center;
}
.button-contact {
  background-color: #d9f3ed;
}

.contact-div {
  width: 40px;
  height: 200px;
  text-align: center;
  line-height: 100px;
}

.v-card-actions {
  justify-content: center;
}

.contact-text {
  margin-left: 5px;
  font-size: 20px;
}

.contact-line > .v-img {
  max-width: 30px;
}
</style>
