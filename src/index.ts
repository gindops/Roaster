import { Elysia, t } from "elysia";
import { db } from "./db/index.js";
import { users, roasts } from "./db/schema.js";

const PORT = Number(process.env.PORT || 3000);

const app = new Elysia()
  .get("/", () => ({
    message: "Welcome to Roaster API powered by Bun, ElysiaJS, and Drizzle ORM!",
    status: "ok",
  }))
  .get("/health", () => ({
    status: "healthy",
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
  }))
  .group("/api", (app) =>
    app
      .get("/users", async () => {
        try {
          const allUsers = await db.select().from(users);
          return { success: true, data: allUsers };
        } catch (error: any) {
          return {
            success: false,
            error: "Database error or table not yet migrated",
            details: error?.message || String(error),
          };
        }
      })
      .post(
        "/users",
        async ({ body }) => {
          try {
            const [newUser] = await db
              .insert(users)
              .values({ name: body.name, email: body.email })
              .returning();
            return { success: true, data: newUser };
          } catch (error: any) {
            return { success: false, error: error?.message || String(error) };
          }
        },
        {
          body: t.Object({
            name: t.String(),
            email: t.String({ format: "email" }),
          }),
        }
      )
      .get("/roasts", async () => {
        try {
          const allRoasts = await db.select().from(roasts);
          return { success: true, data: allRoasts };
        } catch (error: any) {
          return {
            success: false,
            error: "Database error or table not yet migrated",
            details: error?.message || String(error),
          };
        }
      })
  )
  .listen(PORT);

console.log(
  `🦊 Elysia server is running at ${app.server?.hostname}:${app.server?.port}`
);

export type App = typeof app;
