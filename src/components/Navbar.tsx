import React from 'react';
import Link from 'next/link';
import { Insta } from '@/assets';
import Image from 'next/image';
const Navbar = () => {
	return (
		<nav className='w-full flex items-center py-5 px-4 fixed top-0 z-20 bg-secondary'>
			<div className='w-full flex text-black justify-between items-center max-w-7xl mx-auto'>
				Ellie Kerns for Montana
				<div className='flex flex-row space-x-4'>
					<Link href='https://twitter.com/biohacker_ellie'>
						<svg
							width='24'
							height='24'
							viewBox='0 0 1200 1227'
						>
							<path
								d='M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z'
								fill='currentColor'
							/>
						</svg>
					</Link>
					<Link href='https://www.instagram.com/biohacker_ellie/'>
						<Image
							src={Insta}
							alt='Instagram'
							width={24}
							height={24}
						/>
					</Link>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
