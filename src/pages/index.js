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
				<Layout className="pt-0">
					<div className="flex items-center justify-between w-full">
						<div className="w-1/2">
							<Image
								src={ProfilePic}
								alt=""
								className="w-full h-auto"
							/>
						</div>
						<div className="w-1/2 flex flex-col items-center self-center">
							<AnimatedText
								text={
									'Turn Your Ideas into Reality with Expert Code and Design.'
								}
								className="!text-6xl text-left"
							/>

							<p className="py-4 text-base font-medium">
								Empowering Businesses and Individuals with
								Powerful Software Solutions for Enhanced
								Efficiency and Success.
							</p>
							<div className="flex items-center self-start mt-2">
								<Link
									href={'/hire'}
									className="flex items-center bg-dark text-light dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark"
								>
									Hire Us
								</Link>
								<Link
									href={'/projects'}
									className="ml-4 text-lg font-medium capitalize text-dark underline underline-offset-2 dark:text-light"
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
