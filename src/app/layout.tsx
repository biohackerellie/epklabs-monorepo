import type { Metadata } from 'next';

import Navbar from '@/components/Navbar';
import { GeistSans } from 'geist/font/sans';

import Footer from '@/components/Footer';
import { Analytics } from '@vercel/analytics/react';
import './globals.css';

export const metadata: Metadata = {
	title: 'Ellie Kerns for Montana',
	description: 'Ellie Kerns is running for Montana House District 53.',
	category: 'politics',
	keywords: [
		'Ellie Kerns',
		'Montana',
		'politics',
		'elections',
		'2024',
		'Demecratic Socialist',
		'LGBTQIA+',
	],
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			lang='en'
			suppressHydrationWarning
		>
			<body className={GeistSans.className}>
				<Navbar />
				{children}
				<Footer />
				<Analytics />
			</body>
		</html>
	);
}
