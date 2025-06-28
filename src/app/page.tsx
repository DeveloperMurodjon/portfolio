import DynamicImage from '@/components/DynamicImage'
import Hero from '@/components/Hero'
import Projects from '@/components/Projects'

function Home() {
	return (
		<div className='container min-h-screen scroll-smooth flex flex-col items-center'>
			<Hero />
			<a href='#projects'>
				<button className='cursor-pointer'>
					<DynamicImage
						name='arrow-down'
						initialState='default'
						alt='go down'
					/>
				</button>
			</a>
			<Projects />
		</div>
	)
}

export default Home
