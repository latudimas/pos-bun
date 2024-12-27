import type { PropsWithChildren } from "@kitajs/html";

type LayoutProps = {
  children: JSX.Element | JSX.Element[];
};

export const BaseHtml = ({ children }: LayoutProps) => {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>BETH-STACK - indrazm</title>
        <link rel="stylesheet" href="/public/output.css" />
        <script src="https://unpkg.com/htmx.org@2.0.4"></script>
    </head>
    <body>
        ${children}
    </body>
    </html>`;
};
