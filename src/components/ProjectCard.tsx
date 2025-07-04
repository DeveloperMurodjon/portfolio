'use client'
import DynamicImage from './DynamicImage'

interface ProjectCardT {
	title: string
	description: string
	link: string
	codeLink: string
	usedStacks: string[]
}

export function ProjectCard({
	title,
	description,
	link,
	codeLink,
	usedStacks,
}: ProjectCardT) {
	return (
		<div className='bg-white shadow-xl hover:shadow-2xl transition dark:bg-neutral900'>
			<div className='w-full overflow-hidden shadow-[0_4px_6px_rgba(0,0,0,0.1)] h-[360px] dark:border dark:border-neutral600  dark:shadow-none'>
				<iframe
					src={link}
					width='1440'
					height='900'
					style={{
						transform: 'scale(0.4)',
						transformOrigin: '0 0',
					}}
					title={title}
					loading='lazy'
				></iframe>
			</div>
			<div className='space-y-2 px-4 '>
				<h3 className='text-[28px] leading-[36px] space-x-[0.25px] text-[#121212] font-bold pt-6 pb-4 dark:text-white '>
					{title}
				</h3>
				<p className='text-[#525252] text-base leading-6 space-x-[0.25px] dark:text-neutral200'>
					{description}
				</p>

				<div className='flex gap-2 py-6 '>
					{usedStacks.map(stack => (
						<DynamicImage
							key={stack}
							name={stack}
							initialState='default'
							alt={stack}
							width={44}
							height={44}
						/>
					))}
				</div>
				<div className='flex gap-4 pb-7'>
					<a
						href={link}
						target='_blank'
						rel='noopener noreferrer'
						className='bg-[#8B5CF6] font-bold text-sm leading-6 space-x-[2%] text-center  uppercase py-2.5 px-4 text-white rounded-[5px] dark:text-neutral900 dark:bg-purple200'
					>
						Ko'rib chiqish
					</a>
					<a
						href={codeLink}
						target='_blank'
						rel='noopener noreferrer'
						className='border border-[#8B5CF6] font-bold text-sm leading-6 space-x-[2%] text-center  uppercase py-2.5 px-4 text-[#171717] rounded-[5px] dark:border-neutral500 dark:text-neutral50'
					>
						Kodni ko'rish
					</a>
				</div>
			</div>
		</div>
	)
}

export default ProjectCard
