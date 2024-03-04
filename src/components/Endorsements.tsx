'use client';
import { motion, spring } from 'framer-motion';
import SectionWrapper from '@/lib/sectionWrapper';
import Image from 'next/image';
import Link from 'next/link';
import { rfs1 } from '@/assets';

const Endorsements = () => {
	return (
		<motion.div
			transition={spring}
			animate={{ scale: 1 }}
			className='flex flex-col items-center justify-center max-w-screen'
		>
			<div className='flex flex-col items-center justify-center  max-w-screen'>
				<Link href='https://directory.runforsomething.net/candidate/5825542522114116370/kerns-ellie/'>
					<Image
						src={rfs1}
						alt='Run For Something'
					/>
				</Link>
			</div>
		</motion.div>
	);
};

export default SectionWrapper({
	Component: Endorsements,
	idName: 'endorsements',
});
