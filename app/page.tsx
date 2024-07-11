import About from '@/components/About'
import Bio from '@/components/Bio'
import Container from '@/components/Container'

export default function Home() {
	return (
		<Container>
			<main className=''>
				<Bio className='my-36' />
				<About />
			</main>
		</Container>
	)
}
