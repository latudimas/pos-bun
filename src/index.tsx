import { Elysia } from "elysia";
import { html, Html } from "@elysiajs/html";

type PageProps = {
  title: string;
  count: number;
};

const HomePage = ({ title, count }: PageProps) => (
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title safe>{title}</title>
      <script src="https://unpkg.com/htmx.org@2.0.4"></script>
      <style>
        {" "}
        {`
        .container {
          max-width: 800px;
          margin: 0 auto;
          padding: 2 rem;
          font-family: system-ui, -apple-system, sans-serif;
        }
        .counter {
          padding: 1rem;
          background: #f0f0f0;
          border-radius: 8px;
          margin: 1rem 0;
        }
      `}
      </style>
    </head>
    <body>
      <div class="container">
        <h1 safe>{title}</h1>

        <div class="counter">
          <p>
            Current count: <span id="count">{count}</span>
          </p>
          <button hx-post="/increment" hx-target="#count" hx-swap="innerHTML">
            Increment
          </button>
        </div>

        <div hx-get="/time" hx-trigger="every 1s">
          Loading time...
        </div>
      </div>
    </body>
  </html>
);

const app = new Elysia()
  .use(html())
  .get("/", () => (
    <HomePage title="Welcome to Bun + HTMX + Typescript" count={0}></HomePage>
  ))
  .post("/increment", () => {
    const newCount = Math.floor(Math.random() * 100);
    return newCount.toString();
  })
  .get("/time", () => new Date().toLocaleTimeString())
  .listen(3000);

console.log(
  `🦊 Server is running at http://${app.server?.hostname}:${app.server?.port}`,
);

// new Elysia()
//   .use(html())
//   .get(
//     "/html",
//     () => `
//             <html lang='en'>
//                 <head>
//                     <title>Hello World</title>
//                 </head>
//                 <body>
//                     <h1>Hello World</h1>
//                 </body>
//             </html>`,
//   )
//   .get("/jsx", () => (
//     <html lang="en">
//       <head>
//         <title>Hello World TSX</title>
//       </head>
//       <body>
//         <h1>Hello World TSX</h1>
//       </body>
//     </html>
//   ))
//   .listen(3000);
