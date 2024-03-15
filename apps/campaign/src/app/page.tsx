'use client';
import { motion } from 'framer-motion';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Issues from '@/components/Issues';
import Endorsements from '@/components/Endorsements';
import Image from 'next/image';

export default function Home() {
	return (
		<motion.div
			className='relative z-0  bg-white'
			animate={{ opacity: 1 }}
			transition={{ from: 0, duration: 3 }}
		>
			<div className='bg-cover bg-no-repeat bg-center'>
				<Hero />
			</div>
			<About />
			<Issues />
			<div className='relative z-10 pb-4'>
				<Contact />
			</div>
			<div className='relative z-0 pb-4'>
				<Endorsements />
			</div>
		</motion.div>
	);
}
