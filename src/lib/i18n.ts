// lib/i18n.ts
import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import translationEn from '../../public/locales/en/common.json'
import translationUz from '../../public/locales/uz/common.json'

i18n.use(initReactI18next).init({
	resources: {
		uz: { translation: translationUz },
		en: { translation: translationEn },
	},
	lng: 'uz',
	fallbackLng: 'en',
	interpolation: {
		escapeValue: false,
	},
})

export default i18n
