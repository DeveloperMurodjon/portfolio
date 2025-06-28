'use client'

import { LucideX } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'
import { ModeToggle } from './ModeToggle'
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet'

export default function Navbar() {
	const [open, setOpen] = useState(false)

	return (
		<div className='sticky top-6 md:top-10 z-50 bg-white dark:bg-neutral shadow-sm rounded-3xl container flex justify-between items-center mt-4 py-2 px-4'>
			{/* Logo */}
			<Link href='/'>
				<h3 className='text-[32px] font-bold md:text-5xl md:leading-[56px] space-x-[-1px] dark:text-neutral50'>
					mi<span className='text-purple'>.</span>
				</h3>
			</Link>

			{/* Desktop menu */}
			<div className='hidden md:flex items-center gap-[30px]'>
				<Link href='/'>
					<p className='text-lg leading-[32px] font-medium'>Bosh sahifa</p>
				</Link>
				<Link href='/#projects'>
					<p className='text-lg leading-[32px] font-medium'>Loyihalar</p>
				</Link>
				<Link href='/about'>
					<p className='text-lg leading-[32px] font-medium'>Men haqimda</p>
				</Link>
				<a href='/resume.pdf' target='_blank' rel='noopener noreferrer'>
					<p className='text-lg leading-[32px] font-medium'>Rezyume</p>
				</a>
				<ModeToggle />
			</div>

			{/* Mobile menu + toggle */}
			<div className='md:hidden flex items-center gap-3'>
				<ModeToggle />

				<Sheet open={open} onOpenChange={setOpen}>
					<SheetTrigger asChild>
						<button className='flex flex-col gap-1'>
							{open ? (
								<LucideX className='text-3xl' />
							) : (
								<>
									<span className='w-6 h-0.5 bg-black dark:bg-white'></span>
									<span className='w-6 h-0.5 bg-black dark:bg-white'></span>
									<span className='w-6 h-0.5 bg-black dark:bg-white'></span>
								</>
							)}
						</button>
					</SheetTrigger>

					<SheetContent side='right' className='flex flex-col gap-4 p-6'>
						<Link href='/' onClick={() => setOpen(false)}>
							<p className='text-lg font-medium'>Bosh sahifa</p>
						</Link>
						<Link href='/#projects' onClick={() => setOpen(false)}>
							<p className='text-lg font-medium'>Loyihalar</p>
						</Link>
						<Link href='/about' onClick={() => setOpen(false)}>
							<p className='text-lg font-medium'>Men haqimda</p>
						</Link>
						<a
							href='/resume.pdf'
							target='_blank'
							rel='noopener noreferrer'
							onClick={() => setOpen(false)}
						>
							<p className='text-lg font-medium'>Rezyume</p>
						</a>
					</SheetContent>
				</Sheet>
			</div>
		</div>
	)
}
