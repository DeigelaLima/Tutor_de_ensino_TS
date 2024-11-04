<template>
  <v-card class="mx-auto">
    <v-img :src="foto" cover></v-img>
    <v-card-text>
      <p class="text-h5 text-md-h5 text-lg-h5 font-weight-bold">{{ nome }}</p>
      <div class="text-h6">
        {{ descricao }}
      </div>
    </v-card-text>
    <v-card-actions>
      <v-btn
        class="button-contact"
        variant="flat"
        size="small"
        @click="reveal = true"
      >
      {{t('aboutPage.formsOfContact')}}
      </v-btn>
    </v-card-actions>

    <v-expand-transition>
      <v-card v-if="reveal" class="v-card--reveal" style="height: 100%">
        <v-card-text class="pb-0">
          <p class="text-h4 text--primary">{{t('aboutPage.meansOfContact')}}</p>
          <div class="contact-div">
            <div class="contact-line">
              <v-img src="@/assets/email-svgrepo-com.svg" alt="Logo Gmail" />
              <label class="contact-text">{{ email }}</label>
            </div>
            <div class="contact-line" v-if="nick">
              <v-img src="@/assets/github-mark.svg" alt="Logo github" />
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

@media only screen and (max-width: 600px) {
  .v-responsive.v-img {
    width: 15rem;
    height: 15rem;
  }
  .v-card {
    width: 45%;
    margin-top: 1rem;
  }
  .v-btn__content {
    white-space: inherit;
  }
}
@media (min-width: 601px) and (max-width: 960px) {
  .v-responsive.v-img {
    width: 15rem;
    height: 15rem;
  }
  .v-card.v-theme--light {
    width: 45%;
    margin-top: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .v-card-actions {
    padding: 0;
  }
}
</style>
