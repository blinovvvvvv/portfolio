import About from '@/components/About'
import Bio from '@/components/Bio'
import Container from '@/components/Container'
import Tools from '@/components/Tools'

export default function Home() {
	return (
		<Container>
			<main>
				<Bio className='my-28 lg:my-36' />
				<About />
				<Tools />
			</main>
		</Container>
	)
}
