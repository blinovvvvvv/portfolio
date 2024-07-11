import SocialLinks from './SocialLinks'

export default function About() {
	return (
		<div className='flex items-center'>
			<h2 className='text-[64px] font-semibold max-w-[590px] leading-tight'>
				Love to build <span className='text-green'>complex websites</span>
			</h2>
			<SocialLinks />
		</div>
	)
}
