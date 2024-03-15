'use client';
import React from 'react';
import { motion, spring } from 'framer-motion';
import { fadeIn, textVariant } from '../lib/motion';
import { Tilt } from 'react-tilt';
import SectionWrapper from '@/lib/sectionWrapper';
import { Me } from '@/assets';
import Image from 'next/image';
import { epk, us } from '@/assets';

const Hero = () => {
	return (
		<section className='relative mb-8 py-2  w-full h-screen mx-auto justify-center'>
			<div className='my-0 mb-4  gap-y-0 inset-0 max-w-7xl mx-auto max-h-md flex justify-center  '>
				<motion.div
					variants={fadeIn({ direction: 'down', type: 'spring' })}
					className=' object-contain  drop-shadow-sm pt-10'
				>
					<Image
						src={epk}
						alt='Ellie Paige Kerns for Montana'
						className=''
					/>
				</motion.div>
			</div>
			<div className=' justify-center inset-0 max-w-7xl   flex flex-row items-center'>
				<motion.div
					variants={fadeIn({ direction: 'up', type: 'spring' })}
					className='hidden md:block relative  mx-0 px-0 '
				>
					<Tilt
						options={{
							max: 45,
							scale: 1,
							speed: 450,
						}}
						className=' rounded-full w-3/4 h-3/4  '
					>
						<Image
							src={Me}
							alt='Ellie Kerns'
							width={1080}
							height={1920}
							className=' aspect-auto  object-cover rounded-2xl  border-4 drop-shadow-md '
						/>
					</Tilt>
				</motion.div>
				<div className='flex flex-col flex-grow gap-y-2 max-w-8xl items-end'>
					<motion.div variants={fadeIn({ direction: 'left', type: 'spring' })}>
						<div className='text-center sm:text-end pt-2 pr-2 mr-2 border w-auto h-full bg-blue-400 flex justify-center rounded-l-full rounded-tr-full'>
							<p className='text-white text-xl sm:text-4xl p-4 ml-4'>
								<span className='wave'>👋</span>
							</p>
						</div>
					</motion.div>
					<motion.div
						variants={fadeIn({ direction: 'left', type: 'spring', delay: 2 })}
					>
						<div className='text-center sm:text-end pt-2 pr-2 mr-2 border w-auto h-full bg-blue-400 flex justify-end rounded-l-full rounded-tr-full'>
							<p className='text-white text-xl sm:text-4xl p-4 ml-4'>
								Meet{' '}
								<span className='text-pink-200 drop-shadow-md'>
									Ellie Kerns
								</span>
								, Democratic Candidate for Montana House District 53 in Billings{' '}
								<br />
							</p>
						</div>
					</motion.div>
					<motion.div
						variants={fadeIn({ direction: 'left', type: 'spring', delay: 4 })}
					>
						<div className='text-center sm:text-end pt-2 pr-2 ml-0 right-0 mr-2 border w-auto h-full bg-blue-400 flex justify-end rounded-l-full rounded-tr-full'>
							<p className='text-white text-xl sm:text-4xl p-4 ml-4'>
								Scroll down to learn more
							</p>
						</div>
					</motion.div>
				</div>
			</div>
			<div className=' xs:bottom-10  w-full flex absolute p-2 justify-center items-end'>
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
		</section>
	);
};

export default SectionWrapper({ Component: Hero, idName: 'hero' });
