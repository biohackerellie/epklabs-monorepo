import { drizzle } from "drizzle-orm/vercel-postgres";
import { migrate } from "drizzle-orm/vercel-postgres/migrator";

import { db, schema } from ".";

migrate(db, { migrationsFolder: "src/drizzle" })
  .then(() => {
    console.log("migrations completed");
    process.exit(0);
  })
  .catch((err) => {
    console.error("migrations failed", err);
    process.exit(1);
  });
