export default function Bio({ className }: { className?: string }) {
	return (
		<div className={className}>
			<p className='text-gray font-bold text-[40px]'>Hi, my name is</p>
			<h1 className='font-bold text-[60px] md:text-[80px] lg:text-[90px] xl:text-[110px]'>
				Ivan Blinov
			</h1>
			<h2 className='font-semibold text-[24px] md:text-[30px] lg:text-[36px] xl:text-[48px] md:leading-[65px] bg-metal'>
				Frontend Developer & Designer
			</h2>
		</div>
	)
}
