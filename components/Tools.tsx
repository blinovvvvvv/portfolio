export default function Tools() {
	return (
		<div className='my-36'>
			<h2 className='text-[40px] md:text-[50px] lg:text-[64px] font-semibold'>
				Tools & Frameworks
			</h2>
			<p className='text-xl font-medium text-gray'>
				Here are the tools and frameworks that I had the pleasure of working
				with:
			</p>
			<div className='text-[30px] md:text-[40px] font-semibold text-nowrap grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-y-5 mt-10 md:mt-16'>
				<p>React</p>
				<p className='md:justify-self-center'>TypeScript</p>
				<p className='md:justify-self-center'>Next.js</p>
				<p className='lg:justify-self-center'>Redux Toolkit</p>
				<p className='md:justify-self-center lg:justify-self-start xl:justify-self-end'>
					Zustand
				</p>
				<p className='md:justify-self-center xl:justify-self-start'>
					Storybook
				</p>
				<p className='lg:justify-self-center'>GraphQL</p>
				<p className='md:justify-self-center'>Node.js</p>
				<p className='md:justify-self-center lg:justify-self-start xl:justify-self-start'>
					Websockets
				</p>
				<p className='lg:justify-self-center xl:justify-self-end'>
					TailwindCSS
				</p>
			</div>
		</div>
	)
}
