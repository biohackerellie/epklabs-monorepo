'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn, textVariant } from '../lib/motion';
import { Tilt } from 'react-tilt';
import SectionWrapper from '@/lib/sectionWrapper';

const Hero = () => {
	return (
		<section className='relative w-full h-screen mx-auto justify-center'>
			<div className='absolute inset-0 max-w-7xl mx-auto flex flex-row items-center'>
				<motion.div
					variants={fadeIn({ direction: 'up', type: 'spring' })}
					className='bg-blue-400 w-full h-80 rounded-l-3xl'
				>
					<h1 className='text-black'>
						Hi, I'm <span className='text-pink-400'>Ellie</span>
					</h1>
				</motion.div>
			</div>
		</section>
	);
};

export default SectionWrapper({ Component: Hero, idName: 'hero' });
