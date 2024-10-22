import { createI18n } from 'vue-i18n';
import en from './locales/en.json';
import pt from './locales/pt.json';

const messages = {
  en,
  pt,
};


const i18n = createI18n({
  legacy: false, 
  messages,
});

export default i18n;
