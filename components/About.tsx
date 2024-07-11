import SocialLinks from './SocialLinks'

export default function About() {
	return (
		<div className='flex flex-col gap-x-5 gap-y-10 md:flex-row md:items-center my-36'>
			<h2 className='text-[40px] md:text-[50px] lg:text-[64px] font-semibold max-w-[590px] leading-tight'>
				Love to build <span className='text-green'>complex websites</span>
			</h2>
			<SocialLinks />
		</div>
	)
}
