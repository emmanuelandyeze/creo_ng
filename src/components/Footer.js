import React from 'react'
import Layout from './Layout'
import Link from 'next/link'

const Footer = () => {
  return (
		<footer className="w-full border-t-2 border-solid border-dark font-medium text-lg">
			<Layout className="py-8 flex items-center justify-between">
				<span>
					{new Date().getFullYear()} &copy; All Rights
					Reserved.
				</span>
				<div className="flex items-center">
					Made with{' '}
					<span className="text-primary text-2xl px-1">
						&hearts;
					</span>{' '}
					by <Link href={'/'} className='underline px-1.5 underline-offset-2'>3rive Africa</Link>
				</div>
				<Link href={'/'}>Talk to Us</Link>
			</Layout>
		</footer>
	);
}

export default Footer