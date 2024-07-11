import type { Metadata } from 'next'
import { Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'

const plusJakartaSans = Plus_Jakarta_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'Ivan Blinov - Frontend Developer & Designer',
	description: 'Frontend Developer, which loves clean code.',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<body className={plusJakartaSans.className}>{children}</body>
		</html>
	)
}
