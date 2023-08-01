import Link from 'next/link';
import React, { useState } from 'react';
import Logo from './Logo';
import { useRouter } from 'next/router';
import {
	DribbbleIcon,
	GithubIcon,
	LinkedInIcon,
	MoonIcon,
	SunIcon,
	TwitterIcon,
} from './Icons';
import { motion } from 'framer-motion';
import useThemeSwitcher from './hooks/useThemeSwitcher';

const CustomLink = ({ href, title, className = '' }) => {
	const router = useRouter();
	return (
		<Link
			href={href}
			className={`${className} relative group`}
		>
			{title}

			<span
				className={`h-[1px] inline-block group-hover:w-full transition-[width] ease duration-300 bg-dark absolute left-0 -bottom-0.5 ${
					router.asPath === href ? 'w-full' : 'w-0'
				} dark:bg-light`}
			>
				&nbsp;
			</span>
		</Link>
	);
};

const Navbar = () => {
	const [mode, setMode] = useThemeSwitcher();
	const [isOpen, setIsOpen] = useState(false);

	const handleClick = () => {
		setIsOpen(!isOpen);
	};
	return (
		<header className="w-full px-32 py-8 font-medium flex items-center justify-between dark:text-light">
			<button
				className="flex flex-col justify-center items-center"
				onClick={handleClick}
			>
				<span
					className={`bg-dark dark:bg-light block h-0.5 w-6 rounded-sm  ${
						isOpen
							? 'rotate-45 translate-y-1'
							: '-translate-y-0.5'
					}`}
				></span>
				<span
					className={`bg-dark dark:bg-light block h-0.5 w-6 rounded-sm my-0.5 ${
						isOpen ? 'opacity-0' : 'opacity-100'
					}`}
				></span>
				<span
					className={`bg-dark dark:bg-light block h-0.5 w-6 rounded-sm  ${
						isOpen
							? '-rotate-45 translate-y-1'
							: 'translate-y-0.5'
					}`}
				></span>
			</button>
			<nav>
				<CustomLink
					href={'/'}
					title={'Home'}
					className="mr-4"
				/>
				<CustomLink
					href={'/about'}
					title={'About'}
					className="mx-4"
				/>
				<CustomLink
					href={'/projects'}
					title="Projects"
					className="mx-4"
				/>
				<CustomLink
					href={'/hire'}
					title="Hire Us"
					className="ml-4"
				/>
			</nav>

			<nav className="flex items-center justify-center flex-wrap">
				<motion.a
					href={'/'}
					target="_blank"
					whileHover={{
						y: -2,
					}}
					whileTap={{ scale: 0.9 }}
					className="w-6 mr-3"
				>
					<TwitterIcon />
				</motion.a>
				<motion.a
					href={'https://github.com/emmanuelandyeze'}
					target="_blank"
					whileHover={{
						y: -2,
					}}
					whileTap={{ scale: 0.9 }}
					className="w-6 mx-3"
				>
					<GithubIcon />
				</motion.a>
				<motion.a
					href={'/'}
					target="_blank"
					whileHover={{
						y: -2,
					}}
					whileTap={{ scale: 0.9 }}
					className="w-6 ml-3"
				>
					<LinkedInIcon />
				</motion.a>
				<button
					onClick={() =>
						setMode(mode === 'light' ? 'dark' : 'light')
					}
					className={`ml-5 flex items-center rounded-full p-1 ${
						mode === 'light'
							? 'bg-dark text-light'
							: 'bg-light text-dark'
					}`}
				>
					{mode === 'dark' ? (
						<SunIcon className={'fill-dark'} />
					) : (
						<MoonIcon className={'fill-dark'} />
					)}
				</button>
			</nav>
			<div className="absolute left-[50%] top-2 translate-x-[-50%]">
				<Logo />
			</div>
		</header>
	);
};

export default Navbar;
