'use client';
import { motion } from 'framer-motion';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Image from 'next/image';

export default function Home() {
	return (
		<motion.div
			className='relative z-0  bg-gradient-to-b from-sky-400 to-sky-200'
			animate={{ opacity: 1 }}
			transition={{ from: 0, duration: 3 }}
		>
			<div className='bg-cover bg-no-repeat bg-center'>
				<Hero />
			</div>
			<About />
			<Contact />
		</motion.div>
	);
}
