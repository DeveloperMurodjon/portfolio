import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import { ThemeProvider } from '@/components/themeProvider'
import { BackgroundBeams } from '@/components/ui/background-beems'
import type { Metadata } from 'next'
import { Inter, Sora } from 'next/font/google'
import './globals.css'

const inter = Inter({
	variable: '--font-inter',
	subsets: ['latin'],
})

const sora = Sora({
	variable: '--font-sora',
	subsets: ['latin'],
})

export const metadata: Metadata = {
	title: 'Murodjon Isroiljonov Portfolio',
	description: 'Murodjon Isroiljonovning portfoliosi',
	icons: {
		icon: '/favicon.svg',
	},
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='uz' className='scroll-smooth' suppressHydrationWarning>
			<body
				className={`${sora.variable} ${inter.variable} antialiased scroll-smooth relative`}
			>
				<ThemeProvider
					attribute='class'
					defaultTheme='dark'
					enableSystem={false}
					disableTransitionOnChange
				>
					<div className='absolute inset-0 -z-10'>
						<BackgroundBeams />
					</div>

					<Navbar />
					{children}
					<Footer />
				</ThemeProvider>
			</body>
		</html>
	)
}
