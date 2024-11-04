import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import { createPinia } from 'pinia'
import i18n from './i18n'; 

loadFonts()
const pinia = createPinia();

// Verificar se há um idioma salvo no localStorage e se ele é válido
const savedLanguage = localStorage.getItem('selectedLanguage');
// Verificar se o idioma salvo é 'en' ou 'pt', caso contrário, definir 'pt' como padrão
if (savedLanguage === 'en' || savedLanguage === 'pt') {
  i18n.global.locale.value = savedLanguage;
} else {
  i18n.global.locale.value = 'pt';
}

createApp(App)
  .use(router)
  .use(i18n)
  .use(vuetify).use(pinia)
  .mount('#app')
