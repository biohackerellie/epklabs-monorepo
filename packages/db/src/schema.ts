import {
  boolean,
  pgTable,
  serial,
  text,
  timestamp,
  uniqueIndex,
} from "drizzle-orm/pg-core";

export const emails = pgTable("emails", {
  id: serial("id").primaryKey(),
  email: text("email"),
  name: text("name"),
  phone: text("phone"),
  updates: boolean("updates").notNull().default(false),
  volunteer: boolean("volunteer").notNull().default(false),
});
