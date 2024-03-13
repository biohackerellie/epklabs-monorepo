import type { Config } from 'drizzle-kit';
import * as dotenv from 'dotenv';
dotenv.config();

const uri = [
	'mysql://',
	process.env.DB_USERNAME,
	':',
	process.env.DB_PASSWORD,
	'@',
	process.env.DB_HOST,
	':3306/',
	process.env.DB_NAME,
].join('');

export default {
	schema: './src/lib/db/schema.ts',
	driver: 'mysql2',
	out: './src/lib/db/drizzle',
	dbCredentials: 
} satisfies Config;
