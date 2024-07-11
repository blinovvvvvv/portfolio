import EmailIcon from './icons/Email'
import GitHubIcon from './icons/GitHub'
import LinkedInIcon from './icons/LinkedIn'

export default function SocialLinks() {
	return (
		<ul className='flex-grow flex justify-center gap-[30px] sm:gap-[45px]'>
			<li>
				<a
					className='group flex items-center gap-2 transition-colors hover:text-gray'
					href='https://www.linkedin.com/in/ivan-blinov-66b45a316/'
					target='_blank'
				>
					<LinkedInIcon className='group-hover:fill-gray transition-colors' />
					<span className='font-semibold'>LinkedIn</span>
				</a>
			</li>
			<li>
				<a
					className='group flex items-center gap-2 transition-colors hover:text-gray'
					href='https://github.com/blinovvvvvv'
					target='_blank'
				>
					<GitHubIcon className='group-hover:fill-gray transition-colors' />
					<span className='font-semibold'>GitHub</span>
				</a>
			</li>
			<li>
				<a
					className='group flex items-center gap-2 transition-colors hover:text-gray'
					href='mailto:blinovdevelop@gmail.com'
					target='_blank'
				>
					<EmailIcon className='group-hover:fill-gray transition-colors' />
					<span className='font-semibold'>Email</span>
				</a>
			</li>
		</ul>
	)
}
