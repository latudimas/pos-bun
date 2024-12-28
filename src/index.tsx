import { Elysia } from "elysia";
import { html, Html } from "@elysiajs/html";
import { staticPlugin } from "@elysiajs/static";

import { HomePage } from "./pages/Homepage";
import { BaseHtml } from "./components/layout/BaseHtml";

const app = new Elysia()
  .use(html())
  .use(staticPlugin())
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
  .listen(3000);

console.log(
  `🦊 Server is running at ${app.server?.hostname}:${app.server?.port}`,
);
