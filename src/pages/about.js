import AnimatedText from '@/components/AnimatedText';
import Layout from '@/components/Layout';
import Head from 'next/head';
import Image from 'next/image';
import React from 'react';
import profilePc from '../../public/images/profile/dev1.png';
import Link from 'next/link';
const about = () => {
	return (
		<>
			<Head>
				<title>Creo NG | About Us</title>
				<meta
					name="description"
					content="Turn Your Ideas Into Reality With Expert Code And Design."
				/>
			</Head>
			<main className="flex w-full flex-col items-center justify-center">
				<Layout className="pt-10">
					<AnimatedText
						text={
							'Your Vision. Our Expertise. Success Unleashed.'
						}
						className="mb-16 !text-6xl lg:!text-6xl sm:!text-5xl xs:!text-4xl sm:mb-8"
					/>
					<div className="grid w-full grid-cols-6 gap-16 lg:flex lg:flex-col sm:justify-center">
						<div className="col-span-3 relative sm:hidden md:hidden   rounded-2xl border-2 border-solid border-dark dark:border-light bg-light dark:bg-dark p-8">
							<div className="absolute top-0 -right-3 -z-10 2-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light" />
							<Image
								src={profilePc}
								alt=""
								className="w-full h-auto rounded-2xl"
								priority
								sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
							/>
						</div>
						<div className="col-span-3 flex flex-col md:w-full lg:w-full items-start justify-start sm:justify-center sm:items-center dark:text-light">
							<div>
								<h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light">
									About Us
								</h2>
								<p>
									Welcome to Creo, where we turn your ideas
									into powerful software solutions. Whether
									you are an ambitious entrepreneur, a
									dynamic startup, or a well-established
									enterprise, our mission is to unleash the
									full potential of technology for your
									success. Our skilled team of developers
									and designers is committed to crafting
									tailored solutions that align with your
									unique vision. Whether you seek a
									cutting-edge web app, a seamless mobile
									app, or bespoke custom software, we are
									here to empower your business with the
									tools it needs to thrive.
								</p>
								<br />
								<p>
									Discover remarkable projects we have
									brought to life for businesses like yours.
									From sleek e-commerce platforms to
									data-driven applications, our portfolio
									reflects top-tier software solutions.
								</p>{' '}
								<br />
								<p>
									Let Creo be your trusted partner on this
									transformative journey.
								</p>
								<div className="flex flex-row justify-between mt-10 dark:text-light">
									<div className="flex flex-col items-center justify-center">
										<span className="inline-block text-7xl sm:text-3xl font-bold">
											10+
										</span>
										<h2 className="text-xl font-medium capitalize sm:text-base sm:text-center text-dark/75 dark:text-light/75">
											projects completed
										</h2>
									</div>
									<div className="flex flex-col items-center justify-center">
										<span className="inline-block text-7xl sm:text-3xl font-bold">
											10+
										</span>
										<h2 className="text-xl font-medium capitalize sm:text-base sm:text-center text-dark/75 dark:text-light/75">
											satisfied clients
										</h2>
									</div>
									<div className="flex flex-col items-center justify-center">
										<span className="inline-block text-7xl sm:text-3xl font-bold">
											4+
										</span>
										<h2 className="text-xl font-medium capitalize sm:text-base sm:text-center text-dark/75 dark:text-light/75">
											years of experience
										</h2>
									</div>
								</div>
								<div className="flex sm:mx-auto items-center self-center mt-2 lg:self-center sm:self-center">
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
					</div>
				</Layout>
			</main>
		</>
	);
};

export default about;
