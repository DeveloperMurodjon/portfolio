'use client'

import DynamicImage from './DynamicImage'

function Footer() {
	return (
		<footer className='container w-full px-4 md:px-20 pb-16 pt-40'>
			<div className='flex flex-col md:flex-row justify-between items-center gap-12 md:items-start max-w-[1200px] mx-auto'>
				{/* Left: Text section */}
				<div className='flex flex-col gap-6 text-center md:text-left max-w-[548px]'>
					<h5 className='font-sora font-bold text-[24px] md:text-[28px] leading-9'>
						Aloqaga chiqing
					</h5>
					<p className='text-base md:text-lg leading-7 md:leading-8 text-neutral-700 dark:text-neutral-300'>
						Loyihalarim haqida suhbatlashmoqchi bo‘lsangiz yoki oddiygina salom
						aytmoqchi bo‘lsangiz, xat qoldiring 👋
					</p>
				</div>

				{/* Right: Icons + Scroll to top */}
				<div className='flex flex-col items-center'>
					<div className='flex gap-4'>
						<a
							href='https://mail.google.com/mail/?view=cm&fs=1&to=murodjonisroiljonov4@gmail.com&su=Portfolio orqali bog‘lanish&body=Salom Murodjon, men siz bilan bog‘lanmoqchiman.'
							target='_blank'
							rel='noopener noreferrer'
							title='Menga email yuboring'
						>
							<DynamicImage name='mail' initialState='active' alt='mail' />
						</a>
						<a
							href='https://github.com/DeveloperMurodjon'
							target='_blank'
							rel='noopener noreferrer'
							title='GitHubda kodlarimni ko‘ring!'
						>
							<DynamicImage name='github' initialState='active' alt='github' />
						</a>
						<a
							href='https://www.linkedin.com/in/murodjonisroiljonov'
							target='_blank'
							rel='noopener noreferrer'
							title='LinkedIn profilimga o‘ting'
						>
							<DynamicImage
								name='linkedin'
								initialState='active'
								alt='linkedin'
							/>
						</a>
					</div>

					{/* Scroll to top */}
					<a href='#' className='flex items-center mt-4 gap-2'>
						<p className='text-base md:text-lg'>Yuqoriga</p>
						<DynamicImage name='arrow-up' initialState='default' />
					</a>
				</div>
			</div>

			{/* Bottom copyright */}
			<p className='text-sm md:text-base text-center text-neutral-600 dark:text-neutral-300 pt-12'>
				© Coded by Developer Murodjon
			</p>
		</footer>
	)
}

export default Footer
