'use client'

import { useTranslation } from 'react-i18next'

export default function LanguageSwitcher() {
	const { i18n } = useTranslation()

	return (
		<div>
			<button onClick={() => i18n.changeLanguage('uz')}>UZ</button>
			<button onClick={() => i18n.changeLanguage('en')}>EN</button>
		</div>
	)
}
