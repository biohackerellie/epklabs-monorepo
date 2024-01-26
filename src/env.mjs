import { createEnv } from '@t3-oss/env-nextjs';
import { z } from 'zod';

export const env = createEnv({
	server: {
		RESEND_API: z.string(),
		MY_EMAIL: z.string().email(),
	},
	client: {
		NEXT_PUBLIC_EMAIL_SECRET: z.string(),
	},
	runtimeEnv: {
		RESEND_API: process.env.RESEND_API,
		MY_EMAIL: process.env.MY_EMAIL,
		NEXT_PUBLIC_EMAIL_SECRET: process.env.NEXT_PUBLIC_EMAIL_SECRET,
	},
});
