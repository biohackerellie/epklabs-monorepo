'use client';
import { motion } from 'framer-motion';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Image from 'next/image';

export default function Home() {
	return (
		<motion.div
			className='relative z-0 bg-white'
			animate={{ opacity: 1 }}
			transition={{ from: 0, duration: 3 }}
		>
			<div className='bg-cover bg-no-repeat bg-center'>
				<Hero />
			</div>
			<About />
		</motion.div>
	);
}
