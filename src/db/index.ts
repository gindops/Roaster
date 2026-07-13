import { drizzle } from "drizzle-orm/mysql2";
import mysql from "mysql2/promise";
import * as schema from "./schema.js";

const connectionString = process.env.DATABASE_URL || "mysql://root:password@localhost:3306/roaster_db";

// Inisialisasi pool koneksi MySQL
export const poolConnection = mysql.createPool(connectionString);

// Inisialisasi Drizzle ORM
export const db = drizzle(poolConnection, { schema, mode: "default" });
