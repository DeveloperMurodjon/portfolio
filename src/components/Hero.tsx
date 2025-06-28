'use client'

import DynamicImage from './DynamicImage'
import { TextRevealCard } from './ui/text-reveal-card'

function Hero() {
	return (
		<div className='relative flex flex-col items-center md:items-center pt-4 md:pt-24	 pb-12 md:pb-14	 px-4 sm:px-8'>
			<h1 className='font-bold font-sora text-[#262626] text-2xl leading-[44px] md:text-[56px] md:leading-[70px] dark:text-neutral50 text-balance'>
				Salom, Men Isroiljonov Murodjon.
			</h1>

			<div className='w-full max-w-xl'>
				<TextRevealCard
					text='Front-end Dasturchi </>'
					revealText='React, Next.js, TypeScript'
					className='py-0 px-0 bg-transparent  border-none'
				/>
			</div>

			<p className=' text-base leading-6 md:text-xl md:leading-9 text-black-text dark:text-neutral100 max-w-[700px] text-pretty'>
				Always learning and growing in the world of Information Technologies.
			</p>

			<div className='flex flex-wrap items-center gap-3 md:gap-6 mt-6 md:mt-10'>
				{/* Social Icons */}
				<a
					href='https://github.com/DeveloperMurodjon'
					target='_blank'
					rel='noopener noreferrer'
					title='GitHubda kodlarimni ko‘ring!'
				>
					<DynamicImage name='github' initialState='primary' />
				</a>

				<a
					href='https://www.linkedin.com/in/murodjonisroiljonov'
					target='_blank'
					rel='noopener noreferrer'
					title='LinkedIn profilimga o‘ting'
				>
					<DynamicImage name='linkedin' initialState='primary' />
				</a>

				<a
					href='https://t.me/isroiljonov1214'
					target='_blank'
					title='Telegramda yozing'
				>
					<DynamicImage name='telegram' initialState='primary' />
				</a>

				{/* Contact & Resume buttons */}
				<a
					href='https://mail.google.com/mail/?view=cm&fs=1&to=murodjonisroiljonov4@gmail.com&su=Portfolio orqali bog‘lanish&body=Salom Murodjon, men siz bilan bog‘lanmoqchiman.'
					target='_blank'
					rel='noopener noreferrer'
					title='Menga email yuboring'
				>
					<p className='text-neutral font-bold border border-purple500 rounded-md flex items-center uppercase text-xs md:text-sm leading-[22px] py-2 px-4 dark:text-neutral50 dark:border-neutral500'>
						Men bilan bog‘laning
					</p>
				</a>

				<a
					href='/resume.pdf'
					target='_blank'
					rel='noopener noreferrer'
					title='Resumeni ko‘ring'
				>
					<p className='text-neutral font-bold border border-purple500 rounded-md flex items-center uppercase text-xs md:text-sm leading-[22px] py-2 px-4 dark:text-neutral50 dark:border-neutral500'>
						Resume
					</p>
				</a>
			</div>
		</div>
	)
}

export default Hero
