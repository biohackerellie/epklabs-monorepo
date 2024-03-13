import { Client } from '@planetscale/database';
import { drizzle } from 'drizzle-orm/vercel-postgres';

import * as schema from './schema';

export const psClient = new Client({
	host: process.env.DB_HOST!,
	username: process.env.DB_USERNAME!,
	password: process.env.DB_PASSWORD!,
});

export const db = drizzle(psClient, { schema });
