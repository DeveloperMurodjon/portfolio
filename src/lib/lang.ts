// lib/i18n.ts
import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import HttpBackend from 'i18next-http-backend'
import { initReactI18next } from 'react-i18next'

i18n
	.use(HttpBackend)
	.use(LanguageDetector)
	.use(initReactI18next)
	.init({
		fallbackLng: 'en',
		supportedLngs: ['en', 'uz'],
		backend: {
			loadPath: '/locales/{{lng}}/{{ns}}.json',
		},
		interpolation: {
			escapeValue: false,
		},
	})

export default i18n
// lib/lang.ts
export const translations = {
	uz: {
		welcome: 'Xush kelibsiz',
		about: 'Biz haqimizda',
	},
	en: {
		welcome: 'Welcome',
		about: 'About us',
	},
}
