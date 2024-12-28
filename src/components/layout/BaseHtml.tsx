import type { PropsWithChildren } from "@kitajs/html";

type LayoutProps = {
  children: JSX.Element | JSX.Element[];
};

type BaseHtmlProps = {
  children: any;
  title?: string;
};

// export const BaseHtml = ({ children }: LayoutProps) => {
// export const BaseHtml = ({ children }: PropsWithChildren) => {
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
