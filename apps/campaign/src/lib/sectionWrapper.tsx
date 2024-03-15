'use client';

import { motion } from 'framer-motion';
import { staggerContainer } from './motion';
import React from 'react';

const SectionWrapper = ({
	Component,
	idName,
}: {
	Component: React.FC;
	idName: string;
}) =>
	function HOC() {
		return (
			<motion.section
				variants={staggerContainer()}
				initial='hidden'
				whileInView='show'
				viewport={{ once: true, amount: 0.025 }}
				className='max-w-7xl mx-auto relative z-0'
			>
				<span
					className='hash-span'
					id={idName}
				>
					&nbsp;
				</span>
				<Component />
			</motion.section>
		);
	};

export default SectionWrapper;
