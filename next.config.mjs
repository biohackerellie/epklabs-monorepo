import createMDX from '@next/mdx';

/** @type {import('next').NextConfig} */
const nextConfig = {
	pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
	compiler: {
		removeConsole: process.env.NODE_ENV === 'production',
	},
};

const withMDX = createMDX({});

export default withMDX(nextConfig);
