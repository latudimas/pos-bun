import { Elysia } from "elysia";
import { html, Html } from "@elysiajs/html";
import { staticPlugin } from "@elysiajs/static";
import { Sidebar } from "./components/Sidebar";
import { HomePage } from "./components/HomePage";
import { BaseHtml } from "./components/BaseHtml";

const app = new Elysia()
  .use(html())
  .use(staticPlugin())
  .get("/", ({ html }) =>
    html(
      <BaseHtml>
        <Sidebar />
        <HomePage />
        {/* children={"hello-world"} */}
      </BaseHtml>,
    ),
  )
  .post("/api/greet", ({ html }) =>
    html(
      <div class="mt-4 p-4 bg-green-100 text-green-800 rounded">
        Hello! Thanks for clicking, Thanks for clicking. This message was loaded
        dynamically with HTMX.
      </div>,
    ),
  )
  // .get("/output.css", () => Bun.file("./src/style/output.css"))
  .listen(3000);

// const app = new Elysia()
//   .use(html())
//   .get("/", ({ html }) =>
//     html(
//       <Layout>
//         <HomePage />
//       </Layout>,
//     ),
//   )
//   .get("/dashboard", ({ html }) =>
//     html(
//       <Layout>
//         <div class="max-w-4xl mx-auto">
//           <h1 class="text-4xl font-bold mb-6">Dashboard</h1>
//           {/* Add dashboard content */}
//         </div>
//       </Layout>,
//     ),
//   )
//   .get("/apps", ({ html }) =>
//     html(
//       <Layout>
//         <div class="max-w-4xl mx-auto">
//           <h1 class="text-4xl font-bold mb-6">Applications</h1>
//           {/* Add apps content */}
//         </div>
//       </Layout>,
//     ),
//   )
//   .get("/settings", ({ html }) =>
//     html(
//       <Layout>
//         <div class="max-w-4xl mx-auto">
//           <h1 class="text-4xl font-bold mb-6">Settings</h1>
//           {/* Add settings content */}
//         </div>
//       </Layout>,
//     ),
//   )
//   .listen(3000);

console.log(
  `🦊 Server is running at ${app.server?.hostname}:${app.server?.port}`,
);
