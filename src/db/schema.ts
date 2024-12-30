import { sql } from "drizzle-orm";
import { sqliteTable, text, integer } from "drizzle-orm/sqlite-core";

export const products = sqliteTable("products", {
  id: integer("id").primaryKey(),
  name: text("name").notNull(),
  barcode: text("barcode").unique().notNull().default("000000"),
  price: integer("price").notNull(),
  stock: integer("stock").notNull().default(0),
  sku: text("sku").notNull().unique(),
  createdAt: text("created_at")
    .notNull()
    .default(sql`(current_timestamp)`),
});

export const table = {
  products,
} as const;

export type Table = typeof table;
