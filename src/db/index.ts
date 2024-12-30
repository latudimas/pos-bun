import { drizzle } from "drizzle-orm/bun-sqlite";
import { Database } from "bun:sqlite";
import * as schema from "./schema";

const sqlite = new Database(process.env.DB_FILE_NAME!);
export const db = drizzle(sqlite, { schema });

// Migration
import { migrate } from "drizzle-orm/bun-sqlite/migrator";

export async function runMigrations() {
  try {
    await migrate(db, {
      migrationsFolder: "../../drizzle",
    });
    console.log("Migration completed successfully");
  } catch (error) {
    console.log("Error running migrations", error);
    throw error;
  }
}
