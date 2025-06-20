'use client'
import Image from 'next/image'

type ImageProps = {
	name: string
	mode: 'light' | 'dark'
	state: 'default' | 'hover' | 'primary' | 'active'
	alt?: string
	width?: number
	height?: number
}

export default function DynamicImage({
	name,
	mode,
	state,
	alt = '',
	width = 44,
	height = 44,
}: ImageProps) {
	const src = `/assets/icons/${name}-${mode}-${state}.png`

	return <Image src={src} alt={alt} width={width} height={height} />
}
