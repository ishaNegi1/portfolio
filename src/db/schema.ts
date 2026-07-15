import {
  pgTable,
  serial,
  timestamp,
} from "drizzle-orm/pg-core";

export const visitors = pgTable("visitors", {
  id: serial("id").primaryKey(),

  visitedAt: timestamp("visited_at")
    .defaultNow()
    .notNull(),
});