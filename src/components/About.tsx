'use client';

import React from 'react';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import { fadeIn, textVariant } from '@/lib/motion';
import SectionWrapper from '@/lib/sectionWrapper';

const About = () => {
	return (
		<>
			<motion.div
				variants={textVariant()}
				className='pb-4'
			>
				<h1 className='text-7xl  font-bold border-b  text-black uppercase tracking-wider'>
					About me
				</h1>
				<h2 className='text-4xl font-semibold p-2 text-black uppercase tracking-wide'>
					Who am I?
				</h2>
				<p className='text-2xl p-2 text-blue-950'>
					I'm Ellie Kerns, and I'm running for Montana House District 53! I have
					lived in Montana for almost my entire life. I moved to Billings in
					1999 when I was 6 years old, graduated from Billings Skyview High
					School in 2011, and have been working in the Tech industry ever since.
					I am currently an independent Software Engineer and an IT Systems
					Administrator at Laurel Public Schools.
				</p>
				<h3 className='text-4xl font-semibold p-2 text-black uppercase tracking-wide'>
					Why am I running?
				</h3>
				<p className='text-2xl p-2 text-blue-950'>
					As a trans, working class, millennial Montanan, I have seen firsthand
					the struggles that our community faces. I have seen the effects of our
					broken healthcare system, the lack of affordable housing, and the need
					for better paying jobs. I have seen the effects of climate change, and
					the need for a Green New Deal. <br /> <br />
					When I was growing up, Montana was a place where everyone could be who
					they wanted to be, a "live and let live" kinda place. But since 2016,
					I have seen attacks on LGBTQ+ rights, especially on trans youth,
					increasing drastically and I firmly believe we must stand up to these
					bullies. <br /> <br />I am running because I believe that we can do
					better. I am running because I believe that we can build a Montana
					that works for all of us, not just the wealthy few and those who align
					with their ideology.
				</p>
				<h4 className='text-4xl font-semibold p-2 text-black uppercase tracking-wide'>
					A promise to you
				</h4>
				<p className='text-2xl p-2 text-blue-950'>
					As your representative, I promise to be a voice for the marginalized
					and a staunch defender of our rights. My views will remain
					unapologetically leftist, calling out injustice wherever I see it,
					especially from those in power who aim to divide and conquer through
					fear and misinformation. Together, we can build a Montana that is
					inclusive, progressive, and just. A Montana where everyone has a
					voice, and no one is left behind. Let's make it happen! Join me in
					this journey. Your support means everything.
				</p>
			</motion.div>
		</>
	);
};

export default SectionWrapper({ Component: About, idName: 'about' });
