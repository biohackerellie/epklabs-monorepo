import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Template from '@/components/motion/template';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Ellie Kerns for Montana',
	description: 'Ellie Kerns is running for Montana House District 53.',
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
			</body>
		</html>
	);
}
