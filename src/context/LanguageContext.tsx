'use client'

import { translations } from '@/lib/lang'
import { createContext, useContext, useState } from 'react'

type LangType = 'uz' | 'en'

interface LangContextType {
	lang: LangType
	setLang: (lang: LangType) => void
	t: (key: string) => string
}

const LanguageContext = createContext<LangContextType>({
	lang: 'uz',
	setLang: () => {},
	t: key => key,
})

export function LanguageProvider({ children }: { children: React.ReactNode }) {
	const [lang, setLang] = useState<LangType>('uz')

	const t = (key: keyof (typeof translations)['uz']) => {
		return translations[lang][key] || key
	}

	return (
		<LanguageContext.Provider value={{ lang, setLang, t }}>
			{children}
		</LanguageContext.Provider>
	)
}

export const useLang = () => useContext(LanguageContext)
