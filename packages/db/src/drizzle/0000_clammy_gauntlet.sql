CREATE TABLE IF NOT EXISTS "emails" (
	"id" serial PRIMARY KEY NOT NULL,
	"email" text,
	"name" text,
	"phone" text,
	"updates" boolean DEFAULT false NOT NULL,
	"volunteer" boolean DEFAULT false NOT NULL
);
