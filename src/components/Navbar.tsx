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
		<nav className='w-full flex  py-5 px-4 fixed top-0 z-20 bg-pink-300 bg-opacity-90 backdrop-blur-sm'>
			<div className='w-full flex text-black justify-between max-w-7xl mx-auto'>
				<a
					href='/'
					className='cursor-pointer text-[18px] font-medium flex items-center gap-2 text-blue-950 hover:text-white'
					onClick={() => {
						setActive('');
						window.scrollTo(0, 0);
					}}
				>
					Ellie Kerns for Montana
				</a>

				<div className='flex gap-x-4'>
					<ul className='list-none hidden sm:flex flex-row gap-10'>
						{navLinks.map((link) => (
							<li
								key={link.id}
								className={`${
									active === link.title
										? 'text-white'
										: 'text-blue-900 drop-shadow-sm'
								} hover:text-white text-[18px] font-medium cursor-pointer`}
								onClick={() => setActive(link.title)}
							>
								<a href={link.id}>{link.title}</a>
							</li>
						))}
					</ul>

					<div className='hidden sm:flex flex-row space-x-4 ml-7'>
						<Link href='https://twitter.com/biohacker_ellie'>
							<svg
								width='24'
								height='24'
								viewBox='0 0 1200 1227'
								className='hover:fill-white'
								fill='black'
							>
								<path d='M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z' />
							</svg>
						</Link>
						<Link href='https://www.instagram.com/biohacker_ellie/'>
							<svg
								id='Layer_1'
								data-name='Layer 1'
								xmlns='http://www.w3.org/2000/svg'
								viewBox='0 0 1000 1000'
								width='24'
								height='24'
								className='hover:fill-white'
								fill='black'
							>
								<path
									d='M295.42,6c-53.2,2.51-89.53,11-121.29,23.48-32.87,12.81-60.73,30-88.45,57.82S40.89,143,28.17,175.92c-12.31,31.83-20.65,68.19-23,121.42S2.3,367.68,2.56,503.46,3.42,656.26,6,709.6c2.54,53.19,11,89.51,23.48,121.28,12.83,32.87,30,60.72,57.83,88.45S143,964.09,176,976.83c31.8,12.29,68.17,20.67,121.39,23s70.35,2.87,206.09,2.61,152.83-.86,206.16-3.39S799.1,988,830.88,975.58c32.87-12.86,60.74-30,88.45-57.84S964.1,862,976.81,829.06c12.32-31.8,20.69-68.17,23-121.35,2.33-53.37,2.88-70.41,2.62-206.17s-.87-152.78-3.4-206.1-11-89.53-23.47-121.32c-12.85-32.87-30-60.7-57.82-88.45S862,40.87,829.07,28.19c-31.82-12.31-68.17-20.7-121.39-23S637.33,2.3,501.54,2.56,348.75,3.4,295.42,6m5.84,903.88c-48.75-2.12-75.22-10.22-92.86-17-23.36-9-40-19.88-57.58-37.29s-28.38-34.11-37.5-57.42c-6.85-17.64-15.1-44.08-17.38-92.83-2.48-52.69-3-68.51-3.29-202s.22-149.29,2.53-202c2.08-48.71,10.23-75.21,17-92.84,9-23.39,19.84-40,37.29-57.57s34.1-28.39,57.43-37.51c17.62-6.88,44.06-15.06,92.79-17.38,52.73-2.5,68.53-3,202-3.29s149.31.21,202.06,2.53c48.71,2.12,75.22,10.19,92.83,17,23.37,9,40,19.81,57.57,37.29s28.4,34.07,37.52,57.45c6.89,17.57,15.07,44,17.37,92.76,2.51,52.73,3.08,68.54,3.32,202s-.23,149.31-2.54,202c-2.13,48.75-10.21,75.23-17,92.89-9,23.35-19.85,40-37.31,57.56s-34.09,28.38-57.43,37.5c-17.6,6.87-44.07,15.07-92.76,17.39-52.73,2.48-68.53,3-202.05,3.29s-149.27-.25-202-2.53m407.6-674.61a60,60,0,1,0,59.88-60.1,60,60,0,0,0-59.88,60.1M245.77,503c.28,141.8,115.44,256.49,257.21,256.22S759.52,643.8,759.25,502,643.79,245.48,502,245.76,245.5,361.22,245.77,503m90.06-.18a166.67,166.67,0,1,1,167,166.34,166.65,166.65,0,0,1-167-166.34'
									transform='translate(-2.5 -2.5)'
								/>
							</svg>
						</Link>
					</div>
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
