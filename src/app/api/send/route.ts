import NotificationEmail from '@/components/emails';
import { Resend } from 'resend';

import { NextRequest, NextResponse } from 'next/server';
import { headers } from 'next/headers';

export const dynamic = 'force-dynamic';

const resend = new Resend(process.env.RESEND_API);

export async function POST(req: NextRequest) {
	const apiKey = req.headers.get('x-api-key');

	if (apiKey !== process.env.NEXT_PUBLIC_EMAIL_SECRET) {
		console.log('Invalid API key');
		return NextResponse.error();
	}
	const body = await req.json();
	console.log('body', body);
	const name = body.name as string;
	const email = body.email as string;
	const message = body.message as string;
	const phone = (body.phone as string) || '';
	const updates = body.updates as boolean;
	const volunteer = body.volunteer as boolean;

	try {
		const { data } = await resend.emails.send({
			from: 'Campaign <no_reply@elliekerns.com>',
			to: process.env.MY_EMAIL || 'ellie@epklabs.com',
			subject: 'New Campaign Message',
			react: NotificationEmail({
				name: name,
				email: email,
				message: message,
				phone: phone,
				updates: updates,
				volunteer: volunteer,
			}) as React.ReactElement,
		});

		return NextResponse.json({ data });
	} catch (error) {
		console.log(error);
		throw new Error();
	}
}
