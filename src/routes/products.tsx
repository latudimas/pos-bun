import { Elysia } from "elysia";
import { html, Html } from "@elysiajs/html";
import { eq } from "drizzle-orm";

import { db } from "../db";
import { products } from "../db/schema";
import { ProductsPage } from "../pages/products";
import { Product } from "../types/product";

export const productsRoute = new Elysia()
  .use(html())
  .get("/products", async () => {
    const productsList = db.select().from(products).all();
    return <ProductsPage products={productsList} />;
  })
  .post(
    "/products",
    async ({ body }) => {
      const newProduct = await db
        .insert(products)
        .values({
          name: body.name,
          price: body.price,
          stock: body.stock,
          sku: body.sku,
        })
        .returning();
      return newProduct;
    },
    {
      body: Product,
    },
  )
  .get("/products/:id/edit", async ({ params }) => {
    const product = db
      .select()
      .from(products)
      .where(eq(products.id, parseInt(params.id)))
      .get();

    // Return edit form component here
    return product;
  })
  .put(
    "/products/:id",
    async ({ params, body }) => {
      const updatedProduct = await db
        .update(products)
        .set({
          name: body.name,
          price: body.price,
          stock: body.stock,
          sku: body.sku,
        })
        .where(eq(products.id, parseInt(params.id)))
        .returning();
      return updatedProduct;
    },
    {
      body: Product,
    },
  );
