'use client';
import React from 'react';
import Link from 'next/link';
import { Insta, menu, close, epk } from '@/assets';
import Image from 'next/image';
import { navLinks } from '@/lib/constants';
import { Button } from './ui/button';

const Navbar = () => {
	const [active, setActive] = React.useState('Home');
	const [toggle, setToggle] = React.useState(false);

	return (
		<nav className='w-full flex  py-5 px-4 fixed top-0 z-20 bg-rose-300 bg-opacity-90 backdrop-blur-sm'>
			<div className='w-full flex text-black justify-between max-w-7xl mx-auto'>
				<div className='flex'>
					<Image
						src={epk}
						height={24}
						width={24}
						alt='Ellie Kerns for Montana'
						className=' object-contain scale-150'
					/>
					<Button
						variant='ghost'
						className='cursor-pointer'
						onClick={() => {
							setActive('');
							window.scrollTo(0, 0);
						}}
					>
						Ellie Kerns for Montana
					</Button>
				</div>
				<div>
					<ul className='list-none hidden sm:flex flex-row gap-10'>
						{navLinks.map((link) => (
							<li
								key={link.id}
								className={`${
									active === link.title ? 'text-white' : 'text-gray-500'
								} hover:text-white text-[18px] font-medium cursor-pointer`}
								onClick={() => setActive(link.title)}
							>
								<a href={link.id}>{link.title}</a>
							</li>
						))}
					</ul>
				</div>
				<div className='hidden sm:flex flex-row space-x-4'>
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
				<div className='sm:hidden flex flex-1 justify-end items-center'>
					<Image
						src={toggle ? close : menu}
						alt='menu'
						width={24}
						height={24}
						className='w-[28px] h-[28px] object-contain cursor-pointer'
						onClick={() => setToggle(!toggle)}
					/>
					<div
						className={`${!toggle ? 'hidden' : 'flex'}
								p-6 bg-slate-600 absolute top-20 right-0 mx-4 my-2 min-w[140px] z-10 rounded-xl
							}`}
					>
						<ul className='list-none flex justify-end items-start flex-col gap-4'>
							{navLinks.map((link) => (
								<li
									key={link.id}
									className={`${
										active === link.title ? 'text-white' : 'text-gray-950'
									} font-medium cursor-pointer text-[16px]`}
									onClick={() => {
										setToggle(!toggle);
										setActive(link.title);
									}}
								>
									<a href={link.id}>{link.title}</a>
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
