import { PropsWithChildren } from "@kitajs/html";
import { Html } from "@elysiajs/html";

import { BaseHtml } from "./BaseHtml";
import { Sidebar } from "./Sidebar";
import { TopBar } from "./TopBar";

type BaseLayoutProps = {
  children: JSX.Element;
  title?: string;
};

export const BaseLayout = ({ children, title }: BaseLayoutProps) => {
  return (
    <BaseHtml title={title}>
      <div class="min-h-screen bg-gray-100 flex">
        <Sidebar />
        <div class="flex-1 min-w-0 ml-0 transition-margin duration-300 ease-in-out">
          <TopBar />
          <main class="p-6">{children}</main>
        </div>
      </div>
    </BaseHtml>
  );
};

export const BaseLayoutJsx = ({ children }: { children: JSX.Element }) => {
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

        <body>
          <div class="min-h-screen bg-gray-100 flex">
            <Sidebar />
            <div class="flex-1 min-w-0 ml-0 transition-margin duration-300 ease-in-out">
              <TopBar />
              <main class="p-6">{children}</main>
            </div>
          </div>
        </body>
      </html>
    </>
  );
};
