import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import * as schema from "./schema.js";

const connectionString = process.env.DATABASE_URL || "postgres://postgres:password@localhost:5432/roaster_db";

// Inisialisasi client postgres
export const client = postgres(connectionString, { prepare: false });

// Inisialisasi Drizzle ORM
export const db = drizzle(client, { schema });
