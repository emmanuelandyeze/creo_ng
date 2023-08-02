import Head from 'next/head';
import { Inter } from 'next/font/google';
import Layout from '@/components/Layout';
import Image from 'next/image';
import ProfilePic from '../../public/images/profile/dev.png';
import AnimatedText from '@/components/AnimatedText';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
	return (
		<>
			<Head>
				<title>Creo NG</title>
				<meta
					name="description"
					content="Turn Your Ideas Into Reality With Expert Code And Design."
				/>
			</Head>
			<main className="flex items-center text-dark w-full min-h-screen dark:text-light">
				<Layout className="pt-0 md:pt-12 sm:pt-0">
					<div className="flex items-center justify-between w-full lg:flex-col">
						<div className="w-1/2 md:w-full">
							<Image
								src={ProfilePic}
								alt=""
								className="w-full h-auto lg:hidden md:inline-block md:w-full"
								priority
								sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
							/>
						</div>
						<div className="w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center md:mt-2">
							<AnimatedText
								text={
									'Turn Your Ideas into Reality with Expert Code and Design.'
								}
								className="!text-6xl text-left xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl"
							/>

							<p className="py-4 text-base font-medium md:text-sm sm:text-xs">
								Empowering Businesses and Individuals with
								Powerful Software Solutions for Enhanced
								Efficiency and Success.
							</p>
							<div className="flex items-center self-start mt-2 lg:self-center">
								<Link
									href={'/hire'}
									className="flex items-center bg-dark text-light md:p-2 md:px-4 md:text-base dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark mr-2"
								>
									Hire Us
								</Link>
								<Link
									href={'/projects'}
									className="flex items-center bg-light text-dark md:p-2 md:px-4 md:text-base dark:bg-dark dark:text-light hover:dark:bg-light hover:dark:text-dark hover:dark:border-dark p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-dark hover:text-light border-2 border-solid border-transparent hover:border-light"
								>
									View Portfolio
								</Link>
							</div>
						</div>
					</div>
				</Layout>
			</main>
		</>
	);
}
