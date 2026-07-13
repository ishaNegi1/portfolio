import { pgTable, serial, varchar, timestamp } from "drizzle-orm/pg-core";

export const visitors = pgTable("visitors", {
  id: serial("id").primaryKey(),

  ipHash: varchar("ip_hash", {
    length: 255,
  }).notNull(),

  createdAt: timestamp("created_at").defaultNow().notNull(),
});