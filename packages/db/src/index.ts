import { sql } from "@vercel/postgres";
import { drizzle } from "drizzle-orm/vercel-postgres";

import * as main from "./schema";

export * from "drizzle-orm";

export const schema = { ...main };
export const db = drizzle(sql);
