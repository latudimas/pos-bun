import { Elysia } from "elysia";
import { html, Html } from "@elysiajs/html";
import { staticPlugin } from "@elysiajs/static";

import { HomePage } from "./pages/Homepage";
import { BaseHtml } from "./components/layout/BaseHtml";
import { db } from "./db";
import { products } from "./db/schema";
import { productsRoute } from "./routes/products";

const app = new Elysia()
  .use(html())
  .use(staticPlugin())
  .use(productsRoute)
  .get("/", ({ html }) =>
    html(
      <BaseHtml>
        <HomePage />
      </BaseHtml>,
    ),
  )
  .post("/show-message", ({ body }) => {
    const { message } = body as { message: string };
    return (
      <div class="font-medium text-gray-700" safe>
        {message}
      </div>
    );
  })
  .get("/test", () => {
    const product: typeof products.$inferInsert = {
      id: 1,
      name: "product 01",
      price: 1000,
      stock: 11,
      sku: "sku-01",
    };
    const result = db.insert(products).values(product);
    console.log(`INSERT DATA -> ${result}`);
    return result;
  })
  .listen(3000);

console.log(
  `🦊 Server is running at ${app.server?.hostname}:${app.server?.port}`,
);
