import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Template from '@/components/motion/template';
import Footer from '@/components/Footer';
import { Analytics } from '@vercel/analytics/react';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

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
			<body className={inter.className}>
				<Navbar />
				{children}
				<Footer />
				<Analytics />
			</body>
		</html>
	);
}
