import type { PropsWithChildren } from "@kitajs/html";
import { Html } from "@elysiajs/html";

type Children =
  | JSX.Element
  | JSX.Element[]
  | string
  | number
  | null
  | undefined;

type BaseHtmlProps = {
  children: Children;
  title?: string;
};

// const Head = ({ title }: { title: string }) => (
//   <head>
//     <meta charset="UTF-8" />
//     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//     <title safe>{title}</title>
//     <link rel="stylesheet" href="/public/output.css" />
//     <script src="https://unpkg.com/htmx.org@2.0.4"></script>
//   </head>
// );
//
// export const BaseHtml = ({
//   children,
//   title = "🥟 POS Bun 🥟",
// }: BaseHtmlProps) => {
//   return (
//     <>
//       {"<!DOCTYPE html>"}
//       <html lang="en">
//         <Head title={title} />
//         <body>{children}</body>
//       </html>
//     </>
//   );
// };

export const BaseHtml = ({
  children,
  title = "🥟 POS Bun 🥟",
}: BaseHtmlProps) => {
  // const renderChildren = Array.isArray(children) ? children.join("") : children;
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>${title}</title>
        <link rel="stylesheet" href="/public/output.css" />
        <script src="https://unpkg.com/htmx.org@2.0.4"></script>
    </head>
    <body>
        ${children}
    </body>
    </html>`;
};
