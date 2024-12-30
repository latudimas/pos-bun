import { t } from "elysia";
import { type Static } from "elysia";

export const Product = t.Object({
  id: t.Number(),
  name: t.String(),
  price: t.Number(),
  stock: t.Number(),
  sku: t.String(),
  createdAt: t.String(),
});

export type Product = Static<typeof Product>;

export const ProductFormData = t.Object({
  name: t.String(),
  price: t.Number(),
  stock: t.Number(),
  sku: t.String(),
});

export type ProductFormData = Static<typeof ProductFormData>;
