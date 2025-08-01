'use client'

import React, { useEffect, useRef, useState, memo, useMemo } from 'react'
import { motion } from 'framer-motion'
import { twMerge } from 'tailwind-merge'
import { cn } from '@/lib/utils'

export const TextRevealCard = ({
	text,
	revealText,
	children,
	className,
}: {
	text: string
	revealText: string
	children?: React.ReactNode
	className?: string
}) => {
	const [widthPercentage, setWidthPercentage] = useState(0)
	const cardRef = useRef<HTMLDivElement | any>(null)
	const [left, setLeft] = useState(0)
	const [localWidth, setLocalWidth] = useState(0)
	const [isMouseOver, setIsMouseOver] = useState(false)

	useEffect(() => {
		if (cardRef.current) {
			const { left, width: localWidth } =
				cardRef.current.getBoundingClientRect()
			setLeft(left)
			setLocalWidth(localWidth)
		}
	}, [])

	function mouseMoveHandler(event: any) {
		event.preventDefault()
		const { clientX } = event
		if (cardRef.current) {
			const relativeX = clientX - left
			setWidthPercentage((relativeX / localWidth) * 100)
		}
	}

	function mouseLeaveHandler() {
		setIsMouseOver(false)
		setWidthPercentage(0)
	}

	function mouseEnterHandler() {
		setIsMouseOver(true)
	}

	function touchMoveHandler(event: React.TouchEvent<HTMLDivElement>) {
		event.preventDefault()
		const clientX = event.touches[0]!.clientX
		if (cardRef.current) {
			const relativeX = clientX - left
			setWidthPercentage((relativeX / localWidth) * 100)
		}
	}

	const rotateDeg = (widthPercentage - 50) * 0.1

	return (
		<div
			onMouseEnter={mouseEnterHandler}
			onMouseLeave={mouseLeaveHandler}
			onMouseMove={mouseMoveHandler}
			onTouchStart={mouseEnterHandler}
			onTouchEnd={mouseLeaveHandler}
			onTouchMove={touchMoveHandler}
			ref={cardRef}
			className={cn(
				'bg-transparent w-full sm:w-[40rem] rounded-lg relative overflow-hidden',
				className
			)}
		>
			{children}

			<div className='h-16 sm:h-40 relative flex items-center overflow-hidden'>
				<motion.div
					style={{ width: '100%' }}
					animate={
						isMouseOver
							? {
									opacity: widthPercentage > 0 ? 1 : 0,
									clipPath: `inset(0 ${100 - widthPercentage}% 0 0)`,
							  }
							: {
									clipPath: `inset(0 ${100 - widthPercentage}% 0 0)`,
							  }
					}
					transition={isMouseOver ? { duration: 0 } : { duration: 0.4 }}
					className='absolute bg-[#1d1c20] z-20 will-change-transform'
				>
					<p
						style={{ textShadow: '4px 4px 15px rgba(0,0,0,0.5)' }}
						className='lg:text-3xl sm:text-[3rem] lg:py-3 font-bold text-purple900 bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-300 text-center'
					>
						{revealText}
					</p>
				</motion.div>

				<motion.div
					animate={{
						left: `${widthPercentage}%`,
						rotate: `${rotateDeg}deg`,
						opacity: widthPercentage > 0 ? 1 : 0,
					}}
					transition={isMouseOver ? { duration: 0 } : { duration: 0.4 }}
					className='lg:h-22 sm:h-40 w-[8px] bg-gradient-to-b from-transparent via-neutral-800 to-transparent absolute z-50 will-change-transform'
				></motion.div>

				<div className='overflow-hidden lg:flex lg:flex-col lg:items-center [mask-image:linear-gradient(to_bottom,transparent,white,transparent)]'>
					<p className='lg:text-[32px] lg:pl-12 lg:text-center sm:text-[3rem] font-bold bg-clip-text text-transparent bg-purple900 dark:bg-purple300 text-center'>
						{text}
					</p>
					<MemoizedStars />
				</div>
			</div>
		</div>
	)
}

export const TextRevealCardTitle = ({
	children,
	className,
}: {
	children: React.ReactNode
	className?: string
}) => (
	<h2 className={twMerge('text-white text-lg mb-2', className)}>{children}</h2>
)

export const TextRevealCardDescription = ({
	children,
	className,
}: {
	children: React.ReactNode
	className?: string
}) => <p className={twMerge('text-[#a9a9a9] text-sm', className)}>{children}</p>

const Stars = () => {
	const stars = useMemo(() => {
		return Array.from({ length: 80 }, (_, i) => ({
			id: `star-${i}`,
			top: `${Math.random() * 100}%`,
			left: `${Math.random() * 100}%`,
			move: (Math.random() - 0.5) * 4,
			opacity: Math.random(),
			duration: Math.random() * 10 + 20,
		}))
	}, [])

	return (
		<div className='absolute inset-0'>
			{stars.map(star => (
				<motion.span
					key={star.id}
					animate={{
						top: `calc(${star.top} + ${star.move}px)`,
						left: `calc(${star.left} + ${star.move}px)`,
						opacity: star.opacity,
						scale: [1, 1.2, 0],
					}}
					transition={{
						duration: star.duration,
						repeat: Infinity,
						ease: 'linear',
					}}
					style={{
						position: 'absolute',
						width: '2px',
						height: '2px',
						backgroundColor: 'white',
						borderRadius: '50%',
						zIndex: 1,
					}}
					className='inline-block'
				/>
			))}
		</div>
	)
}

export const MemoizedStars = memo(Stars)
