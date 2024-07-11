import { ReactNode } from 'react'

export default function Container({ children }: { children: ReactNode }) {
	return <div className='max-w-container px-5 mx-auto'>{children}</div>
}
