import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import i18n from './i18n'; 

// Verificar se há um idioma salvo no localStorage e se ele é válido
const savedLanguage = localStorage.getItem('selectedLanguage');

// Verificar se o idioma salvo é 'en' ou 'pt', caso contrário, definir 'pt' como padrão
if (savedLanguage === 'en' || savedLanguage === 'pt') {
  i18n.global.locale.value = savedLanguage;
} else {
  i18n.global.locale.value = 'pt';
}

loadFonts()

createApp(App)
  .use(router)
  .use(vuetify)
  .use(i18n)
  .mount('#app')
