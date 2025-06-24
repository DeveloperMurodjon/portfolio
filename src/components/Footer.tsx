'use client'

import DynamicImage from './DynamicImage'

function Footer() {
	return (
		<div className='container flex flex-col w-full items-center pb-16 pt-40 px-20'>
			<div className='flex flex-col md:flex-row justify-between w-full max-w-[1200px] mb-6'>
				<div className='flex flex-col gap-6 max-w-[548px]'>
					<h5 className='font-sora font-bold text-[28px] leading-9'>
						Aloqaga chiqing
					</h5>
					<p className='text-lg leading-8 '>
						Loyihalarim haqida suhbatlashmoqchi bo‘lsangiz yoki oddiygina salom
						aytmoqchi bo‘lsangiz, xat qoldiring 👋
					</p>
				</div>

				<div className='flex flex-col items-center'>
					<div className='flex gap-4'>
						<a
							href='https://mail.google.com/mail/?view=cm&fs=1&to=murodjonisroiljonov4@gmail.com&su=Portfolio orqali bog‘lanish&body=Salom Murodjon, men siz bilan bog‘lanmoqchiman.'
							target='_blank'
							rel='noopener noreferrer'
							title='Menga email yuboring'
						>
							<DynamicImage
								name='mail'
								mode='light'
								state='active'
								alt='mail'
							/>
						</a>
						<a
							href='https://github.com/DeveloperMurodjon'
							target='_blank'
							rel='noopener noreferrer'
							title='GitHubda kodlarimni ko‘ring!'
						>
							<DynamicImage
								name='github'
								mode='light'
								state='active'
								alt='git hub'
							/>
						</a>

						<a
							href='https://www.linkedin.com/in/murodjonisroiljonov'
							target='_blank'
							rel='noopener noreferrer'
							title='LinkedIn profilimga o‘ting'
						>
							<DynamicImage name='linkedin' mode='light' state='active' />
						</a>
					</div>
					<a href='#' className='flex items-center  mt-[14px]'>
						<p className='text-lg leading-8'>Yuqoriga</p>
						<DynamicImage name='arrow-up' mode='light' state='default' />
					</a>
				</div>
			</div>

			<h4 className='text-neutral-600 text-base  leading-6 pt-[59px] dark:text-neutral300'>
				© Coded by Developer Murodjon
			</h4>
		</div>
	)
}

export default Footer
