import { createVuetify } from 'vuetify'

export default createVuetify({
  theme: {
    dark: false, // Modo escuro ativado/desativado
    themes: {
      light: {
        primary: '#1976D2', // Cor primária
        secondary: '#424242', // Cor secundária
        accent: '#82B1FF', // Cor de destaque
      },
      dark: {
        primary: '#2196F3',
        secondary: '#616161',
        accent: '#FF4081',
      },
    },
  },
})
