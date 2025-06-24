import DynamicImage from '@/components/DynamicImage'
import Image from 'next/image'

export default function About() {
	return (
		<div className='container mt-[100px] flex flex-col items-center '>
			{/* Title */}
			<h3 className='font-bold text-[48px] font-sora pb-16 dark:text-neutral50'>
				Men haqimda
			</h3>

			{/* SECTION 1: QUOTE + IMAGE */}
			<div className='flex flex-col md:flex-row items-center gap-10 mb-20'>
				<div className='overflow-hidden rounded-full w-[200px] h-[200px]'>
					<Image
						src='/assets/myphoto.jpg'
						alt='my photo'
						width={200}
						height={200}
						className='rounded-full object-cover scale-[1.3] hover:scale-[1.5] transition-transform duration-300'
					/>
				</div>

				<div className='max-w-[800px] text-lg leading-8  text-center md:text-left'>
					<p className='mb-4 text-neutral-700 dark:text-neutral100'>
						Men Murodjon. 19 yoshdaman, junior frontend dasturchiman. Web
						ilovalarni toza, tez va albatta kreativ qilishga intilaman.
					</p>
					<p className='italic text-gray-600 dark:text-gray-400	'>
						“Sabr, qat'iyat va ter to'kish muvaffaqiyat uchun yengib bo'lmas
						kombinatsiyadir.”
					</p>
				</div>
			</div>

			{/* SECTION 2: SKILLS */}
			<div className='w-full  flex flex-col items-center gap-8 my-[170px]'>
				<h4 className='font-sora font-bold text-center text-[32px] leading-12'>
					Bilim va ko'nikmalarim
				</h4>
				<p className='text-lg leading-8 font-inter text-center text-neutral-700 dark:text-gray-300'>
					Frontend sohasida quyidagi texnologiyalarni amalda ishlataman. <br />{' '}
					Kodni nafaqat o‘qilishi oson va qayta foydalaniladigan, balki kreativ
					qilishga harakat qilaman
				</p>
				<ul className='flex gap-12  text-lg justify-between'>
					<li className=' text-lg leading-8 text-neutral-700	 flex flex-col items-center dark:text-neutral100'>
						<DynamicImage name='html' mode='light' state='hover' alt='html' />
						HTML5
					</li>
					<li className=' text-lg leading-8 text-neutral-700	 flex flex-col  items-center dark:text-neutral100'>
						<DynamicImage name='css' mode='light' state='hover' alt='html' />
						CSS3
					</li>
					<li className=' text-lg leading-8 text-neutral-700	 flex flex-col  items-center dark:text-neutral100'>
						<DynamicImage
							name='javascript'
							mode='light'
							state='hover'
							alt='html'
						/>
						JavaScript
					</li>
					<li className=' text-lg leading-8 text-neutral-700	 flex flex-col  items-center dark:text-neutral100'>
						<DynamicImage name='react' mode='light' state='hover' alt='html' />
						React.js
					</li>
					<li className=' text-lg leading-8 text-neutral-700	 flex flex-col  items-center dark:text-neutral100'>
						<DynamicImage name='nextjs' mode='light' state='hover' alt='html' />
						Next.js
					</li>
					<li className=' text-lg leading-8 text-neutral-700	 flex flex-col  items-center dark:text-neutral100'>
						<DynamicImage
							name='typescript'
							mode='light'
							state='hover'
							alt='html'
						/>
						TypeScript
					</li>
					<li className=' text-lg leading-8 text-neutral-700	 flex flex-col  items-center dark:text-neutral100'>
						<DynamicImage
							name='tailwindcss'
							mode='light'
							state='hover'
							alt='html'
						/>
						Tailwind CSS
					</li>
					<li className=' text-lg leading-8 text-neutral-700	 flex flex-col  items-center dark:text-neutral100'>
						<DynamicImage name='github' mode='light' state='hover' alt='html' />
						Git & GitHub
					</li>
				</ul>
			</div>

			{/* SECTION 3: INTERESTS */}
			<div className='w-full  mb-10 flex flex-col items-center'>
				<h4 className='font-sora leading-12 text-[32px] font-bold pb-[42px]'>
					Qiziqishlarim
				</h4>
				<ul className='list-disc list-inside text-lg  space-y-2'>
					<li className=' text-lg leading-8 text-neutral-700 dark:text-neutral100'>
						Yangi narsalarni o‘rganish
					</li>
					<li className=' text-lg leading-8 text-neutral-700 dark:text-neutral100'>
						Kitob o‘qish va bu orqali dunyoqarashni kengaytirish
					</li>
					<li className=' text-lg leading-8 text-neutral-700 dark:text-neutral100'>
						Aql sporti
					</li>
					<li className=' text-lg leading-8 text-neutral-700 dark:text-neutral100'>
						Turli tillarni o'rganish va yangi madaniyatlarni o'zim uchun kashf
						etish
					</li>
					<li className=' text-lg leading-8 text-neutral-700 dark:text-neutral100'>
						Real loyihalarda jamoa bilan ishlash
					</li>
					<li className=' text-lg leading-8 text-neutral-700 dark:text-neutral100'>
						Yangi frontend kutubxonalarni sinab ko‘rish
					</li>
				</ul>
			</div>
		</div>
	)
}
