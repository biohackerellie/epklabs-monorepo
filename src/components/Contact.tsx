'use client';
import { useState, useRef } from 'react';
import { Button } from './ui/button';

import SectionWrapper from '@/lib/sectionWrapper';
import { slideIn } from '@/lib/motion';
import { motion } from 'framer-motion';
import { env } from '@/env.mjs';

const Contact = () => {
	const formRef = useRef<HTMLFormElement | null>(null);
	const [form, setForm] = useState({
		name: '',
		email: '',
		phone: '',
		message: '',
	});
	const [loading, setLoading] = useState(false);
	const handleChange = (e: any) => {
		const { name, value } = e.target;
		setForm({ ...form, [name]: value });
	};

	const handleSubmit = async (e: any) => {
		e.preventDefault();
		setLoading(true);
		await fetch('/api/send', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'x-api-key': env.NEXT_PUBLIC_EMAIL_SECRET,
			},
			body: JSON.stringify(form),
		}).then(
			() => {
				setLoading(false);
				alert('Message Sent!');
				setForm({
					name: '',
					email: '',
					phone: '',
					message: '',
				});
			},
			(err) => {
				setLoading(false);
				alert('Message Failed to Send!');
				console.error(err);
			}
		);
	};

	return (
		<div className='xl:mt-12 xl:flex-row flex-col flex '>
			<motion.div
				variants={slideIn({
					direction: 'left',
					type: 'tween',
					duration: 1,
					delay: 0,
				})}
				className='flex-[0.75] bg-indigo-300 p-8 rounded-2xl'
			>
				<h1 className='text-2xl font-bold text-white'>Contact</h1>
				<form
					ref={formRef}
					onSubmit={handleSubmit}
					className='mt-12 flex flex-col gap-8'
				>
					<label className='flex flex-col'>
						<span className='text-white font-medium mb-4'>
							Your Name<span className='text-red-500'>*</span>
						</span>
						<input
							type='text'
							name='name'
							placeholder='Your Name'
							value={form.name}
							onChange={handleChange}
							required
							className='bg-rose-50 py-4 px-6 placeholder:text-gray-400 rounded-lg text-black outlined-none border-none font-medium'
						/>
					</label>
					<label className='flex flex-col'>
						<span className='text-white font-medium mb-4'>
							Your Email<span className='text-red-500'>*</span>
						</span>
						<input
							type='email'
							name='email'
							placeholder='Your Email'
							value={form.email}
							onChange={handleChange}
							required
							className='bg-rose-50 py-4 px-6 placeholder:text-gray-400 rounded-lg text-black outlined-none border-none font-medium'
						/>
					</label>
					<label className='flex flex-col'>
						<span className='text-white font-medium mb-4'>Your Phone</span>
						<input
							type='tel'
							name='phone'
							placeholder='Your Phone(optional)'
							value={form.phone}
							onChange={handleChange}
							className='bg-rose-50 py-4 px-6 placeholder:text-gray-400 rounded-lg text-black outlined-none border-none font-medium'
						/>
					</label>
					<label className='flex flex-col'>
						<span className='text-white font-medium mb-4'>
							Your Message<span className='text-red-500'>*</span>
						</span>
						<textarea
							name='message'
							placeholder='Your Message'
							value={form.message}
							onChange={handleChange}
							required
							className='bg-rose-50 py-4 px-6 placeholder:text-gray-400 rounded-lg text-black outlined-none border-none font-medium'
						/>
					</label>
					<Button
						type='submit'
						variant={'outline'}
						size='sm'
						className='bg-rose-50 text-black w-fit font-medium py-4 px-6 rounded-lg'
					>
						Submit
					</Button>
				</form>
			</motion.div>
		</div>
	);
};

export default SectionWrapper({ Component: Contact, idName: 'contact' });
