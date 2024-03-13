import { sql } from 'drizzle-orm';
import {
	pgTable,
	uniqueIndex,
	boolean,
	varchar,
	serial,
} from 'drizzle-orm/pg-core';

export const emails = pgTable('emails', {
	id: serial('id').primaryKey(),
	email: varchar('email', { length: 255 }).notNull(),
	name: varchar('name', { length: 255 }),
	volunteer: boolean('volunteer'),
});
