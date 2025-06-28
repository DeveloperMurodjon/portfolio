'use client'

import { useTheme } from 'next-themes'
import Image from 'next/image'
import { useState, useEffect } from 'react'

type ImageProps = {
	name: string
	alt?: string
	width?: number
	height?: number
	initialState?: 'default' | 'primary' | 'hover' | 'active'
	mode?: 'light' | 'dark'
}

export default function DynamicImage({
	name,
	alt = '',
	width = 44,
	height = 44,
	initialState = 'default',
	mode,
}: ImageProps) {
	const { theme } = useTheme()
	const [isMounted, setIsMounted] = useState(false)
	const [isHovered, setIsHovered] = useState(false)

	// Faqat mijozda render qilish uchun
	useEffect(() => {
		setIsMounted(true)
	}, [])

	// Serverda placeholder rasm (light tema bilan)
	if (!isMounted) {
		return (
			<Image
				src={`/assets/icons/${name}-light-${initialState}.png`}
				alt={alt}
				width={width}
				height={height}
				className='rounded-sm'
				style={{ color: 'transparent' }}
			/>
		)
	}

	// Mijozda to'g'ri tema bilan rasm
	const resolvedMode = mode ?? (theme === 'dark' ? 'dark' : 'light')
	const state = isHovered ? 'hover' : initialState
	const src = `/assets/icons/${name}-${resolvedMode}-${state}.png`

	return (
		<Image
			src={src}
			alt={alt}
			width={width}
			height={height}
			className='rounded-sm'
			style={{ color: 'transparent' }}
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
		/>
	)
}
