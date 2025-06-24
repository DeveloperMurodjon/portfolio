'use client'

import Link from 'next/link'
import { useState } from 'react'
import DynamicImage from './DynamicImage'
import LanguageSwitcher from './LanguageSwitcher'
import { ModeToggle } from './ModeToggle'

export default function Navbar() {
	const [imageState, setImageState] = useState<
		'default' | 'hover' | 'primary' | 'active'
	>('default')
	const [imageName, setImageName] = useState<string>('sun')
	const [theme, setTheme] = useState<'light' | 'dark'>('light')
	const [open, setOpen] = useState<boolean>(false)

	return (
		<div className='sticky top-6 md:top-10 bg-white z-50 shadow-sm rounded-3xl container flex justify-between items-center mt-[16px] pt-1  pb-[10px] dark:bg-neutral'>
			<Link href={'/'}>
				<h3 className='text-[32px] font-bold md:text-5xl md:leading-[56px] space-x-[-1px] dark:#FAFAFA'>
					mi<span className='text-purple'>.</span>
				</h3>
			</Link>

			<div className='hidden  md:flex md:items-center gap-[30px] '>
				<Link href={'/'}>
					<p className='text-lg leading-[32px] font-medium'>Bosh sahifa</p>
				</Link>
				<Link href={'#projects'}>
					<p className='text-lg leading-[32px] font-medium'>Loyihalar</p>
				</Link>
				<Link href={'/about'}>
					<p className='text-lg leading-[32px] font-medium'>Men haqimda</p>
				</Link>
				<a href={'/resume.pdf'} target='_blank' rel='noopener noreferrer'>
					<p className='text-lg leading-[32px] font-medium'>Rezyume</p>
				</a>
				<ModeToggle />
			</div>
			<div className='md:hidden'>
				<button onClick={() => setOpen(!open)} className='flex flex-col gap-1'>
					{open ? (
						<span className='text-3xl'>×</span>
					) : (
						<>
							<span className='w-6 h-0.5 bg-black'></span>
							<span className='w-6 h-0.5 bg-black'></span>
							<span className='w-6 h-0.5 bg-black'></span>
						</>
					)}
				</button>
			</div>

			<div
				className={`${
					open ? 'flex' : 'hidden'
				} flex-col absolute top-[70px] right-4 bg-white rounded-xl shadow-md px-4 py-3 z-40 gap-2 md:hidden`}
			>
				<Link href={'/'}>
					<p className='text-lg font-medium'>Bosh sahifa</p>
				</Link>
				<Link href={'#projects'}>
					<p className='text-lg font-medium'>Loyihalar</p>
				</Link>
				<a href={'/resume.pdf'} target='_blank' rel='noopener noreferrer'>
					<p className='text-lg font-medium'>Rezyume</p>
				</a>
				<button
					onClick={() => setImageName(imageName == 'sun' ? 'moon' : 'sun')}
					onMouseEnter={() => setImageState('hover')}
					onMouseLeave={() => setImageState('default')}
					className='cursor-pointer'
				>
					<DynamicImage
						name={imageName}
						mode={theme}
						state={imageState}
						alt='theme'
					/>
				</button>
				<LanguageSwitcher />
			</div>
		</div>
	)
}
