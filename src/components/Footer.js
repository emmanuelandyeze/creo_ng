import React from 'react'
import Layout from './Layout'
import Link from 'next/link'
import { BsWhatsapp } from 'react-icons/bs';

const Footer = () => {
	return (
		<footer className="w-full border-t-2 border-solid border-dark dark:border-light font-medium text-lg sm:text-base dark:text-light">
			<Layout className="py-8 flex items-center justify-between lg:flex-col lg:py-6 ">
				<span>
					{new Date().getFullYear()} &copy; All Rights
					Reserved.
				</span>
				<div className="flex items-center lg:py-2">
					A subsidiary of{' '}
					<Link
						href={'/'}
						className="underline px-1.5 underline-offset-2"
					>
						3rive Africa
					</Link>
				</div>
				<div>
					<Link
						href={'https://wa.me/2349165095973'}
						className="flex items-center"
					>
						<BsWhatsapp
							size={20}
							color="green"
							className="mr-1"
						/>
						<p>Talk to Us</p>
					</Link>
				</div>
			</Layout>
		</footer>
	);
};

export default Footer