import type { Metadata } from 'next';
import type { Viewport } from 'next';
import Navbar from '@/components/Navbar';
import { GeistSans } from 'geist/font/sans';
export { meta as metadata } from './metadata';
import Footer from '@/components/Footer';
import { Analytics } from '@vercel/analytics/react';
import './globals.css';

export const viewport: Viewport = {
	themeColor: 'pink',
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
