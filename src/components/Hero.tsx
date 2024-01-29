'use client';
import React from 'react';
import { motion, spring } from 'framer-motion';
import { fadeIn, textVariant } from '../lib/motion';
import { Tilt } from 'react-tilt';
import SectionWrapper from '@/lib/sectionWrapper';
import { Me } from '@/assets';
import Image from 'next/image';
import { epk } from '@/assets';

const Hero = () => {
	return (
		<section className='relative w-full h-screen mx-auto justify-center'>
			<div className='my-0 gap-y-0 inset-0 max-w-7xl mx-auto max-h-md flex justify-center '>
				<motion.div
					variants={fadeIn({ direction: 'down', type: 'spring' })}
					className=' object-contain  drop-shadow-xl'
				>
					<Image
						src={epk}
						height={300}
						width={300}
						alt='Ellie Paige Kerns for Montana'
					/>
				</motion.div>
			</div>
			<div className='absolute inset-0 max-w-7xl mx-auto flex flex-row items-center'>
				<motion.div
					variants={fadeIn({ direction: 'up', type: 'spring' })}
					className='hidden md:block'
				>
					<Tilt
						options={{
							max: 45,
							scale: 1,
							speed: 450,
						}}
						className='bg-gradient-to-r from-blue-400 to-pink-400 rounded-full w-1/2 h-1/2'
					>
						<Image
							src={Me}
							alt='Ellie Kerns'
							width={720}
							height={1280}
							className='w-full h-full scale-110 object-cover rounded-2xl grayscale p-[1px]'
						/>
					</Tilt>
				</motion.div>
				<div className='flex flex-col gap-y-2  items-end'>
					<motion.div variants={fadeIn({ direction: 'left', type: 'spring' })}>
						<div className=' text-center sm:text-end pt-2 pr-2 mr-2  border w-[50px] sm:w-[200px]  h-full bg-blue-400 flex justify-center rounded-l-full rounded-tr-full '>
							<p className='text-white text-xl   sm:text-4xl p-4 ml-4'>
								<span className='wave'>👋</span>
							</p>
						</div>
					</motion.div>
					<motion.div
						variants={fadeIn({ direction: 'left', type: 'spring', delay: 2 })}
					>
						<div className=' text-center sm:text-end pt-2 pr-2 mr-2 align-bottom border w-auto   h-full bg-blue-400 flex justify-end rounded-l-full rounded-tr-full '>
							<p className='text-white text-xl   sm:text-4xl p-4 ml-4'>
								Meet <span className='text-pink-400'>Ellie Kerns</span> ,
								Democratic Candidate for Montana House District 53 in Billings{' '}
								<br />
							</p>
						</div>
					</motion.div>
					<motion.div
						variants={fadeIn({ direction: 'left', type: 'spring', delay: 4 })}
					>
						<div className='text-end pt-2 pr-2 ml-0 right-0 mr-2 align-bottom flex-shrink  border w-auto h-full bg-blue-400 flex justify-end rounded-l-full rounded-tr-full '>
							<p className='text-white text-xl   sm:text-4xl p-4 ml-4'>
								Fighting for equality for{' '}
								<span className='text-pink-400 font-semibold'>ALL</span>{' '}
								Montanans <br /> 🏳️‍🌈 🏳️‍⚧️ 🇺🇸
							</p>
						</div>
					</motion.div>
				</div>
				<div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
					<a href='about'>
						<div className='w-[35px] h-[64px] rounded-3xl border-4 border-pink-400 flex justify-center items-start p02'>
							<motion.div
								animate={{
									y: [0, 24, 0],
								}}
								transition={{
									duration: 1.5,
									repeat: Infinity,
									repeatType: 'loop',
								}}
								className='w-3 h-3 rounded-full bg-pink-400 mb-1'
							/>
						</div>
					</a>
				</div>
			</div>
		</section>
	);
};

export default SectionWrapper({ Component: Hero, idName: 'hero' });
