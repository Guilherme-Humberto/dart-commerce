import i18next from 'i18next'
import { initReactI18next } from 'react-i18next'
import ptBr from './locales/pt-br.json'

const resources = {
  pt: { translation: ptBr }
}

i18next.use(initReactI18next).init({
  resources,
  lng: 'pt'
})
