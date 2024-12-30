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

// HTML style BaseHtml Components
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

// JSX style BaseHtml Components
export const BaseHtmlJsx = ({ children }: { children: JSX.Element }) => {
  return (
    <>
      <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <title>JSX LAYOUT</title>
          <link rel="stylesheet" href="/public/output.css" />
          <script src="https://unpkg.com/htmx.org@2.0.4"></script>
        </head>

        <body>{children}</body>
      </html>
    </>
  );
};
