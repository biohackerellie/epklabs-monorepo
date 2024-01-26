import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const blockedCountries = [
	'CN',
	'RU',
	'KP',
	'IR',
	'SY',
	'CU',
	'IQ',
	'LY',
	'SD',
	'VN',
	'RO',
];

export function middleware(req: NextRequest) {
	const country = req.geo?.country;
	if (country && blockedCountries.includes(country)) {
		return NextResponse.redirect(new URL('/404', req.url));
	}
	return NextResponse.next();
}
