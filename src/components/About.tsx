'use client';

import React from 'react';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import { fadeIn, textVariant } from '@/lib/motion';
import SectionWrapper from '@/lib/sectionWrapper';

const About = () => {
	return (
		<>
			<motion.div variants={textVariant()}>
				<p className='sm:text-[18px] text-[14px] text-black uppercase tracking-wider'>
					About me
				</p>
			</motion.div>
		</>
	);
};

export default SectionWrapper({ Component: About, idName: 'about' });
