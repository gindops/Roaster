import { mysqlTable, int, text, timestamp, varchar } from "drizzle-orm/mysql-core";

export const users = mysqlTable("users", {
  id: int("id").primaryKey().autoincrement(),
  name: varchar("name", { length: 255 }).notNull(),
  email: varchar("email", { length: 255 }).notNull().unique(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const roasts = mysqlTable("roasts", {
  id: int("id").primaryKey().autoincrement(),
  title: varchar("title", { length: 255 }).notNull(),
  description: text("description"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export type User = typeof users.$inferSelect;
export type NewUser = typeof users.$inferInsert;
export type Roast = typeof roasts.$inferSelect;
export type NewRoast = typeof roasts.$inferInsert;
