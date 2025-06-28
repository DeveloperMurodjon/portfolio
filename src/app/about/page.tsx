import DynamicImage from '@/components/DynamicImage'
import Image from 'next/image'

export default function About() {
	return (
		<div className=' container mt-[100px] flex flex-col items-center'>
			{/* Title */}
			<h3 className='font-bold text-[48px] font-sora pb-16 dark:text-neutral-50'>
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

				<div className='max-w-[800px] text-lg leading-8 text-center md:text-left'>
					<p className='mb-4 text-neutral-700 dark:text-neutral-100'>
						Men Murodjon. 19 yoshdaman, junior frontend dasturchiman. Web
						ilovalarni toza, tez va albatta kreativ qilishga intilaman.
					</p>
				</div>
			</div>

			{/* SECTION 2: SKILLS */}
			<div className='w-full flex flex-col items-center gap-8 my-[170px]'>
				<h4 className='font-sora font-bold text-center text-[32px] leading-12'>
					Bilim va ko'nikmalarim
				</h4>
				<p className='text-lg leading-8 font-inter text-center text-neutral-700 dark:text-gray-300'>
					Frontend sohasida quyidagi texnologiyalarni amalda ishlataman. <br />
					Kodni nafaqat o‘qilishi oson va qayta foydalaniladigan, balki kreativ
					qilishga harakat qilaman
				</p>
				<ul className='flex flex-wrap justify-center gap-12 text-lg'>
					{[
						{ name: 'html', label: 'HTML5' },
						{ name: 'css', label: 'CSS3' },
						{ name: 'javascript', label: 'JavaScript' },
						{ name: 'react', label: 'React.js' },
						{ name: 'nextjs', label: 'Next.js' },
						{ name: 'typescript', label: 'TypeScript' },
						{ name: 'tailwindcss', label: 'Tailwind CSS' },
						{ name: 'github', label: 'Git & GitHub' },
					].map(({ name, label }) => (
						<li
							key={name}
							className='flex flex-col items-center text-neutral-700 dark:text-neutral-100'
						>
							<DynamicImage
								name={name}
								width={44}
								height={44}
								initialState='hover'
								alt={name}
							/>
							{label}
						</li>
					))}
				</ul>
			</div>

			{/* SECTION 3: INTERESTS */}
			<div className='w-full mb-10 flex flex-col items-center'>
				<h4 className='font-sora leading-12 text-[32px] font-bold pb-[42px]'>
					Qiziqishlarim
				</h4>
				<ul className='list-disc list-inside text-lg space-y-2 text-neutral-700 dark:text-neutral-100'>
					<li>Yangi narsalarni o‘rganish</li>
					<li>Kitob o‘qish va bu orqali dunyoqarashni kengaytirish</li>
					<li>Aql sporti</li>
					<li>
						Turli tillarni o'rganish va yangi madaniyatlarni o'zim uchun kashf
						etish
					</li>
					<li>Real loyihalarda jamoa bilan ishlash</li>
					<li>Yangi frontend kutubxonalarni sinab ko‘rish</li>
				</ul>
			</div>
		</div>
	)
}
