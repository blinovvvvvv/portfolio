export default function Bio({ className }: { className?: string }) {
	return (
		<div className={className}>
			<p className='text-gray font-bold text-[40px]'>Hi, my name is</p>
			<h1 className='font-bold text-[110px]'>Ivan Blinov</h1>
			<h2 className='font-semibold text-5xl leading-[65px] bg-metal'>
				Frontend Developer & Designer
			</h2>
		</div>
	)
}
